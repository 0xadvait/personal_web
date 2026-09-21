/*
 * The ASCII GPU, shared by the live canvas and the link-preview image.
 *
 * The card is a signed-distance scene: a rounded shroud with two recessed
 * fans, a PCB plate with gold fingers, an I/O bracket, a power connector.
 * rasterGpu() marches one ray per character cell and stores the hit's
 * material, lighting, normal, depth and surface pattern. cellStyle() then
 * picks a character and brightness per cell, drawing the silhouette and the
 * creases as bright edge characters and letting unlit faces fall back to
 * sparse ones, which is what makes the object legible.
 */
export const M = { SHROUD: 1, FAN: 2, PCB: 3, FINGERS: 4, BRACKET: 5, POWER: 6, BACK: 7 };
export const LED = { x: 0.7, y: 0.53, z: 0.2 };
const RAMP = ' .:-=+*#%@';
const LIGHT = [-0.36, 0.55, 0.75];
const AMBIENT = 0.1;
const FAN_X = 0.62;
const FAN_Y = 0.02;
const FAN_R = 0.4;
const EPS = 0.004;

let lastMat = M.SHROUD;

function sdBox(px, py, pz, bx, by, bz) {
  const qx = Math.abs(px) - bx;
  const qy = Math.abs(py) - by;
  const qz = Math.abs(pz) - bz;
  const mx = Math.max(qx, 0);
  const my = Math.max(qy, 0);
  const mz = Math.max(qz, 0);
  return Math.sqrt(mx * mx + my * my + mz * mz) + Math.min(Math.max(qx, Math.max(qy, qz)), 0);
}

function sdCylZ(px, py, pz, r, h) {
  const d = Math.sqrt(px * px + py * py) - r;
  const dz = Math.abs(pz) - h;
  const mx = Math.max(d, 0);
  const mz = Math.max(dz, 0);
  return Math.min(Math.max(d, dz), 0) + Math.sqrt(mx * mx + mz * mz);
}

function scene(px, py, pz) {
  const body = sdBox(px, py, pz, 1.25, 0.47, 0.14) - 0.05;
  const fl = sdCylZ(px + FAN_X, py - FAN_Y, pz - 0.22, FAN_R, 0.1);
  const fr = sdCylZ(px - FAN_X, py - FAN_Y, pz - 0.22, FAN_R, 0.1);
  let d = Math.max(body, -fl, -fr);
  let m = M.SHROUD;

  const pcb = sdBox(px, py + 0.58, pz + 0.03, 1.15, 0.06, 0.15);
  if (pcb < d) {
    d = pcb;
    m = M.PCB;
  }
  const fingers = sdBox(px + 0.35, py + 0.68, pz + 0.03, 0.5, 0.06, 0.05);
  if (fingers < d) {
    d = fingers;
    m = M.FINGERS;
  }
  const bracket = sdBox(px + 1.38, py, pz, 0.03, 0.66, 0.26);
  if (bracket < d) {
    d = bracket;
    m = M.BRACKET;
  }
  const power = sdBox(px - 0.85, py - 0.55, pz, 0.12, 0.05, 0.09);
  if (power < d) {
    d = power;
    m = M.POWER;
  }
  lastMat = m;
  return d;
}

/* Projects a model-space point with the frame's rotation. */
export function project({ x, y, z }, { cx, cy, S, rot, tilt }) {
  const ca = Math.cos(rot);
  const sa = Math.sin(rot);
  const ct = Math.cos(tilt);
  const st = Math.sin(tilt);
  const x1 = x * ca + z * sa;
  const z1 = -x * sa + z * ca;
  const y2 = y * ct - z1 * st;
  const z2 = y * st + z1 * ct;
  return { x: cx + x1 * S, y: cy - y2 * S, z: z2 };
}

/* Allocates (or reuses) the per-cell buffers for a cols x rows grid. */
export function makeBuffer(cols, rows, prev) {
  const n = cols * rows;
  if (prev && prev.cols === cols && prev.rows === rows) return prev;
  return {
    cols,
    rows,
    mat: new Uint8Array(n),
    lum: new Float32Array(n),
    depth: new Float32Array(n),
    nx: new Float32Array(n),
    ny: new Float32Array(n),
    nz: new Float32Array(n),
    pattern: new Uint8Array(n),
    c0: 0,
    c1: 0,
    r0: 0,
    r1: 0,
  };
}

export function rasterGpu({ cellW, cellH, cx, cy, S, rot, tilt, fanSpin }, buf) {
  const { cols, rows } = buf;
  const ca = Math.cos(rot);
  const sa = Math.sin(rot);
  const ct = Math.cos(tilt);
  const st = Math.sin(tilt);
  const [lx, ly, lz] = LIGHT;

  const toModel = (vx, vy, vz) => {
    const y1 = vy * ct + vz * st;
    const z1 = -vy * st + vz * ct;
    return [vx * ca - z1 * sa, y1, vx * sa + z1 * ca];
  };
  const [dx, dy, dz] = toModel(0, 0, -1);

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (let i = 0; i < 8; i++) {
    const p = project(
      { x: i & 1 ? 1.45 : -1.45, y: i & 2 ? 0.76 : -0.76, z: i & 4 ? 0.34 : -0.34 },
      { cx, cy, S, rot, tilt }
    );
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
  }
  const c0 = Math.max(0, Math.floor(minX / cellW) - 1);
  const c1 = Math.min(cols, Math.ceil(maxX / cellW) + 1);
  const r0 = Math.max(0, Math.floor(minY / cellH) - 1);
  const r1 = Math.min(rows, Math.ceil(maxY / cellH) + 1);
  buf.c0 = c0;
  buf.c1 = c1;
  buf.r0 = r0;
  buf.r1 = r1;
  buf.mat.fill(0);

  for (let r = r0; r < r1; r++) {
    const y = r * cellH + cellH / 2;
    const vy = (cy - y) / S;
    for (let c = c0; c < c1; c++) {
      const x = c * cellW + cellW / 2;
      const vx = (x - cx) / S;
      const [ox, oy, oz] = toModel(vx, vy, 3);

      let t = 0;
      let hit = false;
      let px = ox;
      let py = oy;
      let pz = oz;
      for (let i = 0; i < 56; i++) {
        px = ox + dx * t;
        py = oy + dy * t;
        pz = oz + dz * t;
        const d = scene(px, py, pz);
        if (d < EPS) {
          hit = true;
          break;
        }
        t += d;
        if (t > 6.5) break;
      }
      if (!hit) continue;

      let mat = lastMat;
      const e = 0.0035;
      const n1 = scene(px + e, py - e, pz - e);
      const n2 = scene(px - e, py - e, pz + e);
      const n3 = scene(px - e, py + e, pz - e);
      const n4 = scene(px + e, py + e, pz + e);
      let nx = n1 - n2 - n3 + n4;
      let ny = -n1 - n2 + n3 + n4;
      let nz = -n1 + n2 - n3 + n4;
      const nl = Math.hypot(nx, ny, nz) || 1;
      nx /= nl;
      ny /= nl;
      nz /= nl;
      const x1 = nx * ca + nz * sa;
      const z1 = -nx * sa + nz * ca;
      const vny = ny * ct - z1 * st;
      const vnz = ny * st + z1 * ct;
      const shade = Math.max(0, x1 * lx + vny * ly + vnz * lz);

      let pattern = 0;
      if (mat === M.SHROUD) {
        if (pz < 0.13 && pz > 0.11) {
          for (let s = -1; s <= 1; s += 2) {
            const fx = px - s * FAN_X;
            const fy = py - FAN_Y;
            const rr = Math.hypot(fx, fy);
            if (rr < FAN_R) {
              mat = M.FAN;
              const theta = Math.atan2(fy, fx);
              if (rr < 0.1) pattern = 2;
              else if (rr > 0.35) pattern = 3;
              else pattern = Math.sin(7 * theta + s * fanSpin + rr * 6) > 0.35 ? 1 : 0;
            }
          }
        } else if (pz < -0.17) {
          mat = M.BACK;
          pattern = Math.sin(px * 22) > 0.55 ? 1 : 0;
        }
      } else if (mat === M.FINGERS) {
        pattern = Math.sin(px * 44) > 0 ? 1 : 0;
      }

      const k = r * cols + c;
      buf.mat[k] = mat;
      buf.lum[k] = AMBIENT + (1 - AMBIENT) * shade;
      buf.depth[k] = t;
      buf.nx[k] = x1;
      buf.ny[k] = vny;
      buf.nz[k] = vnz;
      buf.pattern[k] = pattern;
    }
  }
  return buf;
}

/*
 * Character and brightness (0..1) for one cell, or null for empty.
 * Edges come first: a neighbour that is empty or much deeper is a silhouette,
 * a neighbour whose normal points elsewhere is a crease.
 */
export function cellStyle(buf, c, r) {
  const { cols, mat, lum, depth, nx, ny, nz, pattern } = buf;
  const k = r * cols + c;
  const m = mat[k];
  if (!m) return null;

  let silhouette = false;
  let crease = false;
  const d = depth[k];
  const nbs = [k - 1, k + 1, k - cols, k + cols];
  for (let i = 0; i < 4; i++) {
    const j = nbs[i];
    if (j < 0 || j >= mat.length) continue;
    if (!mat[j]) {
      silhouette = true;
      break;
    }
    if (Math.abs(depth[j] - d) > 0.22) {
      silhouette = true;
      break;
    }
    const dot = nx[k] * nx[j] + ny[k] * ny[j] + nz[k] * nz[j];
    if (dot < 0.55) crease = true;
  }
  const l = lum[k];
  if (silhouette) return ['#', 0.9];
  if (crease) return ['+', 0.5 + 0.4 * l];

  const p = pattern[k];
  switch (m) {
    case M.FAN:
      if (p === 2) return ['@', 0.55 + 0.4 * l];
      if (p === 3) return ['=', 0.35 + 0.3 * l];
      return p ? ['%', 0.45 + 0.5 * l] : null;
    case M.BACK:
      return p ? ['-', 0.28 + 0.4 * l] : null;
    case M.PCB:
      return ['=', 0.3 + 0.45 * l];
    case M.FINGERS:
      return p ? ['|', 0.75] : null;
    case M.BRACKET: {
      const idx = Math.min(RAMP.length - 1, Math.floor(l * l * 9) + 1);
      return [RAMP[idx], 0.35 + 0.6 * l];
    }
    case M.POWER:
      return ['#', 0.5 + 0.5 * l];
    default: {
      const idx = Math.min(RAMP.length - 1, Math.floor(l * l * 9));
      if (idx === 0) return null;
      return [RAMP[idx], 0.3 + 0.65 * l];
    }
  }
}

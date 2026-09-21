import { LAND_H, LAND_W, landMask } from './landMask';

/*
 * The ASCII Earth projection, shared by the live canvas and the link-preview
 * image so both draw the same globe. Every character cell inside the disc is
 * a ray onto a unit sphere; the hit point is rotated back to latitude and
 * longitude and looked up in the land mask.
 */
export const LAND_RAMP = '=+*#%@';
export const LIGHT = [-0.25, 0.4, 0.88]; // mostly from the front, a touch upper left
export const LONDON = { lat: 51.5072, lon: -0.1276 };

export function landChar(t) {
  return LAND_RAMP[Math.min(LAND_RAMP.length - 1, Math.floor(t * LAND_RAMP.length))];
}

export function forEachEarthCell({ cols, rows, cellW, cellH, cx, cy, R, rot, tilt }, fn) {
  const land = landMask();
  const [lx, ly, lz] = LIGHT;
  const ca = Math.cos(rot);
  const sa = Math.sin(rot);
  const ct = Math.cos(tilt);
  const st = Math.sin(tilt);
  const c0 = Math.max(0, Math.floor((cx - R) / cellW));
  const c1 = Math.min(cols, Math.ceil((cx + R) / cellW));
  const r0 = Math.max(0, Math.floor((cy - R) / cellH));
  const r1 = Math.min(rows, Math.ceil((cy + R) / cellH));

  for (let r = r0; r < r1; r++) {
    const y = r * cellH + cellH / 2;
    const ny = (cy - y) / R;
    for (let c = c0; c < c1; c++) {
      const x = c * cellW + cellW / 2;
      const nx = (x - cx) / R;
      const d2 = nx * nx + ny * ny;
      if (d2 > 1) continue;
      const nz = Math.sqrt(1 - d2);

      // undo tilt, then undo spin, to find the point on the still globe
      const y1 = ny * ct + nz * st;
      const z1 = -ny * st + nz * ct;
      const mx = nx * ca - z1 * sa;
      const mz = nx * sa + z1 * ca;
      const lat = Math.asin(Math.max(-1, Math.min(1, y1)));
      const lon = Math.atan2(mx, mz);
      const col = Math.min(LAND_W - 1, Math.floor(((lon + Math.PI) / (2 * Math.PI)) * LAND_W));
      const row = Math.min(LAND_H - 1, Math.floor(((Math.PI / 2 - lat) / Math.PI) * LAND_H));
      const isLand = land[row * LAND_W + col] === 1;

      const shade = Math.max(0, nx * lx + ny * ly + nz * lz);
      const limb = 0.4 + 0.6 * nz;
      fn(c, r, x, y, isLand, shade * limb);
    }
  }
}

/* Screen position and depth (z > 0 faces the viewer) of a lat/lon point. */
export function projectPoint({ lat, lon }, { cx, cy, R, rot, tilt }) {
  const la = (lat * Math.PI) / 180;
  const lo = (lon * Math.PI) / 180;
  const x = Math.cos(la) * Math.sin(lo);
  const y = Math.sin(la);
  const z = Math.cos(la) * Math.cos(lo);
  const ca = Math.cos(rot);
  const sa = Math.sin(rot);
  const ct = Math.cos(tilt);
  const st = Math.sin(tilt);
  const x1 = x * ca + z * sa;
  const z1 = -x * sa + z * ca;
  const y2 = y * ct - z1 * st;
  const z2 = y * st + z1 * ct;
  return { x: cx + x1 * R, y: cy - y2 * R, z: z2 };
}

'use client';

import { useEffect, useRef } from 'react';
import { LAND_H, LAND_W, landMask } from '@/lib/landMask';

/*
 * A live ASCII Earth. Every character cell inside the disc is a ray onto a
 * unit sphere; the hit point is rotated back to latitude and longitude and
 * looked up in a land mask. Land is shaded by a fixed light, ocean is a
 * faint dot. Runs on a canvas at the display refresh rate.
 *
 * Interaction: drag to spin (with momentum), the axis leans toward the
 * pointer, and the characters under the pointer light up. Reduced motion
 * stops the auto-spin but keeps the drag.
 */
const LAND = '=+*#%@';
const CELL_W = 9;
const CELL_H = 15;
const AUTO_SPIN = 0.00016; // radians per ms, west to east like the real thing
const DRAG_GAIN = 0.006; // radians per pixel
const GLOW_RADIUS = 140; // px
const LIGHT = [-0.25, 0.4, 0.88]; // mostly from the front, a touch upper left

export default function AsciiGlobe({ className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const host = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const land = landMask();

    let raf = 0;
    let lastT = 0;
    let w = 0;
    let h = 0;

    let rot = 0.35;
    let vel = 0;
    let dragging = false;
    let lastX = 0;
    let px = -1;
    let py = -1;
    const baseTilt = 0.4;
    let tiltTarget = baseTilt;
    let tilt = baseTilt;
    let leanTarget = 0;
    let lean = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = '13px "IBM Plex Mono", ui-monospace, monospace';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const wide = w > 760;
      const R = Math.min(wide ? w * 0.27 : w * 0.46, h * 0.44);
      const cx = wide ? w * 0.74 : w * 0.5;
      const cy = h * 0.5;
      const theta = rot + lean;
      const ca = Math.cos(theta);
      const sa = Math.sin(theta);
      const ct = Math.cos(tilt);
      const st = Math.sin(tilt);
      const [lx, ly, lz] = LIGHT;
      const glow = px >= 0;

      const c0 = Math.max(0, Math.floor((cx - R) / CELL_W));
      const c1 = Math.min(Math.ceil(w / CELL_W), Math.ceil((cx + R) / CELL_W));
      const r0 = Math.max(0, Math.floor((cy - R) / CELL_H));
      const r1 = Math.min(Math.ceil(h / CELL_H), Math.ceil((cy + R) / CELL_H));

      for (let r = r0; r < r1; r++) {
        const y = r * CELL_H + CELL_H / 2;
        const ny = (cy - y) / R;
        for (let c = c0; c < c1; c++) {
          const x = c * CELL_W + CELL_W / 2;
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
          let boost = 0;
          if (glow) {
            const dx = x - px;
            const dy = y - py;
            boost = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / GLOW_RADIUS);
          }
          let alpha;
          let ch;
          if (isLand) {
            const t = Math.min(1, shade * limb + boost * 0.5);
            ch = LAND[Math.min(LAND.length - 1, Math.floor(t * LAND.length))];
            alpha = 0.5 + 0.5 * t;
          } else {
            ch = '\u00b7';
            alpha = Math.min(0.7, 0.13 + 0.2 * shade * limb + boost * 0.35);
          }
          ctx.fillStyle = `rgba(245, 244, 240, ${alpha})`;
          ctx.fillText(ch, x, y);
        }
      }
    };

    const frame = (t) => {
      const dt = Math.min(50, t - lastT || 16);
      lastT = t;
      if (!dragging) {
        rot += (reduceMotion ? 0 : AUTO_SPIN * dt) + vel;
        vel *= 0.94;
      }
      tilt += (tiltTarget - tilt) * 0.06;
      lean += (leanTarget - lean) * 0.06;
      draw();
      raf = requestAnimationFrame(frame);
    };

    const pointAt = (e) => {
      const rect = canvas.getBoundingClientRect();
      px = e.clientX - rect.left;
      py = e.clientY - rect.top;
      tiltTarget = baseTilt + (py / h - 0.5) * 0.5;
      leanTarget = (px / w - 0.5) * 0.5;
    };
    const onMove = (e) => {
      pointAt(e);
      if (dragging) {
        const dx = e.clientX - lastX;
        rot += dx * DRAG_GAIN;
        vel = dx * DRAG_GAIN;
        lastX = e.clientX;
      }
    };
    const onDown = (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (e.target.closest('a, button')) return;
      dragging = true;
      vel = 0;
      lastX = e.clientX;
      host.style.cursor = 'grabbing';
      host.style.userSelect = 'none';
      pointAt(e);
    };
    const onUp = () => {
      dragging = false;
      host.style.cursor = 'grab';
      host.style.userSelect = '';
    };
    const onLeave = () => {
      onUp();
      px = -1;
      py = -1;
      tiltTarget = baseTilt;
      leanTarget = 0;
    };

    host.style.cursor = 'grab';
    host.style.touchAction = 'pan-y';
    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerdown', onDown);
    host.addEventListener('pointerup', onUp);
    host.addEventListener('pointercancel', onUp);
    host.addEventListener('pointerleave', onLeave);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const start = () => {
      resize();
      raf = requestAnimationFrame(frame);
    };
    if (document.fonts?.load) document.fonts.load('13px "IBM Plex Mono"').then(start, start);
    else start();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerdown', onDown);
      host.removeEventListener('pointerup', onUp);
      host.removeEventListener('pointercancel', onUp);
      host.removeEventListener('pointerleave', onLeave);
      host.style.cursor = '';
      host.style.userSelect = '';
      host.style.touchAction = '';
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden />;
}

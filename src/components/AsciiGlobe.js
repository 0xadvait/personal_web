'use client';

import { useEffect, useRef } from 'react';

/*
 * A live ASCII sphere. Points on a sphere are rotated, projected onto a
 * character grid, and each cell shows the character for its nearest point.
 *
 * Interaction: drag to spin (with momentum), the globe leans toward the
 * pointer, and characters under the pointer light up. Auto-rotation stops
 * under reduced motion; dragging still works.
 */
const CHARS = ' .:-=+*#%@';
const POINTS = 3200;
const CELL_W = 9;
const CELL_H = 15;
const AUTO_SPIN = 0.00022; // radians per ms
const DRAG_GAIN = 0.0055; // radians per pixel
const GLOW_RADIUS = 150; // px

export default function AsciiGlobe({ className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const host = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const golden = Math.PI * (3 - Math.sqrt(5));
    const pts = [];
    for (let i = 0; i < POINTS; i++) {
      const y = 1 - (i / (POINTS - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = golden * i;
      pts.push([Math.cos(th) * r, y, Math.sin(th) * r]);
    }

    let raf = 0;
    let lastT = 0;
    let w = 0;
    let h = 0;

    // motion state
    let rot = 0;
    let vel = 0;
    let dragging = false;
    let lastX = 0;
    let px = -1;
    let py = -1;
    let tiltTarget = 0.4;
    let tilt = 0.4;
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
      const wide = w > 700;
      const R = Math.min(wide ? w * 0.31 : w * 0.5, h * 0.46);
      const cx = wide ? w * 0.75 : w * 0.5;
      const cy = h * 0.5;
      const a = rot + lean;
      const ca = Math.cos(a);
      const sa = Math.sin(a);
      const ct = Math.cos(tilt);
      const st = Math.sin(tilt);
      const cols = Math.ceil(w / CELL_W);
      const rows = Math.ceil(h / CELL_H);
      const grid = new Float32Array(cols * rows).fill(-2);

      for (let i = 0; i < pts.length; i++) {
        const [x0, y0, z0] = pts[i];
        const x1 = x0 * ca + z0 * sa;
        const z1 = -x0 * sa + z0 * ca;
        const y2 = y0 * ct - z1 * st;
        const z2 = y0 * st + z1 * ct;
        if (z2 < -0.15) continue;
        const c = Math.floor((cx + x1 * R) / CELL_W);
        const r = Math.floor((cy - y2 * R) / CELL_H);
        if (c < 0 || r < 0 || c >= cols || r >= rows) continue;
        const k = r * cols + c;
        if (z2 > grid[k]) grid[k] = z2;
      }

      const glow = px >= 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const z = grid[r * cols + c];
          if (z < -1) continue;
          const x = c * CELL_W + CELL_W / 2;
          const y = r * CELL_H + CELL_H / 2;
          let d = (z + 0.15) / 1.15;
          let alpha = 0.14 + d * 0.74;
          if (glow) {
            const dx = x - px;
            const dy = y - py;
            const boost = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / GLOW_RADIUS);
            if (boost > 0) {
              alpha = Math.min(1, alpha + boost * 0.6);
              d = Math.min(1, d + boost * 0.35);
            }
          }
          const idx = 1 + Math.floor(d * d * (CHARS.length - 2));
          ctx.fillStyle = `rgba(245, 244, 240, ${alpha})`;
          ctx.fillText(CHARS[idx], x, y);
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
      tilt += (tiltTarget - tilt) * 0.07;
      lean += (leanTarget - lean) * 0.07;
      draw();
      raf = requestAnimationFrame(frame);
    };

    const pointAt = (e) => {
      const rect = canvas.getBoundingClientRect();
      px = e.clientX - rect.left;
      py = e.clientY - rect.top;
      tiltTarget = 0.4 + (py / h - 0.5) * 0.7;
      leanTarget = (px / w - 0.5) * 0.8;
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
      if (e.button !== 0 && e.pointerType === 'mouse') return;
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
      tiltTarget = 0.4;
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
    if (document.fonts?.load) {
      document.fonts.load('13px "IBM Plex Mono"').then(start, start);
    } else {
      start();
    }

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

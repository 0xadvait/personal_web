'use client';

import { useEffect, useRef } from 'react';
import { cellStyle, makeBuffer, rasterGpu } from '@/lib/asciiGpu';

/*
 * The live ASCII GPU. See lib/asciiGpu.js for the scene.
 *
 * It turns on its own with the fans spinning, drags with momentum, leans
 * toward the pointer, and lights up under it. Reduced motion stops the
 * auto-spin but keeps the drag.
 */
const FONT = '11.5px "IBM Plex Mono", ui-monospace, monospace';
const FONT_SMALL = '8.5px "IBM Plex Mono", ui-monospace, monospace';
const AUTO_SPIN = 0.00026; // radians per ms
const FAN_SPIN = 0.0075; // radians per ms
const DRAG_GAIN = 0.006; // radians per pixel
const GLOW_RADIUS = 140; // px

export default function AsciiGpu({ className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const host = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const minFrame = coarse ? 40 : 0;

    let raf = 0;
    let disposed = false;
    let buf = null;
    let lastT = 0;
    let w = 0;
    let h = 0;

    let rot = 0.5;
    let vel = 0;
    let fan = 0;
    let dragging = false;
    let lastX = 0;
    let px = -1;
    let py = -1;
    const baseTilt = 0.42;
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
    };

    const draw = (now) => {
      ctx.clearRect(0, 0, w, h);
      // Narrow screens get a finer grid and a bigger card, or it is too coarse to read.
      const narrow = w < 700;
      const CELL_W = narrow ? 6 : 8;
      const CELL_H = narrow ? 10 : 13;
      const S = narrow ? Math.min(w / 3.2, h / 2.3) : Math.min(w / 4.4, h / 2.5);
      const view = { cx: w * 0.5, cy: h * 0.5, S, rot: rot + lean, tilt };
      const cols = Math.ceil(w / CELL_W);
      const rows = Math.ceil(h / CELL_H);
      buf = makeBuffer(cols, rows, buf);
      rasterGpu({ cellW: CELL_W, cellH: CELL_H, fanSpin: fan, ...view }, buf);

      ctx.font = narrow ? FONT_SMALL : FONT;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      const glow = px >= 0;
      for (let r = buf.r0; r < buf.r1; r++) {
        for (let c = buf.c0; c < buf.c1; c++) {
          const style = cellStyle(buf, c, r);
          if (!style) continue;
          const x = c * CELL_W + CELL_W / 2;
          const y = r * CELL_H + CELL_H / 2;
          let a = style[1];
          if (glow) {
            const gx = x - px;
            const gy = y - py;
            a = Math.min(1, a + Math.max(0, 1 - Math.sqrt(gx * gx + gy * gy) / GLOW_RADIUS) * 0.45);
          }
          ctx.fillStyle = `rgba(245, 244, 240, ${a})`;
          ctx.fillText(style[0], x, y);
        }
      }
    };

    const frame = (t) => {
      raf = requestAnimationFrame(frame);
      if (t - lastT < minFrame) return;
      const dt = Math.min(50, t - lastT || 16);
      lastT = t;
      if (!dragging) {
        rot += (reduceMotion ? 0 : AUTO_SPIN * dt) + vel;
        vel *= 0.94;
      }
      if (!reduceMotion) fan += FAN_SPIN * dt;
      tilt += (tiltTarget - tilt) * 0.06;
      lean += (leanTarget - lean) * 0.06;
      draw(t);
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
      if (disposed) return;
      resize();
      raf = requestAnimationFrame(frame);
    };
    if (document.fonts?.load) document.fonts.load(FONT).then(start, start);
    else start();

    return () => {
      disposed = true;
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

  return <canvas ref={ref} className={`fade-in ${className}`} aria-hidden />;
}

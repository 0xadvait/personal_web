'use client';

import { useEffect, useRef } from 'react';
import { LONDON, forEachEarthCell, landChar, projectPoint } from '@/lib/asciiEarth';

/*
 * The live ASCII Earth. See lib/asciiEarth.js for the projection.
 *
 * It spins west to east, drags with momentum, leans toward the pointer, and
 * lights up under it. London is marked with the one spot of colour on the
 * site and the local time, shown while it faces the viewer. Reduced motion
 * stops the auto-spin but keeps the drag.
 */
const CELL_W = 8;
const CELL_H = 13;
const FONT = '11.5px "IBM Plex Mono", ui-monospace, monospace';
const AUTO_SPIN = 0.00016; // radians per ms
const DRAG_GAIN = 0.006; // radians per pixel
const GLOW_RADIUS = 140; // px
const ACCENT = '255, 184, 92';

export default function AsciiGlobe({ className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const host = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const minFrame = coarse ? 30 : 0;
    const clockFmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/London',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    let raf = 0;
    let disposed = false;
    let lastT = 0;
    let lastClock = -1e9;
    let clock = '';
    let w = 0;
    let h = 0;

    let rot = 0.55;
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
    };

    const draw = (now) => {
      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w * 0.42, h * 0.43);
      const cx = w * 0.5;
      const cy = h * 0.5;
      const view = { cx, cy, R, rot: rot + lean, tilt };
      const glow = px >= 0;

      ctx.font = FONT;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      forEachEarthCell(
        { cols: Math.ceil(w / CELL_W), rows: Math.ceil(h / CELL_H), cellW: CELL_W, cellH: CELL_H, ...view },
        (c, r, x, y, isLand, t0) => {
          let boost = 0;
          if (glow) {
            const dx = x - px;
            const dy = y - py;
            boost = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / GLOW_RADIUS);
          }
          if (isLand) {
            const t = Math.min(1, t0 + boost * 0.5);
            ctx.fillStyle = `rgba(245, 244, 240, ${0.5 + 0.5 * t})`;
            ctx.fillText(landChar(t), x, y);
          } else {
            ctx.fillStyle = `rgba(245, 244, 240, ${Math.min(0.7, 0.13 + 0.2 * t0 + boost * 0.35)})`;
            ctx.fillText('·', x, y);
          }
        }
      );

      // London: a pulsing point and the local time, while it faces the viewer.
      const L = projectPoint(LONDON, view);
      if (L.z > 0.1) {
        if (now - lastClock > 1000) {
          clock = clockFmt.format(new Date());
          lastClock = now;
        }
        const a = Math.min(1, (L.z - 0.1) / 0.3);
        const pulse = 0.5 + 0.5 * Math.sin(now / 550);
        ctx.beginPath();
        ctx.arc(L.x, L.y, 4 + 7 * pulse, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${ACCENT}, ${a * 0.5 * (1 - pulse)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(L.x, L.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT}, ${a})`;
        ctx.fill();
        // The readout sits in a dark pill with a short leader, so it stays legible over land.
        ctx.font = '11px "IBM Plex Mono", ui-monospace, monospace';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        if ('letterSpacing' in ctx) ctx.letterSpacing = '0.14em';
        const label = `LONDON ${clock}`;
        const tw = ctx.measureText(label).width;
        const pw = tw + 18;
        const ph = 22;
        const flip = L.x + 16 + pw > w - 8;
        const bx = flip ? L.x - 16 - pw : L.x + 16;
        const by = L.y - 30;
        ctx.strokeStyle = `rgba(${ACCENT}, ${a * 0.6})`;
        ctx.beginPath();
        ctx.moveTo(L.x + (flip ? -4 : 4), L.y - 4);
        ctx.lineTo(flip ? bx + pw : bx, by + ph / 2 + 4);
        ctx.stroke();
        ctx.fillStyle = `rgba(15, 14, 13, ${a * 0.9})`;
        ctx.beginPath();
        ctx.roundRect(bx, by, pw, ph, 5);
        ctx.fill();
        ctx.strokeStyle = `rgba(${ACCENT}, ${a * 0.4})`;
        ctx.stroke();
        ctx.fillStyle = `rgba(${ACCENT}, ${a})`;
        ctx.fillText(label, bx + 9, by + ph / 2 + 0.5);
        if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';
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

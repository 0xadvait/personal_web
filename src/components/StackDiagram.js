'use client';

import { useReducedMotion } from 'motion/react';
import Reveal from './Reveal';

const layers = [
  { id: 'request', label: 'Agent request', note: 'Request · context', accent: false },
  { id: 'memsync', label: 'MemSync', note: 'Memory hydration', accent: false },
  { id: 'inference', label: 'Inference engine', note: 'GPU · model exec', accent: false },
  { id: 'tee', label: 'TEE coprocessor', note: 'Attestation · signed', accent: true },
  { id: 'chain', label: 'On-chain settlement', note: 'Tx · commit · final', accent: false },
];

export default function StackDiagram() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="stack-heading"
      className="relative py-16 sm:py-24 md:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent flex items-center gap-3 mb-8 sm:mb-10 md:mb-12">
            <span>FIG_001</span>
            <span className="h-px w-10 bg-accent/40" />
            <h2 id="stack-heading" className="text-fg-dim">
              Verifiable inference stack
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="diag relative w-full">
            <MobileStack shouldReduceMotion={shouldReduceMotion} />
            <DesktopStack shouldReduceMotion={shouldReduceMotion} />
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-6 sm:mt-8 md:mt-10 max-w-xl font-serif italic text-[14.5px] sm:text-[15px] md:text-base text-fg-muted leading-relaxed">
            One call, five guarantees: the request arrives, memory hydrates, the model runs in a
            trusted enclave, a proof is signed, and the action settles on-chain. Closed black boxes
            can&apos;t do this.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── Per-layer glyphs ─────────────── */
function Glyph({ id, x, y }) {
  switch (id) {
    case 'request':
      return (
        <g transform={`translate(${x}, ${y + 18})`}>
          <line x1="0" y1="10" x2="62" y2="10" className="stroke" />
          <polygon points="62,5 72,10 62,15" className="fill" />
          <line x1="84" y1="4" x2="84" y2="16" className="stroke" strokeWidth="1" />
          <line x1="92" y1="4" x2="92" y2="16" className="stroke" strokeWidth="1" />
          <line x1="100" y1="4" x2="100" y2="16" className="stroke" strokeWidth="1" />
        </g>
      );
    case 'memsync':
      return (
        <g transform={`translate(${x}, ${y + 8})`}>
          {/* vector dot cluster */}
          {[
            [0, 0], [12, 0], [24, 0], [36, 0],
            [0, 12], [12, 12], [24, 12], [36, 12],
            [0, 24], [12, 24], [24, 24], [36, 24],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy + 4} r="1.7" className="fill" opacity={0.4 + (i % 3) * 0.2} />
          ))}
          {/* graph nodes + edges */}
          <line x1="62" y1="6" x2="86" y2="22" className="stroke-soft" />
          <line x1="86" y1="22" x2="110" y2="8" className="stroke-soft" />
          <line x1="62" y1="6" x2="110" y2="8" className="stroke-soft" />
          <circle cx="62" cy="6" r="2.6" className="fill" />
          <circle cx="86" cy="22" r="2.6" className="fill" />
          <circle cx="110" cy="8" r="2.6" className="fill" />
        </g>
      );
    case 'inference':
      return (
        <g transform={`translate(${x}, ${y + 8})`}>
          {/* tensor grid 6 x 3 */}
          {Array.from({ length: 18 }).map((_, i) => {
            const col = i % 6;
            const row = Math.floor(i / 6);
            // deterministic checker-ish opacity pattern
            const op = ((col * 3 + row * 7) % 5) / 5 + 0.25;
            return (
              <rect
                key={i}
                x={col * 11}
                y={row * 11}
                width="7"
                height="7"
                className="fill"
                opacity={op}
              />
            );
          })}
          {/* output arrow */}
          <line x1="74" y1="16" x2="98" y2="16" className="stroke" />
          <polygon points="98,12 106,16 98,20" className="fill" />
        </g>
      );
    case 'tee':
      return (
        <g transform={`translate(${x}, ${y + 6})`}>
          {/* shield */}
          <path d="M 0 6 L 28 6 L 28 24 Q 28 34, 14 42 Q 0 34, 0 24 Z" className="stroke fill-paper" />
          <path d="M 8 18 L 12 22 L 20 14" className="stroke" strokeWidth="1.4" />
          {/* lock */}
          <rect x="56" y="18" width="22" height="20" rx="1.5" className="fill-soft stroke" />
          <path d="M 60 18 L 60 12 Q 60 6, 67 6 Q 74 6, 74 12 L 74 18" className="stroke" />
          <circle cx="67" cy="28" r="1.5" className="fill" />
          <line x1="67" y1="28" x2="67" y2="33" className="stroke" />
          {/* signature line */}
          <line x1="90" y1="26" x2="118" y2="26" className="stroke-soft" strokeDasharray="2 2" />
          <text x="92" y="22" className="lbl-soft" style={{ fontSize: '8px', letterSpacing: '0.04em' }}>
            ED25519
          </text>
        </g>
      );
    case 'chain':
      return (
        <g transform={`translate(${x}, ${y + 12})`}>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${i * 38}, 0)`}>
              <rect x="0" y="0" width="28" height="22" rx="1" className="fill-paper stroke" />
              <line x1="5" y1="7" x2="23" y2="7" className="stroke-soft" strokeWidth="0.7" />
              <line x1="5" y1="12" x2="20" y2="12" className="stroke-soft" strokeWidth="0.7" />
              <line x1="5" y1="17" x2="22" y2="17" className="stroke-soft" strokeWidth="0.7" />
              {i < 2 && (
                <>
                  <line x1="28" y1="11" x2="38" y2="11" className="stroke" strokeDasharray="2 2" />
                  <polygon points="36,8 40,11 36,14" className="fill" />
                </>
              )}
            </g>
          ))}
        </g>
      );
    default:
      return null;
  }
}

/* ─────────────── MOBILE — simple portrait stack with mini-glyphs ─────────────── */
function MobileStack({ shouldReduceMotion }) {
  const W = 400;
  const PAD_X = 20;
  const BOX_X = 70;
  const BOX_W = W - BOX_X - PAD_X;
  const BOX_H = 84;
  const GAP = 28;
  const TOP_Y = 30;
  const total = layers.length * BOX_H + (layers.length - 1) * GAP;
  const H = TOP_Y + total + 30;
  const packetY = shouldReduceMotion ? TOP_Y + total / 2 : TOP_Y - 4;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="block w-full h-auto sm:hidden"
      role="img"
      aria-labelledby="diag-title-m"
    >
      <title id="diag-title-m">Verifiable inference stack — mobile view</title>

      <defs>
        <pattern id="diag-grid-m" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" className="grid" />
        </pattern>
        <pattern id="tee-hatch-m" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#2347d9" strokeWidth="0.5" opacity="0.4" />
        </pattern>
      </defs>
      <rect width={W} height={H} fill="url(#diag-grid-m)" opacity="0.55" />

      <line
        x1={BOX_X - 18}
        y1={TOP_Y}
        x2={BOX_X - 18}
        y2={TOP_Y + total}
        className="dashed"
        opacity="0.6"
      />
      <rect
        x={BOX_X - 22}
        y={packetY}
        width="8"
        height="3"
        className="fill"
        opacity={shouldReduceMotion ? '0.45' : undefined}
      >
        {!shouldReduceMotion && (
          <>
            <animate
              attributeName="y"
              from={TOP_Y - 4}
              to={TOP_Y + total + 4}
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.08;0.92;1"
              dur="6s"
              repeatCount="indefinite"
            />
          </>
        )}
      </rect>

      {layers.map((l, i) => {
        const y = TOP_Y + i * (BOX_H + GAP);
        return (
          <g key={l.label}>
            <text
              x={BOX_X - 32}
              y={y + BOX_H / 2 + 4}
              className="lbl-soft"
              style={{ fontSize: '11px' }}
              textAnchor="middle"
            >
              {String(i + 1).padStart(2, '0')}
            </text>

            <rect
              x={BOX_X}
              y={y}
              width={BOX_W}
              height={BOX_H}
              rx="3"
              className={`${l.accent ? 'fill-soft' : 'fill-paper'} stroke`}
            />
            {l.accent && (
              <rect x={BOX_X} y={y} width={BOX_W} height={BOX_H} rx="3" fill="url(#tee-hatch-m)" stroke="none" />
            )}

            <text
              x={BOX_X + 14}
              y={y + 22}
              className="lbl-big"
              style={{ fontSize: '14px' }}
            >
              {l.label.toUpperCase()}
            </text>

            <text
              x={BOX_X + 14}
              y={y + 38}
              className="lbl-soft"
              style={{ fontSize: '10px' }}
            >
              {l.note.toUpperCase()}
            </text>

            {/* Mini glyph — bottom-right of box */}
            <g transform={`translate(${BOX_X + BOX_W - 90}, ${y + 42}) scale(0.65)`}>
              <Glyph id={l.id} x={0} y={0} />
            </g>

            {i < layers.length - 1 && (
              <line
                x1={BOX_X + 30}
                y1={y + BOX_H}
                x2={BOX_X + 30}
                y2={y + BOX_H + GAP}
                className="dashed"
              />
            )}

            <line
              x1={BOX_X + BOX_W}
              y1={y + BOX_H / 2}
              x2={BOX_X + BOX_W + 10}
              y2={y + BOX_H / 2}
              className="stroke-soft"
            />
          </g>
        );
      })}

      <text
        x={W - 12}
        y={H - 10}
        className="lbl-soft"
        style={{ fontSize: '9px' }}
        textAnchor="end"
      >
        FIG_001 · ( c ) 2026
      </text>
    </svg>
  );
}

/* ─────────────── DESKTOP — axonometric exploded with glyphs ─────────────── */
function DesktopStack({ shouldReduceMotion }) {
  const BOX_W = 470;
  const BOX_H = 64;
  const OFFSET_X = 38;
  const OFFSET_Y = 22;
  const ROW_GAP = 118;
  const LEFT_X = 250;
  const TOP_Y = 90;
  const CANVAS_W = 1200;
  const CANVAS_H = TOP_Y + ROW_GAP * (layers.length - 1) + BOX_H + OFFSET_Y + 90;
  const GUIDE_LEFT_X = LEFT_X;
  const GUIDE_RIGHT_X = LEFT_X + BOX_W + OFFSET_X;
  const OUTPUT_END_X = GUIDE_RIGHT_X + 96;
  const OUTPUT_LABEL_X = OUTPUT_END_X + 14;
  const lowerGuideY = TOP_Y + ROW_GAP * (layers.length - 1) + BOX_H + 30;
  const downPacketY = shouldReduceMotion ? TOP_Y + ROW_GAP * 1.2 : TOP_Y - 30;
  const upPacketY = shouldReduceMotion ? TOP_Y + ROW_GAP * 3.2 : lowerGuideY;

  return (
    <svg
      viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
      className="hidden sm:block w-full h-auto"
      role="img"
      aria-labelledby="diag-title-d diag-desc-d"
    >
      <title id="diag-title-d">Verifiable inference stack</title>
      <desc id="diag-desc-d">
        Exploded axonometric of a verifiable AI inference call flowing through five
        differentiated layers: agent request (data ingress), MemSync (vector + graph memory
        hydration), inference engine (tensor compute), TEE coprocessor (attestation + signed
        proof — highlighted), and on-chain settlement (block commit chain).
      </desc>

      <defs>
        <pattern id="diag-grid-d" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" className="grid" />
        </pattern>
        {/* Diagonal hatching for the TEE highlight zone */}
        <pattern id="tee-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#2347d9" strokeWidth="0.6" opacity="0.55" />
        </pattern>
      </defs>
      <rect width={CANVAS_W} height={CANVAS_H} fill="url(#diag-grid-d)" opacity="0.55" />

      {/* Animated packets */}
      <rect
        x={GUIDE_LEFT_X - 4}
        y={downPacketY}
        width="8"
        height="3"
        className="fill"
        opacity={shouldReduceMotion ? '0.45' : undefined}
      >
        {!shouldReduceMotion && (
          <>
            <animate
              attributeName="y"
              from={TOP_Y - 30}
              to={lowerGuideY}
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.1;0.9;1"
              dur="6s"
              repeatCount="indefinite"
            />
          </>
        )}
      </rect>
      <rect
        x={GUIDE_RIGHT_X - 4}
        y={upPacketY}
        width="8"
        height="3"
        className="fill"
        opacity={shouldReduceMotion ? '0.45' : undefined}
      >
        {!shouldReduceMotion && (
          <>
            <animate
              attributeName="y"
              from={lowerGuideY}
              to={TOP_Y - 30}
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.1;0.9;1"
              dur="6s"
              repeatCount="indefinite"
            />
          </>
        )}
      </rect>

      {layers.map((l, i) => {
        const y = TOP_Y + i * ROW_GAP;
        const topY = y - OFFSET_Y;
        const midY = y + BOX_H / 2;
        const rightX = LEFT_X + BOX_W;
        const topRightX = rightX + OFFSET_X;

        const frontFill = l.accent ? 'fill-soft' : 'fill-paper';
        const topFill = l.accent ? 'fill-mid' : 'fill-paper';
        const sideFill = l.accent ? 'fill-mid' : 'fill-bg';

        return (
          <g key={l.label}>
            <path
              d={`M ${LEFT_X} ${y} L ${rightX} ${y} L ${topRightX} ${topY} L ${LEFT_X + OFFSET_X} ${topY} Z`}
              className={`${topFill} stroke`}
            />
            <path
              d={`M ${rightX} ${y} L ${topRightX} ${topY} L ${topRightX} ${topY + BOX_H} L ${rightX} ${y + BOX_H} Z`}
              className={`${sideFill} stroke`}
            />
            <path
              d={`M ${LEFT_X} ${y} L ${rightX} ${y} L ${rightX} ${y + BOX_H} L ${LEFT_X} ${y + BOX_H} Z`}
              className={`${frontFill} stroke`}
            />
            {/* Diagonal hatching overlay on TEE front face only */}
            {l.accent && (
              <rect
                x={LEFT_X}
                y={y}
                width={BOX_W}
                height={BOX_H}
                fill="url(#tee-hatch)"
                stroke="none"
              />
            )}

            {/* Layer label */}
            <text x={LEFT_X + 18} y={y + 26} className="lbl-big">
              {l.label.toUpperCase()}
            </text>
            {/* Layer sub-note inside box */}
            <text x={LEFT_X + 18} y={y + 46} className="lbl-soft" style={{ fontSize: '9.5px' }}>
              {l.note.toUpperCase()}
            </text>

            {/* Glyph inside the box, right side */}
            <Glyph id={l.id} x={LEFT_X + 260} y={y - 2} />

            {/* Right-side leader line + descriptor */}
            <line
              x1={GUIDE_RIGHT_X}
              y1={midY}
              x2={OUTPUT_END_X}
              y2={midY}
              className="stroke-soft"
            />
            <polygon
              points={`${OUTPUT_END_X},${midY - 3} ${OUTPUT_END_X + 7},${midY} ${OUTPUT_END_X},${midY + 3}`}
              className="fill"
            />
            <text x={OUTPUT_LABEL_X} y={midY + 4} className="lbl">
              {l.note.toUpperCase()}
            </text>

            {/* Step number */}
            <text x={LEFT_X - 60} y={y + BOX_H / 2 + 4} className="lbl-soft">
              {String(i + 1).padStart(2, '0')}
            </text>

            {/* Connectors to next layer */}
            {i < layers.length - 1 && (
              <>
                <line
                  x1={GUIDE_LEFT_X}
                  y1={y + BOX_H}
                  x2={GUIDE_LEFT_X}
                  y2={y + ROW_GAP - OFFSET_Y}
                  className="dashed"
                  opacity="0.55"
                />
                <line
                  x1={GUIDE_RIGHT_X}
                  y1={y + BOX_H}
                  x2={GUIDE_RIGHT_X}
                  y2={y + ROW_GAP - OFFSET_Y}
                  className="dashed"
                  opacity="0.55"
                />
              </>
            )}
          </g>
        );
      })}

      {/* Right vertical title */}
      <text
        x={CANVAS_W - 22}
        y={CANVAS_H / 2}
        className="lbl-soft"
        transform={`rotate(90, ${CANVAS_W - 22}, ${CANVAS_H / 2})`}
        textAnchor="middle"
      >
        [ FIG_001 · VERIFIABLE INFERENCE STACK ]
      </text>

      <text x={CANVAS_W - 22} y={CANVAS_H - 18} className="lbl-soft" textAnchor="end">
        ( c )  2026
      </text>
    </svg>
  );
}

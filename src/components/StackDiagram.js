'use client';

import Reveal from './Reveal';

const layers = [
  { label: 'Agent request', note: 'inbound call', accent: false },
  { label: 'MemSync', note: 'memory layer', accent: false },
  { label: 'Inference engine', note: 'model exec', accent: true },
  { label: 'TEE coprocessor', note: 'proof', accent: false },
  { label: 'On-chain settlement', note: 'finalised', accent: false },
];

export default function StackDiagram() {
  return (
    <section
      aria-label="Verifiable inference stack diagram"
      className="relative py-16 sm:py-24 md:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent flex items-center gap-3 mb-8 sm:mb-10 md:mb-12">
            <span>FIG_001</span>
            <span className="h-px w-10 bg-accent/40" />
            <span className="text-fg-dim">Verifiable inference stack</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="diag relative w-full">
            {/* Mobile-portrait — vertical stack with internal labels, no overflow */}
            <MobileStack />
            {/* Desktop — axonometric exploded view */}
            <DesktopStack />
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

/* ─────────────── MOBILE — simple portrait stack ─────────────── */
function MobileStack() {
  const W = 400;
  const PAD_X = 20;
  const BOX_X = 70;
  const BOX_W = W - BOX_X - PAD_X; // ~310
  const BOX_H = 76;
  const GAP = 28;
  const TOP_Y = 30;
  const total = layers.length * BOX_H + (layers.length - 1) * GAP;
  const H = TOP_Y + total + 30;

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
      </defs>
      <rect width={W} height={H} fill="url(#diag-grid-m)" opacity="0.55" />

      {/* Dashed guide on the left for the travelling packet */}
      <line
        x1={BOX_X - 18}
        y1={TOP_Y}
        x2={BOX_X - 18}
        y2={TOP_Y + total}
        className="dashed"
        opacity="0.6"
      />
      <rect x={BOX_X - 22} y={TOP_Y - 4} width="8" height="3" className="fill">
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
      </rect>

      {layers.map((l, i) => {
        const y = TOP_Y + i * (BOX_H + GAP);
        return (
          <g key={l.label}>
            {/* Step number */}
            <text
              x={BOX_X - 32}
              y={y + BOX_H / 2 - 8}
              className="lbl-soft"
              style={{ fontSize: '11px' }}
              textAnchor="middle"
            >
              {String(i + 1).padStart(2, '0')}
            </text>

            {/* Box */}
            <rect
              x={BOX_X}
              y={y}
              width={BOX_W}
              height={BOX_H}
              rx="3"
              className={`${l.accent ? 'fill-soft' : 'fill-paper'} stroke`}
            />

            {/* Label inside */}
            <text
              x={BOX_X + 14}
              y={y + BOX_H / 2 - 2}
              className="lbl-big"
              style={{ fontSize: '15px' }}
            >
              {l.label.toUpperCase()}
            </text>

            {/* Note below label */}
            <text
              x={BOX_X + 14}
              y={y + BOX_H / 2 + 18}
              className="lbl-soft"
              style={{ fontSize: '11px' }}
            >
              {l.note.toUpperCase()}
            </text>

            {/* Connector to next layer */}
            {i < layers.length - 1 && (
              <line
                x1={BOX_X + 30}
                y1={y + BOX_H}
                x2={BOX_X + 30}
                y2={y + BOX_H + GAP}
                className="dashed"
              />
            )}

            {/* Right-edge tick */}
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

/* ─────────────── DESKTOP — axonometric exploded ─────────────── */
function DesktopStack() {
  const BOX_W = 420;
  const BOX_H = 56;
  const OFFSET_X = 38;
  const OFFSET_Y = 22;
  const ROW_GAP = 110;
  const LEFT_X = 280;
  const TOP_Y = 90;
  const CANVAS_W = 1200;
  const CANVAS_H = TOP_Y + ROW_GAP * (layers.length - 1) + BOX_H + OFFSET_Y + 90;

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
        stacked layers: agent request, MemSync, inference engine, TEE coprocessor, and
        on-chain settlement.
      </desc>

      <defs>
        <pattern id="diag-grid-d" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" className="grid" />
        </pattern>
      </defs>
      <rect width={CANVAS_W} height={CANVAS_H} fill="url(#diag-grid-d)" opacity="0.6" />

      <line
        x1={LEFT_X}
        y1={TOP_Y - 30}
        x2={LEFT_X}
        y2={TOP_Y + ROW_GAP * (layers.length - 1) + BOX_H + 30}
        className="dashed"
        opacity="0.55"
      />
      <line
        x1={LEFT_X + BOX_W + OFFSET_X}
        y1={TOP_Y - 30}
        x2={LEFT_X + BOX_W + OFFSET_X}
        y2={TOP_Y + ROW_GAP * (layers.length - 1) + BOX_H + 30}
        className="dashed"
        opacity="0.55"
      />

      <rect x={LEFT_X - 4} y={TOP_Y - 30} width="8" height="3" className="fill">
        <animate
          attributeName="y"
          from={TOP_Y - 30}
          to={TOP_Y + ROW_GAP * (layers.length - 1) + BOX_H + 30}
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
      </rect>
      <rect
        x={LEFT_X + BOX_W + OFFSET_X - 4}
        y={TOP_Y + ROW_GAP * (layers.length - 1) + BOX_H + 30}
        width="8"
        height="3"
        className="fill"
      >
        <animate
          attributeName="y"
          from={TOP_Y + ROW_GAP * (layers.length - 1) + BOX_H + 30}
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
      </rect>

      {layers.map((l, i) => {
        const y = TOP_Y + i * ROW_GAP;
        const topY = y - OFFSET_Y;
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

            <text x={LEFT_X + 22} y={y + BOX_H / 2 + 5} className="lbl-big">
              {l.label.toUpperCase()}
            </text>

            <line
              x1={topRightX}
              y1={y + BOX_H / 2 - 10}
              x2={topRightX + 70}
              y2={y + BOX_H / 2 - 10}
              className="stroke-soft"
            />
            <polygon
              points={`${topRightX + 70},${y + BOX_H / 2 - 13} ${topRightX + 76},${y + BOX_H / 2 - 10} ${topRightX + 70},${y + BOX_H / 2 - 7}`}
              className="fill"
            />
            <text x={topRightX + 84} y={y + BOX_H / 2 - 6} className="lbl">
              {l.note.toUpperCase()}
            </text>

            <text x={LEFT_X - 60} y={y + BOX_H / 2 + 4} className="lbl-soft">
              {String(i + 1).padStart(2, '0')}
            </text>

            {i < layers.length - 1 && (
              <>
                <line
                  x1={LEFT_X + 50}
                  y1={y + BOX_H}
                  x2={LEFT_X + 50}
                  y2={y + ROW_GAP - OFFSET_Y}
                  className="dashed"
                />
                <line
                  x1={rightX - 50}
                  y1={y + BOX_H}
                  x2={rightX - 50}
                  y2={y + ROW_GAP - OFFSET_Y}
                  className="dashed"
                />
              </>
            )}
          </g>
        );
      })}

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

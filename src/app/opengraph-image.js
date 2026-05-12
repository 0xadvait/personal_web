import { ImageResponse } from 'next/og';

export const alt = 'Advait Jayant — verifiable AI infrastructure';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#faf8f1',
          color: '#1f2937',
          padding: '72px',
          border: '1px solid #e5e1d3',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            color: '#2347d9',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 24,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          <span>Advait Jayant</span>
          <span style={{ width: 96, height: 2, background: '#2347d9', opacity: 0.4 }} />
          <span style={{ color: '#9ca3af' }}>London</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ fontSize: 104, lineHeight: 0.98, maxWidth: 900 }}>
            Verifiable AI infrastructure.
          </div>
          <div style={{ width: 168, height: 6, background: '#2347d9' }} />
        </div>
        <div
          style={{
            maxWidth: 820,
            color: '#4b5563',
            fontSize: 34,
            lineHeight: 1.35,
          }}
        >
          Inference proofs, persistent agent memory, and the on-chain bits that hold it together.
        </div>
      </div>
    ),
    size
  );
}

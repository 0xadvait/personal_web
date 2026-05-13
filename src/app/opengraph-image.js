import { ImageResponse } from 'next/og';

export const alt = 'Advait Jayant — accountable AI infrastructure';
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
          background: '#f7f7f2',
          color: '#1d2528',
          padding: '72px',
          border: '1px solid #dde2da',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            color: '#2446c7',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 24,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          <span>Advait Jayant</span>
          <span style={{ width: 96, height: 2, background: '#2446c7', opacity: 0.4 }} />
          <span style={{ color: '#8c9895' }}>advait.tech</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ fontSize: 104, lineHeight: 0.98, maxWidth: 900 }}>
            Accountable AI infrastructure.
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ width: 128, height: 6, background: '#2446c7' }} />
            <div style={{ width: 56, height: 6, background: '#0f766e' }} />
          </div>
        </div>
        <div
          style={{
            maxWidth: 820,
            color: '#4d5b60',
            fontSize: 34,
            lineHeight: 1.35,
          }}
        >
          Proofs, memory, and settlement for agents that do real work.
        </div>
      </div>
    ),
    size
  );
}

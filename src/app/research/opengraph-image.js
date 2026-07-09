import { ImageResponse } from 'next/og';

export const alt = 'Wash trading and NFT markets research by Advait Jayant';
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
          <span>Research</span>
          <span style={{ width: 96, height: 2, background: '#2446c7', opacity: 0.4 }} />
          <span style={{ color: '#8c9895' }}>advait.tech/research</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ fontSize: 88, lineHeight: 1.02, maxWidth: 1000 }}>
            Wash trading and NFT markets.
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ width: 128, height: 6, background: '#2446c7' }} />
            <div style={{ width: 56, height: 6, background: '#0f766e' }} />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
          }}
        >
          <div style={{ maxWidth: 760, color: '#4d5b60', fontSize: 32, lineHeight: 1.35 }}>
            The Economics of Wash Trading, plus explainers on detection, legality, and token
            incentives.
          </div>
          <div
            style={{
              color: '#2446c7',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              fontSize: 22,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Advait Jayant
          </div>
        </div>
      </div>
    ),
    size
  );
}

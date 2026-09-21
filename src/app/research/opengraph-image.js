import { ImageResponse } from 'next/og';
import { loadGoogleFont } from '@/lib/ogFonts';

export const alt = 'Wash trading and NFT markets research by Advait Jayant';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const [sans, mono] = await Promise.all([loadGoogleFont('Figtree', 400), loadGoogleFont('IBM Plex Mono', 400)]);
  const fonts = [];
  if (sans) fonts.push({ name: 'Figtree', data: sans, weight: 400, style: 'normal' });
  if (mono) fonts.push({ name: 'IBM Plex Mono', data: mono, weight: 400, style: 'normal' });

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f5f4f0',
          color: '#1a1815',
          padding: '72px',
          fontFamily: 'Figtree',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            fontFamily: 'IBM Plex Mono',
            fontSize: 19,
            letterSpacing: '0.14em',
            color: '#97928a',
          }}
        >
          <span>RESEARCH</span>
          <span style={{ width: 40, height: 1, background: '#bdb9b0' }} />
          <span>ADVAIT.TECH/RESEARCH</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 84,
            lineHeight: 1.04,
            letterSpacing: '-0.03em',
            maxWidth: 1000,
          }}
        >
          <div style={{ display: 'flex' }}>Wash trading</div>
          <div style={{ display: 'flex', color: '#97928a' }}>and NFT markets.</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', maxWidth: 760, color: '#6a665e', fontSize: 30, lineHeight: 1.35 }}>
            The Economics of Wash Trading, plus explainers on detection, legality, and token
            incentives.
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#1a1815' }}>Advait Jayant</div>
        </div>
      </div>
    ),
    { ...size, ...(fonts.length ? { fonts } : {}) }
  );
}

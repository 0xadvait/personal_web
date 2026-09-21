import { ImageResponse } from 'next/og';
import { forEachEarthCell, landChar } from '@/lib/asciiEarth';
import { loadGoogleFont } from '@/lib/ogFonts';

export const alt = 'Advait Jayant. Chief Strategy Officer at OpenGradient, London.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const CELL_W = 9;
const CELL_H = 15;
const INK = '#f5f4f0';

/* One frame of the same ASCII Earth the homepage draws, as rows of text runs. */
function earthRows() {
  const cols = Math.ceil(size.width / CELL_W);
  const rows = Math.ceil(size.height / CELL_H);
  const grid = Array.from({ length: rows }, () => new Array(cols).fill(null));
  forEachEarthCell(
    { cols, rows, cellW: CELL_W, cellH: CELL_H, cx: 600, cy: 300, R: 232, rot: 0.55, tilt: 0.4 },
    (c, r, x, y, isLand, t) => {
      grid[r][c] = isLand ? { ch: landChar(t), land: true } : { ch: '·', land: false };
    }
  );
  return grid.map((row) => {
    const runs = [];
    let cur = null;
    for (const cell of row) {
      const land = cell ? cell.land : null;
      const ch = cell ? cell.ch : ' ';
      if (cur && cur.land === land) cur.text += ch;
      else {
        cur = { land, text: ch };
        runs.push(cur);
      }
    }
    return runs;
  });
}

export default async function Image() {
  const [sans, mono] = await Promise.all([loadGoogleFont('Figtree', 400), loadGoogleFont('IBM Plex Mono', 400)]);
  const fonts = [];
  if (sans) fonts.push({ name: 'Figtree', data: sans, weight: 400, style: 'normal' });
  if (mono) fonts.push({ name: 'IBM Plex Mono', data: mono, weight: 400, style: 'normal' });
  const rows = mono ? earthRows() : [];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: '#0f0e0d',
          color: INK,
          fontFamily: 'Figtree',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'IBM Plex Mono',
            fontSize: 15,
            lineHeight: `${CELL_H}px`,
            whiteSpace: 'pre',
          }}
        >
          {rows.map((runs, r) => (
            <div key={r} style={{ display: 'flex', height: CELL_H }}>
              {runs.map((run, i) => (
                <span
                  key={i}
                  style={{
                    color:
                      run.land === true
                        ? 'rgba(245, 244, 240, 0.92)'
                        : run.land === false
                          ? 'rgba(245, 244, 240, 0.2)'
                          : 'transparent',
                  }}
                >
                  {run.text}
                </span>
              ))}
            </div>
          ))}
        </div>


        <div
          style={{
            position: 'absolute',
            left: 72,
            top: 56,
            display: 'flex',
            fontFamily: 'IBM Plex Mono',
            fontSize: 19,
            letterSpacing: '0.14em',
            color: 'rgba(245, 244, 240, 0.5)',
          }}
        >
          ADVAIT.TECH
        </div>


        <div
          style={{
            position: 'absolute',
            left: 72,
            right: 72,
            bottom: 56,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: '1px solid rgba(245, 244, 240, 0.12)',
            paddingTop: 22,
            fontSize: 24,
            color: 'rgba(245, 244, 240, 0.7)',
          }}
        >
          <div style={{ display: 'flex' }}>Chief Strategy Officer at OpenGradient, London.</div>
          <div style={{ display: 'flex', color: INK }}>Advait Jayant</div>
        </div>
      </div>
    ),
    { ...size, ...(fonts.length ? { fonts } : {}) }
  );
}

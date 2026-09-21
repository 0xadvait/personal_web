/*
 * Fetches a Google Font for next/og at build time. Satori reads TTF, OTF and
 * WOFF (not WOFF2); an IE11 user agent makes Google serve WOFF. Returns null
 * when the network is unavailable, and the callers then let Satori use its
 * default font instead.
 */
export async function loadGoogleFont(family, weight = 400) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko' },
      })
    ).text();
    const match = css.match(/src: url\((.+?)\) format\('(woff|truetype|opentype)'\)/);
    if (!match) return null;
    return await (await fetch(match[1])).arrayBuffer();
  } catch {
    return null;
  }
}

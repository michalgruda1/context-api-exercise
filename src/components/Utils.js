/**
 * @param {string | null} urlBefore
 */
export function NormalizeUrlForCorsHack(urlBefore) {
  console.log('urlBefore:', urlBefore);
  if (!urlBefore) return urlBefore;
  const regex = /https?:\/\/api.deezer.com\/(.+)/i;
  const match = urlBefore.match(regex)[0];
  return match ? match[1] : urlBefore;
}

export function FormatTime(seconds) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

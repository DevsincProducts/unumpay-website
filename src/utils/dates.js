// Blog dates are stored in two shapes across entries ("2026-08-08" and
// "Jun 24, 2026"). New Date() parses those two shapes in different timezones
// (ISO date-only strings as UTC, everything else as local time), which can
// silently shift the displayed day depending on the server's timezone. These
// helpers parse the year/month/day directly instead, so display and sort
// order are identical no matter where the site is built.
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function parseDateParts(input) {
  if (!input) return null;
  const iso = /^(\d{4})-(\d{2})-(\d{2})/.exec(input);
  if (iso) return { y: +iso[1], m: +iso[2] - 1, d: +iso[3] };
  const human = /^([A-Za-z]{3,9})\s+(\d{1,2}),?\s+(\d{4})/.exec(input);
  if (human) {
    const mi = MONTHS.findIndex((mo) => human[1].toLowerCase().startsWith(mo.toLowerCase()));
    if (mi !== -1) return { y: +human[3], m: mi, d: +human[2] };
  }
  return null;
}

export function formatDate(input) {
  const p = parseDateParts(input);
  if (!p) return input;
  return `${MONTHS[p.m]} ${p.d}, ${p.y}`;
}

export function dateSortValue(input) {
  const p = parseDateParts(input);
  if (!p) return 0;
  return p.y * 10000 + (p.m + 1) * 100 + p.d;
}

export function readTimeFromBody(body) {
  const wordCount = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
}

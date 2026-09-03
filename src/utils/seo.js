// Search results cut a meta description off at roughly 160 characters, and a
// description that gets truncated mid-word reads as sloppy in the SERP. Rather
// than hand-counting every page (which breaks the moment someone adds a
// gateway with a long name or an extra region), clamp on a word boundary.
export const DESCRIPTION_LIMIT = 160

export function clampDescription(text, limit = DESCRIPTION_LIMIT) {
  const s = String(text ?? '').replace(/\s+/g, ' ').trim()
  if (s.length <= limit) return s
  // Leave room for the ellipsis, then drop the partial word it landed in.
  return s.slice(0, limit - 3).replace(/\s+\S*$/, '').replace(/[,;:.]$/, '') + '…'
}

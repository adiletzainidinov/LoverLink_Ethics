const FALLBACK =
  process.env.NEXT_PUBLIC_LOVELINK_URL ?? 'http://localhost:3000';

const ALLOWED_ORIGINS = [
  FALLBACK,
  process.env.NEXT_PUBLIC_FEELLINK_EDIT_URL,
]
  .filter(Boolean)
  .map((u) => {
    try { return new URL(u).origin; } catch { return null; }
  })
  .filter(Boolean);

function isSafeUrl(raw) {
  let parsed;
  try { parsed = new URL(raw); } catch { return false; }

  const { protocol, hostname } = parsed;
  if (protocol !== 'http:' && protocol !== 'https:') return false;

  if (hostname === 'localhost' || hostname === '127.0.0.1') return true;
  return ALLOWED_ORIGINS.includes(parsed.origin);
}

export function getSafeReturnUrl(raw) {
  if (!raw || typeof raw !== 'string') return FALLBACK;
  return isSafeUrl(raw) ? raw : FALLBACK;
}

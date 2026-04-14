/**
 * Wishlist — localStorage-backed, syncs to account if signed in.
 * Key: fenland_wishlist → JSON array of product IDs
 */

const STORAGE_KEY = 'fenland_wishlist'

export function getWishlist(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function toggleWishlist(productId: string): boolean {
  const current = getWishlist()
  const isIn = current.includes(productId)
  const next = isIn
    ? current.filter((id) => id !== productId)
    : [...current, productId]
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    window.dispatchEvent(new CustomEvent('wishlist-change', { detail: { ids: next } }))
  } catch {}
  return !isIn // returns true if now wishlisted
}

export function isWishlisted(productId: string): boolean {
  return getWishlist().includes(productId)
}

export function clearWishlist(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
  window.dispatchEvent(new CustomEvent('wishlist-change', { detail: { ids: [] } }))
}

export function getWishlistCount(): number {
  return getWishlist().length
}

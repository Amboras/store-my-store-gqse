'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  getWishlist,
  toggleWishlist as toggleWishlistStore,
  isWishlisted as checkWishlisted,
} from '@/lib/wishlist'

export function useWishlist() {
  const [wishlistIds, setWishlistIds] = useState<string[]>([])
  const [animatingId, setAnimatingId] = useState<string | null>(null)

  useEffect(() => {
    setWishlistIds(getWishlist())

    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ ids: string[] }>
      setWishlistIds(ce.detail.ids)
    }
    window.addEventListener('wishlist-change', handler)
    return () => window.removeEventListener('wishlist-change', handler)
  }, [])

  const toggle = useCallback((productId: string) => {
    toggleWishlistStore(productId)
    setAnimatingId(productId)
    setTimeout(() => setAnimatingId(null), 400)
  }, [])

  const isInWishlist = useCallback(
    (productId: string) => wishlistIds.includes(productId),
    [wishlistIds],
  )

  return {
    wishlistIds,
    wishlistCount: wishlistIds.length,
    toggle,
    isInWishlist,
    animatingId,
  }
}

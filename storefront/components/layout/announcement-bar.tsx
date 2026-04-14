'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-[hsl(30,18%,16%)] text-[hsl(42,38%,94%)]">
      <div className="container-custom flex items-center justify-center py-2.5 text-sm tracking-wide text-center">
        <p className="font-body">
          Free UK shipping on all physical prints &mdash;{' '}
          <Link href="/products" className="underline underline-offset-2 hover:opacity-80 transition-opacity">
            Shop the collection
          </Link>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}

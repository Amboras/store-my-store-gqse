'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-[hsl(30,18%,16%)] text-[hsl(42,38%,94%)]">
      <div className="container-custom flex items-center justify-center py-2.5 text-center pr-10">
        <p className="font-body text-xs tracking-wide">
          Free UK delivery on orders over £30 &nbsp;&mdash;&nbsp;{' '}
          <Link
            href="/products"
            className="underline underline-offset-2 hover:text-[hsl(38,45%,65%)] transition-colors"
          >
            Shop the collection
          </Link>
          &nbsp;&mdash;&nbsp; New prints added every month.{' '}
          <Link
            href="/#newsletter"
            className="underline underline-offset-2 hover:text-[hsl(38,45%,65%)] transition-colors"
          >
            Join the mailing list.
          </Link>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1.5 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}

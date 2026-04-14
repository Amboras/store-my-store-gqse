'use client'

import Link from 'next/link'
import { useState } from 'react'
import { clearConsent } from '@/lib/cookie-consent'
import { MapPin } from 'lucide-react'

const shopLinks = [
  { label: 'Shop All', href: '/products' },
  { label: 'Archive Maps', href: '/collections/archive-maps' },
  { label: 'Illustrated Landmarks', href: '/collections/illustrated-landmarks' },
  { label: 'Gift Ideas', href: '/products?gift=true' },
]

const infoLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Delivery and Returns', href: '/shipping' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
]

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0" />
    </svg>
  )
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <footer className="bg-[hsl(30,18%,14%)] text-[hsl(42,25%,80%)]">
      <div className="container-custom pt-14 pb-8">

        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-semibold text-[hsl(42,38%,94%)]">
                Fenland Press
              </span>
            </Link>
            <p className="font-body text-xs text-[hsl(42,15%,55%)] leading-relaxed">
              Heritage maps and original illustrations of the English countryside.
              Based in the Cambridgeshire Fens.
            </p>
            <div className="flex items-start gap-2 text-[hsl(42,15%,50%)]">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="font-body text-xs leading-relaxed">
                Cambridgeshire Fens, England<br />
                UK shipping only
              </p>
            </div>
            <p className="font-heading italic text-sm text-[hsl(42,25%,55%)]">
              &ldquo;The places you love, made permanent.&rdquo;
            </p>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="text-[10px] font-body font-semibold uppercase tracking-[0.22em] text-[hsl(42,38%,94%)] mb-5">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[hsl(42,15%,60%)] hover:text-[hsl(42,38%,90%)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Information */}
          <div>
            <h3 className="text-[10px] font-body font-semibold uppercase tracking-[0.22em] text-[hsl(42,38%,94%)] mb-5">
              Information
            </h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[hsl(42,15%,60%)] hover:text-[hsl(42,38%,90%)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social + Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-body font-semibold uppercase tracking-[0.22em] text-[hsl(42,38%,94%)] mb-5">
                Follow us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(42,15%,55%)] hover:text-[hsl(42,38%,90%)] transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(42,15%,55%)] hover:text-[hsl(42,38%,90%)] transition-colors"
                  aria-label="Pinterest"
                >
                  <PinterestIcon />
                </a>
              </div>
            </div>

            {/* Compact newsletter */}
            <div>
              <h3 className="text-[10px] font-body font-semibold uppercase tracking-[0.22em] text-[hsl(42,38%,94%)] mb-3">
                Join the list
              </h3>
              <p className="font-body text-xs text-[hsl(42,15%,55%)] mb-3 leading-relaxed">
                New prints every month. Never miss a release.
              </p>
              {submitted ? (
                <p className="font-heading italic text-sm text-[hsl(38,45%,55%)]">Thank you — we&rsquo;ll be in touch.</p>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-0">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 min-w-0 bg-[hsl(30,18%,20%)] border border-[hsl(30,12%,28%)] text-[hsl(42,25%,85%)] px-3 py-2 text-xs font-body placeholder:text-[hsl(42,10%,38%)] focus:border-accent focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-accent text-[hsl(42,38%,96%)] px-4 py-2 text-xs font-body font-medium hover:bg-[hsl(38,45%,38%)] transition-colors whitespace-nowrap"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-7 border-t border-[hsl(30,12%,22%)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[hsl(42,10%,40%)]">
            &copy; {new Date().getFullYear()} Fenland Press. All rights reserved. UK shipping only.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                clearConsent()
                window.dispatchEvent(new Event('manage-cookies'))
              }}
              className="font-body text-xs text-[hsl(42,10%,40%)] hover:text-[hsl(42,25%,65%)] transition-colors"
            >
              Manage Cookies
            </button>
            <Link href="/privacy" className="font-body text-xs text-[hsl(42,10%,40%)] hover:text-[hsl(42,25%,65%)] transition-colors">
              Privacy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import { clearConsent } from '@/lib/cookie-consent'
import { usePolicies } from '@/hooks/use-policies'
import { MapPin } from 'lucide-react'

const footerLinks = {
  shop: [
    { label: 'All Prints', href: '/products' },
    { label: 'Archive Maps', href: '/collections/archive-maps' },
    { label: 'Illustrated Landmarks', href: '/collections/illustrated-landmarks' },
  ],
  help: [
    { label: 'Shipping & Delivery', href: '/shipping' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Returns', href: '/shipping#returns' },
  ],
}

export default function Footer() {
  const { policies } = usePolicies()

  const companyLinks = [
    { label: 'About', href: '/about' },
  ]

  if (policies?.privacy_policy) {
    companyLinks.push({ label: 'Privacy Policy', href: '/privacy' })
  }
  if (policies?.terms_of_service) {
    companyLinks.push({ label: 'Terms of Service', href: '/terms' })
  }
  if (policies?.refund_policy) {
    companyLinks.push({ label: 'Refund Policy', href: '/refund-policy' })
  }
  if (policies?.cookie_policy) {
    companyLinks.push({ label: 'Cookie Policy', href: '/cookie-policy' })
  }

  return (
    <footer className="border-t border-border/60 bg-[hsl(42,25%,91%)]">
      <div className="container-custom pt-14 pb-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-semibold text-foreground">
                Fenland Press
              </span>
            </Link>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-body">
              Heritage Maps &amp; Illustrations
            </p>
            <p className="mt-4 text-sm font-body text-muted-foreground leading-relaxed max-w-xs italic font-heading">
              &ldquo;The places you love, made permanent.&rdquo;
            </p>
            <div className="mt-5 flex items-start gap-2 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-xs font-body leading-relaxed">
                Based in the Cambridgeshire Fens<br />
                UK shipping only
              </p>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-[10px] font-body font-semibold uppercase tracking-widest text-foreground mb-5">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-[10px] font-body font-semibold uppercase tracking-widest text-foreground mb-5">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-body font-semibold uppercase tracking-widest text-foreground mb-5">About</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Print quality note */}
            <div className="mt-8 p-4 bg-background/60 border border-border/60 space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-body">Print quality</p>
              <p className="text-xs font-body text-muted-foreground leading-relaxed">
                All physical prints on 230gsm archival matte paper. Shipped flat or in tubes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-7 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-muted-foreground">
            &copy; {new Date().getFullYear()} Fenland Press. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                clearConsent()
                window.dispatchEvent(new Event('manage-cookies'))
              }}
              className="text-xs font-body text-muted-foreground hover:text-foreground transition-colors"
            >
              Manage Cookies
            </button>
            <span className="text-xs font-body text-muted-foreground/50">Powered by Amboras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

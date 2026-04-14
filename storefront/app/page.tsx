'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, MapPin, Download, Package, Mail } from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[hsl(42,30%,93%)]">
        {/* Subtle texture overlay using CSS */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        <div className="container-custom py-20 lg:py-32">
          <div className="max-w-2xl mx-auto text-center space-y-7 animate-fade-in-up">

            {/* Ornamental rule */}
            <div className="flex items-center justify-center gap-3 text-accent/60">
              <span className="h-px w-12 bg-accent/40 inline-block" />
              <MapPin className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} />
              <span className="h-px w-12 bg-accent/40 inline-block" />
            </div>

            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground font-body">
              Cambridgeshire Fens &mdash; Est. in love of place
            </p>

            <h1 className="font-heading text-display font-semibold text-foreground text-balance leading-[1.08]">
              The places you love,<br />
              <span className="italic font-medium text-accent">made permanent.</span>
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground font-body leading-relaxed max-w-lg mx-auto">
              Heritage archive maps, restored and reprinted. Original watercolour illustrations
              of English churches, villages, and countryside. Instant downloads or archival prints
              posted to your door.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Link
                href="/collections/archive-maps"
                className="inline-flex items-center gap-2 bg-[hsl(30,18%,16%)] text-[hsl(42,38%,96%)] px-7 py-3.5 text-sm font-body font-medium tracking-wide hover:bg-[hsl(30,18%,22%)] transition-colors"
                prefetch={true}
              >
                Archive Maps
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/collections/illustrated-landmarks"
                className="inline-flex items-center gap-2 border border-[hsl(30,18%,16%)] text-foreground px-7 py-3.5 text-sm font-body font-medium tracking-wide hover:bg-[hsl(30,18%,16%)] hover:text-[hsl(42,38%,96%)] transition-colors"
                prefetch={true}
              >
                Illustrated Landmarks
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* ── Two Main Collections ─────────────────────────────── */}
      <section className="py-section bg-background">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-body mb-3">Our Collections</p>
            <h2 className="font-heading text-h2 font-semibold text-foreground">Two ways to own a piece of England</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

            {/* Archive Maps */}
            <Link href="/collections/archive-maps" className="group block">
              <div className="relative overflow-hidden bg-[hsl(42,25%,91%)] aspect-[4/3]">
                {/* Decorative placeholder for archive maps */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 space-y-3">
                    <div className="w-16 h-16 mx-auto border border-accent/30 rounded-full flex items-center justify-center">
                      <MapPin className="h-7 w-7 text-accent/60" strokeWidth={1.5} />
                    </div>
                    <p className="font-heading text-lg italic text-foreground/50">Ordnance Survey · County Maps · Town Plans</p>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[hsl(30,18%,16%)]/0 group-hover:bg-[hsl(30,18%,16%)]/8 transition-colors duration-500" />
              </div>
              <div className="pt-5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-h3 font-semibold text-foreground">Archive Maps</h3>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  Restored historical Ordnance Survey maps, county surveys, town plans, and old engravings
                  sourced from public archives — cleaned up and formatted for modern printing.
                </p>
                <p className="text-xs font-body text-accent tracking-wide uppercase pt-1">From £5 digital · From £14 printed</p>
              </div>
            </Link>

            {/* Illustrated Landmarks */}
            <Link href="/collections/illustrated-landmarks" className="group block">
              <div className="relative overflow-hidden bg-[hsl(96,18%,88%)] aspect-[4/3]">
                {/* Decorative placeholder for illustrations */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 space-y-3">
                    <div className="w-16 h-16 mx-auto border border-[hsl(96,18%,42%)]/40 rounded-full flex items-center justify-center">
                      <svg className="h-7 w-7 text-[hsl(96,18%,42%)]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                      </svg>
                    </div>
                    <p className="font-heading text-lg italic text-foreground/50">Churches · Villages · Countryside · Fenland</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[hsl(30,18%,16%)]/0 group-hover:bg-[hsl(30,18%,16%)]/8 transition-colors duration-500" />
              </div>
              <div className="pt-5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-h3 font-semibold text-foreground">Illustrated Landmarks</h3>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  Original watercolour-style illustrations of English churches, village streets, and countryside
                  scenes — warm, cosy, rendered in a soft early 20th century book illustration style.
                </p>
                <p className="text-xs font-body text-accent tracking-wide uppercase pt-1">From £5 digital · From £14 printed</p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ── Dynamic Collection Sections ─────────────────────── */}
      {isLoading ? null : collections && collections.length > 0 ? (
        <>
          {collections.slice(0, 2).map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </>
      ) : null}

      {/* ── How It Works ────────────────────────────────────── */}
      <section className="py-section bg-[hsl(42,25%,91%)]">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-body mb-3">Formats &amp; Delivery</p>
            <h2 className="font-heading text-h2 font-semibold text-foreground">Own your print, your way</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 max-w-3xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto flex items-center justify-center border border-accent/30 bg-background/60">
                <Download className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-semibold text-foreground">Instant Download</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                High-resolution file delivered instantly. Print at home or send to a local printer. From £5.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto flex items-center justify-center border border-accent/30 bg-background/60">
                <Package className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-semibold text-foreground">A4 Physical Print</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                230gsm archival matte paper, posted flat in a hard-backed envelope within 2–3 working days. From £14.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto flex items-center justify-center border border-accent/30 bg-background/60">
                <Package className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-semibold text-foreground">A3 Physical Print</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                Larger format on the same archival paper, shipped in a sturdy cardboard tube. From £18.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About strip ─────────────────────────────────────── */}
      <section className="py-section border-y border-border/60">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-4xl mx-auto">
            {/* Decorative map-frame element */}
            <div className="aspect-[4/3] bg-[hsl(42,25%,91%)] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-4 border border-accent/20" />
              <div className="absolute inset-6 border border-accent/10" />
              <div className="text-center p-8 space-y-1 relative z-10">
                <p className="font-heading text-2xl italic text-accent/50">Cambridgeshire</p>
                <p className="font-heading text-base italic text-accent/30">Fens</p>
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="h-px w-4 bg-accent/20 inline-block" />
                  ))}
                </div>
                <p className="font-body text-xs text-muted-foreground/50 tracking-widest uppercase mt-3">Est. in love of place</p>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-body">About Fenland Press</p>
              <h2 className="font-heading text-h2 font-semibold text-foreground text-balance">
                Rooted in the English countryside
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                We are based in the Cambridgeshire Fens — one of England&rsquo;s most quietly beautiful
                and historically rich landscapes. Every map we sell is sourced from a public archive,
                carefully restored, and formatted for modern printing. Every illustration we produce
                is drawn from a real photograph of a real place.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                We specialise in Fenland and East Anglian heritage, but our collection covers the wider
                English countryside. If a place is worth knowing, we think it deserves to be on a wall.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-body font-medium text-foreground link-underline pb-0.5"
                prefetch={true}
              >
                Read our story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────────── */}
      <section className="py-section bg-[hsl(30,18%,16%)] text-[hsl(42,38%,96%)]">
        <div className="container-custom max-w-xl text-center">
          <div className="flex items-center justify-center gap-3 text-[hsl(38,45%,44%)]/60 mb-6">
            <span className="h-px w-10 bg-[hsl(38,45%,44%)]/40 inline-block" />
            <Mail className="h-4 w-4 flex-shrink-0 text-[hsl(38,45%,44%)]" strokeWidth={1.5} />
            <span className="h-px w-10 bg-[hsl(38,45%,44%)]/40 inline-block" />
          </div>
          <h2 className="font-heading text-h2 font-semibold text-[hsl(42,38%,96%)]">
            Join the list
          </h2>
          <p className="mt-3 font-body text-[hsl(42,25%,72%)] leading-relaxed">
            New maps and illustrations every month. Join the list and never miss a print.
          </p>

          {submitted ? (
            <div className="mt-8 py-4 border border-[hsl(38,45%,44%)]/30 text-[hsl(42,38%,96%)]">
              <p className="font-heading italic text-sm text-[hsl(38,45%,60%)]">
                Thank you — we&rsquo;ll be in touch.
              </p>
            </div>
          ) : (
            <form className="mt-8 flex gap-0" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 border border-[hsl(38,20%,35%)] bg-[hsl(30,18%,20%)] text-[hsl(42,38%,92%)] px-4 py-3 text-sm font-body placeholder:text-[hsl(42,10%,45%)] focus:border-[hsl(38,45%,44%)] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-[hsl(38,45%,44%)] text-[hsl(42,38%,96%)] px-6 py-3 text-sm font-body font-medium tracking-wide hover:bg-[hsl(38,45%,38%)] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-5 text-[10px] uppercase tracking-widest text-[hsl(42,10%,45%)] font-body">
            No spam. Unsubscribe any time.
          </p>
        </div>
      </section>

      {/* ── Trust bar ────────────────────────────────────────── */}
      <section className="py-7 border-b border-border/60">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Archival 230gsm Paper', sub: 'Museum-quality printing' },
              { label: 'UK Shipping Only', sub: 'Royal Mail, 2–3 working days' },
              { label: 'Instant Digital Downloads', sub: 'High-resolution files' },
              { label: '14-Day Returns', sub: 'If your print arrives damaged' },
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="text-sm font-body font-medium text-foreground">{item.label}</p>
                <p className="text-xs font-body text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Download, Package, Quote, Mail, MapPin, Gift } from 'lucide-react'
import ProductGrid from '@/components/product/product-grid'

const TESTIMONIALS = [
  {
    quote:
      'The 1888 Ordnance Survey map of Ely arrived beautifully packaged and the paper quality is exceptional. It is now framed in our hallway and everyone asks where we got it.',
    name: 'Sarah T.',
    location: 'Cambridge',
  },
  {
    quote:
      'I bought the watercolour illustration of St Wendreda\'s Church for my mother as a birthday gift. She was moved to tears — she has walked past that church her whole life and never seen it like this.',
    name: 'James H.',
    location: 'March, Cambridgeshire',
  },
  {
    quote:
      'The digital download was instant and the resolution is incredible. I had it printed at A2 at my local print shop and it looks stunning. Will definitely be ordering more.',
    name: 'Rachel M.',
    location: 'Norwich',
  },
]

export default function HomePage() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Hero ─── full-width, ~70vh ───────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[hsl(42,30%,93%)]" style={{ minHeight: '70vh' }}>
        {/* Atmospheric background — decorative parchment pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B6914' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6"
          style={{ minHeight: '70vh' }}
        >
          {/* Ornamental divider */}
          <div className="flex items-center gap-4 mb-6 text-accent/50">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-accent/40 inline-block" />
            <MapPin className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-accent/40 inline-block" />
          </div>

          <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground font-body mb-4">
            Cambridgeshire Fens &mdash; Est. in love of place
          </p>

          <h1
            className="font-heading font-semibold text-foreground text-balance leading-[1.08]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', maxWidth: '16ch' }}
          >
            Fenland Press
          </h1>

          <p
            className="font-heading italic text-accent mt-3"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)' }}
          >
            The places you love, made permanent.
          </p>

          <p className="mt-6 font-body text-muted-foreground leading-relaxed max-w-lg text-base">
            Vintage maps and original illustrations of the places you love.
            Sourced from the archives and drawn from real life.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="/collections/archive-maps"
              className="inline-flex items-center gap-2 bg-[hsl(30,18%,16%)] text-[hsl(42,38%,96%)] px-7 py-3.5 text-sm font-body font-medium tracking-wide hover:bg-[hsl(30,18%,22%)] transition-colors rounded-[2px]"
            >
              Browse Archive Maps
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/collections/illustrated-landmarks"
              className="inline-flex items-center gap-2 border border-[hsl(30,18%,16%)] text-foreground px-7 py-3.5 text-sm font-body font-medium tracking-wide hover:bg-[hsl(30,18%,16%)] hover:text-[hsl(42,38%,96%)] transition-colors rounded-[2px]"
            >
              Illustrated Landmarks
            </Link>
          </div>

          {/* Small trust line */}
          <p className="mt-10 text-[11px] uppercase tracking-[0.22em] text-muted-foreground/60 font-body">
            Archival matte prints &nbsp;·&nbsp; Instant digital downloads &nbsp;·&nbsp; UK shipping via Royal Mail
          </p>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* ── Two Collections ─────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">

            {/* Archive Maps */}
            <div className="group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-[hsl(42,25%,88%)] rounded-[3px]">
                {/* Decorative map placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-3 p-8">
                    <div className="grid grid-cols-3 gap-1 mb-4 opacity-20">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="h-6 bg-accent/60 rounded-sm" />
                      ))}
                    </div>
                    <p className="font-heading text-xl italic text-foreground/30">
                      Ordnance Survey · County Maps · Town Plans
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[hsl(30,18%,16%)]/0 group-hover:bg-[hsl(30,18%,16%)]/5 transition-all duration-500" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[hsl(42,38%,94%)]/90 text-[hsl(30,18%,16%)] text-[10px] uppercase tracking-widest font-body px-3 py-1.5">
                    Archive Maps &amp; Prints
                  </span>
                </div>
              </div>
              <div className="pt-5 flex flex-col flex-1">
                <h2 className="font-heading text-2xl font-semibold text-foreground">Archive Maps &amp; Prints</h2>
                <p className="mt-2 text-sm font-body text-muted-foreground leading-relaxed flex-1">
                  Original historical maps sourced from public archives and carefully restored.
                  Ordnance Survey sheets, county surveys, town plans, and old engravings — formatted for modern printing.
                </p>
                <div className="mt-5">
                  <Link
                    href="/collections/archive-maps"
                    className="inline-flex items-center gap-2 bg-[hsl(38,45%,44%)] text-[hsl(42,38%,96%)] px-6 py-2.5 text-sm font-body font-medium tracking-wide hover:bg-[hsl(38,45%,38%)] transition-colors rounded-[2px]"
                  >
                    Browse collection
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Illustrated Landmarks */}
            <div className="group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-[hsl(96,20%,88%)] rounded-[3px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-3 p-8">
                    <svg
                      className="w-16 h-16 mx-auto opacity-20 text-[hsl(96,25%,40%)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <p className="font-heading text-xl italic text-foreground/30">
                      Churches · Villages · Countryside · Fenland
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[hsl(30,18%,16%)]/0 group-hover:bg-[hsl(30,18%,16%)]/5 transition-all duration-500" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[hsl(42,38%,94%)]/90 text-[hsl(30,18%,16%)] text-[10px] uppercase tracking-widest font-body px-3 py-1.5">
                    Illustrated Landmarks
                  </span>
                </div>
              </div>
              <div className="pt-5 flex flex-col flex-1">
                <h2 className="font-heading text-2xl font-semibold text-foreground">Illustrated Landmarks</h2>
                <p className="mt-2 text-sm font-body text-muted-foreground leading-relaxed flex-1">
                  Warm watercolour illustrations of English churches, villages, and countryside scenes.
                  Soft greens and gentle ink outlines in the tradition of early 20th century English book art.
                </p>
                <div className="mt-5">
                  <Link
                    href="/collections/illustrated-landmarks"
                    className="inline-flex items-center gap-2 bg-[hsl(38,45%,44%)] text-[hsl(42,38%,96%)] px-6 py-2.5 text-sm font-body font-medium tracking-wide hover:bg-[hsl(38,45%,38%)] transition-colors rounded-[2px]"
                  >
                    Browse collection
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Featured Prints ─────────────────────────────────────────── */}
      <section className="py-20 bg-[hsl(42,25%,91%)]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground font-body mb-3">Our collection</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground">Hand-picked favourites</h2>
            <p className="mt-3 text-sm font-body text-muted-foreground max-w-md mx-auto">
              A selection from the archive. Browse the full collection for maps and illustrations of your area.
            </p>
          </div>
          <ProductGrid limit={8} />
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border border-[hsl(30,18%,16%)] text-foreground px-8 py-3 text-sm font-body font-medium tracking-wide hover:bg-[hsl(30,18%,16%)] hover:text-[hsl(42,38%,96%)] transition-colors rounded-[2px]"
            >
              View all prints
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── From the Archives ─── editorial left-right layout ───────── */}
      <section className="py-20 bg-[hsl(42,30%,93%)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Map texture image left */}
            <div className="relative aspect-[4/3] bg-[hsl(42,22%,85%)] overflow-hidden rounded-[3px]">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                {/* Decorative map grid */}
                <div className="w-full h-full relative opacity-30">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`h${i}`}
                      className="absolute w-full h-px bg-[hsl(38,45%,44%)]"
                      style={{ top: `${(i + 1) * 11}%` }}
                    />
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`v${i}`}
                      className="absolute h-full w-px bg-[hsl(38,45%,44%)]"
                      style={{ left: `${(i + 1) * 11}%` }}
                    />
                  ))}
                  <div className="absolute inset-4 border border-[hsl(38,45%,44%)] opacity-50" />
                  <div className="absolute inset-8 border border-[hsl(38,45%,44%)] opacity-30" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <p className="font-heading text-3xl italic text-[hsl(38,45%,44%)]/50">Cambridgeshire</p>
                  <p className="font-heading text-lg italic text-[hsl(38,45%,44%)]/35 mt-1">Survey of 1888</p>
                  <div className="w-16 h-px bg-accent/30 mt-3" />
                  <p className="font-body text-xs text-muted-foreground/40 tracking-widest uppercase mt-3">
                    Ordnance Survey
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[hsl(42,22%,82%)]/40 to-transparent" />
            </div>

            {/* Text right */}
            <div className="space-y-5 lg:max-w-md">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground font-body">
                The archive collection
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground text-balance">
                From the archives
              </h2>
              <div className="w-10 h-px bg-accent/40" />
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                We source original historical maps from publicly accessible collections — original Ordnance Survey
                sheets and county surveys dating back to the eighteenth and nineteenth centuries. Each one has
                been carefully cleaned and restored for modern printing.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                Owning one is like having a window into how the places we know once looked — the field boundaries
                that have since been ploughed under, the railways that ran and were closed, the village names
                that quietly changed over the years.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                Nothing is invented. Every line was drawn by a surveyor long before us. We simply bring them
                back into the light.
              </p>
              <Link
                href="/collections/archive-maps"
                className="inline-flex items-center gap-2 text-sm font-body font-medium text-foreground hover:text-accent transition-colors group"
              >
                Browse archive maps
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Drawn from Real Life ─── editorial right-left ────────────── */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text left */}
            <div className="space-y-5 lg:max-w-md order-2 lg:order-1">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground font-body">
                The illustration collection
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground text-balance">
                Drawn from real life
              </h2>
              <div className="w-10 h-px bg-accent/40" />
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                Each illustration is drawn from a real photograph of a real place and rendered in a warm
                English watercolour style inspired by early twentieth century book illustration. The soft
                greens and gentle ink outlines are designed to capture the quiet beauty of places that
                deserve to be on your wall.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                We specialise in Fenland and East Anglian subjects — village churches, market towns,
                drove roads, and fen horizons — but our collection is growing to cover the wider
                English countryside. New illustrations are added regularly.
              </p>
              <Link
                href="/collections/illustrated-landmarks"
                className="inline-flex items-center gap-2 text-sm font-body font-medium text-foreground hover:text-accent transition-colors group"
              >
                Browse illustrations
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Watercolour illustration placeholder right */}
            <div className="relative aspect-[4/3] bg-[hsl(96,18%,88%)] overflow-hidden rounded-[3px] order-1 lg:order-2">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-3">
                {/* Stylised church silhouette */}
                <svg
                  viewBox="0 0 120 100"
                  className="w-32 h-28 opacity-20 text-[hsl(96,25%,40%)]"
                  fill="currentColor"
                >
                  <rect x="40" y="40" width="40" height="50" rx="1" />
                  <polygon points="60,10 35,40 85,40" />
                  <rect x="55" y="60" width="10" height="20" rx="1" />
                  <rect x="48" y="48" width="8" height="8" rx="1" />
                  <rect x="64" y="48" width="8" height="8" rx="1" />
                </svg>
                <p className="font-heading text-xl italic text-[hsl(96,25%,40%)]/40">
                  St Mary&rsquo;s Church
                </p>
                <p className="font-heading text-sm italic text-foreground/25">Watercolour illustration</p>
              </div>
              {/* Colour wash overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(96,20%,88%)] via-transparent to-[hsl(42,30%,90%)] opacity-50" />
            </div>

          </div>
        </div>
      </section>

      {/* ── Formats & Delivery ─────────────────────────────────────── */}
      <section className="py-20 bg-[hsl(42,25%,91%)] border-y border-border/40">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground font-body mb-3">Formats &amp; delivery</p>
            <h2 className="font-heading text-3xl font-semibold text-foreground">Own your print, your way</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {[
              {
                icon: <Download className="h-6 w-6 text-accent" strokeWidth={1.5} />,
                title: 'Instant Download',
                desc: 'High-resolution PDF and JPEG, delivered immediately. Print at home or at any print shop. From £5.',
              },
              {
                icon: <Package className="h-6 w-6 text-accent" strokeWidth={1.5} />,
                title: 'A4 Physical Print',
                desc: '230gsm archival matte paper, posted flat in a hard-backed envelope. Dispatched in 2–3 working days. From £14.',
              },
              {
                icon: <Package className="h-6 w-6 text-accent" strokeWidth={1.5} />,
                title: 'A3 Physical Print',
                desc: 'Larger format on the same archival paper, shipped in a sturdy cardboard tube. From £18.',
              },
            ].map((item) => (
              <div key={item.title} className="space-y-3">
                <div className="w-12 h-12 mx-auto flex items-center justify-center border border-accent/30 bg-background/60 rounded-[2px]">
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground font-body mb-3">Kind words</p>
            <h2 className="font-heading text-3xl font-semibold text-foreground">What our customers say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-[hsl(42,25%,91%)] p-8 rounded-[3px] flex flex-col gap-5"
              >
                <Quote className="h-7 w-7 text-accent/50 flex-shrink-0" strokeWidth={1} />
                <p className="font-body text-sm text-foreground/80 leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gift note ──────────────────────────────────────────────── */}
      <section className="py-10 bg-[hsl(42,30%,93%)] border-y border-border/40">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <Gift className="h-6 w-6 text-accent flex-shrink-0" strokeWidth={1.5} />
          <p className="font-body text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Makes a perfect gift</span> for anyone with a
            connection to a place. Digital downloads can be ordered from anywhere in the world.
          </p>
          <Link
            href="/products"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-body font-medium text-foreground border border-foreground/30 px-5 py-2 hover:bg-foreground hover:text-background transition-colors rounded-[2px]"
          >
            Shop all prints
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[hsl(30,18%,16%)] text-[hsl(42,38%,96%)]">
        <div className="container-custom max-w-xl text-center">
          <div className="flex items-center justify-center gap-3 text-accent/50 mb-6">
            <span className="h-px w-10 bg-accent/30 inline-block" />
            <Mail className="h-4 w-4 flex-shrink-0 text-accent" strokeWidth={1.5} />
            <span className="h-px w-10 bg-accent/30 inline-block" />
          </div>
          <h2 className="font-heading text-3xl font-semibold text-[hsl(42,38%,96%)]">Join the list</h2>
          <p className="mt-3 font-body text-[hsl(42,20%,65%)] leading-relaxed text-sm">
            New maps and illustrations every month. Join the list and never miss a print.
          </p>

          {submitted ? (
            <div className="mt-8 py-5 border border-accent/30">
              <p className="font-heading italic text-sm text-accent">
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
                className="flex-1 border border-[hsl(38,20%,30%)] bg-[hsl(30,18%,20%)] text-[hsl(42,38%,92%)] px-4 py-3 text-sm font-body placeholder:text-[hsl(42,10%,40%)] focus:border-accent focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-accent text-[hsl(42,38%,96%)] px-6 py-3 text-sm font-body font-medium tracking-wide hover:bg-[hsl(38,45%,38%)] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
          <p className="mt-4 text-[10px] uppercase tracking-widest text-[hsl(42,10%,40%)] font-body">
            No spam. Unsubscribe any time.
          </p>
        </div>
      </section>
    </>
  )
}

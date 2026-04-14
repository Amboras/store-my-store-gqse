import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Package, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'We source original historical maps from public archives and produce original watercolour illustrations of real English landmarks. Based in the Cambridgeshire Fens.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="border-b border-border/60 bg-[hsl(42,30%,93%)]">
        <div className="container-custom py-section-sm text-center">
          <div className="flex items-center justify-center gap-3 text-accent/60 mb-4">
            <span className="h-px w-10 bg-accent/40 inline-block" />
            <MapPin className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} />
            <span className="h-px w-10 bg-accent/40 inline-block" />
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-body mb-3">Our Story</p>
          <h1 className="font-heading text-h1 font-semibold text-foreground">About Fenland Press</h1>
          <p className="mt-3 font-heading italic text-base text-accent/70 max-w-sm mx-auto">
            &ldquo;The places you love, made permanent.&rdquo;
          </p>
        </div>
      </div>

      <div className="container-custom py-section max-w-2xl">

        {/* Opening */}
        <div className="space-y-5 text-center mb-14">
          <p className="font-heading text-xl font-medium text-foreground leading-relaxed">
            We make prints of the places that matter — the quiet church at the end of a lane,
            the market town whose streets have barely changed in a century, the Fen horizon
            you drove past every morning for twenty years.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Some places get famous. Most don&rsquo;t. We think they deserve to be on a wall anyway.
          </p>
        </div>

        <hr className="border-border/60 mb-14" />

        {/* Two products explained */}
        <div className="grid sm:grid-cols-2 gap-10 mb-14">
          <div className="space-y-3">
            <h2 className="font-heading text-h3 font-semibold text-foreground">The Archive Maps</h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              We source original historical maps — Ordnance Survey sheets, county surveys, town plans,
              and old engravings — from public archives where they have been digitised and released
              into the public domain. We restore them carefully: removing foxing and deterioration,
              correcting colour balance, and formatting them for high-quality modern printing. Nothing
              is invented. Every line on the map was drawn by a surveyor or cartographer long before us.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="font-heading text-h3 font-semibold text-foreground">The Illustrations</h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Our watercolour-style illustrations are original works, each one drawn from a real photograph
              of a real place. The style is soft and unhurried — gentle ink outlines, washed-out greens,
              warm buttery yellows, in the manner of early 20th century English book illustration. We
              specialise in Fenland and East Anglian subjects, but our collection is growing to cover the
              wider English countryside: Norman churches, village streets, market crosses, and countryside
              scenes that could easily appear in a well-made book published a hundred years ago.
            </p>
          </div>
        </div>

        <hr className="border-border/60 mb-14" />

        {/* Where we are */}
        <div className="mb-14 space-y-4">
          <h2 className="font-heading text-h3 font-semibold text-foreground">Where we are</h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            We are based in the Cambridgeshire Fens — an area with a long and quietly remarkable history.
            The Fens were drained in the 17th century by Dutch engineers, transforming a vast inland sea into
            some of the most productive agricultural land in England. The landscape is flat, open, and
            haunting in a way that takes a while to understand. We think that&rsquo;s worth preserving.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Our speciality is Fenland and East Anglian heritage — Ely, Cambridge, the old market towns,
            the village churches, the long straight drove roads — but we cover the whole of England.
          </p>
        </div>

        <hr className="border-border/60 mb-14" />

        {/* Print quality */}
        <div className="mb-14 space-y-4">
          <h2 className="font-heading text-h3 font-semibold text-foreground">How we print</h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Every physical print is produced on 230gsm archival matte paper — the kind used in museum
            reproduction printing, not the thin stuff. Colours are accurate and rich. The paper has
            a slight texture that suits both maps and illustrations. Prints should last a lifetime
            if kept out of direct sunlight.
          </p>

          {/* Shipping detail boxes */}
          <div className="grid sm:grid-cols-2 gap-5 mt-6">
            <div className="border border-border/60 bg-muted/30 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-accent" strokeWidth={1.5} />
                <h3 className="font-body text-sm font-medium text-foreground">A4 Prints</h3>
              </div>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Posted flat in a hard-backed envelope. Dispatched within 2–3 working days via Royal Mail.
              </p>
            </div>
            <div className="border border-border/60 bg-muted/30 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-accent" strokeWidth={1.5} />
                <h3 className="font-body text-sm font-medium text-foreground">A3 Prints</h3>
              </div>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Shipped in a sturdy cardboard tube. Dispatched within 2–3 working days via Royal Mail.
              </p>
            </div>
            <div className="border border-border/60 bg-muted/30 p-5 space-y-2 sm:col-span-2">
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4 text-accent" strokeWidth={1.5} />
                <h3 className="font-body text-sm font-medium text-foreground">Digital Downloads</h3>
              </div>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                High-resolution files, delivered instantly after purchase. Print at home or use a local
                print shop for any size you like.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-border/60 mb-14" />

        {/* Tone / closing */}
        <div className="text-center space-y-5">
          <p className="font-body text-muted-foreground leading-relaxed">
            We are not a large operation. We do not have a warehouse or a customer service team.
            What we do have is a genuine interest in English local history, a careful eye for
            restoration work, and a straightforward way of doing things. If something goes wrong
            with your order — and occasionally things do — we will sort it out. That is a promise
            we can keep.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-body font-medium text-foreground link-underline pb-0.5"
          >
            Browse the collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </>
  )
}

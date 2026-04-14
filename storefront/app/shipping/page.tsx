import type { Metadata } from 'next'
import { Truck, RotateCcw, Download, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shipping & Delivery',
  description: 'How we ship your prints and what to do if something arrives damaged. UK shipping only via Royal Mail.',
}

export default function ShippingPage() {
  return (
    <>
      <div className="border-b border-border/60 bg-[hsl(42,30%,93%)]">
        <div className="container-custom py-section-sm text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-body mb-3">Delivery &amp; Returns</p>
          <h1 className="font-heading text-h1 font-semibold text-foreground">Shipping &amp; Delivery</h1>
        </div>
      </div>

      <div className="container-custom py-section max-w-2xl">
        <div className="space-y-14">

          {/* Digital downloads */}
          <section id="digital">
            <div className="flex items-center gap-3 mb-5">
              <Download className="h-5 w-5 text-accent flex-shrink-0" strokeWidth={1.5} />
              <h2 className="font-heading text-h3 font-semibold text-foreground">Digital Downloads</h2>
            </div>
            <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
              <p>
                Digital downloads are delivered instantly after your payment is confirmed. You will
                receive a link to your high-resolution file by email. Files are typically 300dpi JPEG or
                PDF — suitable for printing at any size you choose, at home or via a print shop.
              </p>
              <p>
                Digital files are priced from <strong className="text-foreground font-medium">£5</strong>.
                Locally specific prints of named towns and landmarks are priced towards the higher end of the range.
              </p>
              <p>
                If your download link does not arrive within a few minutes, check your spam folder.
                If it still has not arrived, please{' '}
                <a href="/contact" className="text-foreground underline underline-offset-2 hover:text-accent transition-colors">
                  contact us
                </a>{' '}
                and we will sort it out.
              </p>
            </div>
          </section>

          <hr className="border-border/60" />

          {/* Physical prints */}
          <section id="physical">
            <div className="flex items-center gap-3 mb-5">
              <Package className="h-5 w-5 text-accent flex-shrink-0" strokeWidth={1.5} />
              <h2 className="font-heading text-h3 font-semibold text-foreground">Physical Prints</h2>
            </div>
            <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
              <p>
                Every physical print is produced on <strong className="text-foreground font-medium">230gsm archival matte paper</strong> — the kind
                used in museum-quality reproduction printing. We do not cut corners on materials.
              </p>

              {/* Pricing table */}
              <div className="border border-border/60 overflow-hidden mt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50 border-b border-border/60">
                      <th className="text-left p-4 font-body font-medium text-foreground text-xs uppercase tracking-wide">Format</th>
                      <th className="text-left p-4 font-body font-medium text-foreground text-xs uppercase tracking-wide">Packaging</th>
                      <th className="text-left p-4 font-body font-medium text-foreground text-xs uppercase tracking-wide">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/60">
                      <td className="p-4 font-body text-foreground font-medium">A4 Print</td>
                      <td className="p-4 font-body text-muted-foreground">Posted flat in hard-backed envelope</td>
                      <td className="p-4 font-body text-foreground">£14–18</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-body text-foreground font-medium">A3 Print</td>
                      <td className="p-4 font-body text-muted-foreground">Shipped in sturdy cardboard tube</td>
                      <td className="p-4 font-body text-foreground">£18–25</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-2 text-xs text-muted-foreground italic font-body">
                Locally specific prints of named towns and landmarks are priced at the higher end of each range.
              </p>
            </div>
          </section>

          <hr className="border-border/60" />

          {/* Shipping */}
          <section id="shipping">
            <div className="flex items-center gap-3 mb-5">
              <Truck className="h-5 w-5 text-accent flex-shrink-0" strokeWidth={1.5} />
              <h2 className="font-heading text-h3 font-semibold text-foreground">Postage &amp; Delivery</h2>
            </div>
            <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
              <p>
                We ship <strong className="text-foreground font-medium">within the UK only</strong>. All physical
                prints are posted within <strong className="text-foreground font-medium">2–3 working days</strong> of
                your order being placed, via Royal Mail.
              </p>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60 flex-shrink-0 mt-1.5" />
                  <span>A4 prints are posted flat in a rigid hard-backed envelope to prevent bending.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60 flex-shrink-0 mt-1.5" />
                  <span>A3 prints are rolled and posted in a sturdy cardboard tube.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60 flex-shrink-0 mt-1.5" />
                  <span>You will receive a dispatch confirmation email when your order is posted.</span>
                </li>
              </ul>
              <p>
                We are a small operation, so occasionally dispatch may take an extra day during busy
                periods. If your print has not arrived within 10 working days of dispatch, please get
                in touch and we will investigate.
              </p>
            </div>
          </section>

          <hr className="border-border/60" />

          {/* Returns */}
          <section id="returns">
            <div className="flex items-center gap-3 mb-5">
              <RotateCcw className="h-5 w-5 text-accent flex-shrink-0" strokeWidth={1.5} />
              <h2 className="font-heading text-h3 font-semibold text-foreground">Returns</h2>
            </div>
            <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
              <p>
                We accept returns within <strong className="text-foreground font-medium">14 days</strong> if
                your print arrives damaged. If this happens, please take a photograph of the damaged item
                and packaging, and{' '}
                <a href="/contact" className="text-foreground underline underline-offset-2 hover:text-accent transition-colors">
                  contact us
                </a>{' '}
                within 14 days of receiving it. We will send a replacement at no extra cost.
              </p>
              <p>
                We do not accept returns for digital downloads once the file has been downloaded,
                as there is no practical way to return a digital file.
              </p>
              <p>
                We do not accept returns for physical prints simply because you changed your mind —
                but if something arrives damaged, we will always put it right. That is a straightforward
                promise.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

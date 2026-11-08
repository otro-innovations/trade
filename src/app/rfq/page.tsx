import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoLink } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Request for Quotation — Start a Sourcing Project',
  description:
    'Send a detailed RFQ to Trade OTRO: product, quantity, target price, Incoterm, destination port and timeline. Confidential B2B sourcing enquiry handled by a buyer-side representative in China.',
  path: '/rfq',
});

const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

const inputClass =
  'mt-1 w-full rounded-md border border-brand-mist bg-white px-3 py-2 text-brand-ink placeholder:text-brand-ink/35';

export default function RfqPage() {
  return (
    <>
      <Navbar links={NAV} ctaLabel="Talk to us" />
      <main id="main">
        <PageHero
          eyebrow="Request for quotation"
          title="Tell us what you are buying."
          lead="The more specific the brief, the faster we can return a costed, verified shortlist. Everything you send is treated as confidential and is never shared with a supplier without your instruction."
          tone="navy"
        />

        <Section
          eyebrow="Project brief"
          title="Sourcing enquiry"
          lead="Fields marked with an asterisk are required. If a detail is unknown — target price, for example — write “open” and we will benchmark it for you."
          tone="light"
        >
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <form action="/api/contact" method="POST" className="grid gap-8">
              <input type="hidden" name="source" value="rfq" />
              {/* Honeypot anti-spam field — named "website" so it cannot clash with the real company field. */}
              <input type="text" name="website" tabIndex={-1} aria-hidden="true" autoComplete="off" className="hidden" />

              <fieldset className="grid gap-4 sm:grid-cols-2">
                <legend className="mb-4 font-display text-xl font-bold text-brand-navy">Product &amp; volume</legend>
                <label className="block text-sm font-medium sm:col-span-2">
                  Product / category <span aria-hidden="true">*</span>
                  <input
                    required
                    name="product"
                    className={inputClass}
                    placeholder="e.g. Stainless steel insulated bottles, 500 ml, custom logo"
                  />
                </label>
                <label className="block text-sm font-medium">
                  Quantity <span aria-hidden="true">*</span>
                  <input
                    required
                    name="quantity"
                    className={inputClass}
                    placeholder="e.g. 5,000 units for a trial order"
                  />
                </label>
                <label className="block text-sm font-medium">
                  Target price
                  <input
                    name="target_price"
                    className={inputClass}
                    placeholder="e.g. USD 2.40/unit FOB, or “open”"
                  />
                </label>
                <label className="block text-sm font-medium sm:col-span-2">
                  Specification, materials, certification or packaging notes
                  <textarea
                    name="details"
                    rows={6}
                    required
                    className={inputClass}
                    placeholder="Dimensions, material grade, artwork status, required certifications (CE, FDA, REACH), retail packaging, labelling language, quality expectations."
                  />
                </label>
              </fieldset>

              <fieldset className="grid gap-4 sm:grid-cols-2">
                <legend className="mb-4 font-display text-xl font-bold text-brand-navy">Commercial terms</legend>
                <label className="block text-sm font-medium">
                  Incoterm <span aria-hidden="true">*</span>
                  <select required name="incoterm" defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Select…
                    </option>
                    <option value="FOB">FOB — Free On Board</option>
                    <option value="CIF">CIF — Cost, Insurance &amp; Freight</option>
                    <option value="DDP">DDP — Delivered Duty Paid</option>
                    <option value="EXW">EXW — Ex Works</option>
                    <option value="Other">Other / not sure</option>
                  </select>
                </label>
                <label className="block text-sm font-medium">
                  Destination country / port <span aria-hidden="true">*</span>
                  <input required name="destination" className={inputClass} placeholder="e.g. Hamburg, Germany" />
                </label>
                <label className="block text-sm font-medium sm:col-span-2">
                  Timeline
                  <input
                    name="timeline"
                    className={inputClass}
                    placeholder="e.g. sample by March, production ready within 8 weeks"
                  />
                </label>
              </fieldset>

              <fieldset className="grid gap-4 sm:grid-cols-2">
                <legend className="mb-4 font-display text-xl font-bold text-brand-navy">Your details</legend>
                <label className="block text-sm font-medium">
                  Company
                  <input name="company" autoComplete="organization" className={inputClass} />
                </label>
                <label className="block text-sm font-medium">
                  Your name <span aria-hidden="true">*</span>
                  <input required name="name" autoComplete="name" className={inputClass} />
                </label>
                <label className="block text-sm font-medium sm:col-span-2">
                  Email or phone <span aria-hidden="true">*</span>
                  <input required name="contact" autoComplete="email" className={inputClass} placeholder="Work email or WhatsApp number" />
                </label>
              </fieldset>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
                >
                  Submit RFQ
                </button>
                <p className="text-xs text-brand-ink/60">We reply within one business day (GMT+8), usually sooner.</p>
              </div>
            </form>

            <aside className="space-y-6">
              <div className="rounded-xl border border-brand-navy/10 bg-brand-mist/50 p-6">
                <h3 className="font-display text-lg font-bold text-brand-navy">What happens next</h3>
                <ol className="mt-4 space-y-3 text-sm text-brand-ink/80">
                  <li>
                    <span className="font-semibold text-brand-navy">1. Review.</span> We confirm feasibility against the
                    brief and ask only the questions that change the sourcing strategy.
                  </li>
                  <li>
                    <span className="font-semibold text-brand-navy">2. Scope and fee.</span> You receive a written scope,
                    timeline and fee before any billable work begins.
                  </li>
                  <li>
                    <span className="font-semibold text-brand-navy">3. Shortlist.</span> Verification and indicative
                    pricing follow, typically within two to four weeks.
                  </li>
                </ol>
              </div>

              <div className="rounded-xl border border-brand-amber/40 bg-brand-amber/10 p-6">
                <h3 className="font-display text-lg font-bold text-brand-navy">Confidentiality</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/80">
                  Your specifications, target prices, artwork and supplier names are treated as confidential commercial
                  information. We will sign an NDA on request before receiving technical drawings or branded artwork.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink/80">
                  Supplier-facing documents are released in stages, with your product identity removed until you approve
                  the shortlist.
                </p>
              </div>

              <div className="rounded-xl border border-brand-mist bg-white p-6">
                <h3 className="font-display text-lg font-bold text-brand-navy">Prefer to talk first?</h3>
                <p className="mt-2 text-sm text-brand-ink/80">
                  Email{' '}
                  <a className="underline decoration-brand-blue underline-offset-4" href={mailtoLink('Sourcing project')}>
                    {siteConfig.contactEmail}
                  </a>{' '}
                  with a short description and we will schedule a call.
                </p>
                <p className="mt-3 text-xs text-brand-ink/60">
                  Operated by {siteConfig.legalEntityName}, United States. A written engagement letter or purchase order
                  precedes all billable work.
                </p>
              </div>
            </aside>
          </div>
        </Section>
      </main>
      <Footer
        quickLinks={[
          { href: '/services', label: 'Services' },
          { href: '/rfq', label: 'Request a quote' },
          { href: '/faq', label: 'FAQ' },
        ]}
      />
    </>
  );
}

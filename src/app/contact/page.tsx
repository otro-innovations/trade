import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoLink } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Contact — Speak to a Sourcing Lead',
  description:
    'Contact Trade OTRO about China sourcing, factory audits, QC, logistics, negotiation or an existing supplier. Email, phone and enquiry form for global importers and wholesalers.',
  path: '/contact',
});

const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

const inputClass = 'mt-1 w-full rounded-md border border-brand-mist bg-white px-3 py-2 text-brand-ink';

export default function ContactPage() {
  return (
    <>
      <Navbar links={NAV} ctaLabel="Talk to us" />
      <main id="main">
        <PageHero
          eyebrow="Contact"
          title="Start a conversation with the sourcing desk."
          lead={`Email ${siteConfig.contactEmail} or send a message below. For a full brief with quantities, target price and Incoterm, use the RFQ form instead.`}
          tone="navy"
        />

        <Section
          eyebrow="Enquiry"
          title="Tell us what you need"
          lead="General enquiries are answered within one business day. Detailed sourcing questions may need a short call before we quote."
          tone="light"
        >
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <form action="/api/contact" method="POST" className="grid max-w-xl gap-4">
              <input type="hidden" name="source" value="contact" />
              {/* Honeypot anti-spam field — hidden from users and from autofill. */}
              <input type="text" name="website" tabIndex={-1} aria-hidden="true" autoComplete="off" className="hidden" />

              <label className="block text-sm font-medium">
                Name <span aria-hidden="true">*</span>
                <input required name="name" autoComplete="name" className={inputClass} />
              </label>
              <label className="block text-sm font-medium">
                Company
                <input name="company" autoComplete="organization" className={inputClass} />
              </label>
              <label className="block text-sm font-medium">
                Email or phone <span aria-hidden="true">*</span>
                <input required name="contact" autoComplete="email" className={inputClass} />
              </label>
              <label className="block text-sm font-medium">
                Service interest
                <select name="service" defaultValue="" className={inputClass}>
                  <option value="">Select…</option>
                  <option>Product Sourcing</option>
                  <option>Factory Audit / QC</option>
                  <option>Logistics &amp; Freight</option>
                  <option>Negotiation</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block text-sm font-medium">
                Message <span aria-hidden="true">*</span>
                <textarea required name="message" rows={5} className={inputClass} />
              </label>
              <button
                type="submit"
                className="w-fit rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
              >
                Send message
              </button>
              <p className="text-xs text-brand-ink/60">
                Prefer email?{' '}
                <a className="underline decoration-brand-blue underline-offset-4" href={mailtoLink('Website enquiry')}>
                  {siteConfig.contactEmail}
                </a>
                . Please do not send payment details or banking credentials through this form.
              </p>
            </form>

            <aside className="space-y-6">
              <div className="rounded-xl border border-brand-mist bg-brand-mist/40 p-6">
                <h3 className="font-display text-lg font-bold text-brand-navy">Direct contact</h3>
                <ul className="mt-4 space-y-3 text-sm text-brand-ink/80">
                  <li>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-brand-blue">Email</span>
                    <a className="underline decoration-brand-blue underline-offset-4" href={mailtoLink('Trade enquiry')}>
                      {siteConfig.contactEmail}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-brand-blue">Phone</span>
                    <a className="underline decoration-brand-blue underline-offset-4" href={`tel:${siteConfig.phone}`}>
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-brand-blue">Hours</span>
                    Monday to Friday, 09:00–18:00 (GMT+8). Messages received outside these hours are answered the next
                    business day.
                  </li>
                  <li>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-brand-blue">Entity</span>
                    {siteConfig.legalEntityName}, United States
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-brand-amber/40 bg-brand-amber/10 p-6">
                <h3 className="font-display text-lg font-bold text-brand-navy">Have a full brief?</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/80">
                  The RFQ form captures product, quantity, target price, Incoterm and destination in one pass — it saves a
                  round of questions and lets us price the assignment accurately.
                </p>
                <a
                  href="/rfq"
                  className="mt-4 inline-block rounded-md bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue"
                >
                  Go to the RFQ form
                </a>
              </div>
              <p className="text-xs leading-relaxed text-brand-ink/60">
                Enquiries are confidential. We do not add addresses to marketing lists, and supplier-facing documents are
                only released with your approval.
              </p>
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

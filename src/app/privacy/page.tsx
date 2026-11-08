import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoLink } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How Trade OTRO and OTRO INNOVATIONS LLC collect, use, share and retain personal and commercial information submitted through sourcing enquiries, RFQs and supplier documentation.',
  path: '/privacy',
});

const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar links={NAV} ctaLabel="Talk to us" />
      <main id="main">
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          lead={`How ${siteConfig.legalEntityName} handles the information you share with Trade OTRO, including sourcing briefs, supplier documentation and enquiry records.`}
          tone="navy"
        />

        <Section tone="light">
          <div className="max-w-3xl space-y-10 text-sm leading-relaxed text-brand-ink/80">
            <p className="text-xs uppercase tracking-wider text-brand-ink/50">Last updated: November 2026</p>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">1. Who we are</h2>
              <p>
                This website is operated by {siteConfig.legalEntityName}, a limited liability company organised in the
                United States, trading as {siteConfig.brandName}. For the purposes of applicable data-protection law,{' '}
                {siteConfig.legalEntityName} is the controller of the personal information described in this policy.
                Questions and requests can be sent to{' '}
                <a className="underline decoration-brand-blue underline-offset-4" href={mailtoLink('Privacy request')}>
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">2. Information we collect</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-brand-navy">Enquiry and RFQ data:</strong> name, company, role, email, telephone
                  or messaging handle, destination country or port, product descriptions, quantities, target prices,
                  Incoterms and timelines.
                </li>
                <li>
                  <strong className="text-brand-navy">Commercial and technical documents:</strong> specifications,
                  drawings, artwork, bills of material, test reports and supplier records that you choose to share with us
                  in the course of an engagement.
                </li>
                <li>
                  <strong className="text-brand-navy">Engagement records:</strong> correspondence, quotations, contracts,
                  inspection reports, invoices and payment confirmations.
                </li>
                <li>
                  <strong className="text-brand-navy">Technical data:</strong> IP address, browser type, referring page and
                  pages visited, collected through server logs and, where enabled, privacy-respecting analytics.
                </li>
              </ul>
              <p>
                We do not ask for payment card numbers, bank passwords or government identity documents through this
                website. Do not submit such information through the enquiry forms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">3. Why we use it</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>To respond to enquiries and prepare quotations or engagements you request.</li>
                <li>To perform sourcing, audit, inspection, logistics and order-management services.</li>
                <li>To communicate about active projects, changes, risks and documentation.</li>
                <li>To meet accounting, tax, record-keeping and legal obligations.</li>
                <li>To protect our legal rights and prevent fraud or misuse of our services.</li>
                <li>To improve the website and understand which services are relevant to visitors.</li>
              </ul>
              <p>
                Where data-protection law requires a legal basis, we rely on performance of a contract or steps taken at
                your request, our legitimate interests in operating a commercial sourcing practice, your consent where
                given, and compliance with legal obligations. We do not sell personal information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">4. Confidential commercial information</h2>
              <p>
                Product specifications, target prices, supplier identities and negotiated terms are treated as confidential
                commercial information. They are disclosed to a supplier only to the extent necessary to obtain a
                quotation or execute an order, and only after your instruction or as described in the engagement letter.
                Supplier-facing documents may be redacted to remove your identity until you approve a shortlist. We sign
                non-disclosure agreements on request.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">5. Sharing</h2>
              <p>We share information only where necessary, and only with:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Suppliers, factories and inspection providers engaged to quote or fulfil your order.</li>
                <li>Freight forwarders, customs brokers and logistics partners nominated for your shipment.</li>
                <li>Professional advisers, auditors and insurers bound by confidentiality obligations.</li>
                <li>Service providers such as email, hosting and accounting platforms processing data on our behalf.</li>
                <li>Authorities where disclosure is required by law, court order or a lawful regulatory request.</li>
              </ul>
              <p>
                We do not sell, rent or trade personal information, and we do not share your contact details with suppliers
                for their own marketing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">6. International transfers</h2>
              <p>
                Sourcing work is inherently cross-border: our operations are based in China and the United States, and
                suppliers and logistics partners may be located elsewhere. Information may therefore be processed in
                countries other than your own, including jurisdictions whose data-protection rules differ from yours.
                Where required, we use contractual safeguards and limit transfers to what the engagement requires.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">7. Retention</h2>
              <p>
                Enquiry records are retained for up to 24 months from the last contact, so that we can pick up a
                conversation without asking you to repeat yourself. Contract, inspection, invoice and customs records are
                retained for as long as required by applicable tax and commercial law, generally not less than seven
                years. Documents you ask us to delete, and which we are not legally required to keep, are removed within a
                reasonable period.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">8. Cookies and analytics</h2>
              <p>
                This website uses only the cookies necessary for it to function securely. If analytics are enabled, they
                are configured to collect aggregated usage data rather than to build advertising profiles, and
                non-essential cookies are set only where consent is required and given. You can block or delete cookies in
                your browser; essential functionality may be affected.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">9. Security</h2>
              <p>
                We apply reasonable technical and organisational measures: access control on commercial documents,
                encrypted transport for this website, and restricted internal sharing on a need-to-know basis. No method of
                transmission or storage is completely secure. If a breach affects your information and presents a risk to
                you, we will notify you and any relevant authority as required by law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">10. Your rights</h2>
              <p>
                Depending on where you live, you may have the right to request access to the personal information we hold
                about you, to correct it, to delete it, to restrict or object to certain processing, to receive a portable
                copy, or to withdraw consent. To exercise any of these rights, email{' '}
                <a className="underline decoration-brand-blue underline-offset-4" href={mailtoLink('Privacy request')}>
                  {siteConfig.contactEmail}
                </a>{' '}
                with enough detail for us to locate your records. We respond within the period required by applicable law
                and may need to verify your identity. You also have the right to complain to your local data-protection
                authority.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">11. Children</h2>
              <p>
                Our services are provided to businesses and are not directed at children. We do not knowingly collect
                personal information from anyone under 16 through this website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">12. Changes to this policy</h2>
              <p>
                We may update this policy to reflect changes in our services or the law. The revision date at the top of
                this page indicates the current version. Material changes affecting an active engagement will be
                communicated directly.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">13. Contact</h2>
              <p>
                {siteConfig.legalEntityName}
                <br />
                Email:{' '}
                <a className="underline decoration-brand-blue underline-offset-4" href={mailtoLink('Privacy request')}>
                  {siteConfig.contactEmail}
                </a>
                <br />
                Telephone: {siteConfig.phone}
              </p>
            </section>
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

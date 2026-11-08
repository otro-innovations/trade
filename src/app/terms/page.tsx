import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoLink } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Terms of Service',
  description:
    'Terms governing Trade OTRO sourcing, audit, inspection, logistics and order-management services: fees, client obligations, supplier relationships, confidentiality, liability limits and governing law.',
  path: '/terms',
});

const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

export default function TermsPage() {
  return (
    <>
      <Navbar links={NAV} ctaLabel="Talk to us" />
      <main id="main">
        <PageHero
          eyebrow="Legal"
          title="Terms of Service"
          lead={`These terms govern use of this website and the sourcing services provided by ${siteConfig.legalEntityName} under the ${siteConfig.brandName} division. Where a signed engagement letter or purchase order conflicts with these terms, the signed document prevails.`}
          tone="navy"
        />

        <Section tone="light">
          <div className="max-w-3xl space-y-10 text-sm leading-relaxed text-brand-ink/80">
            <p className="text-xs uppercase tracking-wider text-brand-ink/50">Last updated: November 2026</p>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">1. Scope of services</h2>
              <p>
                {siteConfig.legalEntityName} provides buyer-side sourcing and supply-chain services: supplier discovery and
                verification, factory audits, quality inspection, price negotiation, sampling coordination, freight
                coordination, Incoterms advisory, order management and documentation review. We act as your commercial
                representative in the supplier market. We are not a manufacturer, importer of record, customs broker,
                freight carrier, laboratory or law firm.
              </p>
              <p>
                Website content — including guides, comparison tables and FAQs — is general commercial information, not
                advice for a specific transaction. Engagements are defined in a written scope.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">2. Engagements, quotes and fees</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Fees are quoted in writing before billable work begins, using a fixed project fee, a monthly retainer or
                  a disclosed percentage of confirmed purchase-order value.
                </li>
                <li>
                  Third-party costs — laboratory testing, inspection travel, sample courier, freight, duties and bank
                  charges — are payable by the client and passed through at cost with supporting receipts unless expressly
                  included in the quote.
                </li>
                <li>
                  Quotations are valid for the period stated and are subject to supplier price validity, currency movement
                  and freight-rate changes outside our control.
                </li>
                <li>
                  Invoices are payable in the currency and within the period stated. Late payment may attract interest at
                  the rate stated in the engagement letter or, if none is stated, the maximum permitted by law.
                </li>
                <li>
                  We do not accept undisclosed commissions from suppliers. Any commission, rebate or benefit offered by a
                  supplier in connection with your order is disclosed and credited to you or declined.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">3. Your obligations</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Provide accurate specifications, quantities, compliance requirements and deadlines.</li>
                <li>Respond to approval requests — samples, artwork, inspection outcomes — within agreed timeframes.</li>
                <li>
                  Fund supplier deposits, balances and third-party costs in accordance with the agreed schedule. Supplier
                  payment obligations arise under your contract with the supplier unless we expressly agree otherwise in
                  writing.
                </li>
                <li>
                  Hold all licences, registrations and import permits required in your market, and comply with applicable
                  product-safety, labelling, sanctions and export-control law.
                </li>
                <li>Do not ask us to facilitate misdeclaration of value, origin, quantity or product description.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">4. Suppliers and no guarantee of performance</h2>
              <p>
                Suppliers are independent businesses. We verify, negotiate, document and inspect, but we do not control
                their production, financial condition, labour practices or delivery. We do not guarantee supplier
                performance, product fitness for a particular purpose, or that goods will be free of defects. Any warranty
                on goods is the supplier’s, as set out in the purchase contract, and we will assist you in pursuing it.
              </p>
              <p>
                Recommendations reflect our professional judgement at the time they are made. A factory audit is a
                point-in-time assessment, not a continuing certification, and it does not guarantee future compliance or
                capacity.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">5. Inspection is sampling</h2>
              <p>
                Unless a full inspection or laboratory protocol is expressly commissioned, quality inspection is performed
                on a sampling basis (typically ANSI/ASQ Z1.4 with agreed AQL levels). Sampling identifies risk; it cannot
                certify that every unit conforms. Inspection reports describe the lot examined at the time of inspection.
                Goods produced or altered after inspection, or damaged in transit, are outside the scope of that report.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">6. Intellectual property and confidentiality</h2>
              <p>
                You retain ownership of your trademarks, designs, specifications, artwork and tooling that you have paid
                for. You grant us a limited licence to use those materials solely to perform the engagement. We will sign a
                non-disclosure agreement on request and will restrict supplier disclosure to what is necessary to obtain a
                quotation or execute an order.
              </p>
              <p>
                We do not warrant that a supplier will not infringe third-party rights, and we are not responsible for
                independent copying by a supplier outside the scope of our documented controls. Clients with valuable
                intellectual property should register it in the relevant jurisdictions and instruct us on permitted
                disclosure.
              </p>
              <p>
                Our own methods, templates, reports, price benchmarks and supplier databases remain our property and may
                not be redistributed to third parties without written consent.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">7. Compliance, sanctions and export controls</h2>
              <p>
                You confirm that the goods and end-uses you ask us to source are lawful in your jurisdiction and are not
                destined for a sanctioned party, restricted end-use or embargoed territory. We may decline or suspend an
                engagement where a transaction appears to breach sanctions, export-control, anti-bribery or product-safety
                law, and we may be required to report certain requests. We do not make or facilitate improper payments to
                any person.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">8. Payments, refunds and cancellation</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Project fees are non-refundable once work has commenced, save where we fail to deliver the agreed scope.
                  Where an engagement is cancelled, fees are payable for work performed and commitments already incurred up
                  to the cancellation date.
                </li>
                <li>
                  Retainers are billed in advance for the period stated and may be terminated by either party with the
                  notice period in the engagement letter. Unused full months are not carried forward unless agreed.
                </li>
                <li>
                  Third-party costs already committed — laboratory bookings, inspection travel, freight deposits — are not
                  refundable by us.
                </li>
                <li>
                  Supplier deposits and balances are governed by your contract with the supplier. We assist with recovery
                  but do not underwrite supplier insolvency or default.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">9. Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, our total aggregate liability arising out of or in connection with
                an engagement is limited to the fees paid to us for that engagement in the six months preceding the event
                giving rise to the claim. We are not liable for indirect or consequential loss, including lost profit,
                lost revenue, loss of market share, goodwill, penalties under a customer contract, or the cost of
                substitute goods.
              </p>
              <p>
                Nothing in these terms excludes liability that cannot lawfully be excluded, including liability for fraud
                or wilful misconduct. Nothing in this section limits your own contractual remedies against a supplier.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">10. Indemnity</h2>
              <p>
                You agree to indemnify {siteConfig.legalEntityName} against claims, losses and reasonable legal costs
                arising from specifications, designs, trademarks or materials you supply, from your breach of these terms,
                or from goods that infringe third-party rights where the infringement results from your instructions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">11. Force majeure</h2>
              <p>
                Neither party is liable for delay or failure caused by events beyond reasonable control: natural disasters,
                epidemics, war, civil unrest, port closures, carrier failure, government action, power restrictions or
                industrial action at a supplier. Affected obligations are suspended for the duration of the event, and
                either party may terminate an affected engagement if the event continues beyond 60 days.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">12. Term, suspension and termination</h2>
              <p>
                Either party may terminate an engagement for material breach that remains uncured 14 days after written
                notice, or immediately on insolvency of the other party. We may suspend work where invoices are overdue or
                where continuing would require a breach of law. On termination, you remain liable for fees and third-party
                costs incurred up to that date, and we will hand over documents and records you have paid for.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">13. Governing law and disputes</h2>
              <p>
                These terms and any engagement are governed by the laws of the State in which {siteConfig.legalEntityName}{' '}
                is organised in the United States, without regard to conflict-of-laws rules, and by applicable United
                States federal law. The parties will first attempt to resolve any dispute through good-faith negotiation
                between senior representatives within 30 days of written notice. If unresolved, the dispute will be
                referred to binding arbitration seated in that State under the commercial rules of the American
                Arbitration Association, conducted in English. Each party bears its own costs unless the arbitrator decides
                otherwise. Nothing prevents either party from seeking urgent injunctive relief in a court of competent
                jurisdiction.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">14. Changes and severability</h2>
              <p>
                We may update these terms from time to time; the revision date above indicates the current version.
                Changes apply to new engagements and do not retroactively alter signed scopes. If a provision is held
                unenforceable, the remaining provisions continue in full force.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-navy">15. Contact</h2>
              <p>
                {siteConfig.legalEntityName}
                <br />
                Email:{' '}
                <a className="underline decoration-brand-blue underline-offset-4" href={mailtoLink('Terms enquiry')}>
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

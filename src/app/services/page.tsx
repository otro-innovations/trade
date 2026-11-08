import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoLink } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Sourcing Services — Discovery, Audits, QC, Negotiation & Freight',
  description:
    'Detailed B2B China sourcing services from Trade OTRO: supplier discovery, factory audits and AQL inspections, contract negotiation, sampling, freight forwarding, Incoterms advisory, order management and export documentation.',
  path: '/services',
});

const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar links={NAV} ctaLabel="Talk to us" />
      <main id="main">
        <PageHero
          eyebrow="Services"
          title="Procurement capability, bought by the assignment."
          lead="Eight services covering the full path from product idea to cleared shipment. Commission one, or run the entire sequence under a single accountable contact."
          tone="navy"
        >
          <Button href="/rfq" variant="secondary">
            Start a Sourcing Project
          </Button>
          <a
            href={mailtoLink('Service enquiry')}
            className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Ask a question
          </a>
        </PageHero>

        {/* 01 Sourcing */}
        <Section
          id="sourcing"
          eyebrow="01 · Product sourcing & supplier discovery"
          title="Find the factory, not the façade"
          tone="light"
        >
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-4 text-brand-ink/80">
              <p>
                We begin with a written category brief: specification, target landed cost, order volume, certification
                requirements and the date the goods must be on shelf. That brief drives the search, and it becomes the
                benchmark every supplier is measured against.
              </p>
              <p>
                Discovery is cluster-based. China’s manufacturing is geographically specialised, so we search the towns
                and industrial parks that actually produce your category rather than the first page of a B2B directory.
                Trading companies are identified and separated from factories — both can be valid, but you should know
                which one is quoting you.
              </p>
              <p>
                Every shortlisted supplier submits a factory profile with licence details, floor area, machinery list,
                workforce, main export markets and indicative FOB pricing. You receive a comparison table, not a
                forwarded catalogue.
              </p>
            </div>
            <aside className="rounded-xl border border-brand-mist bg-brand-mist/40 p-6">
              <h3 className="font-display text-lg font-bold text-brand-navy">What you receive</h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-ink/80">
                <li>Category brief and sourcing strategy</li>
                <li>Three to five verified supplier profiles</li>
                <li>Factory licence and export-record checks</li>
                <li>Indicative FOB pricing and MOQ per supplier</li>
                <li>Written recommendation with risk notes</li>
              </ul>
              <p className="mt-4 border-t border-brand-mist pt-4 text-xs text-brand-ink/60">
                Typical duration: 2–4 weeks. Fee: project-based quote confirmed before work starts.
              </p>
            </aside>
          </div>
        </Section>

        {/* 02 Audits & QC */}
        <Section id="audits" eyebrow="02 · Factory audits & quality control" title="Evidence before money moves" tone="mist">
          <div className="space-y-8">
            <p className="max-w-3xl text-brand-ink/80">
              Inspection is not a courtesy visit. It is the last point at which you still have leverage over the
              supplier’s balance payment. We run three distinct gates, each with a written report and photographic
              evidence, and each capable of stopping the order.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <Card title="Pre-production" badge="Gate 1">
                Raw materials, components, machinery readiness and the approved golden sample on the line. Catches
                substitution before labour is spent on the wrong inputs.
              </Card>
              <Card title="In-production" badge="Gate 2">
                Mid-run checks on workmanship, dimensions and packing method while correction is still cheap. Used on
                new suppliers, complex assemblies and tight deadlines.
              </Card>
              <Card title="Pre-shipment" badge="Gate 3">
                ANSI/ASQ Z1.4 AQL sampling on finished, packed goods: function, finish, labelling, carton drop and quantity.
                Report issued before balance payment is authorised.
              </Card>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="font-display text-lg font-bold text-brand-navy">Audit scope</h3>
                <ul className="mt-3 space-y-2 text-sm text-brand-ink/80">
                  <li>Legal entity, business licence and export rights</li>
                  <li>Factory floor, machinery and installed capacity</li>
                  <li>Workforce size, line organisation and shift pattern</li>
                  <li>Sub-contracting exposure and process outsourcing</li>
                  <li>Quality system, calibration and in-line records</li>
                  <li>Social and environmental red flags</li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-brand-navy">Report standard</h3>
                <ul className="mt-3 space-y-2 text-sm text-brand-ink/80">
                  <li>Defect classification: critical, major, minor</li>
                  <li>Sampling plan, lot size and accept/reject thresholds</li>
                  <li>Dated photographs and video walk-through</li>
                  <li>Corrective-action list with owner and deadline</li>
                  <li>Re-inspection outcome after rework</li>
                  <li>Third-party lab testing coordinated on request</li>
                </ul>
              </div>
            </div>
            <p className="max-w-3xl text-sm text-brand-ink/70">
              Inspection is sampling, not a 100% guarantee. Where a zero-defect outcome is commercially essential, we
              specify full inspection or a third-party lab protocol and quote it separately.
            </p>
          </div>
        </Section>

        {/* 03 Negotiation */}
        <Section
          id="negotiation"
          eyebrow="03 · Negotiation & contracting"
          title="Price is a structure, not a number"
          lead="A single unit price hides material grade, labour content, tooling amortisation, packaging and payment risk. We open the structure, then negotiate each line."
          tone="light"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Cost breakdown" badge="Analysis">
              Material, labour, overhead, tooling, packaging and freight separated and benchmarked against comparable
              suppliers in the same cluster.
            </Card>
            <Card title="Mandarin negotiation" badge="Language">
              Direct negotiation with the decision-maker, not a sales account manager. Concessions are traded for volume,
              payment terms or lead time — never given away.
            </Card>
            <Card title="Terms that hold" badge="Contract">
              MOQ, price validity, lead time, tolerances, packaging, warranty, penalty for late delivery and tooling
              ownership written into a bilingual purchase agreement.
            </Card>
            <Card title="Payment protection" badge="Risk">
              Deposit released only to a verified corporate account, against an invoice matching the contract. Never to a
              personal account, never on a chat-app instruction.
            </Card>
            <Card title="Quote normalisation" badge="Comparison">
              Every offer converted to FOB, CIF and DDP equivalents so the cheapest headline price is not mistaken for the
              cheapest landed cost.
            </Card>
            <Card title="Existing supplier review" badge="Benchmark">
              Independent audit and price benchmark of your current factory, with a written assessment of whether the
              relationship is still earning its place.
            </Card>
          </div>
          <p className="mt-8 max-w-3xl text-sm text-brand-ink/70">
            Contracts are prepared for your legal review. We are sourcing agents, not your lawyers, and we say so in
            writing before drafting begins.
          </p>
        </Section>

        {/* 04 Sampling */}
        <Section
          id="sampling"
          eyebrow="04 · Sampling & prototyping"
          title="Approve the sample that production will copy"
          lead="Most quality disputes trace back to an ambiguous sample. We turn the sample into a specification with measurable acceptance criteria."
          tone="mist"
        >
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-brand-ink/80">
              <p>
                Sampling runs in rounds: concept sample, revision sample, golden sample. Each round is measured against
                the written specification — dimensions, materials, colour references, tolerances, packaging and labelling
                — and each revision is documented so you can see exactly what changed and why.
              </p>
              <p>
                The approved golden sample is signed, dated and retained by both parties. It becomes the physical
                reference for pre-production and pre-shipment inspection, which is what makes an inspection opinion
                defensible rather than subjective.
              </p>
              <p>
                For tooling projects we agree mould ownership, amortisation and transfer conditions before the tool is
                cut — the point at which you still have negotiating leverage.
              </p>
            </div>
            <aside className="rounded-xl border border-brand-mist bg-white p-6">
              <h3 className="font-display text-lg font-bold text-brand-navy">Sampling deliverables</h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-ink/80">
                <li>Written specification and tolerance sheet</li>
                <li>Revision log with dated photographs</li>
                <li>Signed golden sample held by both parties</li>
                <li>Tooling ownership and amortisation terms</li>
                <li>Sample cost and courier tracking</li>
              </ul>
              <p className="mt-4 border-t border-brand-mist pt-4 text-xs text-brand-ink/60">
                Sample fees and courier costs are payable by the client and quoted before ordering. Some factories credit
                sample costs against the first production order — we negotiate that where possible.
              </p>
            </aside>
          </div>
        </Section>

        {/* 05 Logistics */}
        <Section
          id="logistics"
          eyebrow="05 · Logistics & freight forwarding"
          title="One schedule, from loading bay to your door"
          lead="Freight is where a good purchase order quietly becomes a bad one. We coordinate booking, consolidation, documentation and delivery as a single plan."
          tone="light"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="FCL & LCL" badge="Ocean">
              Full-container and less-than-container loads, with consolidation options when volumes do not justify a full
              box.
            </Card>
            <Card title="Air freight" badge="Urgent">
              For samples, launch stock and recovery shipments, with realistic transit expectations rather than
              optimistic ones.
            </Card>
            <Card title="Documentation" badge="Paperwork">
              Booking confirmations, bills of lading, packing lists and certificates checked against the commercial
              invoice before release.
            </Card>
            <Card title="Delivery coordination" badge="Last mile">
              Port-to-door handover with your nominated broker or ours, including delivery appointments and proof of
              delivery.
            </Card>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-mist bg-brand-mist/40 p-6">
              <h3 className="font-display text-lg font-bold text-brand-navy">How we quote freight</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/80">
                Freight is quoted as a range against a named origin, destination and Incoterm, valid for a stated period.
                Carrier surcharges, port congestion and seasonal rate spikes are passed through at cost with the carrier
                invoice attached. We do not mark up freight silently.
              </p>
            </div>
            <div className="rounded-xl border border-brand-mist bg-brand-mist/40 p-6">
              <h3 className="font-display text-lg font-bold text-brand-navy">What we do not do</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/80">
                We are not a licensed customs broker in your jurisdiction. Import declaration, duty calculation and market
                compliance remain with you and your broker unless a DDP scope is agreed in writing with a qualified
                partner.
              </p>
            </div>
          </div>
        </Section>

        {/* 06 Incoterms */}
        <Section
          id="incoterms"
          eyebrow="06 · Incoterms guidance"
          title="Choose the term that matches your risk appetite"
          lead="FOB, CIF, DDP and EXW allocate cost and risk differently. We explain the trade-off in your commercial terms, then quote each option so the decision is arithmetic."
          tone="mist"
        >
          <div className="overflow-x-auto rounded-xl border border-brand-mist bg-white">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <caption className="px-5 pt-5 text-left text-xs text-brand-ink/60">
                Incoterms 2020 comparison for China-origin shipments. The complete ICC rules prevail; this summary covers
                the four terms most common in importer contracts.
              </caption>
              <thead className="bg-brand-navy text-white">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Incoterm</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Seller pays</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Buyer pays</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Risk passes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-brand-mist align-top">
                  <th scope="row" className="px-5 py-4 font-semibold text-brand-navy">EXW</th>
                  <td className="px-5 py-4 text-brand-ink/80">Goods made available at the factory; no loading duty.</td>
                  <td className="px-5 py-4 text-brand-ink/80">
                    Loading, inland transport, export clearance, freight, insurance, duty, delivery.
                  </td>
                  <td className="px-5 py-4 text-brand-ink/80">At the factory, on availability.</td>
                </tr>
                <tr className="border-t border-brand-mist bg-brand-cream/40 align-top">
                  <th scope="row" className="px-5 py-4 font-semibold text-brand-navy">FOB</th>
                  <td className="px-5 py-4 text-brand-ink/80">Origin inland transport, export clearance, loading on board.</td>
                  <td className="px-5 py-4 text-brand-ink/80">Main carriage, insurance, import clearance, duty, delivery.</td>
                  <td className="px-5 py-4 text-brand-ink/80">On board at the origin port.</td>
                </tr>
                <tr className="border-t border-brand-mist align-top">
                  <th scope="row" className="px-5 py-4 font-semibold text-brand-navy">CIF</th>
                  <td className="px-5 py-4 text-brand-ink/80">Export clearance, freight to destination port, minimum insurance.</td>
                  <td className="px-5 py-4 text-brand-ink/80">Unloading, import clearance, duty, inland delivery.</td>
                  <td className="px-5 py-4 text-brand-ink/80">On board at the origin port — not at destination.</td>
                </tr>
                <tr className="border-t border-brand-mist bg-brand-cream/40 align-top">
                  <th scope="row" className="px-5 py-4 font-semibold text-brand-navy">DDP</th>
                  <td className="px-5 py-4 text-brand-ink/80">All costs to the named place, including duty and taxes.</td>
                  <td className="px-5 py-4 text-brand-ink/80">Unloading unless agreed otherwise; recoverable VAT.</td>
                  <td className="px-5 py-4 text-brand-ink/80">At the named destination, ready for unloading.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="/rfq" variant="primary">
              Request a quote with your Incoterm
            </Button>
            <Button href="/faq#incoterms" variant="ghost">
              Incoterm questions
            </Button>
          </div>
        </Section>

        {/* 07 Orders */}
        <Section
          id="orders"
          eyebrow="07 · End-to-end order management"
          title="One contact, one version of the truth"
          lead="Your order is tracked as a schedule, not a chat thread: dated milestones, named owners and written exceptions."
          tone="light"
        >
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-brand-ink/80">
              <p>
                Once the purchase order is placed, we hold the schedule. Production milestones are confirmed with dated
                evidence, changes are logged with their cost and schedule impact, and anything that threatens the delivery
                date is escalated while you can still change course.
              </p>
              <p>
                Balance payments are timed against inspection, not against the supplier’s reminder. Shipping documents are
                checked for consistency with the contract before release, because a mismatched invoice at the port is an
                expensive way to learn about a typo.
              </p>
              <p>
                After delivery we record supplier performance — defects, responsiveness, schedule reliability — and use it
                to decide whether the supplier earns the reorder.
              </p>
            </div>
            <aside className="rounded-xl border border-brand-mist bg-brand-mist/40 p-6">
              <h3 className="font-display text-lg font-bold text-brand-navy">Inside the engagement</h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-ink/80">
                <li>Weekly written status report</li>
                <li>Dated milestone and inspection calendar</li>
                <li>Change log with cost and schedule impact</li>
                <li>Payment release tied to inspection outcome</li>
                <li>Document pack checked before shipment</li>
                <li>Supplier scorecard after delivery</li>
              </ul>
              <p className="mt-4 border-t border-brand-mist pt-4 text-xs text-brand-ink/60">
                Available as a monthly retainer or scoped per order. Retainer terms are agreed in writing.
              </p>
            </aside>
          </div>
        </Section>

        {/* 08 Compliance */}
        <Section
          id="compliance"
          eyebrow="08 · Compliance & documentation"
          title="Paperwork that clears the first time"
          tone="mist"
        >
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-brand-ink/80">
              <p>
                Export documentation is checked as a set, not as individual files. The commercial invoice, packing list,
                bill of lading, certificate of origin and test reports must agree on description, quantity, value,
                weights and consignee details. Disagreement is what turns a routine clearance into a storage bill.
              </p>
              <p>
                We verify that the certification the supplier claims actually exists and covers the model you are
                importing — CE documentation, test reports, REACH or RoHS statements, food-contact declarations, FCC or
                FDA evidence where relevant. Where a claim cannot be substantiated, we say so before you ship.
              </p>
              <p>
                Destination-market responsibilities — product labelling, registration, importer of record obligations and
                market surveillance — sit with you or your appointed representative. We coordinate the evidence; we do not
                act as a regulatory consultant in your jurisdiction.
              </p>
            </div>
            <aside className="rounded-xl border border-brand-mist bg-white p-6">
              <h3 className="font-display text-lg font-bold text-brand-navy">Document checklist</h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-ink/80">
                <li>Commercial invoice and packing list</li>
                <li>Bill of lading or airway bill</li>
                <li>Certificate of origin</li>
                <li>Test reports and declaration of conformity</li>
                <li>Material and food-contact statements</li>
                <li>Inspection report and golden-sample record</li>
              </ul>
              <p className="mt-4 border-t border-brand-mist pt-4 text-xs text-brand-ink/60">
                Documentation review is included in order management and available as a standalone audit.
              </p>
            </aside>
          </div>
        </Section>

        {/* Pricing models */}
        <Section
          eyebrow="Fees"
          title="Three ways to engage, all disclosed upfront"
          lead="No supplier commissions are hidden inside your unit price. Every engagement is quoted in writing before billable work begins."
          tone="light"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            <Card title="Project fee" badge="Scoped">
              Fixed fee for a defined assignment: supplier shortlist, factory audit, inspection, document review or a
              one-off benchmark of an existing supplier.
            </Card>
            <Card title="Monthly retainer" badge="Ongoing">
              Continuous sourcing and order management across multiple SKUs and suppliers, with an agreed scope, response
              time and reporting cadence.
            </Card>
            <Card title="Disclosed success fee" badge="Order-based">
              A percentage of confirmed purchase-order value, agreed in writing. Supplier rebates are credited to you or
              declined, never quietly retained.
            </Card>
          </div>
          <div className="mt-8 rounded-xl border border-brand-mist bg-brand-mist/40 p-6">
            <h3 className="font-display text-lg font-bold text-brand-navy">Third-party costs</h3>
            <p className="mt-2 max-w-4xl text-sm leading-relaxed text-brand-ink/80">
              Lab tests, inspection travel, sample courier, freight and duties are billed at cost with the third-party
              receipt attached. Where a supplier offers a commission, rebate or gift, it is disclosed and credited against
              your invoice. If the fee model cannot be explained in one page, we have not explained it properly.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/rfq">Request a scoped quote</Button>
            <Button href="/contact" variant="ghost">
              Discuss a retainer
            </Button>
          </div>
          <p className="mt-6 text-sm text-brand-ink/70">
            Questions about terms, samples or inspection standards? Read the{' '}
            <a href="/faq" className="underline decoration-brand-blue underline-offset-4">
              FAQ
            </a>{' '}
            or email{' '}
            <a className="underline decoration-brand-blue underline-offset-4" href={mailtoLink('Services enquiry')}>
              {siteConfig.contactEmail}
            </a>
            .
          </p>
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

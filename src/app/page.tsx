import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer, { siblingHref } from '@/components/Footer';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoLink } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'China Sourcing, Factory Audits & Freight for Global Buyers',
  description:
    'Trade OTRO is a B2B China sourcing agency and your buyer-side representative in Asia: supplier discovery, factory audits and QC, negotiation, Incoterms guidance, freight and order management. A division of OTRO INNOVATIONS LLC (USA).',
  path: '/',
});

const SERVICES = [
  {
    slug: 'sourcing',
    title: 'Product sourcing & supplier discovery',
    body: 'A costed shortlist of manufacturers — not trading companies dressed as factories. We search the cluster, screen export records and capacity, then present three to five options with indicative FOB pricing.',
  },
  {
    slug: 'audits',
    title: 'Factory audits & quality control',
    body: 'Pre-production, in-production and pre-shipment inspections with AQL sampling, photo and video evidence, and corrective-action follow-up before balance payment leaves your account.',
  },
  {
    slug: 'negotiation',
    title: 'Negotiation & contracting',
    body: 'We negotiate in Mandarin against a costed target, compare quotes line by line, strip out padded tooling and freight, and put the agreed terms into a contract your lawyer can actually read.',
  },
  {
    slug: 'sampling',
    title: 'Sampling & prototyping',
    body: 'Spec sheets, golden samples, revision rounds and written approval gates — so mass production matches the approved sample, not the sales deck.',
  },
  {
    slug: 'logistics',
    title: 'Logistics & freight forwarding',
    body: 'FCL, LCL and air freight with named forwarders: booking, consolidation, export documentation, customs coordination and a single delivery schedule you can plan around.',
  },
  {
    slug: 'incoterms',
    title: 'Incoterms, explained plainly',
    body: 'Who pays for what, and where risk actually transfers. We advise on FOB, CIF, DDP and EXW — and quote every option so the comparison is commercial, not theoretical.',
  },
  {
    slug: 'orders',
    title: 'End-to-end order management',
    body: 'One accountable contact from purchase order to delivery: production tracking, change control, balance-payment timing, exception handling and weekly written status reports.',
  },
  {
    slug: 'compliance',
    title: 'Compliance & documentation',
    body: 'Commercial invoice, packing list, bill of lading, certificate of origin, test reports and destination-market evidence — checked for consistency before the container sails.',
  },
] as const;

const PROCESS = [
  {
    step: 'Discover',
    body: 'We start with a written brief: product specification, target landed cost, volume, certification needs and deadline. Ambiguity here is what costs money later.',
  },
  {
    step: 'Verify',
    body: 'Business licence, factory floor, machinery, capacity, export history, sub-contracting risk and references. Shortlisted suppliers are audited, not assumed.',
  },
  {
    step: 'Negotiate',
    body: 'Unit price broken into material, labour, tooling and packaging. MOQ, payment terms, lead time, warranty and penalties agreed in writing before any deposit.',
  },
  {
    step: 'Produce',
    body: 'Purchase order issued, deposit released against a verified account, production schedule confirmed and progress reported weekly with dated evidence.',
  },
  {
    step: 'Inspect',
    body: 'Pre-production sample sign-off, in-production checks and a pre-shipment inspection on AQL sampling. Defects trigger rework, replacement or renegotiation — not apologies.',
  },
  {
    step: 'Ship',
    body: 'Booking, consolidation, export clearance and documents. You receive the full set before the balance payment is authorised, with tracking to the named destination.',
  },
  {
    step: 'Support',
    body: 'Arrival checks, claim support, supplier scorecards and reorder planning. The relationship continues after the first container clears customs.',
  },
] as const;

const INDUSTRIES = [
  ['Consumer electronics', 'Chargers, audio, smart-home devices, phone accessories and OEM packaging.'],
  ['Home & kitchen', 'Cookware, storage, small appliances, tableware and decorative home goods.'],
  ['Apparel & textiles', 'Knitwear, denim, workwear, uniforms and home textiles with lab-test coordination.'],
  ['Furniture & fixtures', 'Indoor and outdoor furniture, lighting, sanitaryware and architectural hardware.'],
  ['Packaging & printing', 'Rigid boxes, labels, flexible pouches, displays and retail-ready presentation.'],
  ['Industrial & hardware', 'Fasteners, castings, machined parts, power tools and electrical components.'],
  ['Beauty & personal care', 'Formulation partners, primary packaging, devices and regulatory documentation.'],
  ['Outdoor, sports & pet', 'Fitness gear, camping equipment, cycling accessories and pet products.'],
] as const;

const OUTCOMES = [
  {
    title: 'Home & kitchen importer, European Union',
    body: 'A pre-shipment inspection rejected 18% of units on finish defects. We withheld balance payment, forced a rework cycle and re-sourced a second supplier in five weeks. Landed cost stayed within 4% of the original target.',
  },
  {
    title: 'Consumer electronics brand, United States',
    body: 'Eleven quotes were normalised to DDP for comparison. The exercise surfaced USD 0.42 per unit in unstated inland and duty assumptions; the client moved to FOB with a nominated forwarder and regained control of the freight margin.',
  },
  {
    title: 'Apparel wholesaler, Australia',
    body: 'Two factories were audited before deposits were paid. One was rejected for unauthorised sub-contracting; production moved to the second line with an approved golden sample and a revised inspection plan.',
  },
] as const;

const FAQ = [
  [
    'How quickly can you find suitable suppliers?',
    'A verified shortlist typically takes two to four weeks for established categories, longer where tooling or certification is involved. We confirm the timeline in writing after the brief and do not pad it to look fast.',
  ],
  [
    'How are your fees structured?',
    'Three models: a fixed project fee for sourcing, audit or inspection assignments; a monthly retainer for ongoing order management; or a disclosed success fee on confirmed purchase-order value. Third-party costs — lab tests, travel, freight — pass through at cost with receipts. We take no undisclosed supplier commission, and any rebate a factory offers is credited to you.',
  ],
  [
    'Do you guarantee that the factory will perform?',
    'No. We guarantee the quality of our work: verification, documented negotiation, contractual terms and inspection against an agreed standard. Supplier performance remains the supplier’s obligation, and we manage the claim when it falls short.',
  ],
  [
    'Can you work with a supplier we already use?',
    'Yes. We audit the existing relationship, benchmark the pricing against the market and either confirm you are well served or show you the gap in writing. Many clients start with a single benchmark before expanding scope.',
  ],
  [
    'What order sizes do you support?',
    'From trial orders and mixed-container consolidation to multi-container programmes. MOQ is set by the factory and by material minimums, so we negotiate trial quantities and MOQ breaks rather than pretending they do not exist.',
  ],
  [
    'Do you handle shipping and customs clearance?',
    'We coordinate freight, documentation and customs brokers to the port or door you nominate. Duty and import compliance remain the importer’s responsibility unless we agree a DDP scope in writing.',
  ],
  [
    'Which languages do you work in?',
    'English for all client communication and reporting, Mandarin for supplier negotiation, auditing and dispute resolution, and Bangla where the client base requires it.',
  ],
] as const;

const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

export default function HomePage() {
  return (
    <>
      <Navbar links={NAV} ctaLabel="Talk to us" />
      <main id="main">
        <PageHero
          eyebrow="B2B China sourcing · A division of OTRO INNOVATIONS LLC (USA)"
          title="De-risk China sourcing without opening an office in Asia."
          lead="Trade OTRO is the buyer-side representative that importers and wholesalers keep on retainer. We find the factory, verify it, hold the price, inspect the goods and move the freight — while you keep commercial control of the order."
          aside={
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <h2 className="font-display text-lg font-bold text-white">Engagement at a glance</h2>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-amber" />
                  Supplier shortlist in 2–4 weeks: three to five vetted factories, not a directory dump.
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-amber" />
                  Every quote normalised to FOB, CIF and DDP so margins are comparable.
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-amber" />
                  Pre-shipment inspection on ANSI/ASQ Z1.4 sampling, with photo and video evidence.
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-amber" />
                  Weekly written status reports from purchase order to delivery.
                </li>
              </ul>
              <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/55">
                Timelines depend on category and supplier readiness. Every estimate is confirmed in writing before
                billable work begins.
              </p>
            </div>
          }
        >
          <Button href="/rfq" variant="secondary">
            Start a Sourcing Project
          </Button>
          <Link
            href="/services"
            className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore services
          </Link>
        </PageHero>

        {/* The buying problem */}
        <Section
          eyebrow="Why buyers lose margin"
          title="The distance between a factory and a purchase order"
          lead="Most sourcing failures are not manufacturing failures. They are information failures: a supplier that was never verified, a price that was never decomposed, a container nobody inspected."
          tone="light"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            <Card title="The supplier that looked good on paper" badge="Verification">
              A polished profile and a fast quote are not evidence of capacity. Trading companies pass themselves off as
              factories; unauthorised sub-contracting moves your order to a workshop you never approved.
            </Card>
            <Card title="The quote that grew legs" badge="Negotiation">
              Freight, tooling, packaging and inland charges arrive after the unit price is agreed. Without a costed
              breakdown and a written contract, the landed cost is whatever the supplier says it is.
            </Card>
            <Card title="The container nobody checked" badge="Inspection">
              Balance payment released against a photo of a sample wall. The defect rate is discovered at the port, when
              your leverage is already gone and the season is already late.
            </Card>
          </div>
        </Section>

        {/* Eight services */}
        <Section
          id="services"
          eyebrow="Capabilities"
          title="Eight disciplines, one accountable partner"
          lead="Each service can be bought on its own. Run them together and you have a procurement department in Asia — without the headcount, the entity or the expat package."
          tone="mist"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => (
              <Card
                key={service.slug}
                href={`/services#${service.slug}`}
                title={service.title}
                badge={String(index + 1).padStart(2, '0')}
              >
                {service.body}
              </Card>
            ))}
          </div>
          <p className="mt-8 text-sm text-brand-ink/70">
            Not sure which service you need? Send the product and target price — we will tell you what the assignment
            actually requires, including when the answer is “no engagement needed”.
          </p>
        </Section>

        {/* Incoterms table */}
        <Section
          id="incoterms"
          eyebrow="Incoterms 2020"
          title="Who pays, and where risk moves"
          lead="Incoterms decide two separate things: which costs each party carries, and the exact point at which risk transfers. Confusing the two is how importers discover, too late, that CIF does not transfer risk at the destination port."
          tone="light"
        >
          <div className="overflow-x-auto rounded-xl border border-brand-mist bg-white">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <caption className="px-5 pt-5 text-left text-xs text-brand-ink/60">
                Summary of four Incoterms 2020 rules frequently used in China export trade. The full ICC rules govern in
                all cases; this table is a comparison aid, not a substitute for the contract.
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
                  <th scope="row" className="px-5 py-4 font-semibold text-brand-navy">
                    EXW — Ex Works
                  </th>
                  <td className="px-5 py-4 text-brand-ink/80">
                    Making the goods available at the factory. No loading obligation.
                  </td>
                  <td className="px-5 py-4 text-brand-ink/80">
                    Loading, inland transport, export clearance, freight, insurance, import duty, final delivery.
                  </td>
                  <td className="px-5 py-4 text-brand-ink/80">
                    At the factory, once goods are placed at the buyer’s disposal.
                  </td>
                </tr>
                <tr className="border-t border-brand-mist bg-brand-cream/40 align-top">
                  <th scope="row" className="px-5 py-4 font-semibold text-brand-navy">
                    FOB — Free On Board
                  </th>
                  <td className="px-5 py-4 text-brand-ink/80">
                    Inland carriage to the named origin port, export clearance and loading on board.
                  </td>
                  <td className="px-5 py-4 text-brand-ink/80">
                    Main carriage, marine insurance, import clearance, duty and inland delivery.
                  </td>
                  <td className="px-5 py-4 text-brand-ink/80">
                    Once goods are on board the vessel at the origin port.
                  </td>
                </tr>
                <tr className="border-t border-brand-mist align-top">
                  <th scope="row" className="px-5 py-4 font-semibold text-brand-navy">
                    CIF — Cost, Insurance &amp; Freight
                  </th>
                  <td className="px-5 py-4 text-brand-ink/80">
                    Export clearance, main carriage to the destination port and minimum-cover marine insurance.
                  </td>
                  <td className="px-5 py-4 text-brand-ink/80">
                    Unloading, import clearance, duty, inland delivery and any cover beyond the minimum.
                  </td>
                  <td className="px-5 py-4 text-brand-ink/80">
                    At the origin port, on board — the same point as FOB, despite the seller paying freight.
                  </td>
                </tr>
                <tr className="border-t border-brand-mist bg-brand-cream/40 align-top">
                  <th scope="row" className="px-5 py-4 font-semibold text-brand-navy">
                    DDP — Delivered Duty Paid
                  </th>
                  <td className="px-5 py-4 text-brand-ink/80">
                    Everything to the named place: export, freight, import clearance, duty, taxes and delivery.
                  </td>
                  <td className="px-5 py-4 text-brand-ink/80">
                    Unloading at destination unless the contract says otherwise; any VAT recoverable in the buyer’s name.
                  </td>
                  <td className="px-5 py-4 text-brand-ink/80">
                    At the named destination, ready for unloading.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <p className="text-sm leading-relaxed text-brand-ink/70">
              <strong className="text-brand-navy">Our default advice:</strong> buy FOB when you want control of freight
              and a clean cost comparison. Use CIF when the supplier genuinely has better freight rates and you accept
              that risk still transfers in China. Use DDP only when the seller can evidence import compliance in your
              market — otherwise the duty is either under-declared or over-charged.
            </p>
            <p className="text-sm leading-relaxed text-brand-ink/70">
              <strong className="text-brand-navy">EXW is rarely the bargain it looks like:</strong> you inherit export
              clearance in China. For most first-time importers, FOB is the lower-risk starting point.
            </p>
          </div>
        </Section>

        {/* Seven-step process */}
        <Section
          id="process"
          eyebrow="How we work"
          title="Seven steps from brief to delivery"
          lead="A repeatable sequence with a decision gate at every stage. Nothing moves to the next step until the previous one is evidenced."
          tone="mist"
        >
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item, index) => (
              <li key={item.step} className="rounded-xl border border-brand-mist bg-white p-6 shadow-sm">
                <p className="font-display text-3xl font-bold text-brand-blue/30" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-brand-navy">{item.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/80">{item.body}</p>
              </li>
            ))}
            <li className="flex flex-col justify-center rounded-xl border border-dashed border-brand-blue/30 bg-brand-mist/50 p-6">
              <h3 className="font-display text-lg font-bold text-brand-navy">A gate at every step</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/80">
                Deposit released only after verification. Balance released only after inspection. Documents released
                before payment. Each gate is documented in writing.
              </p>
            </li>
          </ol>
        </Section>

        {/* Trust */}
        <Section
          eyebrow="Why us"
          title="Accountability that survives due diligence"
          lead="A sourcing agent is only useful if you can hold them to something. Here is exactly what stands behind the work."
          tone="light"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="US-structured entity" badge="Contract">
              Contracts, invoices and correspondence come from {siteConfig.legalEntityName}, a US LLC — not an anonymous
              WeChat contact. Disputes have a legal counterparty.
            </Card>
            <Card title="Founder-led procurement" badge="Experience">
              Our founder worked in sourcing and logistics at Annex Cargo, holds C1-level English and currently operates
              from China as an international postgraduate researcher.
            </Card>
            <Card title="Mandarin-capable operations" badge="Language">
              Negotiation, factory audits and the uncomfortable conversations happen in Mandarin, then get written up in
              English you can forward to your board.
            </Card>
            <Card title="No hidden commission" badge="Fees">
              Our fee is agreed in writing before work starts. Supplier rebates are disclosed and credited to you. If a
              factory will not work on transparent terms, we do not place the order there.
            </Card>
          </div>
          <div className="mt-8 rounded-xl border border-brand-amber/40 bg-brand-amber/10 p-6">
            <h3 className="font-display text-lg font-bold text-brand-navy">The no-hidden-commission model, in detail</h3>
            <p className="mt-2 max-w-4xl text-sm leading-relaxed text-brand-ink/80">
              Traditional agents are paid by the factory, which means their incentive is to place the order, not to place
              it well. We invert that. You pay us directly — project fee, retainer or a disclosed percentage of confirmed
              order value — and any commission, rebate or gift a supplier offers is either credited to your invoice or
              declined. Inspection and lab costs are billed at cost with the third-party receipt attached. If we cannot
              justify a line on the invoice, it does not belong there.
            </p>
          </div>
        </Section>

        {/* Industries */}
        <Section
          eyebrow="Categories"
          title="Where we have the deepest supplier networks"
          lead="China’s manufacturing is organised by cluster: one town makes the lighting, another makes the casters. Knowing which cluster to search is most of the sourcing advantage."
          tone="mist"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map(([title, body]) => (
              <Card key={title} title={title}>
                {body}
              </Card>
            ))}
          </div>
          <p className="mt-8 text-sm text-brand-ink/70">
            Category not listed? Most products move through the same verification and inspection process. Send the
            specification and we will confirm feasibility before quoting.
          </p>
          <div className="mt-6">
            <Card href={siblingHref('tours')} title="Sourcing trips to China" badge="OTRO Tours">
              Need to visit the factory, attend Canton Fair or walk the Yiwu markets yourself? Our sister division handles
              visas, hotels, interpreters and fair transfers.
            </Card>
          </div>
        </Section>

        {/* Outcomes */}
        <Section
          eyebrow="Engagement snapshots"
          title="What the work looks like when it lands"
          lead="Representative engagement outlines from our sourcing and inspection practice. Client names and exact commercial figures are withheld; verified references are available under NDA where a client has consented."
          tone="light"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            {OUTCOMES.map((outcome) => (
              <Card key={outcome.title} title={outcome.title} badge="Engagement outline">
                {outcome.body}
              </Card>
            ))}
          </div>
          <p className="mt-6 text-xs text-brand-ink/60">
            These are illustrative summaries of typical assignments, not paid endorsements. Outcome figures depend on
            category, volume and supplier behaviour.
          </p>
        </Section>

        {/* FAQ */}
        <Section
          eyebrow="FAQ"
          title="Questions serious buyers ask"
          lead="Commercial answers, including the ones that are inconvenient."
          tone="mist"
        >
          <div className="max-w-3xl space-y-4">
            {FAQ.map(([question, answer]) => (
              <details key={question} className="rounded-lg border border-brand-mist bg-white p-4">
                <summary className="cursor-pointer font-semibold text-brand-navy">{question}</summary>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/80">{answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/faq" variant="ghost">
              Read the full FAQ
            </Button>
          </div>
        </Section>

        {/* Final CTA */}
        <Section
          eyebrow="Start here"
          title="Bring us the product, the target price and the deadline."
          lead="We will tell you within two working days whether the target is realistic, what verification is required, and what the engagement would cost."
          tone="navy"
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/rfq" variant="secondary">
              Start a Sourcing Project
            </Button>
            <Link
              href="/contact"
              className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Book an introductory call
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Prefer email? Write to{' '}
            <a className="underline decoration-brand-amber underline-offset-4 hover:text-white" href={mailtoLink('Sourcing enquiry')}>
              {siteConfig.contactEmail}
            </a>
            . Details shared with us are treated as confidential.
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

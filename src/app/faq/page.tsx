import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoLink } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'B2B Sourcing FAQ — MOQ, Payment Terms, QC, Shipping, Fees & IP',
  description:
    'Straight answers for importers: how MOQs and payment terms work in China, what AQL inspection covers, shipping times, how our fees are structured, sample costs, IP protection and choosing an Incoterm.',
  path: '/faq',
});

const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

const GROUPS = [
  {
    id: 'commercial',
    eyebrow: 'Commercial terms',
    title: 'MOQ, payment and suppliers',
    items: [
      {
        id: 'moq',
        q: 'What is a realistic minimum order quantity?',
        a: 'MOQ is set by the factory, not by us, and it usually comes from two constraints: material minimums (a mill may not run less than a tonne of a particular film or yarn) and line setup time. For most consumer goods, 500–1,000 units is a common starting point, but electronics, custom packaging and tooled products often start higher. We negotiate trial quantities, MOQ breaks and mixed-SKU containers rather than pretending the constraint does not exist. Where a low MOQ is genuinely unavailable, the honest answer is that the product is not ready for small-volume importing yet.',
      },
      {
        id: 'payment',
        q: 'What payment terms should I expect with a Chinese supplier?',
        a: 'The most common structure is a 30% deposit with the 70% balance before shipment, released after a satisfactory inspection. Larger or repeat orders can move to 20/80, net terms or a letter of credit. Platform escrow (for example Trade Assurance on Alibaba) adds a layer of recourse for smaller orders at the cost of a fee. Two rules are non-negotiable in our engagements: the deposit goes to a corporate account whose name matches the contract, and payment is never made on the strength of a chat-app instruction. We verify banking details by an independent channel before any transfer.',
      },
      {
        id: 'existing-supplier',
        q: 'Can you audit or benchmark a supplier we already use?',
        a: 'Yes, and it is one of the most useful low-commitment engagements we offer. We audit the factory, reconcile the quoted price against the current market for the same specification, and report in writing whether you are well served. Sometimes the answer is that your existing supplier is competitive and the right move is to leave the relationship alone. We would rather tell you that than manufacture a reason to switch.',
      },
      {
        id: 'currency',
        q: 'How are you invoiced, and in which currency?',
        a: `Fees are invoiced by ${siteConfig.legalEntityName} in USD, with international bank transfer or card payment as agreed in the engagement letter. Supplier payments are made in RMB or USD depending on the supplier’s export structure. Third-party costs — lab tests, travel, courier, freight — are billed at cost with the vendor receipt attached.`,
      },
    ],
  },
  {
    id: 'quality',
    eyebrow: 'Quality & production',
    title: 'Inspection, samples and claims',
    items: [
      {
        id: 'inspection',
        q: 'What standard do your inspections follow?',
        a: 'Pre-shipment inspection uses ANSI/ASQ Z1.4 sampling with AQL levels agreed before production — typically critical 0, major 2.5 and minor 4.0 for consumer goods, tightened for regulated categories. The report classifies defects, states lot size and sampling plan, and includes dated photographs and video. Inspection is a sampling method, not a 100% guarantee; where zero defects are essential we quote full inspection or a third-party laboratory protocol separately. Factory audits cover legal entity, capacity, machinery, sub-contracting exposure and quality-system records.',
      },
      {
        id: 'samples',
        q: 'How do samples work and who pays for them?',
        a: 'Sample fees and courier costs are payable by the client and quoted before ordering. Stock samples are usually inexpensive; custom samples with tooling or new artwork can run into the hundreds of dollars. Many factories credit part or all of the sample cost against the first production order, and we negotiate that where leverage allows. Each revision round is logged against the written specification, and the approved golden sample is signed and dated by both parties.',
      },
      {
        id: 'claims',
        q: 'What happens if the goods arrive defective?',
        a: 'If the defect was identifiable at inspection, we should have caught it and will manage the rework before shipment. If a problem emerges after arrival, we assemble the evidence — inspection report, golden sample, photographs, quantity affected — and pursue the contractual remedy with the supplier: replacement, credit, repair contribution or return. We do not guarantee supplier performance; we guarantee that the contract, inspection record and claim file give you a real basis to enforce it.',
      },
      {
        id: 'tooling',
        q: 'Who owns the mould or tooling we pay for?',
        a: 'You do, if the contract says so — and it must. Tooling ownership, amortisation, maintenance responsibility and transfer conditions are agreed in writing before the tool is cut. We record the tool’s location, the amount you paid and the conditions under which it can be moved to another factory. Tooling disputes are common precisely because buyers accept a verbal assurance at this stage.',
      },
    ],
  },
  {
    id: 'logistics',
    eyebrow: 'Logistics & Incoterms',
    title: 'Shipping, risk and paperwork',
    items: [
      {
        id: 'shipping',
        q: 'How long does shipping take from China?',
        a: 'Production typically runs 30–60 days after sample approval and deposit, longer for complex assemblies or peak-season capacity crunches. Ocean freight is commonly 25–40 days port to port for full containers, and 30–50 days for LCL with consolidation. Air freight is roughly 5–10 days door to door depending on routing. Add customs clearance and inland delivery at destination. We quote transit as a range against a named port and date, not as a single optimistic number.',
      },
      {
        id: 'incoterms',
        q: 'Which Incoterm should I choose — FOB, CIF, DDP or EXW?',
        a: 'FOB is our default recommendation for importers who want control: the supplier handles origin costs and export clearance, you control freight and insurance, and quotes are easy to compare. CIF looks convenient because the supplier arranges freight, but risk still transfers on board at the origin port — paying for freight does not move the risk. DDP is comfortable only when the seller can evidence genuine import compliance in your market; otherwise duty is either under-declared or over-charged. EXW leaves you responsible for export clearance inside China, which is rarely the bargain it appears to be.',
      },
      {
        id: 'documents',
        q: 'Who prepares export documentation?',
        a: 'The supplier issues the commercial invoice, packing list and certificate of origin; the freight forwarder issues the bill of lading or airway bill. We reconcile the full set against the contract — description, quantity, value, weights, consignee — before documents are released and before balance payment is authorised. Documentation review is included in order management and available as a standalone audit.',
      },
      {
        id: 'customs',
        q: 'Do you handle customs clearance and duty in my country?',
        a: 'We coordinate with your broker or a nominated partner, but we are not a licensed customs broker in your jurisdiction. Import declaration, duty, VAT and product-market compliance remain your responsibility as importer of record, unless a DDP scope is agreed in writing with a qualified partner. What we do provide is a document pack that is internally consistent, which is the most common cause of clearance delay.',
      },
    ],
  },
  {
    id: 'engagement',
    eyebrow: 'Fees & engagement',
    title: 'Cost, confidentiality and scope',
    items: [
      {
        id: 'fees',
        q: 'How are your fees structured?',
        a: 'Three models, all disclosed before billable work starts: a fixed project fee for a defined assignment (shortlist, audit, inspection, document review); a monthly retainer for ongoing sourcing and order management; or a success fee calculated as a disclosed percentage of confirmed purchase-order value. Third-party costs pass through at cost with receipts. We take no undisclosed supplier commission, and any rebate offered by a factory is credited to your invoice or declined. If a supplier will not operate on transparent terms, we do not place the order there.',
      },
      {
        id: 'ip',
        q: 'How do you protect our designs and intellectual property?',
        a: 'We sign an NDA before receiving drawings or artwork, release supplier-facing documents in stages with your identity removed until the shortlist is approved, and put IP, tooling and confidentiality clauses into the purchase agreement. We also vet suppliers for sub-contracting, which is where most design leakage occurs. No agent can offer an absolute guarantee against copying; buyers with valuable IP should also register the trademark and, where relevant, the design in China, and we will coordinate that with local counsel.',
      },
      {
        id: 'confidentiality',
        q: 'Is our enquiry confidential?',
        a: 'Yes. Specifications, target prices, supplier names and commercial terms are treated as confidential commercial information and are not shared with suppliers beyond what is necessary to obtain a quote. We do not publish client names or case details without written consent, which is why our engagement snapshots are anonymised.',
      },
      {
        id: 'guarantee',
        q: 'Do you guarantee that the factory will perform?',
        a: 'No — and you should be cautious of any agent who does. The factory is an independent business; its performance is its contractual obligation. What we guarantee is the quality of our work: verification before recommendation, a costed and documented negotiation, contractual terms that create real remedies, inspection against an agreed standard, and active management of a claim when things go wrong. Most sourcing risk is reduced by process, not by promises.',
      },
      {
        id: 'scope',
        q: 'Can we start with a small assignment?',
        a: 'Yes. A single factory audit, one inspection, a price benchmark or a shortlist for one SKU is a legitimate starting engagement. Most long-term relationships begin that way, because it lets you test our reporting and judgement before committing to order management. The only requirement is a written scope and fee, so both sides know what “done” means.',
      },
    ],
  },
] as const;

export default function FaqPage() {
  return (
    <>
      <Navbar links={NAV} ctaLabel="Talk to us" />
      <main id="main">
        <PageHero
          eyebrow="FAQ"
          title="The questions serious buyers ask."
          lead="Commercial detail on MOQs, payment terms, inspection standards, shipping times, fees and IP — written for importers who need to make a decision, not a brochure."
          tone="navy"
        >
          <Button href="/rfq" variant="secondary">
            Start a Sourcing Project
          </Button>
        </PageHero>

        {GROUPS.map((group) => (
          <Section key={group.id} id={group.id} eyebrow={group.eyebrow} title={group.title} tone={group.id === 'quality' || group.id === 'engagement' ? 'mist' : 'light'}>
            <div className="max-w-3xl space-y-4">
              {group.items.map((item) => (
                <details key={item.id} id={item.id} className="scroll-mt-24 rounded-lg border border-brand-mist bg-white p-5">
                  <summary className="cursor-pointer font-semibold text-brand-navy">{item.q}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-brand-ink/80">{item.a}</p>
                </details>
              ))}
            </div>
          </Section>
        ))}

        <Section
          eyebrow="Still unsure?"
          title="Ask the awkward question directly."
          lead="If your situation is not covered above — regulated categories, tooling-heavy projects, sanctions exposure or an existing supplier dispute — describe it and we will answer in plain terms, including when we are not the right partner."
          tone="navy"
        >
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="secondary">
              Contact the sourcing desk
            </Button>
            <a
              href="/services"
              className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Review the services
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Or email{' '}
            <a className="underline decoration-brand-amber underline-offset-4 hover:text-white" href={mailtoLink('FAQ question')}>
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

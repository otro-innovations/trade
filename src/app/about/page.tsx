import Navbar from '@/components/Navbar';
import Footer, { siblingHref } from '@/components/Footer';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoLink } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'About — The Buyer’s Representative in China',
  description:
    'Why Trade OTRO exists: a buyer-side sourcing practice built on the Bridge Mindset — English-speaking representation in China, procurement and logistics experience, Mandarin-capable operations and no hidden commissions.',
  path: '/about',
});

const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar links={NAV} ctaLabel="Talk to us" />
      <main id="main">
        <PageHero
          eyebrow="About Trade OTRO"
          title="Your English-speaking representative on the factory floor."
          lead="We are not a middleman marking up a factory price, and we are not a dropshipper forwarding parcels. We sit on your side of the table — in China, in Mandarin, with your cost structure in hand."
          tone="navy"
        >
          <Button href="/rfq" variant="secondary">
            Start a Sourcing Project
          </Button>
        </PageHero>

        <Section
          eyebrow="The Bridge Mindset"
          title="Built by someone who has stood on both sides"
          lead="OTRO INNOVATIONS LLC grew out of a simple observation: the gap between a Western buyer and a Chinese factory is rarely about manufacturing capability. It is about language, documentation, expectations and follow-through."
          tone="light"
        >
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-4 text-brand-ink/80">
              <p>
                Our founder holds a BA in English, works at C1 level in English and negotiation-level Mandarin, and spent
                years in sourcing and logistics at Annex Cargo before founding OTRO. That background is unusual in this
                industry. Most agents are either linguists with no commercial training or traders with no ability to write
                a clear specification email. The work needs both.
              </p>
              <p>
                He is also a published researcher — co-authored work indexed in Scopus — and currently an international
                postgraduate student in China. That combination matters more than it sounds. Research training makes
                verification a habit: you check the business licence, you reconcile the export records, you ask for the
                test report rather than accept the claim. Living in China means the factory visit is a train ride, not a
                quarterly expedition.
              </p>
              <p>
                The Bridge Mindset is the operating principle. We translate in both directions — specifications into
                Mandarin production language, supplier excuses into plain commercial English — and we document what was
                agreed so the bridge holds under pressure.
              </p>
            </div>
            <aside className="space-y-4">
              <div className="rounded-xl border border-brand-mist bg-brand-mist/40 p-6">
                <h3 className="font-display text-lg font-bold text-brand-navy">Credentials, briefly</h3>
                <ul className="mt-4 space-y-2 text-sm text-brand-ink/80">
                  <li>US-structured entity: {siteConfig.legalEntityName}</li>
                  <li>Founder: BA English, C1 English, Mandarin-capable</li>
                  <li>Procurement &amp; logistics background at Annex Cargo</li>
                  <li>Co-authored Scopus-indexed research</li>
                  <li>Currently based in China as an international postgraduate student</li>
                </ul>
              </div>
              <p className="text-xs leading-relaxed text-brand-ink/60">
                Trade OTRO is one division of OTRO INNOVATIONS LLC. Our sister divisions cover education, digital growth,
                retail and China travel facilitation.
              </p>
            </aside>
          </div>
        </Section>

        <Section
          eyebrow="Positioning"
          title="Not a middleman. Not a dropshipper. A representative."
          lead="Three business models get confused constantly. The difference determines who is actually working for you."
          tone="mist"
        >
          <div className="overflow-x-auto rounded-xl border border-brand-mist bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="px-5 pt-5 text-left text-xs text-brand-ink/60">
                How a buyer-side representative differs from the two models most often sold as “sourcing agents”.
              </caption>
              <thead className="bg-brand-navy text-white">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Model</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Who pays them</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Whose interest they serve</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Typical failure</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-brand-mist align-top">
                  <th scope="row" className="px-5 py-4 font-semibold text-brand-navy">Middleman / trading company</th>
                  <td className="px-5 py-4 text-brand-ink/80">The buyer, through a hidden spread</td>
                  <td className="px-5 py-4 text-brand-ink/80">Their own margin between factory and buyer</td>
                  <td className="px-5 py-4 text-brand-ink/80">You never see the real factory price or the real factory</td>
                </tr>
                <tr className="border-t border-brand-mist bg-brand-cream/40 align-top">
                  <th scope="row" className="px-5 py-4 font-semibold text-brand-navy">Dropshipper / reseller</th>
                  <td className="px-5 py-4 text-brand-ink/80">The buyer, per unit sold</td>
                  <td className="px-5 py-4 text-brand-ink/80">Speed and volume of listings</td>
                  <td className="px-5 py-4 text-brand-ink/80">No control, no inspection, no accountability</td>
                </tr>
                <tr className="border-t border-brand-mist align-top">
                  <th scope="row" className="px-5 py-4 font-semibold text-brand-navy">Buyer-side representative</th>
                  <td className="px-5 py-4 text-brand-ink/80">The buyer, by disclosed fee</td>
                  <td className="px-5 py-4 text-brand-ink/80">Landed cost, quality and schedule — your objectives</td>
                  <td className="px-5 py-4 text-brand-ink/80">Slower and more paperwork, by design</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-brand-ink/70">
            We choose the third model. It is slower at the start and more rigorous throughout, because the incentives point
            at your landed cost instead of our spread. If a supplier offers us a commission, it is disclosed and credited
            to you, or declined. That policy is the reason we can tell you not to place an order.
          </p>
        </Section>

        <Section
          eyebrow="Principles"
          title="How we behave when it costs us money"
          tone="light"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Write it down" badge="01">
              Scope, fees, inspection standards and timelines are agreed in writing before work starts. Verbal comfort is
              not a brief.
            </Card>
            <Card title="Report the bad news first" badge="02">
              A failed inspection or a slipping schedule reaches you the day we know, with options — not at the end of the
              month with an apology.
            </Card>
            <Card title="Refuse bad orders" badge="03">
              If verification fails, the price is structurally unworkable or the supplier will not accept inspection, we
              say so. Declining an order is a service, not a lost sale.
            </Card>
            <Card title="No hidden money" badge="04">
              Fees, rebates and third-party costs are itemised. The invoice should be boring to read because nothing on it
              is a surprise.
            </Card>
          </div>
        </Section>

        <Section
          eyebrow="The wider OTRO group"
          title="One bridge, several crossings"
          lead="Trade OTRO focuses on B2B sourcing. The same entity and the same standards operate across our other divisions."
          tone="mist"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            <Card href={siblingHref('tours')} title="OTRO Tours" badge="China travel">
              Factory visits, Canton Fair and Yiwu sourcing trips: visa letters, hotels, interpreters and transfers.
            </Card>
            <Card title="US accountability" badge="Entity">
              {siteConfig.legalEntityName} contracts and invoices in USD, with international banking and documented
              engagement terms.
            </Card>
            <Card href="/contact" title="Talk to the founder" badge="Direct">
              Early-stage enquiries are reviewed by the founder, not routed to a call centre. Expect direct answers.
            </Card>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/rfq">Start a sourcing project</Button>
            <Button href="/services" variant="ghost">
              Review the services
            </Button>
          </div>
          <p className="mt-6 text-sm text-brand-ink/70">
            Or email{' '}
            <a className="underline decoration-brand-blue underline-offset-4" href={mailtoLink('About Trade OTRO')}>
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

import type { ReactNode } from 'react';

/**
 * Page-level hero. Section's title renders an <h2>, so the page hero owns the
 * single <h1> — keeping heading order valid on every route.
 * Tone follows the OTRO navy authority surface; content sits on max-w-content.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
  aside,
  tone = 'navy',
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  aside?: ReactNode;
  tone?: 'navy' | 'mist';
}) {
  const navy = tone === 'navy';
  return (
    <section className={navy ? 'bg-brand-navy text-white' : 'bg-brand-mist/70'}>
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <div className={aside ? 'grid items-start gap-12 lg:grid-cols-[1.5fr_1fr]' : 'max-w-3xl'}>
          <div>
            {eyebrow && (
              <p className={`text-sm font-semibold uppercase tracking-widest ${navy ? 'text-brand-amber' : 'text-brand-blue'}`}>
                {eyebrow}
              </p>
            )}
            <h1
              className={`mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl ${
                navy ? 'text-white' : 'text-brand-navy'
              }`}
            >
              {title}
            </h1>
            {lead && (
              <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${navy ? 'text-white/80' : 'text-brand-ink/80'}`}>
                {lead}
              </p>
            )}
            {children && <div className="mt-8 flex flex-wrap items-center gap-4">{children}</div>}
          </div>
          {aside && <div>{aside}</div>}
        </div>
      </div>
    </section>
  );
}

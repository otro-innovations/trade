import { NextResponse } from 'next/server';
import { allowedOrigins } from '@/lib/siteConfig';

/**
 * Enquiry handler for both the contact form and the detailed RFQ form.
 * - Origin is validated against the config-driven allow-list so CORS stays
 *   correct after any domain migration.
 * - A hidden "website" field acts as the honeypot (it never clashes with the
 *   real company field); submissions that fill it are silently dropped.
 * TODO(Phase 4+): persist to Supabase and send email via Resend once
 * RESEND_API_KEY is configured in Vercel env vars.
 */
export async function POST(req: Request) {
  const origin = req.headers.get('origin');
  const localDev =
    process.env.NODE_ENV !== 'production' &&
    !!origin &&
    (origin.startsWith('http://localhost') || origin.startsWith('http://127.0.0.1'));
  if (origin && !allowedOrigins().includes(origin) && !origin.includes('vercel.app') && !localDev) {
    return NextResponse.json({ error: 'Origin not allowed' }, { status: 403 });
  }

  const form = await req.formData().catch(() => null);
  if (!form) return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });

  const source = form.get('source') === 'rfq' ? 'rfq' : 'contact';
  const destination = new URL(source === 'rfq' ? '/rfq' : '/contact', req.url);
  destination.searchParams.set('ok', '1');

  // Honeypot: bots fill hidden fields; humans leave them empty.
  if (form.get('website')) return NextResponse.redirect(destination);

  const name = form.get('name');
  const contact = form.get('contact');
  const message = form.get('message') ?? form.get('details');
  const product = form.get('product');

  if (!name || !contact) {
    return NextResponse.json({ error: 'Name and contact details are required' }, { status: 400 });
  }
  // Contact enquiries need a message; RFQs need product + specification instead.
  if (source === 'rfq' ? !product || !message : !message) {
    return NextResponse.json({ error: 'Required fields are missing' }, { status: 400 });
  }

  return NextResponse.redirect(destination);
}

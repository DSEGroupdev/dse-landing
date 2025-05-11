import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, companyName, companyWebsite, service, message } = await req.json();
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Company Name:</b> ${companyName}</p>
      <p><b>Company Website:</b> ${companyWebsite}</p>
      <p><b>Service Interested In:</b> ${service}</p>
      <p><b>Message:</b><br/>${message}</p>
    `;
    await resend.emails.send({
      from: 'DSE Group Contact <no-reply@dsegroup.ai>',
      to: 'dan@dsegroupae.com',
      subject: 'New Contact Form Submission',
      html,
      replyTo: email,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
} 
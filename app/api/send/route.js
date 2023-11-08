import { EmailTemplate } from '../../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const {name,email,phone,message} = body;

    const data = await resend.emails.send({
      from: 'Shingenki <onboarding@shingenki.sattpaing.website>',
      to: email,
      subject: 'Thank you for Contacting Us',
      react: EmailTemplate({name,email,phone,message}),
    });

    if(data.status === 'success'){
        return NextResponse.json({message:'Email Successfully Send'})
    }
    return NextResponse.json(data);
  } catch (error) {
    console.log('error',error);
    return NextResponse.json({ error });
  }
}
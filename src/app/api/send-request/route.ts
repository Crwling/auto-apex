import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, number, email, findUs, comment } = await req.json();

  if (!name || !number || !email) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `<${process.env.SMTP_USER}>`,
      to: 'Autoapex2000@gmail.com',
      subject: 'New Request Form Submission',
      text: `
        Name: ${name}
        Number: ${number}
        Email: ${email}
        How did you find us: ${findUs}
        Comment: ${comment}
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Failed to send email', error }, { status: 500 });
  }
}
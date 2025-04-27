import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ message: 'Adresse email invalide.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST as string,
      port: parseInt(process.env.SMTP_PORT as string, 10),
      secure: false,
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASSWORD as string,
      },
    });

    const mailOptions = {
      from: {
        name: 'Ecodira',
        address: 'contact@ecodira.fr',
      },
      to: 'contact@ecodira.fr',
      subject: 'Nouvelle inscription à la newsletter',
      html: `<h2>Nouvelle inscription à la newsletter</h2><p>Email : <strong>${email}</strong></p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Inscription envoyée avec succès.' }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email newsletter:', error);
    return NextResponse.json({ message: "Erreur lors de l'envoi de l'email." }, { status: 500 });
  }
}

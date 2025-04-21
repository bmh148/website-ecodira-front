import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, telephone, email, adresse, departement, message } = body;

    console.log({
      host: process.env.SMTP_HOST as string, // Serveur SMTP de Brevo
      port: parseInt(process.env.SMTP_PORT as string, 10),
      secure: false,
      auth: {
        user: process.env.SMTP_USER as string, // Votre email Brevo
        pass: process.env.SMTP_PASSWORD as string, // Votre mot de passe d'application Brevo
      },
    });
    

    // Créer le transporteur d'email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST as string, // Serveur SMTP de Brevo
      port: parseInt(process.env.SMTP_PORT as string, 10),
      secure: false,
      auth: {
        user: process.env.SMTP_USER as string, // Votre email Brevo
        pass: process.env.SMTP_PASSWORD as string, // Votre mot de passe d'application Brevo
      },
    });

    // Configurer l'email
    const mailOptions = {
      from: {
        name: "Ecodira",
        address: "contact@ecodira.fr",
      },
      replyTo: {
        name: "Ecodira",
        address: "contact@ecodira.fr",
      },
      to: "contact@ecodira.fr",
      subject: `Nouvelle demande de contact`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom complet:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone}</p>
        <p><strong>Adresse:</strong> ${adresse}</p>
        <p><strong>Département:</strong> ${departement}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>Cette personne souhaite être recontactée.</p>
      `,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
} 
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, telephone, source } = body;

    // Créer le transporteur d'email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Remplacer par votre serveur SMTP
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // Votre email
        pass: process.env.EMAIL_PASSWORD, // Votre mot de passe d'application
      },
    });

    // Configurer l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "contact@ecodira.fr",
      subject: `Nouvelle demande de contact - ${source}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Téléphone:</strong> ${telephone}</p>
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
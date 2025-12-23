import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation basique
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Simuler l'envoi d'email en affichant les données dans la console serveur
    console.log('=== NOUVEAU MESSAGE DE CONTACT ===');
    console.log(`Nom: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Sujet: ${subject}`);
    console.log(`Message: ${message}`);
    console.log(`Date/Heure: ${new Date().toLocaleString('fr-FR')}`);
    console.log('==================================');

    // Dans une vraie application, vous enverriez un email ici avec:
    // - SendGrid
    // - Mailgun
    // - Resend
    // - etc.

    return NextResponse.json(
      {
        message: 'Message reçu avec succès',
        data: {
          name,
          email,
          subject,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors du traitement de la demande:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

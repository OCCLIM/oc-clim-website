import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { nom, telephone, email, service, message } = await req.json();

    if (!nom || !telephone || !email || !service || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to OC CLIM
    await transporter.sendMail({
      from: `"OC CLIM - Site Web" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `Nouveau devis — ${service} — ${nom}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#111;padding:20px 24px;border-radius:12px 12px 0 0">
            <h2 style="color:white;margin:0;font-size:18px">Nouvelle demande de devis</h2>
          </div>
          <div style="background:#f9f9f9;padding:24px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#999;width:120px;vertical-align:top">Nom</td><td style="padding:8px 0;font-weight:600">${nom}</td></tr>
              <tr><td style="padding:8px 0;color:#999;vertical-align:top">Téléphone</td><td style="padding:8px 0;font-weight:600"><a href="tel:${telephone}" style="color:#111">${telephone}</a></td></tr>
              <tr><td style="padding:8px 0;color:#999;vertical-align:top">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#111">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#999;vertical-align:top">Service</td><td style="padding:8px 0;font-weight:600">${service}</td></tr>
              <tr><td style="padding:8px 0;color:#999;vertical-align:top">Message</td><td style="padding:8px 0">${message.replace(/\n/g, "<br>")}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0">
            <p style="color:#999;font-size:12px;margin:0">Envoyé depuis le formulaire occlim.fr</p>
          </div>
        </div>
      `,
    });

    // Confirmation email to client
    await transporter.sendMail({
      from: `"OC CLIM" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Votre demande a bien été reçue — OC CLIM",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#111;padding:20px 24px;border-radius:12px 12px 0 0">
            <h2 style="color:white;margin:0;font-size:18px">OC CLIM</h2>
          </div>
          <div style="background:#f9f9f9;padding:24px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 12px 12px">
            <p style="margin:0 0 12px">Bonjour <strong>${nom}</strong>,</p>
            <p style="margin:0 0 12px">Merci pour votre demande concernant <strong>${service}</strong>. Nous l'avons bien reçue et Can vous recontactera dans les plus brefs délais.</p>
            <p style="margin:0 0 12px">En attendant, n'hésitez pas à nous appeler directement :</p>
            <p style="margin:0 0 20px"><a href="tel:0767117530" style="background:#111;color:white;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block">07 67 11 75 30</a></p>
            <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0">
            <p style="color:#999;font-size:12px;margin:0">OC CLIM — Votre confort, notre priorité<br>Bordeaux Métropole & alentours</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}

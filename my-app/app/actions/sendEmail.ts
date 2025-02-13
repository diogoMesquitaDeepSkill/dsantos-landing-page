"use server";

import * as Sentry from "@sentry/nextjs";
import nodemailer from "nodemailer";

type FormState = {
  message: string;
  error?: boolean;
} | null;

// Define translation texts for different locales.
const translations: Record<
  string,
  { success: string; error: string; subject: string; notProvided: string }
> = {
  en: {
    success: "Message sent successfully!",
    error:
      "Failed to send message. Contact us directly through email at info@dsantos.de",
    subject: "New Contact Form Submission",
    notProvided: "Not provided",
  },
  de: {
    success: "Nachricht erfolgreich gesendet!",
    error:
      "Nachricht konnte nicht gesendet werden. Kontaktieren Sie uns direkt per E-Mail unter info@dsantos.de",
    subject: "Neue Kontaktformularübermittlung",
    notProvided: "Nicht angegeben",
  },
  pt: {
    success: "Mensagem enviada com sucesso!",
    error:
      "Falha ao enviar a mensagem. Entre em contato conosco diretamente por e-mail em info@dsantos.de",
    subject: "Nova submissão do formulário de contato",
    notProvided: "Não fornecido",
  },
  es: {
    success: "¡Mensaje enviado con éxito!",
    error:
      "Error al enviar el mensaje. Contáctenos directamente a través del correo electrónico en info@dsantos.de",
    subject: "Nueva presentación del formulario de contacto",
    notProvided: "No proporcionado",
  },
  fr: {
    success: "Message envoyé avec succès !",
    error:
      "Échec de l'envoi du message. Contactez-nous directement par e-mail à info@dsantos.de",
    subject: "Nouvelle soumission de formulaire de contact",
    notProvided: "Non fourni",
  },
};


export async function sendEmail(
  formData: FormData,
  locale: string
): Promise<FormState> {
  // Choose the texts based on locale; default to English if locale not found.
  const texts = translations[locale] || translations["en"];

  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string | null;
    const message = formData.get("message") as string;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email with locale-specific subject and content.
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      bcc: process.env.EMAIL_USER, // Also send to yourself
      subject: texts.subject,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || texts.notProvided}
        Language: ${locale}
        Message: ${message}
      `,
    });

    return { message: texts.success };
  } catch (error) {
    Sentry.captureException(
      `Sending contact form failed. Email: ${
        formData.get("email") || "no email"
      } Message: ${formData.get("message")} Error: ${error}`
    );
    return { error: true, message: texts.error };
  }
}

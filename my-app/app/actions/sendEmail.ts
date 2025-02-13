"use server"

import nodemailer from "nodemailer"

type FormState = {
  message: string
  error?: boolean
} | null

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string | null
  const message = formData.get("message") as string

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
  })

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, // Send to yourself
      bcc: process.env.EMAIL_USER, // Also send to yourself 
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Message: ${message}
      `,
    })

    return { message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { error: true, message: "Failed to send message. Please try again." }
  }
}


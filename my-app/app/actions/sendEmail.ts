"use server"

import nodemailer from "nodemailer"

export async function sendEmail( formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const message = formData.get("message")

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Configure your email service here
    // For example, using Gmail:
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
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


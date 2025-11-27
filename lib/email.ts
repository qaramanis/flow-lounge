import nodemailer from "nodemailer";

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}

/**
 * Send an email using Hostinger SMTP
 * @param options Email options
 * @returns Promise with the result of sending the email
 */
export async function sendEmail(options: SendEmailOptions) {
  const { to, subject, html, replyTo } = options;

  const mailOptions = {
    from: `Flow Lounge <${process.env.SMTP_FROM}>`,
    to: Array.isArray(to) ? to.join(", ") : to,
    subject,
    html,
    ...(replyTo && { replyTo }),
  };

  return await transporter.sendMail(mailOptions);
}

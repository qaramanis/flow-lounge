import nodemailer from "nodemailer";

// Log SMTP configuration (without password)
console.log("[EMAIL] SMTP Configuration:", {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: Number(process.env.SMTP_PORT) === 465,
  user: process.env.SMTP_USER,
  from: process.env.SMTP_FROM,
  hasPassword: !!process.env.SMTP_PASS,
});

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

  console.log("[EMAIL] Attempting to send email:", {
    to: mailOptions.to,
    subject: mailOptions.subject,
    from: mailOptions.from,
    hasReplyTo: !!replyTo,
  });

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("[EMAIL] Email sent successfully:", {
      messageId: result.messageId,
      accepted: result.accepted,
      rejected: result.rejected,
    });
    return result;
  } catch (error) {
    console.error("[EMAIL] Failed to send email:", {
      error: error instanceof Error ? error.message : String(error),
      code: error instanceof Error && "code" in error ? error.code : undefined,
      command:
        error instanceof Error && "command" in error ? error.command : undefined,
      to: mailOptions.to,
      subject: mailOptions.subject,
    });
    throw error;
  }
}

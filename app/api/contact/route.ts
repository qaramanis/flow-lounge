import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, phone, subject, message } = body;

    // Validate required fields
    if (!email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Create HTML email template
    const htmlEmail = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Message</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 20px 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header with Logo -->
                  <tr>
                    <td style="background-color: #000000; padding: 20px; text-align: center;">
                      <table role="presentation" style="margin: 0 auto;">
                        <tr>
                          <td style="background-color: white; width: 100px; height: 100px; border-radius: 50%; text-align: center; vertical-align: middle;">
                            <span style="color: #EF5021; font-size: 36px; font-weight: bold; line-height: 100px;">FL</span>
                          </td>
                        </tr>
                      </table>
                      <h1 style="color: white; margin: 20px 0 0 0; font-size: 28px; font-weight: 300;">Flow Lounge</h1>
                    </td>
                  </tr>

                  <!-- Orange Accent Line -->
                  <tr>
                    <td style="background-color: #EF5021; height: 4px;"></td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="color: #000000; margin: 0 0 20px 0; font-size: 24px; font-weight: 600;">Νέο Μήνυμα</h2>

                      <div style="background-color: #f9f9f9; border-left: 4px solid #EF5021; padding: 20px; margin-bottom: 20px;">
                        <p style="margin: 0 0 10px 0; color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Από</p>
                        <p style="margin: 0; color: #000; font-size: 16px; font-weight: 500;">${email}</p>
                      </div>

                      <div style="background-color: #f9f9f9; border-left: 4px solid #EF5021; padding: 20px; margin-bottom: 20px;">
                        <p style="margin: 0 0 10px 0; color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Τηλέφωνο</p>
                        <p style="margin: 0; color: #000; font-size: 16px; font-weight: 500;">${phone}</p>
                      </div>

                      <div style="background-color: #f9f9f9; border-left: 4px solid #EF5021; padding: 20px; margin-bottom: 20px;">
                        <p style="margin: 0 0 10px 0; color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Θέμα</p>
                        <p style="margin: 0; color: #000; font-size: 16px; font-weight: 500;">${subject}</p>
                      </div>

                      <div style="background-color: #f9f9f9; border-left: 4px solid #EF5021; padding: 20px;">
                        <p style="margin: 0 0 10px 0; color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Μήνυμα</p>
                        <p style="margin: 0; color: #000; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #000000; padding: 30px; text-align: center;">
                      <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 14px;">Flow Lounge</p>
                      <p style="margin: 0; color: #999999; font-size: 12px;">Immersive Experience</p>
                      <div style="margin-top: 20px;">
                        <a href="mailto:info@flowlounge.gr" style="color: #EF5021; text-decoration: none; font-size: 14px;">info@flowlounge.gr</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Create confirmation email for customer
    const customerEmail = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Επιβεβαίωση Μηνύματος</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 20px 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header with Logo -->
                  <tr>
                    <td style="background-color: #000000; padding: 20px; text-align: center;">
                      <table role="presentation" style="margin: 0 auto;">
                        <tr>
                          <td style="background-color: white; width: 100px; height: 100px; border-radius: 50%; text-align: center; vertical-align: middle;">
                            <span style="color: #EF5021; font-size: 36px; font-weight: bold; line-height: 100px;">FL</span>
                          </td>
                        </tr>
                      </table>
                      <h1 style="color: white; margin: 20px 0 0 0; font-size: 28px; font-weight: 300;">Flow Lounge</h1>
                    </td>
                  </tr>

                  <!-- Orange Accent Line -->
                  <tr>
                    <td style="background-color: #EF5021; height: 4px;"></td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="color: #000000; margin: 0 0 20px 0; font-size: 24px; font-weight: 600;">Λάβαμε το Μήνυμά σας!</h2>

                      <p style="color: #000; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                        Σας ευχαριστούμε που επικοινωνήσατε μαζί μας. Λάβαμε το μήνυμά σας και θα σας απαντήσουμε το συντομότερο δυνατό.
                      </p>

                      <div style="background-color: #f9f9f9; border-left: 4px solid #EF5021; padding: 20px; margin-bottom: 20px;">
                        <p style="margin: 0 0 10px 0; color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                        <p style="margin: 0; color: #000; font-size: 16px; font-weight: 500;">${email}</p>
                      </div>

                      <div style="background-color: #f9f9f9; border-left: 4px solid #EF5021; padding: 20px; margin-bottom: 20px;">
                        <p style="margin: 0 0 10px 0; color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Τηλέφωνο</p>
                        <p style="margin: 0; color: #000; font-size: 16px; font-weight: 500;">${phone}</p>
                      </div>

                      <div style="background-color: #f9f9f9; border-left: 4px solid #EF5021; padding: 20px; margin-bottom: 20px;">
                        <p style="margin: 0 0 10px 0; color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Θέμα</p>
                        <p style="margin: 0; color: #000; font-size: 16px; font-weight: 500;">${subject}</p>
                      </div>

                      <div style="background-color: #f9f9f9; border-left: 4px solid #EF5021; padding: 20px;">
                        <p style="margin: 0 0 10px 0; color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Το Μήνυμά σας</p>
                        <p style="margin: 0; color: #000; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #000000; padding: 30px; text-align: center;">
                      <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 14px;">Flow Lounge</p>
                      <p style="margin: 0; color: #999999; font-size: 12px;">Immersive Experience</p>
                      <div style="margin-top: 20px;">
                        <a href="mailto:info@flowlounge.gr" style="color: #EF5021; text-decoration: none; font-size: 14px;">info@flowlounge.gr</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Send email to business
    await sendEmail({
      to: "info@flowlounge.gr",
      subject: `Νέο Μήνυμα: ${subject}`,
      html: htmlEmail,
      replyTo: email,
    });

    // Send confirmation email to customer
    await sendEmail({
      to: email,
      subject: "Επιβεβαίωση Μηνύματος - Flow Lounge",
      html: customerEmail,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}

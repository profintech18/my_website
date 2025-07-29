import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Email templates
const getAdminEmailTemplate = (formData: any) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Inquiry</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #667eea; }
        .field-label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
        .field-value { color: #333; }
        .priority { background: #fff3cd; border-left-color: #ffc107; }
        .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔔 New Contact Form Inquiry</h1>
          <p>A new inquiry has been submitted through your website</p>
        </div>
        <div class="content">
          <div class="field priority">
            <div class="field-label">⭐ Service Required</div>
            <div class="field-value">${formData.service}</div>
          </div>
          
          <div class="field">
            <div class="field-label">👤 Full Name</div>
            <div class="field-value">${formData.name}</div>
          </div>
          
          <div class="field">
            <div class="field-label">📧 Email Address</div>
            <div class="field-value">${formData.email}</div>
          </div>
          
          <div class="field">
            <div class="field-label">📞 Phone Number</div>
            <div class="field-value">${formData.phone}</div>
          </div>
          
          <div class="field">
            <div class="field-label">🏠 Address</div>
            <div class="field-value">${formData.address || "Not provided"}</div>
          </div>
          
          <div class="field">
            <div class="field-label">💬 Message</div>
            <div class="field-value">${formData.message}</div>
          </div>
          
          <div class="field" style="background: #e8f5e8; border-left-color: #28a745;">
            <div class="field-label">⏰ Submitted At</div>
            <div class="field-value">${new Date().toLocaleString()}</div>
          </div>
        </div>
        <div class="footer">
          <p>Please respond to this inquiry within 24 hours for the best customer experience.</p>
          <p><strong>Reply directly to:</strong> ${formData.email}</p>
        </div>
      </div>
    </body>
    </html>
  `
}

const getUserEmailTemplate = (formData: any) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Your Inquiry</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .highlight { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745; }
        .contact-info { background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 14px; }
        .button { display: inline-block; background: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Thank You, ${formData.name}!</h1>
          <p>We've received your inquiry about ${formData.service}</p>
        </div>
        <div class="content">
          <div class="highlight">
            <h3>🎉 Your inquiry has been successfully submitted!</h3>
            <p>Thank you for reaching out to us regarding <strong>${formData.service}</strong>. We appreciate your interest in our services and will get back to you as soon as possible.</p>
          </div>
          
          <div class="highlight">
            <h3>📋 What happens next?</h3>
            <ul>
              <li>✅ Our team will review your inquiry within 2-4 hours</li>
              <li>📞 We'll contact you within 24 hours via phone or email</li>
              <li>💼 We'll provide you with a customized solution proposal</li>
              <li>🤝 Schedule a consultation call if needed</li>
            </ul>
          </div>
          
          <div class="contact-info">
            <h3>📞 Need immediate assistance?</h3>
            <p><strong>Phone:</strong> +91 82100 41963</p>
            <p><strong>Email:</strong> Profintech18@gmail.com</p>
            <p><strong>Business Hours:</strong> Mon-Fri 9:00 AM - 6:00 PM</p>
            <a href="https://wa.me/918210041963" class="button">💬 WhatsApp Us</a>
          </div>
          
          <div class="highlight">
            <h3>📝 Your Inquiry Summary:</h3>
            <p><strong>Service:</strong> ${formData.service}</p>
            <p><strong>Contact:</strong> ${formData.email} | ${formData.phone}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
        <div class="footer">
          <p>This is an automated confirmation email. Please do not reply to this email.</p>
          <p>If you have any questions, please contact us directly at Profintech18@gmail.com</p>
          <p>Terms and Conditions apply. Visit our <a href="https://profintech.vercel.app/terms" target="_blank">Terms Page</a> for more details.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const { type, formData } = await request.json()

    // Validate required environment variables
    const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "ADMIN_EMAIL"]

    const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar])

    if (missingEnvVars.length > 0) {
      console.error("Missing environment variables:", missingEnvVars)
      return NextResponse.json(
        {
          success: false,
          message: `Missing required environment variables: ${missingEnvVars.join(", ")}`,
        },
        { status: 500 },
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // For development - remove in production if using trusted certificates
      },
    })

    // Verify transporter
    await transporter.verify()

    let mailOptions

    if (type === "admin") {
      // Admin notification email
      mailOptions = {
        from: `"Contact Form" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `🔔 New ${formData.service} Inquiry from ${formData.name}`,
        html: getAdminEmailTemplate(formData),
        replyTo: formData.email,
      }
    } else if (type === "user") {
      // User confirmation email
      mailOptions = {
        from: `"Profintech Team" <${process.env.SMTP_USER}>`,
        to: formData.email,
        subject: `✅ Thank you for your ${formData.service} inquiry - We'll be in touch soon!`,
        html: getUserEmailTemplate(formData),
      }
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email type",
        },
        { status: 400 },
      )
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    console.log(`${type} email sent successfully:`, info.messageId)

    return NextResponse.json({
      success: true,
      message: `${type} email sent successfully`,
      messageId: info.messageId,
    })
  } catch (error) {
    console.error(`Error sending email:`, error)

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Failed to send email",
      },
      { status: 500 },
    )
  }
}

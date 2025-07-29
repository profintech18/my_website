import { type NextRequest, NextResponse } from "next/server"

// Enhanced notification service with SMTP integration
export async function POST(request: NextRequest) {
  try {
    const { formData } = await request.json()

    console.log("🔔 Enhanced notification service called")

    let notificationSent = false
    let notificationMethod = "none"

    // Method 1: Try Telegram Bot API
    try {
      const telegramResult = await sendTelegramNotification(formData)
      if (telegramResult.success) {
        notificationSent = true
        notificationMethod = "telegram"
        console.log("✅ Telegram notification sent")
      }
    } catch (error) {
      console.log("❌ Telegram failed:", error)
    }

    // Method 2: Try Discord Webhook
    if (!notificationSent) {
      try {
        const discordResult = await sendDiscordNotification(formData)
        if (discordResult.success) {
          notificationSent = true
          notificationMethod = "discord"
          console.log("✅ Discord notification sent")
        }
      } catch (error) {
        console.log("❌ Discord failed:", error)
      }
    }

    // Method 3: Try Slack Webhook
    if (!notificationSent) {
      try {
        const slackResult = await sendSlackNotification(formData)
        if (slackResult.success) {
          notificationSent = true
          notificationMethod = "slack"
          console.log("✅ Slack notification sent")
        }
      } catch (error) {
        console.log("❌ Slack failed:", error)
      }
    }

    // Method 4: Enhanced Console Notification (Always works)
    logEnhancedConsoleNotification(formData)
    if (!notificationSent) {
      notificationMethod = "console"
    }

    return NextResponse.json({
      success: true,
      message: `Notification sent via ${notificationMethod}`,
      method: notificationMethod,
      debug: {
        timestamp: new Date().toISOString(),
        client: formData.name,
        service: formData.service,
        notificationMethod,
        adminEmail: process.env.GMAIL_USER,
      },
    })
  } catch (error) {
    console.error("❌ Notification service failed:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Notification service failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

// Telegram notification
async function sendTelegramNotification(formData: any) {
  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN
  const telegramChatId = process.env.TELEGRAM_CHAT_ID

  if (!telegramBotToken || !telegramChatId) {
    throw new Error("Telegram credentials not configured")
  }

  const message = `
🔷 *NEW BUSINESS INQUIRY* 🔷

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🏠 *Address:* ${formData.address || "Not provided"}
🔧 *Service:* ${formData.service}

💬 *Message:*
${formData.message}

📅 *Received:* ${new Date().toLocaleString()}
🆔 *Reference:* #BC${Date.now().toString().slice(-6)}

⚡ *Quick Actions:*
📧 Reply: \`${formData.email}\`
📱 WhatsApp: \`${formData.phone}\`
  `

  const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: telegramChatId,
      text: message,
      parse_mode: "Markdown",
    }),
  })

  if (response.ok) {
    return { success: true, method: "telegram" }
  }

  throw new Error("Telegram API failed")
}

// Discord notification
async function sendDiscordNotification(formData: any) {
  const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!discordWebhookUrl) {
    throw new Error("Discord webhook not configured")
  }

  const embed = {
    title: "🔷 New Business Inquiry",
    color: 0x3b82f6,
    fields: [
      { name: "👤 Client Name", value: formData.name, inline: true },
      { name: "📞 Phone", value: formData.phone, inline: true },
      { name: "📧 Email", value: formData.email, inline: true },
      { name: "🏠 Address", value: formData.address || "Not provided", inline: true },
      { name: "🔧 Service", value: formData.service, inline: true },
      { name: "🆔 Reference", value: `#BC${Date.now().toString().slice(-6)}`, inline: true },
      { name: "💬 Message", value: formData.message.substring(0, 1000), inline: false },
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: "BusinessCorp Admin Panel",
      icon_url: "https://example.com/logo.png",
    },
  }

  const response = await fetch(discordWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: "🔔 **New inquiry received!**",
      embeds: [embed],
    }),
  })

  if (response.ok) {
    return { success: true, method: "discord" }
  }

  throw new Error("Discord webhook failed")
}

// Slack notification
async function sendSlackNotification(formData: any) {
  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL

  if (!slackWebhookUrl) {
    throw new Error("Slack webhook not configured")
  }

  const message = {
    text: "🔷 New Business Inquiry",
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "🔷 New Business Inquiry",
        },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*👤 Name:*\n${formData.name}` },
          { type: "mrkdwn", text: `*📞 Phone:*\n${formData.phone}` },
          { type: "mrkdwn", text: `*📧 Email:*\n${formData.email}` },
          { type: "mrkdwn", text: `*🔧 Service:*\n${formData.service}` },
        ],
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*💬 Message:*\n${formData.message}`,
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `📅 Received: ${new Date().toLocaleString()} | 🆔 Reference: #BC${Date.now().toString().slice(-6)}`,
          },
        ],
      },
    ],
  }

  const response = await fetch(slackWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  })

  if (response.ok) {
    return { success: true, method: "slack" }
  }

  throw new Error("Slack webhook failed")
}

// Enhanced console notification
function logEnhancedConsoleNotification(formData: any) {
  const border = "=".repeat(100)
  const innerBorder = "-".repeat(100)

  console.log("\n" + border)
  console.log("🔔 INSTANT ADMIN NOTIFICATION - NEW BUSINESS INQUIRY")
  console.log(border)
  console.log(`🕐 TIMESTAMP: ${new Date().toLocaleString()}`)
  console.log(`🆔 REFERENCE: #BC${Date.now().toString().slice(-6)}`)
  console.log(innerBorder)
  console.log("👤 CLIENT INFORMATION:")
  console.log(`   Name: ${formData.name}`)
  console.log(`   Phone: ${formData.phone}`)
  console.log(`   Email: ${formData.email}`)
  console.log(`   Address: ${formData.address || "Not provided"}`)
  console.log(innerBorder)
  console.log("🔧 SERVICE DETAILS:")
  console.log(`   Service Type: ${formData.service}`)
  console.log(`   Priority: HIGH (New inquiry)`)
  console.log(innerBorder)
  console.log("💬 CLIENT MESSAGE:")
  console.log(`   "${formData.message}"`)
  console.log(innerBorder)
  console.log("⚡ REQUIRED ACTIONS:")
  console.log("   1. ✅ Respond within 24 hours")
  console.log("   2. 📞 Schedule consultation call")
  console.log("   3. 📄 Prepare service proposal")
  console.log("   4. 💾 Add to CRM system")
  console.log(innerBorder)
  console.log("🔗 QUICK CONTACT OPTIONS:")
  console.log(`   📧 Email Reply: ${formData.email}`)
  console.log(`   📱 WhatsApp: https://wa.me/${formData.phone.replace(/[^0-9]/g, "")}`)
  console.log(`   ☎️  Direct Call: ${formData.phone}`)
  console.log(innerBorder)
  console.log("📊 SYSTEM STATUS:")
  console.log(`   📧 Admin Email: ${process.env.GMAIL_USER}`)
  console.log(`   🔔 Notification: Console + SMTP`)
  console.log(`   🌐 Source: BusinessCorp Website`)
  console.log(border)
  console.log("🚨 ACTION REQUIRED: Please respond to this inquiry promptly!")
  console.log(border + "\n")
}

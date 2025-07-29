import { type NextRequest, NextResponse } from "next/server"

// Notification service for instant alerts
export async function POST(request: NextRequest) {
  try {
    const { formData } = await request.json()

    console.log("🔔 Notification service called")

    // Method 1: Try Telegram Bot API (free and reliable)
    try {
      const telegramBotToken = "your-telegram-bot-token"
      const telegramChatId = "your-chat-id"

      const telegramMessage = `
🔷 *NEW BUSINESS INQUIRY* 🔷

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🔧 *Service:* ${formData.service}

💬 *Message:*
${formData.message}

📅 *Received:* ${new Date().toLocaleString()}
      `

      const telegramResponse = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      })

      if (telegramResponse.ok) {
        console.log("✅ Telegram notification sent")
        return NextResponse.json({
          success: true,
          message: "Notification sent via Telegram",
          method: "telegram",
        })
      }
    } catch (telegramError) {
      console.log("❌ Telegram failed:", telegramError)
    }

    // Method 2: Try Discord Webhook (free and instant)
    try {
      const discordWebhookUrl = "your-discord-webhook-url"

      const discordMessage = {
        content: "🔷 **NEW BUSINESS INQUIRY** 🔷",
        embeds: [
          {
            title: `New ${formData.service} Inquiry`,
            color: 0x3b82f6,
            fields: [
              { name: "👤 Name", value: formData.name, inline: true },
              { name: "📞 Phone", value: formData.phone, inline: true },
              { name: "📧 Email", value: formData.email, inline: true },
              { name: "🔧 Service", value: formData.service, inline: false },
              { name: "💬 Message", value: formData.message.substring(0, 1000), inline: false },
            ],
            timestamp: new Date().toISOString(),
            footer: { text: "ProFintech Admin Panel" },
          },
        ],
      }

      const discordResponse = await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordMessage),
      })

      if (discordResponse.ok) {
        console.log("✅ Discord notification sent")
        return NextResponse.json({
          success: true,
          message: "Notification sent via Discord",
          method: "discord",
        })
      }
    } catch (discordError) {
      console.log("❌ Discord failed:", discordError)
    }

    // Method 3: Console notification (always works)
    console.log("🔔 ADMIN NOTIFICATION:")
    console.log("=".repeat(50))
    console.log(`🔷 NEW ${formData.service.toUpperCase()} INQUIRY`)
    console.log("=".repeat(50))
    console.log(`👤 Client: ${formData.name}`)
    console.log(`📞 Phone: ${formData.phone}`)
    console.log(`📧 Email: ${formData.email}`)
    console.log(`🏠 Address: ${formData.address || "Not provided"}`)
    console.log(`🔧 Service: ${formData.service}`)
    console.log(`💬 Message: ${formData.message}`)
    console.log(`📅 Time: ${new Date().toLocaleString()}`)
    console.log("=".repeat(50))
    console.log("⚡ ACTION REQUIRED: Respond within 24 hours")
    console.log("=".repeat(50))

    return NextResponse.json({
      success: true,
      message: "Notification logged to console",
      method: "console",
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

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  // Admin WhatsApp number (replace with actual number - include country code without + sign)
  const ADMIN_WHATSAPP_NUMBER = "918210041963"

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setStatusMessage("")

    try {
      // Send both admin and user emails
      const [adminResponse, userResponse] = await Promise.all([
        fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "admin",
            formData: formData,
          }),
        }),
        fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "user",
            formData: formData,
          }),
        }),
      ])

      const adminResult = await adminResponse.json()
      const userResult = await userResponse.json()

      if (adminResult.success && userResult.success) {
        setSubmitStatus("success")
        setStatusMessage(
          `✅ Success! Your ${formData.service} inquiry has been sent to our team. You should receive a confirmation email shortly. We'll respond within 24 hours!`,
        )

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          service: "",
          message: "",
        })
      } else {
        throw new Error(adminResult.message || userResult.message || "Failed to send emails")
      }
    } catch (error) {
      console.error("Error sending emails:", error)
      setSubmitStatus("error")
      setStatusMessage(
        "❌ There was an error sending your message. Please try again or contact us directly via WhatsApp at +91 82100 41963.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppRedirect = () => {
    // Check if required fields are filled
    if (!formData.name || !formData.phone || !formData.email || !formData.service || !formData.message) {
      alert("Please fill in all required fields before sending via WhatsApp.")
      return
    }

    // Format the message for WhatsApp with proper line breaks
    const whatsappMessage = `🔷 *New Business Inquiry* 🔷

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🏠 *Address:* ${formData.address || "Not provided"}
🔧 *Service Required:* ${formData.service}

💬 *Message:*
${formData.message}

---
Please get back to me at your earliest convenience. Thank you!`

    // Create WhatsApp URL with proper encoding
    const whatsappURL = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`

    // Open WhatsApp in new tab/window
    window.open(whatsappURL, "_blank", "noopener,noreferrer")

    // Show success message
    alert("Redirecting to WhatsApp... Your message has been formatted and ready to send!")

    // Reset form after successful redirect
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      service: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "Profintech18@gmail.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 82100 41963",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Shapoorji Pallonji Complex,",
      subDetails: "New Town Kolkata, West Bengal, 700135",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      subDetails: "Sat - Sun: 10:00 AM - 4:00 PM",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/contact.jpg"
          alt="Office Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Contact us today and let's discuss how we can help transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600 text-sm">{info.details}</p>
                      {info.subDetails && <p className="text-gray-500 text-sm">{info.subDetails}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-800 rounded-xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="/hero.jpg"
                  alt="Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Free consultation and project assessment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Quick response within 24 hours
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Customized solutions for your needs
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    No obligation, transparent pricing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>

            {/* Status Message */}
            {submitStatus !== "idle" && (
              <div
                className={`mb-6 p-4 rounded-lg border ${
                  submitStatus === "success"
                    ? "bg-green-50 border-green-200 text-green-800"
                    : "bg-red-50 border-red-200 text-red-800"
                }`}
              >
                <div className="flex items-start">
                  {submitStatus === "success" ? (
                    <CheckCircle className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                  )}
                  <p className="text-sm leading-relaxed">{statusMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required *
                </label>
                <Select onValueChange={handleServiceChange} required disabled={isSubmitting}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Incorporation Services">Incorporation Services</SelectItem>
                    <SelectItem value="Licenses & Registrations">Licenses & Registrations</SelectItem>
                    <SelectItem value="Accounting & Compliance">Accounting & Compliance</SelectItem>
                    <SelectItem value="Legal Services">Legal Services</SelectItem>
                    <SelectItem value="Fundraising">Fundraising</SelectItem>
                    <SelectItem value="Regulatory Services">Regulatory Services</SelectItem>
                    <SelectItem value="General Consultation">General Consultation</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project or requirements..."
                  rows={5}
                  disabled={isSubmitting}
                />
              </div>

              {/* Two Buttons - WhatsApp and Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 transition-all duration-300 hover:scale-105"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Send via WhatsApp
                </Button>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-all duration-300 hover:scale-105"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending Emails...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send via Email
                    </>
                  )}
                </Button>
              </div>
            </form>

            
          </div>
        </div>
      </div>
    </section>
  )
}

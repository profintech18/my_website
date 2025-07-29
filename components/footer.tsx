"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
    { name: "Terms & Conditions", href: "/terms" },
  ]

  const services = [
    "Incorporation Services",
    "Licenses & Registrations",
    "Accounting & Compliance",
    "Legal Services",
    "Fundraising Support",
    "Regulatory Services",
    "Financial Advisory",
    "HR & Payroll Management",
  ]

  const legalServices = [
    "Company Registration",
    "GST Registration",
    "Trademark Registration",
    "ISO Certification",
    "FSSAI License",
    "Import Export Code",
    "Professional Tax",
    "Annual Compliance",
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith("/")) {
      window.location.href = href
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to top button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-blue-600 hover:bg-blue-700 rounded-full p-3 shadow-lg"
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center rounded-xl bg-white/10 p-4">
              <img
                src="/logo.png"
                alt="ProFintech Logo"
                className="w-14 h-14 rounded-xl"
              />
              <span className="ml-2 text-xl font-bold">ProFintech</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for comprehensive business solutions. From incorporation to compliance, we handle it
              all with expertise and dedication.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">Profintech18@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+91 82100 41963</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-10 w-10 text-blue-400" />
                <span className="text-gray-400">Shapoorji Pallonji Complex, New Town Kolkata, West Bengal 700135</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Core Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Popular Services</h3>
            <ul className="space-y-3">
              {legalServices.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates on business regulations, compliance requirements, and
                industry insights.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 ProFintech. All rights reserved. | Trusted Business Solutions Provider
            </p>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => scrollToSection("/terms")}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms & Conditions
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

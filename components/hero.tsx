"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-blue-800">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image for mobile: full width on top, edge to edge */}
          <div className="lg:hidden relative w-full">
            <div className="relative z-10">
              <img
                src="/hero2.webp"
                alt="Professional business team working together"
                className="w-full h-64 sm:h-80 object-cover rounded-none shadow-2xl"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-blue-100 -z-10"></div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-last lg:order-first px-6 sm:px-0">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Empowering Your Business with <span className="text-green-500">Legal & Financial Solutions</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                One-Stop Solution for Incorporation, Licenses, Compliance, Fundraising, Legal & Financial Services
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-200">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-200">Support</div>
              </div>
            </div>
          </div>

          {/* Image for desktop */}
          <div className="hidden lg:block relative">
            <div className="relative z-10">
              <img
                src="/hero2.webp"
                alt="Professional business team working together"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

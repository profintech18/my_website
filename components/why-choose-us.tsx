"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Shield, Clock, ThumbsUp, Headphones, TrendingUp, Globe, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhyChooseUs() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const benefits = [
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Your data and business information are completely secure with our advanced security measures.",
      image: "/security.jpg",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support and services to ensure your business never stops running.",
      image: "/support.jpg",
    },
    {
      icon: ThumbsUp,
      title: "Proven Results",
      description: "Track record of delivering successful outcomes for businesses of all sizes.",
      image: "/result.jpg",
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Dedicated support team with deep industry knowledge and technical expertise.",
      image: "/expert.webp",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Strategies and solutions designed to accelerate your business growth.",
      image: "/growth.jpg",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with localized expertise and global best practices.",
      image: "/global.jpg",
    },
  ]

  // Happy clients images - Updated with professional headshots
  const clientImages = [
    {
      src: "/images/client-1.png",
      alt: "Sarah Johnson, CEO of TechStart Inc.",
      name: "Sarah J.",
    },
    {
      src: "/images/client-2.png",
      alt: "Michael Chen, Founder of Digital Solutions",
      name: "Michael C.",
    },
    {
      src: "/images/client-3.png",
      alt: "Emma Rodriguez, Marketing Director",
      name: "Emma R.",
    },
    {
      src: "/images/client-4.png",
      alt: "David Thompson, Business Owner",
      name: "David T.",
    },
    {
      src: "/images/client-5.png",
      alt: "Priya Patel, Startup Founder",
      name: "Priya P.",
    },
    {
      src: "/images/client-6.png",
      alt: "James Wilson, Enterprise Client",
      name: "James W.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  // Auto-slide functionality (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand out from the competition with our unique approach, proven methodologies, and unwavering commitment
            to your success.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={benefit.image || "/placeholder.svg"}
                  alt={benefit.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden mb-16">
          <div className="relative">
            {/* Slider Container */}
            <div
              className="overflow-hidden rounded-xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mx-2">
                      {/* Image Header */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={benefit.image || "/placeholder.svg"}
                          alt={benefit.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <benefit.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center space-x-2 mt-6">
            <span className="text-sm text-gray-500 mr-2">
              {currentSlide + 1} / {benefits.length}
            </span>
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Updated CTA Section with Professional Client Images */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="/hero.jpg" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  
                </div>
                <span className="text-sm">500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
                <span className="text-sm ml-2">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

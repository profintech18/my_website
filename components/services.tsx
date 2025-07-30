"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Building2, Calculator, Scale, TrendingUp, Shield, Users, Globe, Award, BookOpen, CreditCard,
  LucideProps,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Utility to shuffle cards
function shuffleCards(cards: { category: string; icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>; color: string; image: string; services: string[]; }[]) {
  const arr = [...cards];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const ADDITIONAL_SERVICES = [
  {
    icon: CreditCard,
    color: "bg-yellow-100 text-yellow-600",
    title: "Financial Services",
    items: [
      "Personal Loan Management",
      "Business Loan Processing",
      "Home Loan Assistance",
      "Cash Flow Management",
    ],
  },
  {
    icon: Users,
    color: "bg-teal-100 text-teal-600",
    title: "HR & Payroll",
    items: [
      "Payroll Management",
      "Employee Benefits",
      "HR Policy Development",
      "Performance Management",
    ],
  },
  {
    icon: Globe,
    color: "bg-pink-100 text-pink-600",
    title: "International",
    items: [
      "Cross-border Transactions",
      "International Tax Planning",
      "Global Compliance",
      "Foreign Investment",
    ],
  },
  {
    icon: BookOpen,
    color: "bg-cyan-100 text-cyan-600",
    title: "Advisory",
    items: [
      "Business Strategy",
      "Risk Management",
      "Market Analysis",
      "Growth Planning",
    ],
  },
];

export default function Services() {
  const serviceCategories = [
    {
      category: "Incorporation Services",
      icon: Building2,
      color: "bg-blue-100 text-blue-600",
      image: "/incorporation.jpg",
      services: [
        "Pvt Ltd/Public Ltd/Limited Liability Partnership",
        "One Person Company",
        "Nidhi Company",
        "Producer Company Registration",
        "Indian Subsidiary Registration",
        "Section 8 Company (NGO)",
        "Society/Trust/RWA",
      ],
    },
    {
      category: "Licenses & Registrations",
      icon: Award,
      color: "bg-green-100 text-green-600",
      image: "/licence.webp",
      services: [
        "SSI MSME/Udyog Aadhar",
        "FSSAI Registration",
        "ISO Registration",
        "Import Export Code",
        "Gumasta (Shops & Establishment Act)",
        "Trademark/Copyright/Patent",
        "IEC/APEDA Registration",
        "DOT OSP License",
      ],
    },
    {
      category: "Accounting & Compliance",
      icon: Calculator,
      color: "bg-purple-100 text-purple-600",
      image: "/account.jpg",
      services: [
        "Annual Compliance Package",
        "GST Registration",
        "Professional Tax Registration",
        "TDS/GST/ITR Filing",
        "ESI/PF Registration",
        "DSC/DIN Registration",
      ],
    },
    {
      category: "Legal Services",
      icon: Scale,
      color: "bg-red-100 text-red-600",
      image: "/legal.jpg",
      services: [
        "Partnership Deed",
        "Vendor Service Agreement",
        "Privacy Policy/Non-Disclosure Agreement",
        "Employment Agreements",
        "Memorandum of Understanding (MoU)",
        "Website Disclaimer Policy",
      ],
    },
    {
      category: "Fundraising",
      icon: TrendingUp,
      color: "bg-orange-100 text-orange-600",
      image: "/service.jpg",
      services: [
        "Project Report",
        "Pitch Deck",
        "Term Sheet Review",
        "Founders Agreement",
        "CMA Data Preparation",
        "Startup India Registration",
      ],
    },
    {
      category: "Regulatory Services",
      icon: Shield,
      color: "bg-indigo-100 text-indigo-600",
      image: "/hero.jpg",
      services: [
        "Mergers & Acquisition",
        "Insolvency Resolution Services",
        "Venture Capital Fund Registration",
        "Real Estate Investment Trust (REIT)",
        "Corporate Social Responsibility",
      ],
    },
  ];

  // State for responsive view
  const [isMobile, setIsMobile] = useState(false);
  // Mobile main services carousel
  const [shuffled, setShuffled] = useState<ServiceCategory[]>([]);
  const [mainIndex, setMainIndex] = useState(0);
  // Mobile additional services carousel
  const [addIndex, setAddIndex] = useState(0);

  // Refs for auto slide intervals (to clean up easily)
  const mainAutoRef = useRef<NodeJS.Timeout | null>(null);
  const addAutoRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive: detect if mobile
  useEffect(() => {
    function update() {
      setIsMobile(window.innerWidth < 768);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Shuffle main cards only once at mount
  useEffect(() => {
    setShuffled(shuffleCards(serviceCategories));
  }, []);

  // Auto-slide for main carousel
  useEffect(() => {
    if (!isMobile) return;
    clearInterval(mainAutoRef.current!);
    mainAutoRef.current = setInterval(() => {
      setMainIndex(idx => (idx + 1) % shuffled.length);
    }, 4000);
    return () => {
      if (mainAutoRef.current) {
        clearInterval(mainAutoRef.current);
      }
    };
  }, [isMobile, shuffled.length]);

  // Auto-slide for additional carousel
  useEffect(() => {
    if (!isMobile) return;
    if (addAutoRef.current) {
      clearInterval(addAutoRef.current);
    }
    addAutoRef.current = setInterval(() => {
      setAddIndex(idx => (idx + 1) % ADDITIONAL_SERVICES.length);
    }, 2000);
    return () => {
      if (addAutoRef.current) {
        clearInterval(addAutoRef.current);
      }
    };
  }, [isMobile]);

  // Handlers for manual navigation
  const handlePrevMain = () => setMainIndex(idx => (idx === 0 ? shuffled.length - 1 : idx - 1));
  const handleNextMain = () => setMainIndex(idx => (idx === shuffled.length - 1 ? 0 : idx + 1));
  const handleDot = (idx: React.SetStateAction<number>) => setAddIndex(idx);

  // --- Scrolling to contact (as before) ---
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Comprehensive Services</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We offer a complete range of business, legal, and compliance services to help your organization succeed at every stage of growth.
          </p>
        </div>

        {/* MAIN SERVICES --- Responsive rendering */}
        {isMobile ? (
          <div className="relative w-full max-w-xs mx-auto">
            <div className="transition-all duration-500">
              <ServiceCard category={shuffled[mainIndex]} />
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <Button variant="outline" size="icon" onClick={handlePrevMain} aria-label="Previous">
                <svg className="w-5 h-5" viewBox="0 0 20 20"><path fill="currentColor" d="M13 16l-5-5 5-5v10z"/></svg>
              </Button>
              {/* Sequence Indicator */}
              <span className="text-sm text-gray-700 font-semibold px-2 min-w-[32px] text-center">
                {shuffled.length > 0 ? `${mainIndex + 1}/${shuffled.length}` : ""}
              </span>
              <Button variant="outline" size="icon" onClick={handleNextMain} aria-label="Next">
                <svg className="w-5 h-5" viewBox="0 0 20 20"><path fill="currentColor" d="M7 4l5 5-5 5V4z"/></svg>
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <ServiceCard key={index} category={category} />
            ))}
          </div>
        )}

        {/* ADDITIONAL SERVICES */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img src="/contact.jpg" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Specialized Services</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Beyond our core offerings, we provide specialized services tailored to specific industry needs and regulatory requirements.
              </p>
            </div>
            {isMobile ? (
              <div>
                <div className="transition-all duration-500">
                  <AdditionalCard data={ADDITIONAL_SERVICES[addIndex]} />
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                  {ADDITIONAL_SERVICES.map((_, idx) => (
                    <span
                      key={idx}
                      onClick={() => handleDot(idx)}
                      className={`inline-block w-2.5 h-2.5 rounded-full mx-1 cursor-pointer transition-all ${
                        addIndex === idx ? "bg-blue-600" : "bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ADDITIONAL_SERVICES.map((data, idx) => (
                  <AdditionalCard key={idx} data={data} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* --- CTA --- */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src="/contact.jpg" alt="Background" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Don't see exactly what you're looking for? We specialize in creating tailored solutions that meet your
                specific business requirements and regulatory needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
                  onClick={scrollToContact}
                >
                  Request Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Service card
type ServiceCategory = {
  category: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  image: string;
  services: string[];
};

function ServiceCard({ category }: { category: ServiceCategory }) {
  if (!category) return null;
  return (
    <div
      className="bg-gradient-to-br from-blue-600 to-green-500 border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full text-white"
    >
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.image || "/placeholder.svg"}
          alt={category.category}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
            <category.icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
        <div className="flex-grow">
          <ul className="space-y-3 mb-6">
            {category.services.map((service: string, i: number) => (
              <li key={i} className="flex items-start text-sm text-gray-100 leading-relaxed">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="hover:text-white transition-colors duration-200">{service}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
         
        </div>
      </div>
    </div>
  );
}

// --- Additional services card
type AdditionalService = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  title: string;
  items: string[];
};

function AdditionalCard({ data }: { data: AdditionalService }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${data.color}`}>
        <data.icon className="h-5 w-5" />
      </div>
      <h4 className="font-semibold text-gray-900 mb-2">{data.title}</h4>
      <ul className="text-sm text-gray-600 space-y-1">
        {data.items.map((item, idx) => (
          <li key={idx}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Shield, FileText, Globe, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsAndConditions() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const goBack = () => {
    window.history.back()
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Button
              onClick={goBack}
              variant="outline"
              className="mb-6 bg-white/10 text-white border-white/30 hover:bg-white hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Please read these terms and conditions carefully before using our services. By engaging with BusinessCorp,
              you agree to be bound by these terms.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                <span>Last Updated: January 2024</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                <span>Legally Binding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
              {/* Table of Contents */}
              <div className="mb-12 p-6 bg-blue-50 rounded-xl">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <a href="#acceptance" className="text-blue-600 hover:text-blue-800 transition-colors">
                    1. Acceptance of Terms
                  </a>
                  <a href="#services" className="text-blue-600 hover:text-blue-800 transition-colors">
                    2. Services Provided
                  </a>
                  <a href="#client-obligations" className="text-blue-600 hover:text-blue-800 transition-colors">
                    3. Client Obligations
                  </a>
                  <a href="#fees-payment" className="text-blue-600 hover:text-blue-800 transition-colors">
                    4. Fees and Payment
                  </a>
                  <a href="#confidentiality" className="text-blue-600 hover:text-blue-800 transition-colors">
                    5. Confidentiality
                  </a>
                  <a href="#liability" className="text-blue-600 hover:text-blue-800 transition-colors">
                    6. Limitation of Liability
                  </a>
                  <a href="#intellectual-property" className="text-blue-600 hover:text-blue-800 transition-colors">
                    7. Intellectual Property
                  </a>
                  <a href="#termination" className="text-blue-600 hover:text-blue-800 transition-colors">
                    8. Termination
                  </a>
                  <a href="#governing-law" className="text-blue-600 hover:text-blue-800 transition-colors">
                    9. Governing Law
                  </a>
                  <a href="#contact" className="text-blue-600 hover:text-blue-800 transition-colors">
                    10. Contact Information
                  </a>
                </div>
              </div>

              {/* Terms Sections */}
              <div className="space-y-12">
                {/* Section 1 */}
                <section id="acceptance">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    Acceptance of Terms
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      By accessing and using the services provided by BusinessCorp ("Company", "we", "us", or "our"),
                      you ("Client", "you", or "your") acknowledge that you have read, understood, and agree to be bound
                      by these Terms and Conditions.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      These terms constitute a legally binding agreement between you and BusinessCorp. If you do not
                      agree with any part of these terms, you must not use our services.
                    </p>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="services">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    Services Provided
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      BusinessCorp provides comprehensive business solutions including but not limited to:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Incorporation Services</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Private Limited Company Registration</li>
                          <li>• Public Limited Company Registration</li>
                          <li>• Limited Liability Partnership (LLP)</li>
                          <li>• One Person Company (OPC)</li>
                          <li>• Section 8 Company (NGO)</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Licenses & Registrations</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• GST Registration</li>
                          <li>• FSSAI License</li>
                          <li>• Trademark Registration</li>
                          <li>• ISO Certification</li>
                          <li>• Import Export Code (IEC)</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Compliance Services</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Annual Filing & Returns</li>
                          <li>• Tax Planning & Filing</li>
                          <li>• Audit & Assurance</li>
                          <li>• Regulatory Compliance</li>
                          <li>• Corporate Governance</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Legal & Advisory</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Legal Documentation</li>
                          <li>• Contract Drafting</li>
                          <li>• Business Advisory</li>
                          <li>• Fundraising Support</li>
                          <li>• Merger & Acquisition</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      All services are provided subject to applicable laws and regulations. We reserve the right to
                      modify or discontinue any service with reasonable notice.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="client-obligations">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    Client Obligations
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">As our client, you agree to:</p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Provide accurate, complete, and timely information required for service delivery
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Cooperate fully with our team and respond promptly to requests for information
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Pay all fees and charges as agreed upon in the service agreement
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Comply with all applicable laws and regulations
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Maintain confidentiality of sensitive information shared during service delivery
                        </li>
                      </ul>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Failure to meet these obligations may result in delays, additional charges, or termination of
                      services.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="fees-payment">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    Fees and Payment Terms
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">Payment Terms</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>• Service fees are due as per agreed payment schedule</li>
                          <li>• Government fees are additional and payable in advance</li>
                          <li>• Late payment may incur additional charges</li>
                          <li>• All payments are non-refundable unless specified</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">Accepted Payment Methods</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>• Bank Transfer (NEFT/RTGS/IMPS)</li>
                          <li>• Online Payment Gateway</li>
                          <li>• Cheque/Demand Draft</li>
                          <li>• Digital Wallets (UPI/PayTM)</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      All fees are quoted in Indian Rupees (INR) unless otherwise specified. Prices are subject to
                      change with prior notice. Additional charges may apply for expedited services or complex
                      requirements.
                    </p>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="confidentiality">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">5</span>
                    </div>
                    Confidentiality and Data Protection
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-6">
                      <div className="flex items-center mb-4">
                        <Shield className="h-6 w-6 text-purple-600 mr-3" />
                        <h4 className="font-semibold text-gray-900">Our Commitment to Your Privacy</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        We are committed to protecting your confidential information and maintaining the highest
                        standards of data security. All client information is treated with strict confidentiality.
                      </p>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      BusinessCorp agrees to maintain strict confidentiality regarding all client information,
                      documents, and business affairs. We will not disclose any confidential information to third
                      parties without your explicit written consent, except as required by law.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your personal data
                      against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="liability">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">6</span>
                    </div>
                    Limitation of Liability
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                      <p className="text-red-800 font-medium mb-2">Important Disclaimer</p>
                      <p className="text-red-700 text-sm">
                        Please read this section carefully as it limits our liability and affects your legal rights.
                      </p>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      BusinessCorp's liability is limited to the fees paid for the specific service in question. We
                      shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We provide services based on information provided by clients and applicable laws at the time of
                      service delivery. We are not responsible for changes in law or regulations that may affect
                      previously completed work.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Our liability for any claim arising from our services shall not exceed the total amount paid by
                      the client for the specific service giving rise to the claim.
                    </p>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="intellectual-property">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">7</span>
                    </div>
                    Intellectual Property Rights
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      All intellectual property rights in our service methodologies, templates, and proprietary
                      processes remain with BusinessCorp. Clients receive a limited license to use deliverables for
                      their intended business purposes.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Clients retain ownership of their business information and data. We may use anonymized case
                      studies and general business insights for marketing purposes, subject to confidentiality
                      obligations.
                    </p>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="termination">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">8</span>
                    </div>
                    Termination of Services
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Either party may terminate the service agreement with written notice. Termination does not affect
                      obligations that have already accrued or the right to receive payment for services rendered.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Grounds for Immediate Termination:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Material breach of terms and conditions</li>
                        <li>• Non-payment of fees after due notice</li>
                        <li>• Provision of false or misleading information</li>
                        <li>• Illegal or unethical business practices</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 9 */}
                <section id="governing-law">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">9</span>
                    </div>
                    Governing Law and Jurisdiction
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      These terms and conditions are governed by the laws of India. Any disputes arising from these
                      terms or our services shall be subject to the exclusive jurisdiction of the courts in [Your City],
                      India.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      We encourage clients to resolve disputes through direct communication. If formal dispute
                      resolution is necessary, we prefer mediation or arbitration before litigation.
                    </p>
                  </div>
                </section>

                {/* Section 10 */}
                <section id="contact">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">10</span>
                    </div>
                    Contact Information
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      For questions about these terms and conditions or our services, please contact us:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-4">Business Inquiries</h4>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 text-blue-600 mr-3" />
                            <span className="text-gray-600">Profintech18@gmail.com</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 text-blue-600 mr-3" />
                            <span className="text-gray-600">+91 82100 41963</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-4">Office Address</h4>
                        <div className="flex items-start">
                          <Globe className="h-4 w-4 text-green-600 mr-3 mt-1" />
                          <div className="text-gray-600">
                            <p>BusinessCorp</p>
                            <p>123 Business Street</p>
                            <p>New York, NY 10001</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Footer Actions */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                  <p className="text-sm text-gray-500">Last updated: January 2024 | Version 2.1</p>
                  <div className="flex space-x-4">
                    <Button onClick={scrollToTop} variant="outline">
                      Back to Top
                    </Button>
                    <Button onClick={goBack}>Return to Home</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

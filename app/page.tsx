import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import WhyChooseUs from "@/components/why-choose-us"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}

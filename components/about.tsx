import { Users, Target, Award, Zap } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team consists of industry experts with years of experience",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "We focus on achieving your business objectives efficiently",
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized for excellence in service delivery and innovation",
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "Quick turnaround times without compromising on quality",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/about.jpg"
              alt="Our professional team collaborating"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About Our Company</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a leading business solutions company dedicated to helping organizations achieve their full
                potential. With over a decade of experience, we've successfully transformed hundreds of businesses
                across various industries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence, innovation, and client satisfaction has made us a trusted partner for
                businesses looking to grow and succeed in today's competitive market.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

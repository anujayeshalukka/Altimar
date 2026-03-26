import { CheckCircle2, Users, Target, Shield, Briefcase } from "lucide-react";

export function About() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-[#264740] py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#264740] to-[#4e8377] opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Us</h1>
          <p className="mt-4 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
            Delivering technical excellence and robust engineering solutions across critical industries.
          </p>
        </div>
      </div>

      {/* Company Intro */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1762787804897-32d181381de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBzaGlwYnVpbGRpbmclMjBlbmdpbmVlcnN8ZW58MXx8fHwxNzc0MDkwNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Marine Shipbuilding"
                className="rounded-2xl object-cover shadow-xl h-[600px] w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Company Introduction</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Altimar Energy Solutions is a premier engineering and technical services provider specializing in the energy, marine, and industrial sectors. 
                </p>
                <p>
                  With a foundation built on technical rigor and operational understanding, we provide end-to-end solutions ranging from conceptual design to field commissioning. Our multi-disciplinary team is equipped to handle complex challenges in some of the most demanding environments globally.
                </p>
                <p>
                  We believe that strong engineering is the backbone of reliable operations. That's why every project we undertake is executed with an unwavering commitment to quality, safety, and long-term performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="h-14 w-14 bg-[#4e8377]/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-[#4e8377]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the globally recognized benchmark for engineering reliability and technical innovation in critical infrastructure, marine, and energy sectors.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="h-14 w-14 bg-[#264740]/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-[#264740]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower our clients' operations through robust, safe, and efficient engineering solutions, delivered by a highly skilled team committed to excellence and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Approach */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-16">Our Engineering Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Field-Oriented Design", desc: "We design for reality, ensuring our engineering solutions translate seamlessly to practical field implementation and operation." },
              { title: "Reliability Focus", desc: "Every system is engineered to maximize uptime, withstand harsh conditions, and reduce lifecycle maintenance costs." },
              { title: "Safety First", desc: "Safety is integrated at every phase, from initial design concepts through to final commissioning and operational handover." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-[#264740] rounded-full blur-xl opacity-20" />
                  <div className="relative h-24 w-24 bg-white border-2 border-[#4e8377] rounded-full flex items-center justify-center text-3xl font-bold text-[#264740]">
                    0{idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 max-w-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useRef } from "react";
import { CheckCircle2, Users, Target, Shield, Briefcase } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutImg from "../components/images/aboutmission.jpg";
import about01Img from "../components/images/about01.jpg";
import aboutMissionImg from "../components/images/about.jpg";

export function About() {
  const missionSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: missionSectionRef,
    offset: ["start end", "end start"]
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div 
        className="relative h-[500px] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">About Us</h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
            Delivering technical excellence and robust engineering solutions across critical industries.
          </p>
        </div>
      </div>

      {/* Company Intro */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Decorative background text */}
        <span
          className="absolute top-0 left-1/2 -translate-x-1/2 text-gray-100 font-bold leading-none select-none pointer-events-none z-0 text-center w-full"
          style={{ fontSize: "clamp(80px, 20vw, 250px)" }}
          aria-hidden="true"
        >
          About
        </span>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-left lg:text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold text-sm leading-8 text-[#4e8377] uppercase tracking-wider"
            >
              Altimar Energy Solutions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Trusted Engineering Excellence
            </motion.p>
          </div>

          <div className="grid grid-cols-1 text-center items-center">
            {/* <div>
              <img
                src={about01Img}
                alt="Marine Shipbuilding"
                className="rounded-2xl object-cover shadow-xl h-[600px] w-full"
              />
            </div> */}
            <div className="pt-2">
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

      {/* Vision & Mission - Redesigned based on reference slide */}
      <section ref={missionSectionRef} className="bg-[#264740] pt-24 sm:pt-32 pb-0 relative overflow-hidden">
        {/* Decorative background logo with parallax effect */}
        <motion.div 
          style={{ y: parallaxY }}
          className="absolute right-0 top-0 opacity-5 pointer-events-none translate-x-1/4 -translate-y-1/4 scale-150 z-0"
        >
          <img src={about01Img} alt="" className="w-full h-auto" />
        </motion.div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-start mb-24">
            <div className="text-left pt-12">
              <h2 className="text-4xl font-light tracking-tight text-white sm:text-6xl mb-8 leading-tight">
                Our <span className="font-bold">Mission</span> and <br />
                <span className="font-bold">Vision</span> Statement
              </h2>
              <div className="h-1 w-24 bg-white/20 mb-8 rounded-full" />
              <p className="text-lg leading-8 text-white/80 max-w-lg font-light">
                Delivering technical excellence and robust engineering solutions across critical industries by defining purpose, excellence, and operational reliability for our global partners.
              </p>
            </div>
            
            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Vision Card */}
              <div className="bg-white rounded-2xl shadow-2xl flex flex-col relative pt-14 transform hover:scale-[1.02] transition-transform duration-300 border border-white/10 overflow-hidden">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-20 w-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#264740]/5 z-20">
                  <div className="h-14 w-14 bg-[#264740]/10 rounded-full flex items-center justify-center">
                    <Target className="h-7 w-7 text-[#264740]" />
                  </div>
                </div>
                <div className="bg-[#264740] py-5 text-center relative">
                  <h3 className="text-lg font-bold text-white uppercase tracking-[0.2em] mb-0">Vision</h3>
                </div>
                <div className="p-8 pb-10 text-center flex-grow flex items-center justify-center">
                  <p className="text-gray-600 leading-relaxed text-[15px] font-medium italic">
                    "To be the globally recognized benchmark for engineering reliability and technical innovation in critical infrastructure, marine, and energy sectors."
                  </p>
                </div>
              </div>
              
              {/* Mission Card */}
              <div className="bg-white rounded-2xl shadow-2xl flex flex-col relative pt-14 transform hover:scale-[1.02] transition-transform duration-300 border border-white/10 overflow-hidden">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-20 w-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#264740]/5 z-20">
                  <div className="h-14 w-14 bg-[#264740]/10 rounded-full flex items-center justify-center">
                    <Shield className="h-7 w-7 text-[#264740]" />
                  </div>
                </div>
                <div className="bg-[#264740] py-5 text-center relative">
                  <h3 className="text-lg font-bold text-white uppercase tracking-[0.2em] mb-0">Mission</h3>
                </div>
                <div className="p-8 pb-10 text-center flex-grow flex items-center justify-center">
                  <p className="text-gray-600 leading-relaxed text-[15px] font-medium italic">
                    "To empower our clients' operations through robust, safe, and efficient engineering solutions, delivered by a highly skilled team committed to excellence and sustainable practices."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Feature Image - Spanning edge to edge with overlay */}
        <div className="relative h-[400px] md:h-[600px] w-full mt-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-[#264740]/30 mix-blend-multiply z-10" />
          {/* Subtle logo watermark over image */}
          <div className="absolute bottom-10 right-10 z-20 opacity-20 pointer-events-none filter brightness-0 invert scale-50 md:scale-75">
             <img src={about01Img} alt="" className="h-24 w-auto" />
          </div>
          <img 
            src={aboutMissionImg} 
            alt="Engineering Team Collaboration" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </div>
      </section>

      {/* Engineering Approach */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">


          <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-bold text-sm leading-8 text-[#4e8377] uppercase tracking-wider"
              >
                Steps We Take
              </motion.h2>

          <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-16">Our Engineering Approach</h2>
          
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

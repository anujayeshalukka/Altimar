import { ArrowRight, CheckCircle2, Factory, Zap, Anchor, Settings, Wrench, Cpu, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

import altimarSqr from "../components/images/altimar-sqr.png";
import logisticsBg from "../components/images/logistics.jpg";

import energyImg from "../components/images/energy_utility.png";
import marineImg from "../components/images/marine_engineering.png";
import electricalImg from "../components/images/electrical_automation.png";
import equipmentImg from "../components/images/equipment_supply.png";
import testingImg from "../components/images/testing_commissioning.png";
import maintenanceImg from "../components/images/maintenance_retrofit.png";
import whyUsImg from "../components/images/whyus.png";




export function Home() {
  return (
    <div className="relative bg-transparent">
      {/* Hero Section with Sticky Video Background */}
      <section className="sticky top-0 w-full h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video11.mp4" type="video/mp4" />
        </video>

        {/* Color overlay matching exact hex requested */}
        <div className="absolute inset-0 bg-[#060c0a] opacity-70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#06070c] opacity-50" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full sm:mt-16">
          {/* Mobile-only background logo */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full opacity-30 pointer-events-none sm:hidden mix-blend-screen">
            <img src={altimarSqr} alt="" className="w-full h-auto object-contain" />
          </div>

          <div className="relative z-10 mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-light text-left tracking-tight text-white mb-7 drop-shadow-lg sm:text-7xl md:text-8xl lg:text-tight"
            >
              Engineering Solutions Built for <span className="font-bold">Real-World</span> Performance
            </motion.h1>

            <div className="flex gap-6 mb-10 justify-start items-start">
              <span className="bg-white h-[1px] w-[100px] md:w-[200px] shrink-0 hidden sm:block mt-3"></span>
              <div className="flex flex-col text-left">
                <p className="text-[16px] leading-6 text-gray-200 drop-shadow-md max-w-xl m-0 mb-8">
                  Altimar provides comprehensive engineering, marine, and industrial services designed for reliability, safety, and operational excellence in demanding environments.
                </p>

              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="rounded-md bg-[#264740] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1f3a34] transition-colors">
                Contact Us
              </Link>
              <Link to="/services" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#264740] border border-white/20 shadow-sm hover:bg-white/20 transition-colors backdrop-blur-sm">
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Right Corner Text */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20">
          <span className="text-sm md:text-base font-light tracking-wide text-white drop-shadow-md">
            Engineering Systems | Energy Solutions | Technical Services
          </span>
        </div>
      </section>

      {/* Rest of the homepage that slides over the sticky video */}
      <div className="relative z-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.15)]  pb-0 overflow-hidden" style={{ marginTop: "0px" }}>

        {/* About Preview */}
        <section className="py-20 sm:py-32 relative overflow-hidden lg:min-h-screen lg:flex lg:items-center">
          {/* Decorative background text */}
          <span
            className="absolute top-0 left-1/2 -translate-x-1/2 text-gray-200/50 font-bold leading-none select-none pointer-events-none z-0 text-center w-full"
            style={{ fontSize: "clamp(80px, 20vw, 200px)" }}
            aria-hidden="true"
          >
            About
          </span>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-left lg:text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className=" font-bold text-sm leading-8  text-[#4e8377] uppercase tracking-wider"
              >
                Altimar Energy Solutions
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              >
                Trusted Engineering Excellence
              </motion.p>

              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-5xl lg:mx-auto">
                Altimar Energy is an engineering-driven organization delivering energy systems, marine and industrial engineering services, system integration, and lifecycle technical support. We specialise in execution, commissioning, troubleshooting, maintenance, and retrofit solutions for critical engineering systems.

              </p>
              <p className="mt-6 font-semibold text-lg leading-8 text-gray-600">Engineering Systems | Energy Solutions | Technical Services</p>
              <div className="mt-10 ">
                 <Link to="/contact" className="rounded-md bg-[#264740] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1f3a34] transition-colors">
                Contact Us
              </Link>
              </div>
              <div className="mt-16 text-left ">
                <h3 className="sm:text-xl text-sm font-bold text-[#264740] uppercase tracking-wider mb-8 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#264740] "></span>
                  What We Do
                </h3>
                <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-left lg:text-center">
                  {[
                    { title: "Energy & Utility Systems Engineering", icon: Zap },
                    { title: "Marine & Shipboard Engineering Services", icon: Anchor },
                    { title: "Electrical, Control & Automation Support", icon: Cpu },
                    { title: "Equipment Supply, Integration & Support", icon: Settings },
                    { title: "Testing, Commissioning & Overhauling", icon: ShieldCheck }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 text-left lg:text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#4e8377] shadow-sm flex items-center justify-center mb-4 transition-colors lg:mx-auto">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-colors" />
                      </div>
                      <h4 className="text-[12px] sm:text-sm font-semibold text-gray-900 leading-tight">
                        {item.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision Section with Parallax */}
        <section 
          className="relative py-32 sm:py-48 bg-fixed bg-center bg-cover overflow-hidden"
          style={{ backgroundImage: `url(${logisticsBg})` }}
        >
          {/* Dark Gray Overlay */}
          <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#264740]/20" aria-hidden="true" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold tracking-widest text-white uppercase mb-4"
            >
              Our Vision
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-7xl font-light text-white tracking-tight max-w-7xl mx-auto"
            >
              "To be a trusted engineering services partner for <span className="font-bold">Energy, Marine, & Industrial Systems</span> "
            </motion.p>


<div className="flex gap-6 mt-4 justify-end items-center">
              <span className="bg-white h-[1px] w-[100px] md:w-[200px] shrink-0 hidden sm:block mt-3"></span>
              <div className="flex flex-col text-right">
                <p className="text-[16px] leading-6 text-gray-200 drop-shadow-md max-w-xl m-0 ">
                  Altimar Energy Solutions                </p>

              </div>
            </div>


          </div>
        </section>

        {/* Services Overview */}
        <section 
          className="py-20 sm:py-32 relative overflow-hidden bg-center bg-cover">
          {/* Overlay for readability */}
          {/* <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" aria-hidden="true" /> */}
          
          <span
            className="absolute top-0 left-0 text-gray-100 font-bold leading-none select-none pointer-events-none z-0"
            style={{ fontSize: "clamp(80px, 20vw, 200px)" }}
            aria-hidden="true"
          >
            Services
          </span>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mb-16 md:flex md:items-center md:justify-between">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-bold text-sm leading-8  text-[#4e8377] uppercase tracking-wider"
                >
                  Technical Capabilities
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                >
                  Core Services
                </motion.p>
              </div>

              <div className="mt-6 flex md:ml-4 md:mt-0">
                <Link to="/services" className="text-sm font-semibold leading-6 text-[#264740] flex items-center gap-1 hover:text-[#4e8377] transition-colors">
                  View all services <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { 
                  title: "Energy & Utility Systems", 
                  image: energyImg,
                  points: [
                    "Power generation and distribution support",
                    "Electrical and auxiliary utility systems",
                    "System modifications and upgrades",
                    "Operational and performance support"
                  ]
                },
                { 
                  title: "Marine & Shipboard Engineering", 
                  image: marineImg,
                  points: [
                    "Shipboard electrical and automation systems",
                    "Machinery and auxiliary system support",
                    "Retrofit and modernisation works",
                    "Onboard and shipyard engineering assistance"
                  ]
                },
                { 
                  title: "Electrical, Control & Automation", 
                  image: electricalImg,
                  points: [
                    "Control and monitoring systems",
                    "Electrical panels and system integration",
                    "Instrumentation and automation support",
                    "System testing and functional validation"
                  ]
                },
                { 
                  title: "Equipment Supply & Integration", 
                  image: equipmentImg,
                  points: [
                    "Supply of engineering equipment and spares",
                    "System integration and installation support",
                    "OEM coordination and interface management",
                    "Technical documentation and as-built records"
                  ]
                },
                { 
                  title: "Testing & Commissioning", 
                  image: testingImg,
                  points: [
                    "Pre-commissioning and commissioning activities",
                    "Functional and performance testing",
                    "Fault diagnosis and rectification",
                    "Trials and acceptance support"
                  ]
                },
                { 
                  title: "Maintenance & Retrofit", 
                  image: maintenanceImg,
                  points: [
                    "Preventive and corrective maintenance",
                    "Equipment overhauling and refurbishment",
                    "System retrofits and life-extension works",
                    "Shutdown and breakdown support"
                  ]
                }
              ].map((service, idx) => (
                <div 
                  key={idx} 
                  className="group relative h-[400px] overflow-hidden rounded-3xl bg-gray-900 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Background Image */}
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:mb-6 transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Points list - revealed on hover on desktop, visible on mobile via smaller scale or always? 
                        Let's make it reveal beautifully. */}
                    <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-[200px]">
                      <ul className="space-y-2">
                        {service.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#4e8377] mt-1.5 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4e8377] hover:text-white transition-colors">
                          Learn More <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Why Altimar */}
        {/* Why Altimar - Redesigned to match provided reference */}
        <section className="py-20 sm:py-32 relative overflow-hidden bg-gray-50/50">
          <span
            className="absolute top-0 left-1/2 -translate-x-1/2 text-gray-200/50 font-bold leading-none select-none pointer-events-none z-0 text-center w-full"
            style={{ fontSize: "clamp(80px, 20vw, 200px)" }}
            aria-hidden="true"
          >
            Why Us
          </span>
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-bold text-sm leading-8 text-[#4e8377] uppercase tracking-wider"
              >
                Expertise & Reliability
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              >
                Why Choose Altimar?
              </motion.p>
            </div>


            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              {/* Left Column Features */}
              <div className="space-y-12 order-2 lg:order-1">
                {[
                  { 
                    title: "Safety & Compliance", 
                    icon: ShieldCheck, 
                    desc: "Uncompromising commitment to safety and standards." 
                  },
                  { 
                    title: "Expert Engineering", 
                    icon: Settings, 
                    desc: "Cross-disciplinary expertise across energy and marine." 
                  },
                  { 
                    title: "Proven Track Record", 
                    icon: CheckCircle2, 
                    desc: "Success in the most demanding industrial environments." 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative group text-right flex items-center justify-end gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1 max-w-[200px] ml-auto">{item.desc}</p>
                    </div>
                    <div className="h-16 w-16 shrink-0 rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#264740] group-hover:bg-[#264740] group-hover:text-white transition-all duration-300">
                      <item.icon className="h-8 w-8" />
                    </div>
                    {/* Decorative connecting line (Desktop only) */}
                    <div className="hidden lg:block absolute -right-8 top-1/2 h-px w-8 bg-gray-200 group-hover:bg-[#4e8377] transition-colors" />
                  </div>
                ))}
              </div>

              {/* Central Image Container */}
              <div className="relative order-1 lg:order-2 flex justify-center py-12 lg:py-0">
                <div className="relative transform hover:scale-105 transition-transform duration-700">
                  {/* Decorative Glow */}
                  <div className="absolute inset-0 bg-[#4e8377]/10 blur-3xl rounded-full" />
                  <img
                    src={whyUsImg}
                    alt="Why Choose Altimar"
                    className="relative w-full max-w-[400px] h-auto object-contain mx-auto"
                  />
                  {/* Additional Floating elements to mirror reference style if desired 
                      The image itself seems to have the globe/plane/ship/truck. */}
                </div>
              </div>

              {/* Right Column Features */}
              <div className="space-y-12 order-3">
                {[
                  { 
                    title: "Turnkey Management", 
                    icon: Factory, 
                    desc: "Full lifecycle management from design to execution." 
                  },
                  { 
                    title: "Rapid Mobilization", 
                    icon: Zap, 
                    desc: "Agile response and quick deployment for support." 
                  },
                  { 
                    title: "Lifecycle Support", 
                    icon: Wrench, 
                    desc: "Dedicated maintenance, repair and retrofit services." 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative group text-left flex items-center justify-start gap-6">
                    <div className="h-16 w-16 shrink-0 rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#264740] group-hover:bg-[#264740] group-hover:text-white transition-all duration-300">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1 max-w-[200px]">{item.desc}</p>
                    </div>
                    {/* Decorative connecting line (Desktop only) */}
                    <div className="hidden lg:block absolute -left-8 top-1/2 h-px w-8 bg-gray-200 group-hover:bg-[#4e8377] transition-colors" />
                  </div>
                ))}
              </div>

            </div>
            
            <div className="mt-20 text-center">
              <Link to="/about" className="rounded-md bg-[#264740] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#1a2e2a] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Learn More About Our Values
              </Link>
            </div>
          </div>
        </section>


        {/* CTA Banner */}
        <section className="bg-[#4e8377] relative overflow-hidden">
          
          <div className="absolute inset-0 opacity-10 pattern-grid-white/[0.2]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-light tracking-tight text-white sm:text-4xl"
            >
              Ready to discuss your next project?
              <br />
              <span className="text-[#1a2e2a] text-6xl font-bold">Let's Engineer a Solution.</span>
            </motion.h2>

            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <Link
                to="/contact"
                className="rounded-md bg-[#264740] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#1a2e2a] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

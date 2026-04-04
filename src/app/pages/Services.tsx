import { Zap, Anchor, Cpu, Wrench, Settings, Search, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import serviceImg from "../components/images/service.jpg";

const services = [
  {
    id: "energy",
    title: "Energy Engineering Services",
    icon: Zap,
    description: "Comprehensive engineering for power generation, distribution, and critical utility infrastructure.",
    points: [
      "Power generation system design",
      "Substation and switchgear engineering",
      "Utility distribution networks",
      "Energy efficiency optimization",
      "Renewable energy integration"
    ]
  },
  {
    id: "marine",
    title: "Marine Engineering Services",
    icon: Anchor,
    description: "Specialized engineering services for maritime vessels, offshore platforms, and port facilities.",
    points: [
      "Vessel electrical systems",
      "Propulsion control integration",
      "Offshore rig power solutions",
      "Ballast water management systems",
      "Marine compliance upgrades"
    ]
  },
  {
    id: "automation",
    title: "Electrical & Automation Services",
    icon: Cpu,
    description: "Advanced automation, control system design, and implementation for complex industrial processes.",
    points: [
      "PLC / SCADA system design and programming",
      "Instrumentation and control engineering",
      "Industrial network architecture",
      "Process safety systems",
      "HMI development"
    ]
  },
  {
    id: "supply",
    title: "Industrial Engineering Solutions",
    icon: Settings,
    description: "Sourcing and seamless integration of high-quality engineering components and systems.",
    points: [
      "Technical procurement",
      "Vendor management and FAT",
      "Custom panel fabrication",
      "System packaging and skids",
      "Logistics and handling"
    ]
  },
  {
    id: "testing",
    title: "Testing & Commissioning",
    icon: Search,
    description: "Rigorous field testing and commissioning to ensure safe and compliant system operations.",
    points: [
      "Site Acceptance Testing (SAT)",
      "System integration testing",
      "Protection relay calibration",
      "Loop checking and function tests",
      "Handover documentation"
    ]
  },
  {
    id: "maintenance",
    title: "Commissioning & Maintenance Services",
    icon: Wrench,
    description: "Lifecycle support, predictive maintenance, and strategic system upgrades for aging assets.",
    points: [
      "System modernization and retrofits",
      "Preventative maintenance planning",
      "Troubleshooting and fault finding",
      "Obsolete equipment replacement",
      "Asset lifecycle management"
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Services() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div 
        className="relative h-[500px] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${serviceImg})` }}
      >
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">Our Core Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
            Comprehensive engineering capabilities engineered for reliability and designed for scale.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Decorative background text */}
        <span
          className="absolute top-0 left-0 lg:left-1/2 translate-x-0 lg:-translate-x-1/2 text-gray-100 font-bold leading-none select-none pointer-events-none z-0 text-left lg:text-center w-full px-6 lg:px-0"
          style={{ fontSize: "clamp(80px, 20vw, 250px)" }}
          aria-hidden="true"
        >
          Services
        </span>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-left lg:text-center mb-20">
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold text-sm leading-8 text-[#4e8377] uppercase tracking-wider"
            >
              Excellence in Engineering
            </motion.h3>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Precision technical solutions <br className="hidden sm:block" /> for critical infrastructure
            </motion.h3>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div 
                key={service.id} 
                variants={item}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative bg-[#f8faf9] rounded-[40px] p-8 sm:p-10 border border-gray-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(38,71,64,0.1)] transition-all duration-500 overflow-hidden"
              >
                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#264740]/10 rounded-[40px] transition-all duration-500" />
                
                {/* Background Large Icon */}
                {/* <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700 pointer-events-none">
                  <service.icon className="w-64 h-64 text-[#264740]" />
                </div> */}
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="h-16 w-16 bg-[#398677] rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-[#4e8377] transition-all duration-500">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#264740] transition-colors">
                    {service.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-8 text-base leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-auto">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-5 w-5 rounded-full bg-[#4e8377]/10 flex items-center justify-center">
                            <Check className="h-3 w-3 text-[#4e8377]" />
                          </div>
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-10">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-md bg-[#264740] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1f3a34] transition-all transform active:scale-95"
                    >
                      Enquire Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
    </div>
  );
}

import { Zap, Anchor, Cpu, Wrench, Settings, Search, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";
import serviceImg from "../components/images/service.jpg";

const services = [
  {
    id: "energy",
    title: "Energy & Utility Systems",
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
    title: "Marine & Shipboard Engineering",
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
    title: "Electrical, Control & Automation",
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
    title: "Equipment Supply & Integration",
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
    title: "Maintenance & Retrofit",
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

export function Services() {
  return (
    <div className="bg-gray-100 pb-24">
      {/* Page Header */}
      <div 
        className="relative h-[500px] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${serviceImg})` }}
      >
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">Our Services</h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
            Comprehensive engineering capabilities engineered for reliability and designed for scale.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                <service.icon className="w-48 h-48 text-[#264740]" />
              </div>
              
              <div className="relative z-10">
                <div className="h-16 w-16 bg-[#264740] rounded-2xl flex items-center justify-center mb-8 shadow-md">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  {service.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-[#4e8377]" />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#264740] hover:text-[#4e8377] transition-colors group-hover:bg-gray-100 px-4 py-2 rounded-lg -ml-4"
                >
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

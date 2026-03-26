import { Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

const projects = [
  {
    title: "Offshore Platform Electrical Upgrade",
    sector: "Ports & Offshore",
    date: "2024",
    description: "Complete overhaul of main electrical distribution and control systems on a deepwater drilling rig.",
    scope: [
      "Switchgear replacement and integration",
      "Power management system (PMS) upgrade",
      "Hazardous area compliance auditing",
      "Offshore execution and commissioning"
    ]
  },
  {
    title: "Automated Manufacturing Plant Commissioning",
    sector: "Industrial & Manufacturing",
    date: "2023",
    description: "Turnkey electrical and automation commissioning for a new 500,000 sq ft automotive component facility.",
    scope: [
      "PLC network architecture design",
      "Motor control center (MCC) installation",
      "Site acceptance testing (SAT)",
      "Safety instrumented systems (SIS) validation"
    ]
  },
  {
    title: "Vessel Hybrid Propulsion Integration",
    sector: "Marine & Shipbuilding",
    date: "2023",
    description: "Retrofit of a commercial ferry with a hybrid-electric propulsion system to meet new emissions standards.",
    scope: [
      "Battery energy storage system (BESS) integration",
      "Drive system programming",
      "Shipboard electrical modifications",
      "Sea trial support"
    ]
  },
  {
    title: "Utility Substation Modernization",
    sector: "Energy & Utilities",
    date: "2022",
    description: "Upgraded aging protection and control infrastructure for a regional utility provider.",
    scope: [
      "Protection relay replacement",
      "SCADA system modernization",
      "Medium voltage cable testing",
      "Outage planning and execution"
    ]
  }
];

export function Projects() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-[#4e8377] py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#264740] to-[#4e8377]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Track Record & Experience</h1>
          <p className="mt-4 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
            A portfolio of successful engineering executions across challenging industrial environments.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Proven Execution</h2>
          <p className="text-lg text-gray-600">
            Our experience spans hundreds of projects globally, demonstrating our capability to handle multi-disciplinary engineering scopes from concept to final handover. Below is a selection of typical project profiles that highlight our diverse capabilities.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-10 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="lg:w-1/3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4e8377]/10 text-[#4e8377] text-sm font-semibold mb-4">
                  <Briefcase className="w-4 h-4" /> {project.sector}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-6 font-medium">Completed: {project.date}</p>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
              
              <div className="lg:w-2/3 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  Typical Scope of Work
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {project.scope.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#264740] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-[#264740] rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Have a similar project?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Our team is ready to discuss your specific requirements and develop a tailored engineering solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#264740] px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
          >
            Contact our Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

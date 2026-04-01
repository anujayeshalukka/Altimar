import { Factory, Zap, Anchor, Building2, HardHat } from "lucide-react";
import { motion } from "framer-motion";
import sectorsImg from "../components/images/sectors.jpg";
import portsOffshoreImg from "../components/images/ports_offshore.png";

const sectors = [
  {
    title: "Energy & Utilities",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1595856619767-ab739fa7daae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcG93ZXIlMjBncmlkJTIwdHJhbnNtaXNzaW9ufGVufDF8fHx8MTc3NDA5MDU4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Reliable engineering for power generation, transmission, and modern utility grids."
  },
  {
    title: "Marine & Shipbuilding",
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1762787804897-32d181381de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBzaGlwYnVpbGRpbmclMjBlbmdpbmVlcnN8ZW58MXx8fHwxNzc0MDkwNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Vessel systems, propulsion integration, and maritime compliance engineering."
  },
  {
    title: "Ports & Offshore",
    icon: Building2,
    image: portsOffshoreImg,
    description: "Robust solutions for harsh marine environments, oil rigs, and port logistics infrastructure."
  },
  {
    title: "Industrial & Manufacturing",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGF1dG9tYXRlZHxlbnwxfHx8fDE3NzQwOTA1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Automation, process control, and plant efficiency for modern manufacturing."
  },
  {
    title: "Infrastructure",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1739599211500-74e04a9ca175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGluZHVzdHJpYWwlMjBmYWNpbGl0eSUyMG1vZGVybnxlbnwxfHx8fDE3NzQwOTA1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Engineering systems for large-scale civil works, transportation hubs, and public facilities."
  }
];

export function Sectors() {
  return (
    <div className="bg-white ">
      {/* Page Header */}
      <div 
        className="relative h-[500px] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${sectorsImg})` }}
      >
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">Industries We Serve</h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
            Applying our technical expertise across critical sectors to ensure operational continuity and safety.
          </p>
        </div>
      </div>

      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Decorative background text */}
        <span
          className="absolute top-0 left-1/2 -translate-x-1/2 text-gray-100 font-bold leading-none select-none pointer-events-none z-0 text-center w-full"
          style={{ fontSize: "clamp(80px, 20vw, 250px)" }}
          aria-hidden="true"
        >
          Sectors
        </span>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-left lg:text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold text-sm leading-8 text-[#4e8377] uppercase tracking-wider"
            >
              Industry Expertise
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Critical sectors we empower
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, idx) => (
            <div key={idx} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 text-white">
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                    <sector.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold">{sector.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
}

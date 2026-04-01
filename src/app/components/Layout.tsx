import { Link, Outlet, useLocation } from "react-router";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Phone, Mail, Home, Briefcase, FolderOpen, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import altimarLogo from "./images/altimar-footer.png";
import { QuickEnquiryModal } from "./QuickEnquiryModal";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Sectors", href: "/sectors" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
    <header className={`sticky ${location.pathname === '/' ? 'lg:fixed' : 'lg:sticky'} w-full top-0 z-50 transition-all duration-300 bg-white backdrop-blur-md shadow-sm border-b border-gray-100`}>
      {/* Top Banner */}
      <div className={`bg-[#264740] transition-all duration-300 overflow-hidden flex items-center text-white text-xs sm:text-sm w-full ${isScrolled ? 'h-0 opacity-0' : 'h-[40px] opacity-100'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-center sm:justify-between px-6 lg:px-8 w-full">
          <div className="text-center sm:text-left">Welcome to Altimar Energy Solutions</div>
          <div className="hidden sm:flex items-center gap-6">
            <a href="tel:+919995575730" className="flex items-center gap-1.5 hover:text-gray-200 transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>(+91) 9995575730</span>
            </a>
            <a href="mailto:service@altimarenergy.com" className="flex items-center gap-1.5 hover:text-gray-200 transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>service@altimarenergy.com</span>
            </a>
          </div>
        </div>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Altimar Energy Solutions</span>
            <img src={altimarLogo} alt="Altimar Energy Solutions Logo" className="h-12 sm:h-16 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 transition-colors ${
                location.pathname === item.href
                  ? "text-[#4e8377]"
                  : "text-gray-900 hover:text-[#4e8377]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <QuickEnquiryModal>
            <button
              className="text-sm font-semibold leading-6 bg-[#264740] text-white px-5 py-2.5 rounded-md hover:bg-[#1f3a34] transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              Quick Enquiry <ArrowRight className="h-4 w-4" />
            </button>
          </QuickEnquiryModal>
        </div>
      </nav>
    </header>
    {/* Mobile Menu — outside header to avoid stacking context clipping */}
    {mobileMenuOpen && (
      <div className="fixed inset-0 z-[200] lg:hidden bg-white overflow-y-auto" role="dialog" aria-modal="true">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">Altimar Energy Solutions</span>
              <img src={altimarLogo} alt="Altimar Energy Solutions Logo" className="h-10 w-auto" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 hover:text-[#4e8377]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <QuickEnquiryModal>
                  <button
                    className="-mx-3 block w-full text-left rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 hover:text-[#4e8377] cursor-pointer"
                  >
                    Quick Enquiry
                  </button>
                </QuickEnquiryModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-white text-gray-600 pt-12 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="sr-only">Altimar Energy Solutions</span>
              <img src={altimarLogo} alt="Altimar Energy Solutions Logo" className="h-20 w-auto rounded-sm" />
            </Link>
            <p className="text-sm leading-6 text-[#264740] font-semibold max-w-xs">
              Engineering Systems • Energy Solutions • Technical Services
            </p>
            <p className="text-sm leading-6 text-gray-500 max-w-xs">
              We specialise in execution, commissioning, troubleshooting, maintenance, and retrofit solutions for critical engineering systems.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold leading-6 text-gray-900 uppercase tracking-wider">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-600 hover:text-[#264740] transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-bold leading-6 text-gray-900 uppercase tracking-wider">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/services" className="text-sm leading-6 text-gray-600 hover:text-[#264740] transition-colors">
                      Energy & Utilities
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-sm leading-6 text-gray-600 hover:text-[#264740] transition-colors">
                      Marine Engineering
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-sm leading-6 text-gray-600 hover:text-[#264740] transition-colors">
                      Electrical & Control
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-sm leading-6 text-gray-600 hover:text-[#264740] transition-colors">
                      Testing & Commissioning
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold leading-6 text-gray-900 uppercase tracking-wider">Contact</h3>
                <ul role="list" className="mt-6 space-y-4 text-sm leading-6 text-gray-600">
                  <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#264740]" /> service@altimarenergy.com</li>
                  <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#264740]" /> (+91) 9995575730</li>
                  <li className="flex items-start gap-2"><Home className="h-4 w-4 text-[#264740] mt-1" /> Koyakkattu Arcade,<br />Enanalloor, Ernakulam</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="mt-12 bg-[#264740] border-t border-gray-100 p-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs leading-5 text-gray-300 mx-auto max-w-7xl px-6 lg:px-8">
            &copy; {new Date().getFullYear()} Altimar Energy Solutions. All rights reserved.
          </p>
        </div>
    </footer>
  );
}

const mobileNavItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Contact", href: "/contact", icon: PhoneCall },
];

function MobileBottomNav() {
  const location = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 m-4 z-[150] lg:hidden bg-white border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] rounded-2xl">
      <div className="flex items-center justify-around px-2 py-2">
        {mobileNavItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex flex-col items-center gap-1 px-4 py-1.5 rounded-xl transition-colors ${
                isActive ? "text-[#264740]" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? "stroke-[2.5]" : "stroke-[1.5]"}`} />
              <span className={`text-[10px] font-medium ${isActive ? "font-semibold" : ""}`}>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function CallToAction() {
  return (
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
          <span className="text-[#1a2e2a] text-6xl font-bold mt-5">Let's Engineer a Solution.</span>
        </motion.h2>

        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            to="/contact"
            className="rounded-md bg-transparent border border-white px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-white hover:text-[#264740] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-100/50">
      <Header />
      <main className="flex-1 pb-[68px] lg:pb-0">
        <Outlet />
      </main>
      <CallToAction />
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

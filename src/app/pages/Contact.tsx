import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import contactImg from "../components/images/contact.jpg";

export function Contact() {
  return (
    <div>
      {/* Page Header */}
      <div 
        className="relative h-[500px] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${contactImg})` }}
      >
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">Contact Us</h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
            Get in touch with our engineering experts to discuss your project requirements.
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
          Contact
        </span>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-left lg:text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold text-sm leading-8 text-[#4e8377] uppercase tracking-wider"
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Let's discuss your project
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <p className="text-lg text-gray-600 mb-12">
                Whether you need rapid support for an ongoing issue, or want to discuss a large-scale engineering project, our team is ready to assist.
              </p>

            <div className="space-y-8">
              <div className="flex gap-x-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#264740]/10">
                  <Phone className="h-6 w-6 text-[#264740]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Phone</h3>
                  <p className="mt-2 text-gray-600">(+91) 9995575730</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri from 8am to 5pm</p>
                </div>
              </div>
              <div className="flex gap-x-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#264740]/10">
                  <Mail className="h-6 w-6 text-[#264740]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Email</h3>
                  <p className="mt-2 text-gray-600">service@altimarenergy.com <br/>
                  sales@altimarenergy.com </p>
                </div>
              </div>
              <div className="flex gap-x-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#264740]/10">
                  <MapPin className="h-6 w-6 text-[#264740]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Office</h3>
                  <p className="mt-2 text-gray-600">Koyakkattu Arcade<br />Enanalloor, Ernakulam<br />Kerala, India - 686673</p>
                </div>
              </div>
            </div>

          </div>


          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send an Enquiry</h3>
            <form action="https://mailthis.to/sales@altimarenergy.com" method="POST" className="space-y-6">
              {/* MailThis.to Configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Enquiry - Altimar Website" />
              <input type="hidden" name="_after" value={window.location.href} />
              
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Full Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4e8377] sm:text-sm sm:leading-6"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4e8377] sm:text-sm sm:leading-6"
                      placeholder="Your email id"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                    Phone
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4e8377] sm:text-sm sm:leading-6"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4e8377] sm:text-sm sm:leading-6"
                    placeholder="Briefly describe your project or enquiry..."
                    defaultValue={""}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="block w-full rounded-md bg-[#264740] px-3.5 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#1f3a34] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#264740] transition-colors mt-8"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
          </div>

          {/* Map Layer */}
          <div className="mt-16 w-full h-[450px] bg-gray-200 rounded-3xl overflow-hidden border border-gray-300 shadow-lg relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858.903245287337!2d76.64466216298216!3d9.979502345787429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07c35d189fe367%3A0x2535d3ab55c5a499!2sALTIMAR%20ENERGY%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1775072383292!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Altimar Energy Solutions Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

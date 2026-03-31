import { MapPin, Phone, Mail, Clock } from "lucide-react";
import contactImg from "../components/images/contact.jpg";

export function Contact() {
  return (
    <div className="bg-gray-100">
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

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Get In Touch</h2>
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
                  <p className="mt-2 text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri from 8am to 5pm</p>
                </div>
              </div>
              <div className="flex gap-x-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#264740]/10">
                  <Mail className="h-6 w-6 text-[#264740]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Email</h3>
                  <p className="mt-2 text-gray-600">info@altimarenergy.com</p>
                  <p className="mt-1 text-gray-600">projects@altimarenergy.com</p>
                </div>
              </div>
              <div className="flex gap-x-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#264740]/10">
                  <MapPin className="h-6 w-6 text-[#264740]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Office</h3>
                  <p className="mt-2 text-gray-600">100 Engineering Blvd<br />Industrial District<br />Tech City, TC 12345</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center border border-gray-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gray-300" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)' }}></div>
              <div className="bg-white p-4 rounded-lg shadow-lg relative z-10 flex items-center gap-2 font-semibold text-gray-700">
                <MapPin className="h-5 w-5 text-[#4e8377]" /> Interactive Map Placeholder
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send an Enquiry</h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Full Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4e8377] sm:text-sm sm:leading-6"
                    placeholder="John Doe"
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
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4e8377] sm:text-sm sm:leading-6"
                      placeholder="john@example.com"
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
                      placeholder="+1 (555) 000-0000"
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
      </div>
    </div>
  );
}

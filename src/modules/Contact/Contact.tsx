"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import BreadCrumb from "@/common/BreadCrumb";
import Footer from "@/common/Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen text-stone-800">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <BreadCrumb
          items={[{ href: "/", label: "Home" }, { label: "Contact" }]}
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Artistic Text */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold leading-28 ">
                Let&apos;s
                <br />
                <span className="text-amber-700">Create</span>
                <br />
                Together
              </h1>
              <p className="text-stone-600 text-lg max-w-md mt-20">
                Have a project in mind? Let&apos;s discuss how we can bring your
                vision to life.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-stone-100 rounded-lg group-hover:bg-stone-700 transition-colors">
                  <Mail className="w-5 h-5 text-stone-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-stone-500 text-sm mb-1">Email</p>
                  <a
                    href="mailto:hello@harshil.com"
                    className="text-stone-800 hover:text-stone-600 transition-colors"
                  >
                    hello@harshil.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-stone-100 rounded-lg group-hover:bg-stone-700 transition-colors">
                  <Phone className="w-5 h-5 text-stone-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-stone-500 text-sm mb-1">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-stone-800 hover:text-stone-600 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-stone-100 rounded-lg group-hover:bg-stone-700 transition-colors">
                  <MapPin className="w-5 h-5 text-stone-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-stone-500 text-sm mb-1">Location</p>
                  <p className="text-stone-800">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block">
              <div className="w-32 h-32 rounded-full bg-stone-200 blur-3xl" />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:sticky lg:top-24">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-transparent border-b-2 border-stone-300 py-4 px-0 text-stone-800 placeholder-transparent focus:outline-none focus:border-stone-800 transition-colors peer"
                  placeholder="Your Name"
                />
                <label
                  className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                    focusedField === "name" || formData.name
                      ? "-top-5 text-sm text-stone-800"
                      : "top-4 text-base text-stone-500"
                  }`}
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-transparent border-b-2 border-stone-300 py-4 px-0 text-stone-800 placeholder-transparent focus:outline-none focus:border-stone-800 transition-colors peer"
                  placeholder="Your Email"
                />
                <label
                  className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                    focusedField === "email" || formData.email
                      ? "-top-5 text-sm text-stone-800"
                      : "top-4 text-base text-stone-500"
                  }`}
                >
                  Your Email
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b-2 border-stone-300 py-4 px-0 text-stone-800 placeholder-transparent focus:outline-none focus:border-stone-800 transition-colors resize-none peer"
                  placeholder="Your Message"
                />
                <label
                  className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                    focusedField === "message" || formData.message
                      ? "-top-5 text-sm text-stone-800"
                      : "top-4 text-base text-stone-500"
                  }`}
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full bg-stone-900 text-white py-4 px-8 rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span className="relative z-0 ">Send Message</span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300">
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    Let&apos;s Talk →
                  </span>
                </div>
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-stone-300">
              <p className="text-amber-700 text-sm mb-4">Follow me on</p>
              <div className="flex gap-4">
                {["Twitter", "Instagram", "LinkedIn", "Dribbble"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-stone-600 hover:text-stone-800 transition-colors text-sm"
                    >
                      {social}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

"use client";
import React, { useState } from "react";
import { MapPin, Phone, PrinterIcon, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", company: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Contact Stotko Engineering"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stotko-black via-stotko-black/65 to-stotko-black/20" />
        <div className="absolute left-0 top-0 w-1 h-full bg-white" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-3">Get in Touch</p>
          <h1 className="text-5xl font-black text-white uppercase leading-none">Contact Us</h1>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Details */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-stotko-gray-text mb-3">Our Details</p>
            <h2 className="text-3xl font-black text-stotko-black uppercase leading-none mb-10">Speak to Our<br />Engineering Team</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border-2 border-stotko-black flex items-center justify-center shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="font-black text-sm uppercase tracking-wider text-stotko-black mb-1">Physical Address</p>
                  <p className="text-gray-500 text-sm leading-relaxed">13 Langwa Street<br />Strijdompark, 2194<br />Johannesburg, South Africa</p>
                  <p className="text-gray-400 text-xs mt-1">PO Box 77518, Fontainebleau, 2032</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border-2 border-stotko-black flex items-center justify-center shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="font-black text-sm uppercase tracking-wider text-stotko-black mb-1">Telephone</p>
                  <a href="tel:+27117937164" className="text-gray-500 text-sm hover:text-stotko-black transition-colors">+27 (0) 11 793-7164</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border-2 border-stotko-black flex items-center justify-center shrink-0">
                  <PrinterIcon size={16} />
                </div>
                <div>
                  <p className="font-black text-sm uppercase tracking-wider text-stotko-black mb-1">Fax</p>
                  <p className="text-gray-500 text-sm">+27 (0) 11 792-1820</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border-2 border-stotko-black flex items-center justify-center shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="font-black text-sm uppercase tracking-wider text-stotko-black mb-1">Email</p>
                  <a href="mailto:info@stotkoengineering.co.za" className="text-gray-500 text-sm hover:text-stotko-black transition-colors">info@stotkoengineering.co.za</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border-2 border-stotko-black flex items-center justify-center shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="font-black text-sm uppercase tracking-wider text-stotko-black mb-1">Office Hours</p>
                  <p className="text-gray-500 text-sm">Monday – Friday: 07:30 – 17:00</p>
                  <p className="text-gray-400 text-xs mt-1">Closed on public holidays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-stotko-gray-text mb-3">Enquiry Form</p>
            <h2 className="text-3xl font-black text-stotko-black uppercase leading-none mb-10">Send Us a<br />Message</h2>
            {submitted ? (
              <div className="bg-stotko-black text-white p-10 text-center">
                <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-3">Thank You</p>
                <h3 className="text-2xl font-black uppercase mb-3">Message Received</h3>
                <p className="text-stotko-gray-text text-sm">A member of our team will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-stotko-black mb-2">First Name *</label>
                    <input required value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })}
                      className="w-full border-2 border-gray-200 focus:border-stotko-black px-4 py-3 text-sm outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-stotko-black mb-2">Last Name *</label>
                    <input required value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })}
                      className="w-full border-2 border-gray-200 focus:border-stotko-black px-4 py-3 text-sm outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-stotko-black mb-2">Company</label>
                  <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                    className="w-full border-2 border-gray-200 focus:border-stotko-black px-4 py-3 text-sm outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-stotko-black mb-2">Email *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border-2 border-gray-200 focus:border-stotko-black px-4 py-3 text-sm outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-stotko-black mb-2">Phone</label>
                  <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full border-2 border-gray-200 focus:border-stotko-black px-4 py-3 text-sm outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-stotko-black mb-2">Service of Interest</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full border-2 border-gray-200 focus:border-stotko-black px-4 py-3 text-sm outline-none transition-colors bg-white">
                    <option value="">Select a division...</option>
                    <option>Mining Division</option>
                    <option>Industrial Division</option>
                    <option>Valves & Flow</option>
                    <option>3D Printing</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-stotko-black mb-2">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full border-2 border-gray-200 focus:border-stotko-black px-4 py-3 text-sm outline-none transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-stotko-black text-white py-4 text-xs font-black uppercase tracking-widest hover:bg-stotko-gray transition-colors flex items-center justify-center gap-2">
                  Send Message <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

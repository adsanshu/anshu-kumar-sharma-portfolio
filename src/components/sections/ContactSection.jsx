import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Youtube, MessageSquare, Send } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function ContactSection({ showToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all fields before submitting.', 'error');
      return;
    }
    showToast('Thank you! Your message input has been logged locally.', 'success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Get In Touch</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">Feel free to connect for opportunities or academic inquiries</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 bg-white dark:bg-navy-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact Details</h3>

            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center space-x-3">
                <Mail className="text-brand-blue" size={18} />
                <span>Email: {personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-brand-blue" size={18} />
                <span>Phone: {personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-brand-blue" size={18} />
                <span>Location: {personalInfo.location}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Social Profiles</p>
              <div className="flex flex-wrap gap-2">
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-brand-blue transition-colors" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-brand-blue transition-colors" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href={personalInfo.socials.instagram} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-brand-blue transition-colors" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href={personalInfo.socials.youtube} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-brand-blue transition-colors" aria-label="YouTube">
                  <Youtube size={18} />
                </a>
                <a href={personalInfo.socials.whatsapp} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-emerald-500 transition-colors" aria-label="WhatsApp">
                  <MessageSquare size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form UI */}
          <div className="lg:col-span-7 bg-white dark:bg-navy-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-brand-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-brand-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Message</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-brand-blue"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-medium shadow-md transition-all w-full sm:w-auto text-sm"
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}


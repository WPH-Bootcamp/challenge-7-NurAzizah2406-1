import React, { useState } from 'react';
import { companyInfo } from '../../data/company';
import Button from '../ui/Button';
import { Mail, Phone, MapPin } from '../ui/Icons';
import { ContactFormData } from '../../types';

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const validate = (): boolean => {
    const tempErrors: Partial<ContactFormData> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Nama lengkap wajib diisi';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Alamat email wajib diisi';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Format email tidak valid';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Pesan wajib diisi';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Pesan minimal terdiri dari 10 karakter';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      // Simulate API submit delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessMessage(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage(false);
        }, 5000);
      }, 1200);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Connect With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            Get in Touch
          </h2>
          <p className="text-slate-600 text-sm">
            Have a project in mind or need technical consultation? Reach out and we will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between space-y-10 relative">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">Contact Information</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Fill out the form and our developer relations team will get back to you shortly.
              </p>
            </div>

            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <span className="text-slate-300">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary shrink-0" size={20} />
                <a href={`tel:${companyInfo.phone}`} className="text-slate-300 hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary shrink-0" size={20} />
                <a href={`mailto:${companyInfo.email}`} className="text-slate-300 hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>

            {/* Quick reminder badge */}
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-800 text-xs text-slate-400">
              ⚡ <strong>Office Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM (GMT+7)
            </div>
          </div>

          {/* Form Input Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <h3 className="text-xl font-bold text-secondary">Send Us a Message</h3>
            
            {successMessage && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-fade-in">
                <span>✔</span> Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                    errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-primary'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="johndoe@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                    errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-primary'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                    errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-primary'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                className="w-full py-3.5 justify-center font-semibold tracking-wide"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending message...' : 'Send Message'}
              </Button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;

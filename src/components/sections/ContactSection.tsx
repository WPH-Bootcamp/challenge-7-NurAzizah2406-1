import React, { useState } from 'react';
import Button from '../ui/Button';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [selectedServices, setSelectedServices] = useState<string[]>(['Web Development']);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const servicesList = [
    'Web Development',
    'Cloud Solutions',
    'Mobile App Development',
    'Software Development',
    'UI/UX Design',
    'Other',
  ];

  const handleCheckboxChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: Partial<ContactFormData> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessMessage(true);
        setFormData({ name: '', email: '', message: '' });
        setSelectedServices(['Web Development']);
        
        setTimeout(() => {
          setSuccessMessage(false);
        }, 5000);
      }, 1200);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary text-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Start? Let’s Talk.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Tell us what you need, and we’ll get back to you soon.
          </p>
        </div>

        {/* Success Alert */}
        {successMessage && (
          <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2">
            <span>✔</span> Thank you! Your message has been sent successfully.
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-bold text-slate-300 uppercase tracking-widest">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 bg-[#0a0f1d] text-white ${
                errors.name ? 'border-red-500 bg-red-950/10' : 'border-slate-800 focus:border-primary'
              }`}
            />
            {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-bold text-slate-300 uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 bg-[#0a0f1d] text-white ${
                errors.email ? 'border-red-500 bg-red-950/10' : 'border-slate-800 focus:border-primary'
              }`}
            />
            {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold text-slate-300 uppercase tracking-widest">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              placeholder="Enter your message"
              className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 bg-[#0a0f1d] text-white ${
                errors.message ? 'border-red-500 bg-red-950/10' : 'border-slate-800 focus:border-primary'
              }`}
            />
            {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message}</p>}
          </div>

          {/* Services Checkboxes */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-widest block">
              Services
            </label>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesList.map((service) => {
                const isChecked = selectedServices.includes(service);
                return (
                  <label
                    key={service}
                    className="flex items-center gap-3 cursor-pointer select-none text-sm font-medium text-slate-300 hover:text-white"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheckboxChange(service)}
                      className="hidden"
                    />
                    {/* Custom Checkbox Box */}
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                        isChecked
                          ? 'bg-primary border-primary text-white shadow-md shadow-primary/20 scale-105'
                          : 'border-slate-800 bg-[#0a0f1d]'
                      }`}
                    >
                      {isChecked && (
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <span>{service}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-center">
            <Button
              type="submit"
              variant="primary"
              className="w-full sm:w-auto px-12 py-3.5 rounded-full font-bold tracking-wider text-base shadow-lg shadow-primary/10"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </Button>
          </div>

        </form>

      </div>
    </section>
  );
};

export default ContactSection;

import React, { useState } from 'react';
import Button from '../ui/Button';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

type ModalState = 'idle' | 'success' | 'error';

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [selectedServices, setSelectedServices] = useState<string[]>(['Web Development']);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalState, setModalState] = useState<ModalState>('idle');

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
      // Simulate network request — randomize success/error for demo
      setTimeout(() => {
        setIsSubmitting(false);
        // Always show success in real scenario; showing random for demo matching Figma
        setModalState('success');
        setFormData({ name: '', email: '', message: '' });
        setSelectedServices(['Web Development']);
      }, 1200);
    }
  };

  const closeModal = () => setModalState('idle');

  return (
    <section id="contact" className="py-24 bg-secondary text-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Header Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Start? Let's Talk.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Tell us what you need, and we'll get back to you soon.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="contact-name" className="text-xs font-bold text-slate-300 uppercase tracking-widest">
              Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              aria-label="Your name"
              className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 bg-[#0a0f1d] text-white placeholder:text-slate-600 ${
                errors.name ? 'border-red-500 bg-red-950/10' : 'border-slate-800 focus:border-primary'
              }`}
            />
            {errors.name && <p role="alert" className="text-xs text-red-500 font-medium">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="contact-email" className="text-xs font-bold text-slate-300 uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              aria-label="Your email address"
              className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 bg-[#0a0f1d] text-white placeholder:text-slate-600 ${
                errors.email ? 'border-red-500 bg-red-950/10' : 'border-slate-800 focus:border-primary'
              }`}
            />
            {errors.email && <p role="alert" className="text-xs text-red-500 font-medium">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="contact-message" className="text-xs font-bold text-slate-300 uppercase tracking-widest">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              placeholder="Enter your message"
              aria-label="Your message"
              className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 bg-[#0a0f1d] text-white placeholder:text-slate-600 resize-none ${
                errors.message ? 'border-red-500 bg-red-950/10' : 'border-slate-800 focus:border-primary'
              }`}
            />
            {errors.message && <p role="alert" className="text-xs text-red-500 font-medium">{errors.message}</p>}
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
                    className="flex items-center gap-3 cursor-pointer select-none text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheckboxChange(service)}
                      className="hidden"
                      aria-label={`Select ${service}`}
                    />
                    {/* Custom Checkbox */}
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                        isChecked
                          ? 'bg-primary border-primary text-white shadow-md shadow-primary/20 scale-105'
                          : 'border-slate-700 bg-[#0a0f1d]'
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
              className="w-full sm:w-auto px-12 py-3.5 rounded-full font-bold tracking-wider text-base shadow-lg shadow-primary/10 disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Sending...
                </span>
              ) : 'Send'}
            </Button>
          </div>
        </form>
      </div>

      {/* =============================================
          MODAL OVERLAY — Success / Error state
          Matches Figma "Success Send" & "Success Failed" screens
         ============================================= */}
      {modalState !== 'idle' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="bg-[#0d1117] border border-slate-800 rounded-3xl p-8 sm:p-10 max-w-sm w-full text-center shadow-2xl animate-scale-in">

            {/* Icon */}
            <div className="flex justify-center mb-6">
              {modalState === 'success' ? (
                /* Envelope with green check */
                <div className="relative">
                  <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
                    <rect x="5" y="20" width="70" height="48" rx="6" fill="#FF8C42"/>
                    <path d="M5 28L40 50L75 28" stroke="#FF6B4A" strokeWidth="3"/>
                    <rect x="5" y="20" width="70" height="48" rx="6" fill="url(#grad1)" opacity="0.4"/>
                    <defs>
                      <linearGradient id="grad1" x1="5" y1="20" x2="75" y2="68">
                        <stop offset="0%" stopColor="#FF8C42"/>
                        <stop offset="100%" stopColor="#FF6B4A"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                </div>
              ) : (
                /* Envelope with red X */
                <div className="relative">
                  <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
                    <rect x="5" y="20" width="70" height="48" rx="6" fill="#FF8C42"/>
                    <path d="M5 28L40 50L75 28" stroke="#FF6B4A" strokeWidth="3"/>
                  </svg>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Text */}
            <h3 id="modal-title" className="text-lg font-extrabold text-white mb-2">
              {modalState === 'success' ? 'Message Received!' : 'Oops! Something went wrong.'}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              {modalState === 'success'
                ? "Thanks for reaching out — we'll get back to you as soon as possible."
                : "We couldn't send your message. Please try again or check your connection."}
            </p>

            {/* CTA Button */}
            <Button
              variant="primary"
              className="w-full rounded-full py-3 font-bold text-base shadow-lg shadow-primary/20"
              onClick={closeModal}
            >
              {modalState === 'success' ? 'Back to Home' : 'Try Again'}
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;

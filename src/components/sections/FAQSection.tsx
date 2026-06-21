import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What services do you offer?',
      answer: 'We provide comprehensive IT services including Web Development, Mobile App Development, UI/UX Design, Cloud Solutions, Custom Software Engineering, IT Infrastructure scaling, Cybersecurity, QA Testing, and Technical Consulting.',
    },
    {
      question: 'How long does a standard web project take?',
      answer: 'A standard web design and development cycle typically takes between 4 to 8 weeks. This includes discovery, design wireframes, frontend/backend engineering, QA testing, and deployment.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes, we offer structured maintenance and support SLA agreements after deployment. This includes uptime monitoring, security patching, and bug fixes to ensure your software runs smoothly.',
    },
    {
      question: 'Is your code type-safe and fully documented?',
      answer: 'Absolutely. We follow strict TypeScript type safety standards and modular component architectures. This ensures readability, ease of hand-off, and seamless future scalability.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 bg-secondary text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm">
            Find answers to common questions about our services, process, and workspace standards.
          </p>
        </div>

        {/* FAQ Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0a0f1d] border border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Header click bar */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm sm:text-base text-white hover:text-primary transition-colors cursor-pointer select-none"
                >
                  <span>{faq.question}</span>
                  {/* Chevron Toggle Icon */}
                  <span className={`transform transition-transform duration-300 text-primary font-bold ${
                    isOpen ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </span>
                </button>

                {/* Answer box with height slide */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40 border-t border-slate-850 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 py-5 text-xs sm:text-sm text-slate-450 leading-relaxed bg-[#0c1325]/30">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;

import { useState } from 'react';
import Button from '../ui/Button';
import consultationImg from '../../assets/images/ConsultationImage.png';
import containerBg from '../../assets/icons/Container-1.png';
import plusIcon from '../../assets/icons/plus.png';
import minusIcon from '../../assets/icons/minus.png';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item expanded by default

  const faqs: FAQItem[] = [
    {
      question: 'What services do you offer?',
      answer: 'We provide custom web/app development, cloud solutions, UX/UI design, and more.',
    },
    {
      question: 'How do I know if this is right for my business?',
      answer: 'Book a free consult — we’ll assess your goals and recommend the right approach.',
    },
    {
      question: 'How much does a project cost?',
      answer: 'Every project is different. Let’s talk about your needs to get a tailored estimate.',
    },
    {
      question: 'How long does it take?',
      answer: 'Depends on scope — but we always prioritize quality and deadlines.',
    },
    {
      question: 'Can I start with a small project first?',
      answer: 'Absolutely. We often begin with MVPs or pilot projects.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#030712] text-gray-900 dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Need Help? Start Here.
              </h2>
              <p className="text-gray-500 dark:text-slate-400 text-sm">
                Everything you need to know — all in one place.
              </p>
            </div>

            <div className="border-t border-gray-200 dark:border-slate-800/80 divide-y divide-gray-200 dark:divide-slate-800/80">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="py-5">
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors cursor-pointer select-none"
                    >
                      <span>{faq.question}</span>
                      <span className="w-5 h-5 flex items-center justify-center select-none shrink-0 ml-4">
                        {isOpen ? (
                          <img src={minusIcon} alt="collapse" className="w-3.5 h-3.5 object-contain dark:invert" />
                        ) : (
                          <img src={plusIcon} alt="expand" className="w-3.5 h-3.5 object-contain dark:invert" />
                        )}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-24 opacity-100 mt-3' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Let's talk it through CTA Card */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-sm bg-gradient-to-br from-[#e0583b] to-[#c83e23] rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              {/* Background Pattern overlay */}
              <div 
                className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-cover bg-center" 
                style={{ backgroundImage: `url(${containerBg})` }}
              />
              
              <div className="space-y-2 relative z-10">
                <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
                  Let’s talk it through
                </h3>
                <p className="text-white/80 text-xs sm:text-sm font-medium">
                  book a free consultation with our team.
                </p>
              </div>

              {/* Consultation Team Image */}
              <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-lg border border-white/10 relative z-10">
                <img
                  src={consultationImg}
                  alt="Team discussion"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              <div className="pt-2 relative z-10">
                <Button
                  className="w-full bg-white hover:bg-slate-50 text-slate-900 border-none rounded-2xl py-3.5 font-bold tracking-wide transition-all shadow-xl cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;

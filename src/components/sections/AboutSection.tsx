import { companyInfo } from '../../data/company';
import { Check } from '../ui/Icons';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import consultationImg from '../../assets/images/ConsultationImage.png';

const AboutSection = () => {
  const leftRef = useScrollAnimation<HTMLDivElement>('animate-fade-left');
  const rightRef = useScrollAnimation<HTMLDivElement>('animate-fade-right');

  const points = [
    {
      title: 'Strategic Thinkers',
      desc: 'We analyze your business objectives to design custom web architectures that deliver immediate value.',
    },
    {
      title: 'High Performance',
      desc: 'Every line of code is optimized for response speeds, search engine visibility (SEO), and conversion.',
    },
    {
      title: 'TypeScript Type-Safety',
      desc: 'Robust type architectures prevent runtime exceptions and make scalability a breeze.',
    },
    {
      title: 'Transparent Collaboration',
      desc: 'Continuous integration, git management, and regular checkins keep you fully aligned with our work.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#030712] relative">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Visual: Consultation Image */}
          <div ref={leftRef} className="lg:col-span-6 order-2 lg:order-1 opacity-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-800/60">
              <img
                src={consultationImg}
                alt="Team Consultation"
                className="w-full h-full object-cover"
              />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-[#0b0f19]/90 backdrop-blur-sm border border-gray-100 dark:border-slate-800/60 rounded-2xl px-5 py-4 shadow-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-lg">🚀</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">500+ Projects Delivered</p>
                  <p className="text-xs text-gray-500 dark:text-slate-400">Across 30+ industries worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description Content */}
          <div ref={rightRef} className="lg:col-span-6 order-1 lg:order-2 space-y-6 opacity-0">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                About Our Company
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Empowering Businesses through Custom Tech Solutions
              </h2>
            </div>

            <p className="text-gray-500 dark:text-slate-400 leading-relaxed">
              Founded on the belief that digital solutions should be both powerful and delightful,{' '}
              <strong className="text-gray-800 dark:text-slate-200">{companyInfo.name}</strong> has helped hundreds of teams
              redefine their products. We combine standard development practices with custom designs to
              deliver measurable growth.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4">
              {points.map((point) => (
                <div key={point.title} className="flex gap-3">
                  <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Check size={12} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{point.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

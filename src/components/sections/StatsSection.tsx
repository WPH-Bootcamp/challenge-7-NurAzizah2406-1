import { stats } from '../../data/stats';

const StatsSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#030712] relative">
      {/* Very subtle top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            From strategy to execution, we deliver solutions that grow your business.
          </p>
        </div>

        {/* Circular Indicators Grid — light style matching Figma */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="w-44 h-44 sm:w-48 sm:h-48 rounded-full border border-gray-200 dark:border-slate-800/80 bg-white dark:bg-[#0b0f19] flex flex-col items-center justify-center text-center p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-primary group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider mt-2 px-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;

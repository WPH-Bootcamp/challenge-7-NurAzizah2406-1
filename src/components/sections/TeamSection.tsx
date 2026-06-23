import { teamMembers } from '../../data/team';
import Card from '../ui/Card';
import { Linkedin, Twitter, Github } from '../ui/Icons';

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-white dark:bg-[#030712] text-gray-900 dark:text-white transition-colors duration-300">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Our Talent
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Meet the Experts Behind Innovatech
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Our multi-disciplinary team brings together decades of software development and creative expertise to steer projects toward successful launches.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="p-0 overflow-hidden border-gray-200 dark:border-slate-800/80 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col items-center bg-white dark:bg-[#0a0f1d] text-center"
            >
              {/* Profile Image Frame */}
              <div className="relative w-full aspect-square bg-gray-50 dark:bg-slate-100 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Social media overlay panel on hover */}
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {member.socialLinks?.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-all shadow-md scale-90 group-hover:scale-100 duration-300"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  {member.socialLinks?.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-all shadow-md scale-90 group-hover:scale-100 duration-300 delay-75"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter size={16} />
                    </a>
                  )}
                  {member.socialLinks?.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-all shadow-md scale-90 group-hover:scale-100 duration-300 delay-150"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Detail Info */}
              <div className="p-6 space-y-1">
                <h3 className="text-base font-extrabold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-primary/85">
                  {member.position}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;

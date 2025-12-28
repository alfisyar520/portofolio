import { PERSONAL_INFO, SKILLS, SOCIAL_LINKS } from "../../constants";
import SectionTitle from "../common/SectionTitle";
import SocialIcon from "../common/SocialIcon";
import SkillBadge from "../common/SkillBadge";

const AboutSection = () => {
  return (
    <section id="about" className="pt-36 pb-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          subtitle="About Me"
          title={PERSONAL_INFO.about.title}
        />

        <div className="flex flex-wrap items-center mb-16">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg mb-6 leading-relaxed">
                {PERSONAL_INFO.about.description}
              </p>
              <div className="flex items-center gap-3">
                <SocialIcon platform="linkedin" href={SOCIAL_LINKS.linkedin} />
                <SocialIcon platform="medium" href={SOCIAL_LINKS.medium} />
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="bg-gradient-to-br from-primary/5 to-cyan-500/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="font-semibold text-dark text-3xl mb-6 lg:text-4xl">
                {PERSONAL_INFO.about.whatIDo.title}
              </h3>
              <p className="font-medium text-base text-secondary lg:text-lg mb-8 leading-relaxed">
                {PERSONAL_INFO.about.whatIDo.description}
              </p>
              <div>
                <h4 className="font-semibold text-dark text-lg mb-4">
                  Technologies I Work With:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


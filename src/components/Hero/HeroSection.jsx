import profil from "../../assets/img/alfisyar.png";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../constants";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-36 pb-20 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center">
          <div className="w-full self-center px-4 lg:w-1/2">
            <div className="mb-4 inline-block">
              <span className="text-sm md:text-base font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                👋 {PERSONAL_INFO.greeting}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4 leading-tight">
              <span className="block">{PERSONAL_INFO.firstName}</span>
              <span className="block bg-gradient-to-r from-primary via-cyan-500 to-primary bg-clip-text text-transparent animate-gradient">
                {PERSONAL_INFO.lastName}
              </span>
            </h1>
            <h2 className="font-semibold text-secondary text-xl mb-6 lg:text-2xl flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              {PERSONAL_INFO.title}
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed text-lg max-w-xl">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-base font-semibold text-white bg-gradient-to-r from-primary to-cyan-500 py-3 px-8 rounded-full hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 ease-in-out inline-flex items-center gap-2"
              >
                Contact Me
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <Button variant="secondary" href="#portofolio">
                View Portfolio
              </Button>
            </div>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative flex justify-center items-center">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src={profil}
                  alt={PERSONAL_INFO.name}
                  className="max-w-full mx-auto relative z-10 drop-shadow-2xl"
                />
              </div>
              <div className="absolute bottom-20 -z-10 left-1/2 -translate-x-1/2 md:scale-125 animate-float">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  width={400}
                  height={400}
                  className="opacity-20"
                >
                  <path
                    fill="url(#gradient)"
                    d="M44.2,-73.1C56.3,-69.6,64.5,-55.8,71.7,-41.8C78.9,-27.9,85.2,-14,83.5,-1C81.8,12,72.1,24,64.4,37.1C56.7,50.2,51,64.3,40.6,71.3C30.2,78.3,15.1,78.2,1.1,76.4C-13,74.5,-26,71,-39,65.5C-52.1,60.1,-65.2,52.7,-69.3,41.4C-73.4,30.2,-68.4,15.1,-67.4,0.6C-66.4,-13.9,-69.4,-27.8,-65.1,-38.8C-60.9,-49.7,-49.4,-57.7,-37.3,-61.3C-25.3,-64.8,-12.6,-63.9,1.7,-66.8C16.1,-69.8,32.1,-76.6,44.2,-73.1Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


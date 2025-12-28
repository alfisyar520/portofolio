import { useState } from "react";
import profil from "./assets/img/alfisyar.png";
import { useEffect } from "react";
import baymaksImage from "./assets/portofolio/Baymaks/Web Publik.png";
import botImage from "./assets/portofolio/bot telegram/Screenshot_20210817_153718.jpg";
import { ListPortofolio, ListCertificate } from "./utils/constant.js";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skills = [
    "React.js", "Vue.js", "Next.js", "Node.js", "Express.js", 
    "Java Spring Boot", ".NET", "SQL", "JavaScript", "TypeScript"
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Header section */}
      <header
        className={`${
          isNavbarFixed && "navbar-fixed"
        } bg-transparent absolute top-0 left-0 w-full flex items-center z-50 transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6 hover:text-primary/80 transition-colors duration-300"
              >
                <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                  Alfisyar Jefry Pranata
                </span>
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className={`block absolute right-4 lg:hidden z-50 ${
                  isOpen && "hamburger-active"
                }`}
                onClick={handleHamburgerClick}
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              </button>

              <nav
                id="nav-menu"
                className={`${
                  !isOpen && "hidden"
                } absolute py-5 bg-white/95 backdrop-blur-md shadow-xl rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none transition-all duration-300`}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-8 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-[calc(100%-4rem)]"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-8 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-[calc(100%-4rem)]"
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portofolio"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-8 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-[calc(100%-4rem)]"
                    >
                      Portofolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="https://www.linkedin.com/in/alfisyar-jefry-pranata-668833193/"
                      target="_blank"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-8 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-[calc(100%-4rem)]"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* hero section */}
      <section id="home" className="pt-36 pb-20 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center">
            <div className="w-full self-center px-4 lg:w-1/2">
              <div className="mb-4 inline-block">
                <span className="text-sm md:text-base font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  👋 Hello Everyone, I'm
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4 leading-tight">
                <span className="block">Alfisyar Jefry</span>
                <span className="block bg-gradient-to-r from-primary via-cyan-500 to-primary bg-clip-text text-transparent animate-gradient">
                  Pranata
                </span>
              </h1>
              <h2 className="font-semibold text-secondary text-xl mb-6 lg:text-2xl flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Fullstack Developer
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed text-lg max-w-xl">
                I'm passionate about programming because it empowers me to solve real-world problems and create meaningful solutions that make a difference.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/alfisyar-jefry-pranata-668833193/"
                  target="_blank"
                  className="group text-base font-semibold text-white bg-gradient-to-r from-primary to-cyan-500 py-3 px-8 rounded-full hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 ease-in-out inline-flex items-center gap-2"
                >
                  Contact Me
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#portofolio"
                  className="text-base font-semibold text-primary border-2 border-primary py-3 px-8 rounded-full hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
                >
                  View Portfolio
                </a>
              </div>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2 mt-10 lg:mt-0">
              <div className="relative flex justify-center items-center">
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <img
                    src={profil}
                    alt="Alfisyar Jefry Pranata"
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

      {/* about section */}
      <section id="about" className="pt-36 pb-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h4 className="font-bold uppercase text-primary text-lg mb-3 tracking-wider">
              About Me
            </h4>
            <h2 className="font-bold text-dark text-4xl mb-4 lg:text-5xl">
              Who Am I?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap items-center mb-16">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
                <p className="font-medium text-base text-secondary max-w-xl lg:text-lg mb-6 leading-relaxed">
                  I am a website-based Full Stack Developer, dedicated to
                  leveraging cutting-edge technologies to create dynamic,
                  user-friendly applications. My journey in the world of
                  development began when I graduated from Brawijaya University in
                  2021, and since then, I have been committed to mastering the art
                  of frontend and backend development.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/alfisyar-jefry-pranata-668833193/"
                    target="_blank"
                    className="w-12 h-12 rounded-full flex justify-center items-center border-2 border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <svg
                      className="fill-current"
                      role="img"
                      width={24}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://medium.com/@alfisyarpranata"
                    target="_blank"
                    className="w-12 h-12 rounded-full flex justify-center items-center border-2 border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <svg
                      className="fill-current"
                      role="img"
                      width={24}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Medium</title>
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="bg-gradient-to-br from-primary/5 to-cyan-500/5 rounded-2xl p-8 border border-primary/10">
                <h3 className="font-semibold text-dark text-3xl mb-6 lg:text-4xl">
                  What Do I Do?
                </h3>
                <p className="font-medium text-base text-secondary lg:text-lg mb-8 leading-relaxed">
                  In my career, I've had the privilege to work on a diverse range
                  of projects. Whether it's crafting responsive user interfaces
                  with HTML, CSS, and JavaScript (React.js, Vue.js, Next.js) or designing
                  scalable backend systems with Node.js, Express.js, Java Spring Boot, .Net and databases
                  like SQL, I'm adept at every stage of the development process.
                </p>
                <div>
                  <h4 className="font-semibold text-dark text-lg mb-4">Technologies I Work With:</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white rounded-full text-sm font-medium text-dark border border-slate-200 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* certificates section */}
      <section id="certificates" className="pt-36 pb-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full px-4 mb-16 text-center">
            <h4 className="font-bold uppercase text-primary text-lg mb-3 tracking-wider">
              Certificates
            </h4>
            <h2 className="font-bold text-dark text-4xl mb-4 lg:text-5xl">
              My Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto mb-4"></div>
            <p className="font-medium text-base text-secondary lg:text-lg max-w-2xl mx-auto">
              These are the professional certifications I've earned to
              strengthen my skills and expertise.
            </p>
          </div>

          <div className="flex flex-wrap justify-center">
            {ListCertificate.map((cert, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
                <div className="group bg-white rounded-2xl shadow-lg p-6 h-full hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-primary/20 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-dark text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-secondary font-medium">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* portofolio */}
      <section id="portofolio" className="pt-36 pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full px-4">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h4 className="font-bold uppercase text-primary text-lg mb-3 tracking-wider">
                Portofolio
              </h4>
              <h2 className="font-bold text-dark text-4xl mb-4 lg:text-5xl">
                Recent Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto mb-6"></div>
              <p className="font-medium text-base text-secondary lg:text-lg leading-relaxed">
                I proudly have several projects that I have worked on that I
                consider to be an important part of my portfolio. My portfolio
                includes a variety of projects, including mobile application
                creation, responsive website creation, and many more. I hope
                that through this portfolio, I can demonstrate my abilities and
                creativity to potential clients and prove that I am the right
                solution for their needs.
              </p>
            </div>

            <div className="w-full px-4 flex flex-wrap justify-center xl:w-11/12 xl:mx-auto">
              {ListPortofolio.map((portofolioItem, index) => (
                <div key={index} className="mb-8 p-4 md:w-1/2 lg:w-1/3">
                  <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 h-full flex flex-col">
                    <div className="relative h-[250px] overflow-hidden bg-gradient-to-br from-primary/10 to-cyan-500/10">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <img
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                        src={portofolioItem.image}
                        alt={portofolioItem.title}
                      />
                      {portofolioItem.link && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <a
                            href={portofolioItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                          >
                            View Project →
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="py-6 px-6 flex-grow flex flex-col">
                      <h3 className="mb-3 flex-grow">
                        {portofolioItem.link ? (
                          <a
                            className="font-bold text-xl text-dark hover:text-primary transition-colors duration-300 block"
                            href={portofolioItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {portofolioItem.title}
                          </a>
                        ) : (
                          <span className="font-bold text-xl text-dark block">
                            {portofolioItem.title}
                          </span>
                        )}
                      </h3>
                      <p className="font-medium text-sm text-secondary text-justify line-clamp-4 mb-6 leading-relaxed">
                        {portofolioItem.description}
                      </p>
                      {portofolioItem.link && (
                        <a
                          href={portofolioItem.link}
                          className="inline-flex items-center gap-2 font-semibold text-sm text-white bg-gradient-to-r from-primary to-cyan-500 py-2.5 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-fit"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          See More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

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

  return (
    <div>
      {/* Header section */}
      <header
        className={`${
          isNavbarFixed && "navbar-fixed"
        } bg-transparent absolute top-0 left-0 w-full flex items-center z-10`}
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6"
              >
                Alfisyar Jefry Pranata
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className={`block absolute right-4 lg:hidden ${
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
                } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portofolio"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Portofolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="https://www.linkedin.com/in/alfisyar-jefry-pranata-668833193/"
                      target="_blank"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
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
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
                Hello Everyone, I'm
                <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                  Alfisyar Jefry Pranata
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 mt-1 lg:text-2xl">
                Fullstack Developer
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">
                I’am interested in programming because it can help someone to
                solve a problem.
              </p>
              <a
                href="https://www.linkedin.com/in/alfisyar-jefry-pranata-668833193/"
                target="_blank"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Contact Me
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img
                  src={profil}
                  alt="Alfisyar Jefry Pranata"
                  className="max-w-full mx-auto"
                />
                <span className="absolute bottom-20 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    width={400}
                    height={400}
                  >
                    <path
                      fill="#0ea5e9"
                      d="M44.2,-73.1C56.3,-69.6,64.5,-55.8,71.7,-41.8C78.9,-27.9,85.2,-14,83.5,-1C81.8,12,72.1,24,64.4,37.1C56.7,50.2,51,64.3,40.6,71.3C30.2,78.3,15.1,78.2,1.1,76.4C-13,74.5,-26,71,-39,65.5C-52.1,60.1,-65.2,52.7,-69.3,41.4C-73.4,30.2,-68.4,15.1,-67.4,0.6C-66.4,-13.9,-69.4,-27.8,-65.1,-38.8C-60.9,-49.7,-49.4,-57.7,-37.3,-61.3C-25.3,-64.8,-12.6,-63.9,1.7,-66.8C16.1,-69.8,32.1,-76.6,44.2,-73.1Z"
                      transform="translate(100 100) scale(1.1)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                About Me
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-3 max-w-md lg:text-4xl">
                Who Am I?
              </h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg mb-6">
                I am a website-based Full Stack Developer, dedicated to
                leveraging cutting-edge technologies to create dynamic,
                user-friendly applications. My journey in the world of
                development began when I graduated from Brawijaya University in
                2021, and since then, I have been committed to mastering the art
                of frontend and backend development.
              </p>
              <div className="flex items-center">
                <a
                  href="https://www.linkedin.com/in/alfisyar-jefry-pranata-668833193/"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-300"
                >
                  <svg
                    className="fill-current"
                    role="img"
                    width={20}
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
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-300"
                >
                  <svg
                    className="fill-current"
                    role="img"
                    width={20}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Medium</title>
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
                What Do I Do?
              </h3>
              <p className="font-medium text-base text-secondary lg:text-lg">
                In my career, I've had the privilege to work on a diverse range
                of projects. Whether it's crafting responsive user interfaces
                with HTML, CSS, and JavaScript (React.js, Vue.js, Next.js) or designing
                scalable backend systems with Node.js, Express.js, Java Spring Boot, .Net and databases
                like SQL, I'm adept at every stage of the development process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* certificates section */}
      <section id="certificates" className="pt-36 pb-32 bg-slate-50">
        <div className="container">
          <div className="w-full px-4 mb-10 text-center">
            <h4 className="font-bold uppercase text-primary text-lg mb-3">
              Certificates
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-3 lg:text-4xl">
              My Certifications
            </h2>
            <p className="font-medium text-base text-secondary lg:text-lg">
              These are the professional certifications I’ve earned to
              strengthen my skills and expertise.
            </p>
          </div>

          <div className="flex flex-wrap justify-center">
            {ListCertificate.map((cert, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 h-full hover:shadow-xl transition">
                  <h3 className="font-semibold text-dark text-xl mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-secondary">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* portofolio */}
      <section id="portofolio" className="pt-24 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Portofolio
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4">
                Recent Project
              </h2>
              <p className="font-medium text-md text-secondary">
                I proudly have several projects that I have worked on that I
                consider to be an important part of my portfolio. My portfolio
                includes a variety of projects, including mobile application
                creation, responsive website creation, and many more. I hope
                that through this portfolio, I can demonstrate my abilities and
                creativity to potential clients and prove that I am the right
                solution for their needs.
              </p>
            </div>

            <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
              {ListPortofolio.map((portofolioItem) => (
                <div className="mb-12 p-4 md:w-1/2">
                  <div className="bg-white rounded-md shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="rounded-t-md shadow-md h-[250px] overflow-hidden flex justify-center items-center">
                      <img
                        className="object-cover object-center"
                        src={portofolioItem.image}
                        alt=""
                        width={"w-full"}
                      ></img>
                    </div>
                    <div className="py-8 px-6">
                      <h3 className="mb-3">
                        <a
                          className="font-semibold text-xl text-dark hover:text-primary"
                          href={portofolioItem.link}
                          target="_blank"
                        >
                          {portofolioItem.title}
                        </a>
                      </h3>
                      <p className="font-medium text-base text-secondary text-justify line-clamp-3 mb-6">
                        {portofolioItem.description}
                      </p>
                      <a
                        href={portofolioItem.link}
                        className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                        target="_blank"
                      >
                        See More
                      </a>
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

import profil from "./assets/img/alfisyar.png";

function App() {
  return (
    <div>
      {/* hero section */}
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
                Halo Semua, Saya
                <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                  Alfisyar Jefry Pranata
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 mt-1 lg:text-2xl">
                Frontend Developer
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">
                I’am interested in programming because it can help someone to
                solve a problem.
              </p>
              <a
                href="#"
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
              <h4 className="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
              <h2 className="font-bold text-dark text-3xl mb-3 max-w-md lg:text-4xl">Yuk, Kenalan dengan saya</h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Mari berteman</h3>
              <p className="font-medium text-base text-secondary mb-6 lg:text-lg">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
              <div className="flex items-center">
                <a href="https://www.linkedin.com/in/alfisyar-jefry-pranata-668833193/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-300">
                  <svg className="fill-current" role="img" width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://medium.com/@alfisyarpranata" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-300">
                  <svg className="fill-current" role="img" width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Medium</title><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;

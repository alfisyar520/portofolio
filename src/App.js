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
              <h2 className="font-medium text-slate-500 text-lg mb-5 mt-1 lg:text-2xl">
                Frontend Developer
              </h2>
              <p className="font-medium text-slate-400 mb-10 leading-relaxed">
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
    </div>
  );
}

export default App;

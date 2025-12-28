import { useState } from "react";
import { NAVIGATION_ITEMS } from "../../constants";

const Navbar = ({ isNavbarFixed }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
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
                isMenuOpen && "hamburger-active"
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            </button>

            <nav
              id="nav-menu"
              className={`${
                !isMenuOpen && "hidden"
              } absolute py-5 bg-white/95 backdrop-blur-md shadow-xl rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none transition-all duration-300`}
            >
              <ul className="block lg:flex">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <li key={index} className="group">
                    <a
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      onClick={handleNavClick}
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-8 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-[calc(100%-4rem)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


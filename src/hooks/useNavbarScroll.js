import { useState, useEffect } from "react";

export const useNavbarScroll = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (!header) return;

      const fixedNav = header.offsetTop;
      setIsNavbarFixed(window.pageYOffset > fixedNav);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isNavbarFixed;
};


import { useNavbarScroll } from "./hooks/useNavbarScroll";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/About/AboutSection";
import CertificatesSection from "./components/Certificates/CertificatesSection";
import PortfolioSection from "./components/Portfolio/PortfolioSection";

function App() {
  const isNavbarFixed = useNavbarScroll();

  return (
    <div className="overflow-x-hidden">
      <Navbar isNavbarFixed={isNavbarFixed} />
      <HeroSection />
      <AboutSection />
      <CertificatesSection />
      <PortfolioSection />
    </div>
  );
}

export default App;

import { ListPortofolio } from "../../utils/constant";
import { PERSONAL_INFO } from "../../constants";
import SectionTitle from "../common/SectionTitle";
import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
  return (
    <section
      id="portofolio"
      className="pt-36 pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <SectionTitle
              subtitle={PERSONAL_INFO.portfolio.subtitle}
              title={PERSONAL_INFO.portfolio.title}
              description={PERSONAL_INFO.portfolio.description}
            />
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center xl:w-11/12 xl:mx-auto">
            {ListPortofolio.map((portfolioItem, index) => (
              <div key={index} className="mb-8 p-4 md:w-1/2 lg:w-1/3">
                <PortfolioCard portfolioItem={portfolioItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;


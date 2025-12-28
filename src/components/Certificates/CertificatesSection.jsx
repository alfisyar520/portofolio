import { ListCertificate } from "../../utils/constant";
import { PERSONAL_INFO } from "../../constants";
import SectionTitle from "../common/SectionTitle";
import CertificateCard from "./CertificateCard";

const CertificatesSection = () => {
  return (
    <section
      id="certificates"
      className="pt-36 pb-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          subtitle={PERSONAL_INFO.certificates.subtitle}
          title={PERSONAL_INFO.certificates.title}
          description={PERSONAL_INFO.certificates.description}
        />

        <div className="flex flex-wrap justify-center">
          {ListCertificate.map((cert, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
              <CertificateCard title={cert.title} issuer={cert.issuer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;


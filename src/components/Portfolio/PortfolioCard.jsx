const PortfolioCard = ({ portfolioItem }) => {
  const { title, image, link, description } = portfolioItem;

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 h-full flex flex-col">
      <div className="relative h-[250px] overflow-hidden bg-gradient-to-br flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img
          className="object-contain w-full h-full max-w-full max-h-full group-hover:scale-110 transition-transform duration-500"
          src={image}
          alt={title}
        />
        {link && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <a
              href={link}
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
          {link ? (
            <a
              className="font-bold text-xl text-dark hover:text-primary transition-colors duration-300 block"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          ) : (
            <span className="font-bold text-xl text-dark block">{title}</span>
          )}
        </h3>
        <p className="font-medium text-sm text-secondary text-justify line-clamp-4 mb-6 leading-relaxed">
          {description}
        </p>
        {link && (
          <a
            href={link}
            className="inline-flex items-center gap-2 font-semibold text-sm text-white bg-gradient-to-r from-primary to-cyan-500 py-2.5 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            See More
            <svg
              className="w-4 h-4"
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
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;


const SectionTitle = ({ subtitle, title, description }) => {
  return (
    <div className="w-full px-4 mb-16 text-center">
      {subtitle && (
        <h4 className="font-bold uppercase text-primary text-lg mb-3 tracking-wider">
          {subtitle}
        </h4>
      )}
      {title && (
        <>
          <h2 className="font-bold text-dark text-4xl mb-4 lg:text-5xl">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto mb-4"></div>
        </>
      )}
      {description && (
        <p className="font-medium text-base text-secondary lg:text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;


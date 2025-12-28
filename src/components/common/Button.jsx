const Button = ({ variant = "primary", href, isExternal = false, children, className = "" }) => {
  const baseClasses = "text-base font-semibold py-3 px-8 rounded-full transition-all duration-300 ease-in-out";
  
  const variantClasses = {
    primary: "text-white bg-gradient-to-r from-primary to-cyan-500 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 inline-flex items-center gap-2",
    secondary: "text-primary border-2 border-primary hover:bg-primary hover:text-white",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return <button type="button" className={classes}>{children}</button>;
};

export default Button;


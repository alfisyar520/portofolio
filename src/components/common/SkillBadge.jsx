const SkillBadge = ({ skill }) => {
  return (
    <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-dark border border-slate-200 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-md">
      {skill}
    </span>
  );
};

export default SkillBadge;


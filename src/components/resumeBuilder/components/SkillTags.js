const SkillTags = ({ skills, style }) => {
  console.log('SkillTags Rendered');

  return (
    <div className="skill-tags-container" style={style}>
      {skills.map((skill, index) => (
        <div data-testid={`skill-tag-${index}`} className="skill-tag">
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export { SkillTags };

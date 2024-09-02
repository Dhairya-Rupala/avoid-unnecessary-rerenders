const SkillTags = ({ skills }) => {
  console.log('SkillTags Rendered');

  return (
    <div className="skill-tags-container">
      {skills.map((skill, index) => (
        <div
          key={index}
          data-testid={`skill-tag-${index}`}
          className="skill-tag"
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export { SkillTags };

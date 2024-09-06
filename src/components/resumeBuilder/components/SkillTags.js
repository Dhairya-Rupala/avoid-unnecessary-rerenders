const SkillTags = ({ skills }) => {
  console.log('SkillTags Rendered');

  return (
    <div class="flex gap-[10px] flex-wrap justify-center">
      {skills.map((skill, index) => (
        <span
          key={index}
          data-testid={`skill-tag-${index}`}
          class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export { SkillTags };

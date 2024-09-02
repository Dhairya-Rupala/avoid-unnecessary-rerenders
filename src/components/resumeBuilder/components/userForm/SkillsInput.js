import { useState } from 'react';

const DEFAULT_SKILL = {
  name: '',
  efficiency: 1,
};

const SkillsInput = ({ id, value, onChange }) => {
  console.log('SkillsInput rendered');

  return (
    <div className="skills-input">
      <input
        id="skill-input"
        data-testid={`skill-name-input-${id}`}
        type="text"
        value={value.name}
        placeholder="Skill"
        onChange={(e) => onChange(id, { ...value, name: e.target.value })}
      />
      <select
        id="efficiency-input"
        data-testid={`efficiency-selector-${id}`}
        value={value.efficiency}
        onChange={(e) =>
          onChange(id, { ...value, efficiency: +e.target.value })
        }
      >
        {Array(10)
          .fill(undefined)
          .map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
      </select>
    </div>
  );
};

const SkillsInputContainer = ({ label, value, onChange }) => {
  console.log('Skills Input Form Field Rendered');

  const [skillsCount, setSkillsCount] = useState(value.length || 1);

  const onUpdateSkill = (index, updatedSkill) => {
    if (index < value.length) {
      const updatedSkills = value.map((val, _index) =>
        _index === index ? updatedSkill : val
      );
      return onChange(updatedSkills);
    }

    return onChange([...value, updatedSkill]);
  };

  return (
    <div className="skills-input-form-field">
      <label className="label">{label}</label>
      <div className="skills-input-wrapper">
        <div className="skills-input-container">
          {Array(skillsCount)
            .fill(undefined)
            .map((_, index) => (
              <SkillsInput
                key={index}
                id={index}
                value={value[index] ?? DEFAULT_SKILL}
                onChange={onUpdateSkill}
              />
            ))}
        </div>
        <button
          data-testid="add-skill-button"
          className="small-button add-skill-button"
          disabled={!value[skillsCount - 1]?.name}
          onClick={() => setSkillsCount(skillsCount + 1)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export { SkillsInputContainer as SkillsInput };

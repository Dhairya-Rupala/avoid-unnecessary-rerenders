import { useState, useRef } from 'react';

const DEFAULT_SKILL = {
  name: '',
  efficiency: 1,
};

const SkillsInput = ({ id, value, onChange }) => {
  console.log('SkillsInput rendered');

  return (
    <div class="flex-[1] flex gap-[8px]">
      <input
        id="skill-input"
        data-testid={`skill-name-input-${id}`}
        type="text"
        value={value.name}
        placeholder="Skill"
        onChange={(e) => onChange(id, { ...value, name: e.target.value })}
        class="h-[40px] border-[1px] rounded-[8px] px-[12px] py-[4px] flex-[1]"
      />
      <select
        id="efficiency-input"
        data-testid={`efficiency-selector-${id}`}
        value={value.efficiency}
        onChange={(e) =>
          onChange(id, { ...value, efficiency: +e.target.value })
        }
        class="h-[40px] border-[1px] rounded-[8px] px-[12px] py-[4px] flex-[1]"
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

  const valueRef = useRef(value);
  valueRef.current = value;

  const onUpdateSkill = (index, updatedSkill) => {
    if (index < valueRef.current.length) {
      const updatedSkills = valueRef.current.map((val, _index) =>
        _index === index ? updatedSkill : val
      );
      return onChange(updatedSkills);
    }

    return onChange([...valueRef.current, updatedSkill]);
  };

  return (
    <div class="flex flex-col gap-[4px]">
      <label class="flex-[1] text-[rgb(67,_67,_80)] text-[14px]">{label}</label>
      <div class="flex gap-[10px]">
        <div class="flex-[1] flex flex-col gap-[10px]">
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
          class="h-[30px] text-[12px] leading-[12px] px-[16px] py-[4px] self-end mb-[5px]"
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

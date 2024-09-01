import { useState } from 'react';
import { SkillTags } from '../SkillTags';

const DEFAULT_CURRENT_SKILL = {
  name: '',
  efficiency: 1,
};

export const SkillsInput = ({ label, value, onChange }) => {
  console.log('Skills Input Form Field Rendered');

  const [skills, setSkills] = useState(value ?? []);

  const [currentSkill, setCurrentSkill] = useState(DEFAULT_CURRENT_SKILL);

  return (
    <div className="skills-input-form-field">
      <label className="label">{label}</label>
      <div className="skills-input-container">
        <div className="skills-input">
          <input
            id="skill-input"
            data-testid="skill-name-input"
            type="text"
            value={currentSkill.name}
            placeholder="Skill"
            onChange={(e) =>
              setCurrentSkill({ ...currentSkill, name: e.target.value })
            }
          />
          <select
            id="efficiency-input"
            data-testid="efficiency-selector"
            value={currentSkill.efficiency}
            onChange={(e) =>
              setCurrentSkill({ ...currentSkill, efficiency: e.target.value })
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
          <div className="skills-input-buttons">
            <button
              data-testid="add-skill-button"
              disabled={!currentSkill.name}
              className="small-button"
              onClick={() => {
                setSkills([...skills, currentSkill]);
                setCurrentSkill(DEFAULT_CURRENT_SKILL);
              }}
            >
              Add
            </button>
            <button
              data-testid="clear-skills-button"
              disabled={!skills.length}
              className="small-button"
              onClick={() => {
                setSkills([]);
                setCurrentSkill(DEFAULT_CURRENT_SKILL);
              }}
            >
              Clear
            </button>
            <button
              data-testid="submit-skills-button"
              disabled={!value.length}
              className="small-button"
              onClick={() => onChange(skills)}
            >
              Done
            </button>
          </div>
        </div>
        {skills.length ? <SkillTags skills={skills} /> : null}
      </div>
    </div>
  );
};

import { useState } from 'react';
import { COLORS } from '../../constants';

export const ColorConfigInputFormField = ({ label, value, onChange }) => {
  console.log('Color Config Input Form Field Rendered');

  const [bgColor, setBgColor] = useState(value.bgColor);
  const [fontColor, setFontColor] = useState(value.fontColor);

  const onColorConfigChange = () => {
    onChange({ bgColor, fontColor });
  };

  return (
    <div className="color-config-input-form-field">
      <label className="label">{label}</label>
      <div className="color-config-inputs">
        <div className="bg-input-field">
          <label className="bg-color-input-label" htmlFor="bg-input">
            Background Color
          </label>
          <select
            id="bg-input"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          >
            {COLORS.map((color) => (
              <option key={color.value} value={color.value}>
                {color.label}
              </option>
            ))}
          </select>
        </div>
        <div className="fontColor-input-field">
          <label className="font-color-input-label" htmlFor="fontColor-input">
            Font Color
          </label>
          <select
            id="fontColor-input"
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
          >
            {COLORS.map((color) => (
              <option key={color.value} value={color.value}>
                {color.label}
              </option>
            ))}
          </select>
        </div>
        <button
          className="small-button color-config-submit-button"
          onClick={onColorConfigChange}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

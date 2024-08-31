const InputFormField = ({ id, label, value, onChange }) => {
  console.log('Input Form Field Rendered');

  return (
    <div className="input-form-field">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        data-testid={id}
        type="text"
        value={value}
        onChange={onChange}
        className="text-input"
      />
    </div>
  );
};

export { InputFormField };

const InputFormField = ({ id, label, value, onChange }) => {
  console.log('Input Form Field Rendered');

  return (
    <div class="flex flex-col gap-[4px]">
      <label class="flex-[1] text-[rgb(67,_67,_80)] text-[14px]" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        data-testid={id}
        type="text"
        value={value}
        onChange={onChange}
        class="h-[40px] border-[1px] rounded-[8px] px-[12px] py-[4px]"
      />
    </div>
  );
};

export { InputFormField };

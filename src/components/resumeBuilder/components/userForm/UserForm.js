import { InputFormField } from './InputFormField';
import { SkillsInput } from './SkillsInput';

const UserForm = ({ formData, onAction }) => {
  console.log('UserForm Field Rendered');

  const { firstName, lastName, role, company, skills } = formData;

  const onFirstNameChange = (e) =>
    onAction({
      type: 'CHANGE_FIRST_NAME',
      payload: { firstName: e.target.value },
    });

  const onLastNameChange = (e) =>
    onAction({
      type: 'CHANGE_LAST_NAME',
      payload: { lastName: e.target.value },
    });

  const onRoleChange = (e) =>
    onAction({
      type: 'CHANGE_ROLE',
      payload: { role: e.target.value },
    });

  const onCompanyChange = (e) =>
    onAction({
      type: 'CHANGE_COMPANY',
      payload: { company: e.target.value },
    });

  const onSkillsChange = (value) => {
    onAction({
      type: 'CHANGE_SKILLS',
      payload: { skills: value },
    });
  };

  return (
    <div class="flex flex-col gap-[12px]">
      <span class="text-[18px]">Resume Form</span>
      <div
        data-testid="form"
        class="flex flex-col gap-[12px] p-[24px] rounded-[6px] [box-shadow:rgba(0,_0,_0,_0.35)_0px_5px_15px]"
      >
        <InputFormField
          id="first-name"
          label="First Name"
          value={firstName}
          onChange={onFirstNameChange}
        />
        <InputFormField
          id="last-name"
          label="Last Name"
          value={lastName}
          onChange={onLastNameChange}
        />
        <InputFormField
          id="company"
          label="Company"
          value={company}
          onChange={onCompanyChange}
        />
        <InputFormField
          id="role"
          label="Role"
          value={role}
          onChange={onRoleChange}
        />
        <SkillsInput
          label="Skills and Efficiency"
          value={skills}
          onChange={onSkillsChange}
        />
      </div>
    </div>
  );
};

export { UserForm };

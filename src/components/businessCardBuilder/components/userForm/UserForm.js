import { InputFormField } from './InputFormField';

const UserForm = ({ userInfo, onAction }) => {
  console.log('UserForm Field Rendered');

  const { firstName, lastName, role, company } = userInfo;

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
      type: 'UPDATE_COMPANY',
      payload: { company: e.target.value },
    });

  return (
    <div className="user-form-container">
      <h3 className="user-form-header">User Form</h3>
      <div className="user-form">
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
      </div>
    </div>
  );
};

export { UserForm };

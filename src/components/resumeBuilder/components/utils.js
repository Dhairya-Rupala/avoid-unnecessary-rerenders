export const getFormattedContent = (formData) => {
  console.log('Formatting content');

  const { firstName = '', lastName = '', role = '', company = '' } = formData;
  const fullName = firstName + ' ' + lastName;

  return {
    fullName,
    company,
    role,
  };
};

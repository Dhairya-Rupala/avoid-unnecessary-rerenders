export const getFormattedContent = (content) => {
  console.log('Formatting content');

  const { firstName = '', lastName = '', role = '', company = '' } = content;
  const fullName = firstName + ' ' + lastName;

  return {
    fullName,
    company,
    role,
  };
};

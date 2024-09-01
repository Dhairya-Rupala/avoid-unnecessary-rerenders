export const getFormattedContent = (formData) => {
  const {
    firstName = '',
    lastName = '',
    role = '',
    company = '',
    skills,
  } = formData;
  const fullName = firstName + ' ' + lastName;

  return {
    fullName,
    company,
    role,
    skills: skills.sort((a, b) => b.efficiency - a.efficiency),
  };
};

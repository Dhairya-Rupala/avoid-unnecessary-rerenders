const getFormattedContent = (formData) => {
  console.log('Calculating formatted content');

  const { firstName = '', lastName = '', role = '', company = '' } = formData;
  const fullName = firstName + ' ' + lastName;

  return {
    fullName,
    company,
    role,
  };
};

const BusinessCardPreview = ({ formData }) => {
  console.log('BusinessCardPreview Rendered');

  const { colorConfig } = formData;

  const content = getFormattedContent(formData);

  return (
    <div className="business-card-preview-container">
      <h3 className="business-card-preview-header">Business Card Preview</h3>
      <div
        data-testid="business-card-preview"
        className="business-card-preview"
        style={{
          backgroundColor: colorConfig.bgColor,
          color: colorConfig.fontColor,
        }}
      >
        <div className="business-card-preview-content">
          <div className="fullName">Name: {<b>{content.fullName}</b>}</div>
          <div className="company-role">
            <div>Company: {content.company}</div>
            <div>Role: {content.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BusinessCardPreview };

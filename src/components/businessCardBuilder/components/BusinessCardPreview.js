import { useEffect, useState } from 'react';

const getFormattedContent = async (userInfo) => {
  const delayPromise = new Promise((res) => setTimeout(res, 500));
  await delayPromise;

  const { firstName, lastName, role, company } = userInfo;
  const fullName = firstName + ' ' + lastName;

  return {
    fullName,
    company,
    role,
  };
};

const BusinessCardPreview = ({ userInfo }) => {
  console.log('BusinessCardPreview Rendered');

  const [dataState, setDataState] = useState({ loading: false });

  useEffect(() => {
    const fetchFormattedContent = async () => {
      if (
        userInfo.firstName &&
        userInfo.lastName &&
        userInfo.role &&
        userInfo.company
      ) {
        setDataState({ loading: true });
        const content = await getFormattedContent(userInfo);
        setDataState({ loading: false, content });
      }
    };

    fetchFormattedContent();
  }, [userInfo]);

  const { loading, content } = dataState;

  let contentEl;

  if (loading) {
    contentEl = <div>Loading Card Content, Please wait ...</div>;
  } else if (!content) {
    contentEl = (
      <div>Please Enter the user details to create business card</div>
    );
  } else {
    contentEl = (
      <div className="business-card-preview-content">
        <div className="fullName">
          <b>{content.fullName}</b>
        </div>
        <div className="company-role">
          <div>Company: {content.company}</div>
          <div>Role: {content.role}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="business-card-preview-container">
      <h3 className="business-card-preview-header">Business Card Preview</h3>
      <div
        data-testid="business-card-preview"
        className="business-card-preview"
      >
        {contentEl}
      </div>
    </div>
  );
};

export { BusinessCardPreview };

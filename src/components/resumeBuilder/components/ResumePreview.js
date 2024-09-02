import { SkillTags } from './SkillTags';
import { getFormattedContent } from './utils';

const ResumePreview = ({ formData }) => {
  console.log('ResumePreview Rendered');

  const content = getFormattedContent(formData);

  return (
    <div className="resume-preview-container">
      <h3>Resume Preview</h3>
      <div data-testid="resume-preview" className="resume-preview">
        <div className="name-company-details">
          <div className="fullName">
            <b>{content.fullName}</b>
          </div>
          <div className="company-role">
            <div>Company: {content.company}</div>
            <div>Role: {content.role}</div>
          </div>
        </div>
        {formData.skills.length ? (
          <div className="resume-preview-skill-tags-container">
            <b>Skills</b>
            <SkillTags skills={formData.skills} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export { ResumePreview };

import { SkillTags } from './SkillTags';
import { getFormattedContent } from './utils';

const ResumePreview = ({ formData }) => {
  console.log('ResumePreview Rendered');

  const content = getFormattedContent(formData);

  return (
    <div class="flex flex-col gap-[12px] flex-[1] min-h-[300px]">
      <span class="text-[18px]">Resume Preview</span>
      <div
        data-testid="resume-preview"
        class="flex flex-col gap-[20px] p-[14px] justify-center items-center flex-[1] rounded-[6px] [box-shadow:rgba(0,_0,_0,_0.35)_0px_5px_15px] text-center"
      >
        <div class="flex flex-col gap-[20px]">
          <div class="text-[28px]">
            <b>{content.fullName}</b>
          </div>
          <div class="flex flex-col gap-[4px]">
            <div>Company: {content.company}</div>
            <div>Role: {content.role}</div>
          </div>
        </div>
        {formData.skills.length ? (
          <div class="max-w-[400px] flex flex-col gap-[8px] justify-center items-center">
            <span>Skills</span>
            <SkillTags skills={formData.skills} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export { ResumePreview };

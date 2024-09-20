import { UserForm } from './components/userForm';
import { useResumeBuilder } from './hooks/useResumeBuilder';
import { ResumePreview } from './components/ResumePreview';
import { Header } from './components/Header';

export const ResumeBuilder = () => {
  const { formData, headerColor, onAction } = useResumeBuilder();

  const onChangeHeaderColor = () => onAction({ type: 'UPDATE_HEADER_COLOR' });

  const adaptedFormData = {
    ...formData,
    skills: formData.skills.map((skill) => skill.name),
  };

  return (
    <div class="w-[850px] flex flex-col border-[2px] border-[solid] border-[black] rounded-[6px]">
      <Header
        headerColor={headerColor}
        onChangeHeaderColor={onChangeHeaderColor}
      />
      <div class="flex flex-col gap-[50px] px-[20px] py-[30px]">
        <UserForm formData={formData} onAction={onAction} />
        <ResumePreview formData={adaptedFormData} />
      </div>
    </div>
  );
};

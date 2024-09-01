import { UserForm } from './components/userForm';
import { useResumeBuilder } from './hooks/useResumeBuilder';
import { ResumePreview } from './components/ResumePreview';
import { Header } from './components/Header';

export const ResumeBuilder = () => {
  const { formData, headerColor, onAction } = useResumeBuilder();

  const onChangeHeaderColor = () => onAction({ type: 'UPDATE_HEADER_COLOR' });

  return (
    <div className="resume-builder-container">
      <Header
        headerColor={headerColor}
        onChangeHeaderColor={onChangeHeaderColor}
      />
      <div className="resume-builder">
        <UserForm formData={formData} onAction={onAction} />
        <ResumePreview formData={formData} />
      </div>
    </div>
  );
};

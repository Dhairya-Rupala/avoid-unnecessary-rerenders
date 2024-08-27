import { UserForm } from './components/userForm';
import { useBusinessCardBuilder } from './hooks/useBusinessCardBuilder';
import { BusinessCardPreview } from './components/BusinessCardPreview';
import { Header } from './components/Header';

export const BusinessCardBuilder = () => {
  const { userInfo, headerColor, onAction } = useBusinessCardBuilder();

  const onChangeHeaderColor = () => onAction({ type: 'UPDATE_HEADER_COLOR' });

  return (
    <div className="business-card-builder-container">
      <Header
        headerColor={headerColor}
        onChangeHeaderColor={onChangeHeaderColor}
      />
      <div className="business-card-builder">
        <UserForm userInfo={userInfo} onAction={onAction} />
        <BusinessCardPreview
          key={`${userInfo.firstName}-${userInfo.lastName}-${userInfo.company}-${userInfo.role}`}
          userInfo={userInfo}
        />
      </div>
    </div>
  );
};

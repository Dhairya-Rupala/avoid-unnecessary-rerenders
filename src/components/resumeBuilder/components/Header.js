const Header = ({ headerColor, onChangeHeaderColor }) => {
  console.log('Header rendered');

  return (
    <div
      data-testid="header"
      style={{ backgroundColor: headerColor }}
      className="header"
    >
      <h2>Resume Builder</h2>
      <button
        data-testid="change-header-color-button"
        onClick={onChangeHeaderColor}
      >
        Change Header Color
      </button>
    </div>
  );
};

export { Header };

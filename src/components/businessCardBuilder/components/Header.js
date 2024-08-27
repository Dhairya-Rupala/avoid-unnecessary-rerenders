const Header = ({ headerColor, onChangeHeaderColor }) => {
  console.log('Header rendered');

  return (
    <div
      data-testid="header"
      style={{ backgroundColor: headerColor }}
      className="business-card-builder-header"
    >
      <h2>Business Card Builder</h2>
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

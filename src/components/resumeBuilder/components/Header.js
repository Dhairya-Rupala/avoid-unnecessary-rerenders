const Header = ({ headerColor, onChangeHeaderColor }) => {
  console.log('Header rendered');

  return (
    <div
      data-testid="header"
      style={{ backgroundColor: headerColor }}
      class="bg-[black] text-[white] flex-none flex gap-[20px] justify-between items-center p-[20px] rounded-tr-[4px] rounded-tl-[4px]"
    >
      <span class="text-[24px]">Resume Builder</span>
      <button
        data-testid="change-header-color-button"
        onClick={onChangeHeaderColor}
        class="text-[black]"
      >
        Change Header Color
      </button>
    </div>
  );
};

export { Header };

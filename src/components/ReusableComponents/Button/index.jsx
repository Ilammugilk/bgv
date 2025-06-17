const Button = (props) => {
  const {
    buttonName = "",
    className = "",
    handleClick = () => {},
    isDisabled = false,
    preIcon = null,
    postIcon = null,
  } = props;

  return  <button
        className={`${className} px-[20px] py-[10px] bg-[var(--black)] text-[var(--white)] hover:bg-[var(--light-black)] rounded-md hover:cursor-pointer`}
        onClick={handleClick}
        disabled={isDisabled}
      >
        {preIcon}
        {buttonName}
        {postIcon}
      </button>
   
};

export default Button;

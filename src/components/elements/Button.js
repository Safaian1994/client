const Button = ({ children, type, bg, exteraClass, isDisabled, onClick }) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      onClick={onClick}
      className={`btn custom-btn bg-gradient ${
        isDisabled ? "disabled" : ""
      } btn-${bg} d-block w-100 ${exteraClass ?? ""}`}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  type: "button",
  isDisabled: false,
  bg: "primary",
};
export default Button;

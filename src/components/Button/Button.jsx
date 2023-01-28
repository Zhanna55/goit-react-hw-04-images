const Button = ({ type, label, changePage }) => {
  return (
    <button type={type} onClick={changePage}>
      {label}
    </button>
  );
};

export default Button;

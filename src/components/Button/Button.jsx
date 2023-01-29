import { LoadMoreBtn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ type, label, changePage }) => {
  return (
    <LoadMoreBtn type={type} onClick={changePage}>
      {label}
    </LoadMoreBtn>
  );
};

Button.propTypes = {
  changePage: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;

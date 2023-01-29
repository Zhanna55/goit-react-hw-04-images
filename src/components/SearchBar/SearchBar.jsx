import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import { SearchBarContainer, SearchFormBtn } from './SearchBar.styled';

const FormContainer = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
const FormInput = styled(Field)`
  display: inline-block;
  width: 100%;
  height: 45px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 1px 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values.search);
    actions.resetForm();
  };

  return (
    <SearchBarContainer>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <FormContainer autoComplete="off">
            <SearchFormBtn type="submit" disabled={isSubmitting}>
              <ImSearch size={20} />
            </SearchFormBtn>

            <FormInput
              type="text"
              name="search"
              placeholder="Search images and photos"
            />
          </FormContainer>
        )}
      </Formik>
    </SearchBarContainer>
  );
};

SearchBar.propType = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

import { Formik, Form, Field } from 'formik';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values.search);
    console.log(values.search);
    actions.resetForm();
  };
  return (
    <header>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form autoComplete="off">
            <button type="submit" disabled={isSubmitting}>
              <span>Search</span>
            </button>

            <Field
              type="text"
              name="search"
              placeholder="Search images and photos"
            />
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default SearchBar;

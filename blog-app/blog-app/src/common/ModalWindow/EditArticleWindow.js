import { Form, withFormik } from "formik";
import { ModalWrapper } from "./ModalWindow.styled";
import { ArticleValidationScheme } from "../../validationSchemas/ValidationScheme";

export const EditArticleWindow = (props) => {
  const { values, errors, onSubmit, handleSubmit, handleChange, handleBlur } =
    props;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    handleSubmit();

    props.handleCloseModal();
    onSubmit(values);
  };

  console.log(values);
  return (
    <>
      {props.isModalOpen ? (
        <ModalWrapper>
          <Form onSubmit={handleOnSubmit}></Form>
        </ModalWrapper>
      ) : (
        ""
      )}
    </>
  );
};

export default withFormik({
  validationSchema: ArticleValidationScheme,
  mapPropsToValues: ({ initialState }) => (initialState ? initialState : ""),
})(EditArticleWindow);

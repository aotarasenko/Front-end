import axios from "axios";
import { ModalWrapper } from "./ModalWindow.styled";
import { Form, withFormik } from "formik";
import { ArticleValidationScheme } from "../../validationSchemas/ValidationScheme";
import { useApi } from "../../hooks/useApi";

const DEFAULT_VALUES = {
  title: "title",
  body: "body",
  description: "description",
};

const AddPostWindow = (props) => {
  const { values, onSubmit, handleSubmit, handleChange, handleBlur } = props;

  const { createNewArticleApi } = useApi();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // handleSubmit();

    await createNewArticleApi(values);
    props.handleCloseModal();
    onSubmit(values);
  };

  return (
    <>
      {props.isModalOpen ? (
        <ModalWrapper>
          <Form onSubmit={handleOnSubmit}>
            <button onClick={props.handleCloseModal}>x</button>
            <fieldset>
              <legend>Add New Article </legend>
              <label>
                {" "}
                Title
                <input
                  name="title"
                  type="text"
                  placeholder="Article Title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
              </label>
              <label>
                {" "}
                Description
                <input
                  name="description"
                  type="text"
                  placeholder="Article Description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
              </label>
              <label>
                {" "}
                Body
                <input
                  name="body"
                  type="text"
                  placeholder="Article Body"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.body}
                />
              </label>
              <label>
                {" "}
                Tags
                <input
                  name="tags"
                  placeholder="Tags"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tags}
                />
              </label>
              <input type="submit" value="Create Article" />
            </fieldset>
          </Form>
        </ModalWrapper>
      ) : (
        ""
      )}
    </>
  );
};

export default withFormik({
  validationSchema: ArticleValidationScheme,
  mapPropsToValues: ({ initialValues }) =>
    initialValues ? initialValues : DEFAULT_VALUES,
})(AddPostWindow);

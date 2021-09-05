import { Form, withFormik } from "formik";
import { ModalWrapper } from "./ModalWindow.styled";
import { ArticleValidationScheme } from "../../validationSchemas/ValidationScheme";
import axios from "axios";

const EditArticleWindow = (props) => {
  const { values, errors, onSubmit, handleSubmit, handleChange, handleBlur } =
    props;
  const baseURL = "https://conduit.productionready.io/api";

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `${baseURL}/articles/${values.slug}`,
      {
        ...values,
      },
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );

    props.setModalOpen(!props.isModalOpen);
    onSubmit(values);
  };

  return (
    <>
      {props.isModalOpen ? (
        <ModalWrapper>
          <Form onSubmit={handleOnSubmit}>
            <button type="button" onClick={props.setModalOpen}>
              x
            </button>
            <fieldset>
              <legend>Edit Article </legend>
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
              <input type="submit" value="Save Changes" />
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
  mapPropsToValues: ({ initialValues }) => (initialValues ? initialValues : ""),
})(EditArticleWindow);

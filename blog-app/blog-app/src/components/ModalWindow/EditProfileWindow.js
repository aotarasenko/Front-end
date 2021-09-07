import { ModalWrapper } from "./ModalWindow.styled";
import { Form, withFormik } from "formik";
import { UserProfileValidationScheme } from "../../validationSchemas/ValidationScheme";
import { useApi } from "../../hooks/useApi";

const EditProfileWindow = (props) => {
  const { values, onSubmit, handleSubmit, handleChange, handleBlur } = props;

  const { updateProfileApi } = useApi();

  const handleEdit = async (e) => {
    e.preventDefault();
    handleSubmit();

    await updateProfileApi(values);
    props.handleCloseModal(!props.isModalOpen);
    onSubmit(values);
  };

  return (
    <>
      {props.isModalOpen ? (
        <ModalWrapper>
          <Form onSubmit={handleEdit}>
            <button onClick={props.handleCloseModal}>x</button>
            <fieldset>
              <legend>Edit your personal data</legend>
              <label>
                {" "}
                Avatar
                <input
                  type="text"
                  name="image"
                  placeholder={`Paste image url here`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.image}
                />
              </label>
              <label>
                {" "}
                Name
                <input
                  type="text"
                  placeholder={`Set new name`}
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
              </label>
              <label>
                {" "}
                Biography
                <input
                  type="text"
                  placeholder="Update  your`s story"
                  name="bio"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bio}
                />
              </label>
              <label>
                {" "}
                Email
                <input
                  type="text"
                  placeholder="Change Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </label>
              <input type="button" value="Save changes" onClick={handleEdit} />
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
  validationSchema: UserProfileValidationScheme,
  mapPropsToValues: ({ initialState }) => (initialState ? initialState : ""),
})(EditProfileWindow);

import { ModalWrapper } from "./ModalWindow.styled";
import axios from "axios";
import { ROOT_URL } from "../../api/auth/actions";
import { Form, withFormik } from "formik";
import { UserProfileValidationScheme } from "../../validationSchemas/ValidationScheme";

const EditProfileWindow = (props) => {
  const { values, errors, onSubmit, handleSubmit, handleChange, handleBlur } =
    props;

  const handleEdit = async (e) => {
    e.preventDefault();
    handleSubmit();

    await axios.put(
      `${ROOT_URL}/user`,
      {
        ...values,
      },
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );

    props.handleCloseModal(!props.isModalOpen);
    onSubmit(values);
  };

  console.log(values);
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
              {/* <label>
                {" "}
                Confirm
                <input
                  type="text"
                  placeholder="Confirm password"
                  value=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>*/}
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

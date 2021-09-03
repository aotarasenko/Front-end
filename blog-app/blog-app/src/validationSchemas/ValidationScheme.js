import * as Yup from "yup";

export const SignUpValidationSchema = Yup.object({
  username: Yup.string().trim().required("Required"),
  email: Yup.string().trim().required("Required").email("Not valid"),
  password: Yup.string()
    .trim()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().trim().required("Required").email("Not Valid"),
});

export const ArticleValidationScheme = Yup.object({
  title: Yup.string().trim().required("Required"),
  body: Yup.string().trim().required("Required"),
  description: Yup.string().trim().required("Required"),
});

export const UserProfileValidationScheme = Yup.object().shape({
  email: Yup.string().trim().required("Required").email("Not Valid"),
  username: Yup.string().trim().required("Required"),
  password: Yup.string()
    .trim()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

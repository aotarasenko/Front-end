import * as Yup from "yup";

export const SignUpValidationSchema = Yup.object({
  username: Yup.string().trim().required("Required"),
  email: Yup.string().trim().required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const LoginValidationSchema = Yup.object({
  email: Yup.string().trim().required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const ArticleValidationScheme = Yup.object({
  title: Yup.string().trim().required("Required"),
  body: Yup.string().trim().required("Required"),
  description: Yup.string().trim().required("Required"),
});

export const UserProfileValidationScheme = Yup.object({
  image: Yup.string().trim(),
  username: Yup.string().trim().required("Required"),
  bio: Yup.string().trim(),
});

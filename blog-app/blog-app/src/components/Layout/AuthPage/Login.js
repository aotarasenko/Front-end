import { AuthForm } from "./AuthForm";

export const Login = () => {
  return (
    <AuthForm>
      <fieldset>
        <legend>Login</legend>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Login</button>
      </fieldset>
    </AuthForm>
  );
};

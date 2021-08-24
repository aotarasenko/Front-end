import { useState } from "react";
import { registerUser } from "../../api/auth/actions";
import { useAuthDispatch } from "../../api/auth/authenticate";
import { AuthForm } from "./AuthForm.styled";
import { useHistory } from "react-router";
import { FlexRow } from "../../styles/generalStyles";
import { NavLink } from "react-router-dom";

export const Signup = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useAuthDispatch();

  const sendSignup = async (e) => {
    e.preventDefault();
    let payload = JSON.stringify({ user: { username, email, password } });
    try {
      registerUser(dispatch, payload).then(() => history.push("/auth/login"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthForm onSubmit={sendSignup}>
      <fieldset>
        <legend>Sign Up</legend>
        <input
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={username}
          required
        />
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button type="submit" onSubmit={sendSignup}>
          Sign Up
        </button>
      </fieldset>
      <FlexRow flexSpacing="center">
        <span>
          Already have an account? <NavLink to="/auth/signup">Log In</NavLink>{" "}
          Now!
        </span>
      </FlexRow>
    </AuthForm>
  );
};

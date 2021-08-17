import axios from "axios";
import { useState } from "react";
import { AuthForm } from "./AuthForm.styled";

export const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendSignin = async (e) => {
    e.preventDefault();

    // axios.get
  };

  return (
    <AuthForm onSubmit={sendSignin}>
      <fieldset>
        <legend>SignIn</legend>
        <input
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">SignIn</button>
      </fieldset>
    </AuthForm>
  );
};

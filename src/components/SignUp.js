import React, { useState } from "react";
import { loginRequest } from "../fetchRequests";

import { SIGNUP, useStore } from "../store/store";

function SignUp(props) {
  const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) =>
      dispatch({ type: SIGNUP, payload: userData })
    );
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <>
      <form id="login-form" onSubmit={handleSignUp}>
        <label htmlFor="username">Create Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          autoFocus
          required
          onChange={handleChange}
        />

        <label htmlFor="password">Create Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          required
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default SignUp;

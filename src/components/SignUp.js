import React, { useState } from "react";
import { signUpRequest } from "../fetchRequests";
import { SIGNUP, useStore } from "../store/store";

const initialState = {
  username: "",
  password: "",
  displayName: "",
};

function SignUp(props) {
  const dispatch = useStore((state) => state.dispatch);
  const [formData, setFormData] = useState(initialState);

  const handleSignUp = (e) => {
    e.preventDefault();
    signUpRequest(
      formData.username,
      formData.displayName,
      formData.password
    ).then((userData) => dispatch({ type: SIGNUP, payload: userData }));
    setFormData(initialState);
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <>
      <form id="signUp-form" onSubmit={handleSignUp}>
        <div className="create-username">
          <label htmlFor="username">Create Username:</label>
          <input
            placeholder="create username"
            type="text"
            name="username"
            value={formData.username}
            autoFocus
            required
            onChange={handleChange}
          />
        </div>
        <div className="Email">
          <label htmlFor="username">Email:</label>
          <input
            placeholder="Email"
            type="text"
            name="displayName"
            value={formData.displayName}
            autoFocus
            required
            onChange={handleChange}
          />

          <div className="create-password">
            <label htmlFor="password">Create Password:</label>
            <input
              hidden="true"
              placeholder="create password"
              type="text"
              name="password"
              value={formData.password}
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button className="sign-up-btn" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUp;

import React, { useState } from "react";
import { loginRequest } from "../fetchRequests";

import { LOGIN, useStore } from "../store/store";

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) =>
      dispatch({ type: LOGIN, payload: userData })
    );
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <>
      <form id="login-form" onSubmit={handleLogin}>
        <div className="userName">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            autoFocus
            required
            onChange={handleChange}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            required
            onChange={handleChange}
          />
        </div>
        <div className="login">
          <button type="submit">Login</button>
        </div>
        <h5>Not a member yet? sign up bellow!</h5>
      </form>
    </>
  );
}

export default Login;

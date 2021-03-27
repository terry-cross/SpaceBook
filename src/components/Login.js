import React, { useState } from "react";
import { loginRequest } from "../fetchRequests";
import { useHistory } from "react-router-dom";
import { LOGIN, useStore } from "../store/store";
import { Modal } from "react-bootstrap";

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);
  let history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [success, setSuccess] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) => {
      if (userData.statusCode !== 400) {
        dispatch({ type: LOGIN, payload: userData });
        history.push("/profile");
      } else {
        setSuccess(false);
      }
    });
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  const closeModal = () => {
    setSuccess(true);
  };

  return (
    <>
      {!success ? (
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Login Failed</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Username or Password is incorrect please try again.</p>
          </Modal.Body>

          <Modal.Footer>
            <button variant="primary" onClick={closeModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal.Dialog>
      ) : null}
      <form id="login-form" onSubmit={handleLogin}>
        <div className="userName">
          <label htmlFor="username">Username:</label>
          <input
            placeholder="Enter Username"
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
            placeholder="Enter Password"
            type="password"
            name="password"
            value={formData.password}
            required
            onChange={handleChange}
          />
        </div>
        <div className="login">
          <button className="logInBtn" type="submit">
            Login
          </button>
        </div>
        <h5 className="memberPrompt">Not a member yet? sign up bellow!</h5>
      </form>
    </>
  );
}

export default Login;

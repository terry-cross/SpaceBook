import React from "react";
import validate from "../ValidateInfo";

// import { useStore } from "../store/store";
const ProfilePage = () => {
  const { handleChange, values, handleSubmit } = validate;

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        {/* <div className="form-input">
          <label htmlfor="profile" className="form-lable">
            Full name
          </label>

          <input
            id="profile"
            type="text"
            name="fullName"
            className="form-input"
            placeholder=""
            value={values}
            onChange={handleChange}
          />
        </div> */}
        {/* <div className="form-input">
          <label htmlfor="Email" className="form-lable">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder=""
            value={values}
            onChange={handleChange}
          />
        </div> */}
        {/* <div className="form-input">
          <label htmlfor="userName" className="form-lable">
            User Name
          </label>
          <input
            id="userName"
            type="userName"
            name="userName"
            className="form-input"
            placeholder=""
            value={values}
            onChange={handleChange}
          />
        </div> */}
        <select
          id="profileDropDown"
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>Options</option>
          <option value="1">Messages</option>
          <option value="2">Edit profile</option>
          <option value="3">Home</option>
        </select>
        <div>
          <label htmlFor="bio" className="form-lable">
            Tell Us About Yourself
          </label>
        </div>

        <div className="form-input">
          <textarea
            id="bio"
            type="bio"
            name="bio"
            className="form-input2"
            placeholder=""
            value={values}
            onChange={handleChange}
          />
        </div>
        <button className="form-input-btn" type="submit">
          Update
        </button>
        <span className="form-input-login"></span>
      </form>
    </div>
  );
};

export default ProfilePage;

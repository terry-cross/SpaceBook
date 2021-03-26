import React from "react";
import validate from "../ValidateInfo";
import Menu from "../components/Menu";

const ProfilePage = () => {
  const { handleChange, values, handleSubmit } = validate;
   

  return (
    <div className="form-content-right">
      <div>
        <Menu />
      </div>
      <form className="form" onSubmit={handleSubmit}>
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

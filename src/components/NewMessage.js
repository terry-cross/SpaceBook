import { useState } from "react";
import { createMessageRequest } from "../fetchRequests";
import { POST, useStore } from "../store/store";

const initialState = {
  text: "",
};

function NewMessage(props) {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
  const [formData, setFormData] = useState(initialState);

  const handleNewMessage = (e) => {
    e.preventDefault();
    createMessageRequest(user.token, formData.text).then((userData) =>
      dispatch({ type: POST, payload: userData })
    );
    setFormData(initialState);
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <>
      <form id="userMessage" onSubmit={handleNewMessage}>
        <div className="create-newMessage">
          <textarea
            placeholder="create message"
            type="text"
            name="text"
            value={formData.text}
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <button className="create-newMessage" type="submit">
            Send Intergalactic Message
          </button>
        </div>
      </form>
    </>
  );
}
export default NewMessage;

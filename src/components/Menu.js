import React from "react";
import { Link } from "react-router-dom";
import { useStore, LOGOUT } from "../store/store";
import { logoutRequest } from "../fetchRequests";

function Menu(props) {
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);

  const logout = (e) => {
    logoutRequest(user.token).then(() => dispatch({ type: LOGOUT }));
    // window.location.reload(false);
  };

  return (
    <div id="menu">
      <h1>Kwitter</h1>
      <div id="menu-links">
        <Link to="/messages">Messages</Link>
        {user.token && (
          <button id="logoutButton" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Menu;

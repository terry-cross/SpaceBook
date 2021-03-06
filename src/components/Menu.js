import React from "react";
import { Link } from "react-router-dom";
import { useStore, LOGOUT } from "../store/store";
import { logoutRequest } from "../fetchRequests";
import { Navbar, Nav } from "react-bootstrap";

function Menu(props) {
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);

  const logout = (e) => {
    logoutRequest(user.token).then(() => dispatch({ type: LOGOUT }));
  };

  // };

  return (
    <div id="menu">
      <div id="menu-links">
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
          <Nav className="Space">
            <Navbar.Brand>Spacebook</Navbar.Brand>
            <Nav.Link href="/messages">Messages</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/users">User List</Nav.Link>
            {user.token && (
              <Nav.Link id="logoutButton" onClick={logout}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar>

        <Link to="/views/MessageList">Messages</Link>

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

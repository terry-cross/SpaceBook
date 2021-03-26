import React from "react";
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
            <Nav.Link href="/views/MessageList">Messages</Nav.Link>
            <Nav.Link href="/Profile">Profile</Nav.Link>
            <Nav.Link href="/views/About">About</Nav.Link>
            {/* <Nav.Link href="/Users">User List</Nav.Link> */}
            {user.token && (
              <Nav.Link id="logoutButton" onClick={logout}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar>
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

// TODO: Create a MessageList to display messages
import Menu from "../components/Menu";
import { useState, useEffect } from "react";
import { getUsers } from "../fetchRequests";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data.Users);
    });
  }, []);

  return (
    <div className="userColumn">
      <div>
        <Menu />
      </div>
      <h1>Users List</h1>
      <Link to="/" style={{ color: "red" }}>
        Go Home
      </Link>
      {users.map((users) => {
        return (
          <UserCard users={users} id={users.id} key={users.id} />
        );
      })}
      <Link to="/" style={{ color: "red" }}>
        Go Home
      </Link>
    </div>
  );
}

export default UsersList;

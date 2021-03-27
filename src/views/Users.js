// TODO: Create a MessageList to display messages
import Menu from "../components/Menu";
import { useState, useEffect } from "react";
import { getUsersList } from "../fetchRequests";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersList().then((data) => {
      setUsers(data.users);
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
      {users &&
        users.map((user) => {
          return <UserCard users={user} key={user.username} />;
        })}
      <Link to="/" style={{ color: "red" }}>
        Go Home
      </Link>
    </div>
  );
}

export default UsersList;

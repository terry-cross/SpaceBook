import React from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Menu from "../components/Menu";
import { useStore } from "../store/store";

function Home(props) {
  const user = useStore((state) => state.user);
  return (
    <>
      <div>
        <Menu />
      </div>
      {!user.token && <Login />}
      {!user.token && <SignUp />}
    </>
  );
}

export default Home;

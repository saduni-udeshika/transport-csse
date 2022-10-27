import React from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

export const Home = () => {
  const {user, logOut} = useUserAuth();

  const handleLogOut = async() => {
    try{
      await logOut();
    }catch(err){
      console.log(err.message);
    }
  }
  return (
    <>
      <div className="logOut">
      <div>{user && user.email}</div>
      <Button variant="primary" onClick={handleLogOut}>Log Out</Button>
      </div>
    </>
  );
};

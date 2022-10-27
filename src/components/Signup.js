import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import {Link, useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

export const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const {signUp} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setError("")
    try{
      await signUp(email, password);
      navigate('/')
    }catch(error){
      setError(error.message);
    }
  }

  return (
    <>
      <div className="p-4 box">
        <center><h2 className="mb-3">Signup</h2></center>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
          </Form.Group>

          <div className="d-grid gap-2">
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
          </div>
        </Form>
        <hr />
        <GoogleButton />
        <hr />
        <div className="p-4 boxmt-3 text-center">Don't have an account?  <Link to="/"> sign up</Link></div>
      </div>
    </>
  );
};

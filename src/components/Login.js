import React, {useState} from "react";
import { Form, Button, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import {Link, useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import '../App.css';

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const {logIn, googleSignIn} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setError("")
    try{
      await logIn(email, password);
      navigate('/home')
    }catch(error){
      setError(error.message);
    }
  }

  const handleGoogleSignIn = async(e)=>{
    e.preventDefault();
    try{
      await googleSignIn()
      navigate("/home")
    }catch(error){
      setError(error.message);
    }
  }

  return (
    <div className="container">
      <div className="p-4 box">
        <center><h2 className="mb-3">Login</h2></center>
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
            Log In
          </Button>
          </div>
        </Form>
        <hr />
        <GoogleButton className="g-btn" type="dark" onClick={handleGoogleSignIn}/>
        <hr />
        <div className="p-4 boxmt-3 text-center">Don't have an account?  <Link to="/signup"> sign up</Link></div>
      </div>
    </div>
  );
};

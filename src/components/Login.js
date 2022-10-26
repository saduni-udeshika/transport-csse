import React from "react";
import { Form, Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import {Link} from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="p-4 box">
        <center><h2 className="mb-3">Login</h2></center>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <div className="d-grid gap-2">
          <Button variant="primary" type="submit">
            Log In
          </Button>
          </div>
        </Form>
        <hr />
        <GoogleButton />
        <hr />
        <div className="p-4 boxmt-3 text-center">Don't have an account?  <Link to="/signup"> sign up</Link></div>
      </div>
    </>
  );
};

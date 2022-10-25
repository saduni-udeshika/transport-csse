import React from "react";
import { Form, Button } from "react-bootstrap";

export const Login = () => {
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Login</h2>
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
      </div>
    </>
  );
};

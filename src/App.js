import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { Signin } from "./components/Signin";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="signup" element={<Signin />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

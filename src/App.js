import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { Signin } from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import {Home} from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Header from './components/Header';
import Footer from './components/Footer'; 
import AddTimeTable from './components/TimeTable';
import AssignInspectors from "./components/AssignInspectors";
import Table from "./components/Table";

function App() {
  return (
   
      <Row>
        <Col>
          <UserAuthContextProvider>
          <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="signup" element={<Signin />} />
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route exact path="/table" element={<Table/>} />
             <Route exact path="/addtimetable" element={<AddTimeTable/>} />
             <Route exact path="/asignInspectors" element={<AssignInspectors/>} />
            </Routes>
            <Footer/>
          </UserAuthContextProvider>
        </Col>
      </Row>
     
   
  );
}

export default App;

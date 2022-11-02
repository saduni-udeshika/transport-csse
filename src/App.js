import { Col, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { Signin } from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import {Home} from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Header from './components/Header';
import Footer from './components/Footer'; 
import { CrowdedParts } from "./pages/crowdedParts/CrowdedParts";


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
              <Route path="/crowded-parts" element={<ProtectedRoute><CrowdedParts /></ProtectedRoute>} />
            </Routes>
            <Footer/>
          </UserAuthContextProvider>
        </Col>
      </Row>
     
   
  );
}

export default App;

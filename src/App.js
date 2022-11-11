import { Col, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { Signin } from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Header from "./components/Header";

import { CrowdedParts } from "./pages/crowdedParts/CrowdedParts";
import AddTimeTable from "./components/TimeTable";
import AssignInspectors from "./components/AssignInspectors";
import Table from "./components/Table";
import Inspectorform from "./components/Inspectorform";
import Inspector from './components/Inspector';

function App() {
  return (
    <Row>
      <Col>
        <UserAuthContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<Signin />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/crowded-parts"
              element={
                <ProtectedRoute>
                  <CrowdedParts />
                </ProtectedRoute>
              }
            />
            <Route exact path="/table" element={<Table />} />
            <Route exact path="/addtimetable" element={<AddTimeTable />} />
            <Route
              exact
              path="/asignInspectors"
              element={<AssignInspectors />}
            />
            <Route exact path="/inspectorsforms" element={<Inspectorform />} />
            <Route exact path="/inspector" element={<Inspector/>} />
          </Routes>
         
        </UserAuthContextProvider>
      </Col>
    </Row>
  );
}

export default App;

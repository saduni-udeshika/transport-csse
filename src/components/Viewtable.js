import React, { useState, useEffect } from "react";
import { Table, Col} from "react-bootstrap";
import axios from "axios";

function Timetable(props){
const [timetable, setTimetable] = useState([]);
const [search, setSearch] = useState("");
var [timetableObjects, settimetableObjects] = useState({})
var [currentId, setCurrentId] = useState('')


 return (
   <div >
 <Col>
              <div style={{paddingLeft: "8vh" }}>
                <h3 data-testid="supheading">TimeTable:</h3>
              </div>
              <div style={{ paddingLeft: "7vh", paddingTop: "5vh" }}>
                <Table striped bordered hover style={{ border: "black" }} >
                  <thead  >
                    <tr>
                      <th>Vehicle ID</th>
                      <th>Driver ID</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Arrival Time</th>
                      <th>Departure Time</th>
                     

                    </tr>
                  </thead>
                  <tbody>
                  
     
                    {Object.keys(timetableObjects).map(id => {
                      return <tr key={id}>
                        <td>{timetableObjects[id].vehicleId}</td>
                        <td>{timetableObjects[id].driverID}</td>
                        <td>{timetableObjects[id].from}</td>
                        <td>{timetableObjects[id].to}</td>
                        <td>{timetableObjects[id].arrivalTime}</td>
                        <td>{timetableObjects[id].departureTime}</td>
                        
                      </tr>
                    })}

                  </tbody>

                </Table>
              </div>
            </Col>
   </div>
 
   );

}
export default Timetable;
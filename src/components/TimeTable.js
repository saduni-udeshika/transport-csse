import React, {useState} from"react"
import axios from "axios";
import { Form ,Card, Button, Row, Col, Table } from "react-bootstrap";

export default function Timetable(){

  const [vehicleId, setVehicleID] = useState(" ");
  const [driverID, setDriverID] = useState(" ");
  const [from, setFrom] = useState(" ");
  const [to, setTo] = useState(" ");
  const [arrivalTime, setArrivalTime] = useState(" ");
  const [departureTime, setDepartureTime] = useState(" ");
 
 
  function sendData(e){  
    if(!(from.trim().length > 2)){
      alert("Invalid 'From' value!")
      return
  }else if(!(to.trim().length > 2)){
    alert("Invalid 'To' value!")
    return
}
    e.preventDefault();
    
    const newTimetable ={
      vehicleId,
      driverID,
      from,
      to,
      arrivalTime,
      departureTime
     
    }

    axios.post("http://localhost:5000/time/add",newTimetable).then(()=>{
    
      setVehicleID('');
      setDriverID(' '); 
      setFrom('');
      setTo('');
      setArrivalTime('');
      setDepartureTime('');

      
      alert("Timetable added");
      window.location = `/viewTimetable`;
      

    }).catch((err)=>{
      alert("error");
    })
  }  
  return(
<div>
  <center>
  <div style={{ paddingLeft: '1vh',paddingTop:"5vh" }}>
                  <h1 style={{ color: 'gray' }}>Manage time Table</h1>

                </div>
    </center>
<div style={{paddingleft:"0.1vh",paddingBottom:"15vh",paddingTop:"5vh"}}> 
<Row>
<Col>
<Card style={{ width: '58rem' }}>
  <Card.Body>
   


  <Form onSubmit={sendData}>
    <Row>
  <Col>
  <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
  <Form.Label>Vehicle ID</Form.Label>
        <Form.Control placeholder="Vehicle Id"
  onChange={(e) => setVehicleID(e.target.value)} />
      </div>
      <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 


      <Form.Label>Driver ID</Form.Label>
        <Form.Control placeholder="Driver Id"
  onChange={(e) => setDriverID(e.target.value)} />
      </div>
      <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 



      <Form.Label>From</Form.Label>
        <Form.Control placeholder="origin"
  onChange={(e) => setFrom(e.target.value)} />
      </div>
      <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 

  <Form.Label>To</Form.Label >
        <Form.Control placeholder="to" 
   onChange={(e) => setTo(e.target.value)} />
           </div>

   
   </Col>
   <Col>
   <br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
        
  
           <Form.Label>Arrival Time</Form.Label >
        <Form.Control placeholder="Arrival" 
   onChange={(e) => setArrivalTime(e.target.value)} />
           </div>


           <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
        
  
        <Form.Label>Departure Time</Form.Label >
     <Form.Control placeholder="Departure" 
onChange={(e) => setDepartureTime(e.target.value)} />
        </div>
    </Col>
    </Row>
    <center>
    <Button  variant="outline-success" type="submit">Add Timetables</Button>
    </center>
    
     
                   
  </Form>
 
  </Card.Body>
</Card>

</Col>
     <Col>
     <Table striped bordered hover variant="dark" size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Vehicle ID</th>
          <th>Driver ID</th>
          <th>From</th>
          <th>To</th>
          <th>Arrival Time</th>
          <th>Departure Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
     </Col>
     </Row>
     </div>
</div>

)
}


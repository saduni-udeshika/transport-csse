/*import React, {useState} from"react"
import axios from "axios";
import { Form ,Card, Button, Row, Col, Table, Container } from "react-bootstrap";

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
                  <h1 style={{ color: 'black' }}><b>Manage time Table</b></h1>

                </div>
    </center>
<div style={{paddingleft:"0.1vh",paddingBottom:"15vh",paddingTop:"5vh"}}> 
<Row>
<Col>
<Container>
<Card style={{ width: '70rem' }}>
  <Card.Body>
   


  <Form onSubmit={sendData}>
    <Row>
  <Col>
  <div style={{paddingleft:"3vh",paddingBottom:"3vh",paddingTop:"1vh"}}> 
  <Form.Label><b>Vehicle ID</b></Form.Label>
        <Form.Control placeholder="Vehicle Id"
  onChange={(e) => setVehicleID(e.target.value)} />
      </div>
      <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 


      <Form.Label><b>Driver ID</b></Form.Label>
        <Form.Control placeholder="Driver Id"
  onChange={(e) => setDriverID(e.target.value)} />
      </div>
      <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 



      <Form.Label><b>From</b></Form.Label>
        <Form.Control placeholder="origin"
  onChange={(e) => setFrom(e.target.value)} />
      </div>
      <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 

  <Form.Label><b>To</b></Form.Label >
        <Form.Control placeholder="to" 
   onChange={(e) => setTo(e.target.value)} />
           </div>

   
   </Col>
   <Col>
   <br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
        
  
           <Form.Label><b>Arrival Time</b></Form.Label >
        <Form.Control placeholder="Arrival" 
   onChange={(e) => setArrivalTime(e.target.value)} />
           </div>


           <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
        
  
        <Form.Label><b>Departure Time</b></Form.Label >
     <Form.Control placeholder="Departure" 
onChange={(e) => setDepartureTime(e.target.value)} />
        </div>
    </Col>
    </Row>
    <center>
    <Button  variant="outline-success" type="submit"><b>Add Timetables</b></Button>
    </center>
    
     
                   
  </Form>
 
  </Card.Body>
</Card>
</Container>

</Col>

     <Col>
     <div style={{paddingBottom:"3vh",paddingTop:"7vh"}}>
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
          <td>V123</td>
          <td>Mark</td>
          <td>Kolpity</td>
          <td>Kaduwela</td>
          <td>7.00am</td>
          <td>8.30am</td>
        </tr>
        <tr>
          <td>2</td>
          <td>V234</td>
          <td>Thornton</td>
          <td>Pettah</td>
          <td>Maharagama</td>
          <td>7.00am</td>
          <td>8.00am</td>
        </tr>
        <tr>
          <td>3</td>
          <td>V354</td>
          <td>Test</td>
          <td>Pettah</td>
          <td>Maharagama</td>
          <td>8.00am</td>
          <td>9.00am</td>
        </tr>

        <tr>
          <td>4</td>
          <td>V9034</td>
          <td>Thornton</td>
          <td>Pettah</td>
          <td>Maharagama</td>
          <td>7.00am</td>
          <td>8.00am</td>
        </tr>

        <tr>
          <td>5</td>
          <td>V2994</td>
          <td>Thornton</td>
          <td>Pettah</td>
          <td>Maharagama</td>
          <td>7.00am</td>
          <td>8.00am</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
     </Col>
   
     </Row>
     </div>
</div>

)
}
*/



import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Timetableform from "./Timetableform";
import firebaceDb from "../firebase";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";



const TimeTable = () => {
  var [timetableObjects, settimetableObjects] = useState({})
  var [currentId, setCurrentId] = useState('')

 /* const addOrEdit = obj => {
    if (currentId == '')
      firebaceDb.child('timetables').push(
        obj,
        err => {
          if (err)
            console.log(err)
          else
            setCurrentId('')
        }
      )
    else
      firebaceDb.child(`timetables/${currentId}`).set(
        obj,
        err => {
          if (err)
            console.log(err)

          else
            setCurrentId('')
        }
      )
  }
  useEffect(() => {
    firebaceDb.child('timetables').on('value', snapshot => {
      if (snapshot.val() != null)
        settimetableObjects({
          ...snapshot.val()

        })
    })

  }, [])
  const onDelete = key => {
    if (window.confirm('Are You Sure To Delete this Time session? ')) {
      firebaceDb.child(`timetables/${key}`).remove(
        err => {
          if (err)
            console.log(err)
          else
            setCurrentId('')
        }
      )


    }


  }*/

  return (
    <div>
      <div style={{ backgroundColor: "#AEAEAE", color: "black", paddingTop: "8vh", paddingBottom: "10vh", paddingLeft: "4vh" }} >
      <a href="/"><Button variant="outline-dark" >Back</Button></a> <br></br>

      
          <Row>
            <Col><Timetableform {...({  currentId, timetableObjects })} /></Col>
           
            <Col>
           
              <div style={{ paddingLeft: "8vh" }}>
                <h3 data-testid="supheading">TimeTable:</h3>
              </div>
              <div style={{ paddingLeft: "7vh", paddingTop: "5vh"  }}>
                <Table striped bordered hover style={{ border: "black" }} >
                  <thead  >
                    <tr>
                      <th>Vehicle ID</th>
                      <th>Driver ID</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Arrival Time</th>
                      <th>Departure Time</th>
                      <th>Actions</th>

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
                        <td>
                          <a className="btn text-primary"  >

                            <i className="fas fa-pencil-alt"></i>
                          </a>
                          <a className="btn text-danger"  >

                            <i className="fas fa-trash-alt"></i>
                          </a>
                        </td>
                      </tr>
                    })}

                  </tbody>

                </Table>
              </div>
            
            </Col>
           
          </Row>
       
       


      </div>

    </div>


  );




}

export default TimeTable;

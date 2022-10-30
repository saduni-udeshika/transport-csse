import React, {useState} from"react"
import axios from "axios";
import { Form ,Card, Button, Row, Col, Table } from "react-bootstrap";

export default function AssignInspectors(){

  const [route, setRoute] = useState(" ");
  const [inspectorID, setInspectorID] = useState(" ");
  
 
 
  function sendData(e){  
   
    e.preventDefault();
    
    const newAssignInspectors ={
      route,
      inspectorID,
    }

    axios.post("http://localhost:5000/time/add",newAssignInspectors).then(()=>{
    
      setRoute('');
      setInspectorID(' '); 
      
      alert("Successfully Assign Inspector");
      window.location = `/`;
      

    }).catch((err)=>{
      alert("error");
    })
  }  
  return(
<div>
  <center>
  <div style={{ paddingLeft: '1vh',paddingTop:"5vh" }}>
                  <h1 style={{ color: 'gray' }}>Assign Inspector</h1>

                </div>
    </center>
<div style={{paddingleft:"0.1vh",paddingBottom:"15vh",paddingTop:"5vh"}}> 
<Row>
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
     <Col>

     <Card style={{ width: '58rem' }}>
  <Card.Body>
   


  <Form onSubmit={sendData}>
   
  
  <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
  <Form.Label>Route</Form.Label>
        <Form.Control placeholder="Vehicle Id"
  onChange={(e) => setRoute(e.target.value)} />
      </div>
      <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 


      <Form.Label>Inspector ID</Form.Label>
        <Form.Control placeholder="Driver Id"
  onChange={(e) => setInspectorID(e.target.value)} />
      </div>
    
    <center>
    <Button  variant="outline-primary" type="submit">Assign Inspector</Button>
    </center>
    
     
                   
  </Form>
 
  </Card.Body>
</Card>








   
     </Col>
     </Row>
     </div>
</div>

)
}


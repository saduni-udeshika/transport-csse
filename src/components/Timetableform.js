import React,{useState,useEffect} from "react";
import { Form ,Card, Button, Row, Col, Table, Container} from "react-bootstrap";

const Timetableform=(props)=>{
    const initiatFieldvalues={
        vehicleId: '',
        driverID: '',
        from: '',
        to: '',
        arrivalTime:'',
        departureTime:''       
    }

    var[values,setvalues]=useState(initiatFieldvalues)

    useEffect(()=>{
        if(props.currentId=='')
        setvalues({
          ...initiatFieldvalues
        })
        else
        setvalues({
          ...props.timetableObjects[props.currentId]
        }
        )
      },[props.currentId,props.timetableObjects])
      

      const handleInputChange=e=>{
        var {name,value}=e.target
        setvalues(
            {
                ...values,
                [name]: value

            }
        )
    }

    const handleFormSubmit=e=>{
        e.preventDefault();
        window.alert("Time Table Added");
        props.addOrEdit(values)
    }

    return(
        <div style={{backgroundColor: "#AEAEAE"}}>
        
        <h3>Add Time Table:</h3>
        <div style={{paddingLeft:"8vh"}}>
            </div>

            <div style={{paddingleft:"0.1vh",paddingBottom:"15vh",paddingTop:"5vh"}}> 
            <Row>
              <Col>
               <Container>
                <Card style={{ width: '70rem' }}>
                 <Card.Body> 
                  <Form onSubmit={handleFormSubmit}>
              
                  <Row>
               <Col>
                  <div style={{paddingleft:"3vh",paddingBottom:"3vh",paddingTop:"1vh"}}> 
                  <Form.Label><b>Vehicle ID</b></Form.Label>
                  <Form.Control placeholder="Vehicle ID" style={{borderColor:"#AEAEAE"}} name="vehicleId"  value={values.vehicleId} onChange={handleInputChange} />
                 </div>


                 <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
                 <Form.Label><b>Driver ID</b></Form.Label>
                 <Form.Control placeholder="Driver ID"  style={{borderColor:"#AEAEAE"}} name="driverID"  value={values.driverID} onChange={handleInputChange}/>
                 </div>
     
                 <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
                 <Form.Label><b>From</b></Form.Label>
                 <Form.Control placeholder="From" style={{borderColor:"#AEAEAE"}} name="from"  value={values.from} onChange={handleInputChange} />
                 </div>
     
     
                 <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
                 <Form.Label><b>To</b></Form.Label >
                 <Form.Control placeholder="To" style={{borderColor:"#AEAEAE"}} name="to"  value={values.to} onChange={handleInputChange} />
                 </div>

   
            </Col>
             <Col>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          
           <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
           <Form.Label><b>Arrival Time</b></Form.Label >
           <Form.Control placeholder="Arrival Time"  style={{borderColor:"#AEAEAE"}} name="arrivalTime"  value={values.arrivalTime} onChange={handleInputChange} />
           </div>


           <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
           <Form.Label><b>Departure Time</b></Form.Label >
           <Form.Control placeholder="Departure" style={{borderColor:"#AEAEAE"}} name="departureTime"  value={values.departureTime} onChange={handleInputChange} />
           </div>
      </Col>
    </Row>
       <center>
       <input className="btn btn-success btn-block"  type="submit" value={props.currentId==''?"Add TimeTable":" update"} />
       </center>
    
      </Form>
     </Card.Body>
    </Card>
   </Container>
   </Col>
  </Row>
            
        </div>
        
        </div>
  );
            
  }
 export default Timetableform;



 /*
  <Row>
                <Col>
                <div style={{paddingleft:"3vh",paddingBottom:"3vh",paddingTop:"1vh"}}> 
                <Form.Group className="mb-3" controlId="suppliername">
                <Form.Label>Vehicle ID : </Form.Label>
                <Form.Control type="text" placeholder="Vehicle Id" style={{borderColor:"#008CBA"}} name="vehicleId"  value={values.vehicleId} onChange={handleInputChange}/>
                </Form.Group>
                </div>


                <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
                <Form.Group className="mb-3" controlId="suppliername">
                <Form.Label>From : </Form.Label>
                <Form.Control type="text" placeholder="From" style={{borderColor:"#ed7829"}} name="from"  value={values.from} onChange={handleInputChange}/>
                </Form.Group>
                </div>

                <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
                <Form.Group className="mb-3" controlId="suppliername">
                <Form.Label>To : </Form.Label>
                <Form.Control type="text" placeholder="To" style={{borderColor:"#ed7829"}} name="to"  value={values.to} onChange={handleInputChange}/>
                </Form.Group>
                </div>
                </Col>
                 </Row>
                 <Col>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
                <Form.Group className="mb-3" controlId="suppliername">
                <Form.Label>Arrival Time : </Form.Label>
                <Form.Control type="text" placeholder="Arrival Time" style={{borderColor:"#ed7829"}} name="arrivalTime"  value={values.arrivalTime} onChange={handleInputChange}/>
                </Form.Group>
                </div>

                <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
                <Form.Group className="mb-3" controlId="suppliername">
                <Form.Label>Departure Time: </Form.Label>
                <Form.Control type="text" placeholder="Departure Time" style={{borderColor:"#ed7829"}} name="departureTime"  value={values.departureTime} onChange={handleInputChange}/>
                </Form.Group>
                </div>
                 </Col>
                 <input className="btn btn-primary btn-block" style={{backgroundColor:"#ed7829",borderColor:"black"}} type="submit" value={props.currentId==''?"Add TimeTable":" update"} />
        
*/ 
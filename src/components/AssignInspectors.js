import React, {useState,  useEffect} from"react"
import { Form ,Card, Button, Row, Col, Table, Container, } from "react-bootstrap";
import firebaceDb from "../firebase";
import Inspectorfrom from "./Inspectorform";
const AssignInspectors = () => {

  const [route, setRoute] = useState(" ");
  const [inspectorID, setInspectorID] = useState(" ");
  const [error, setError] = useState("");
  var [inspectorObjects, setinspectorObjects] = useState({})
  var [currentId, setCurrentId] = useState('')

  
  const addOrEdit = obj => {
    if (currentId == '')
      firebaceDb.child('inspectors').push(
        obj,
        err => {
          if (err)
            console.log(err)
          else
            setCurrentId('')
        }
      )
    else
      firebaceDb.child(`inspectors/${currentId}`).set(
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
    firebaceDb.child('inspectors').on('value', snapshot => {
      if (snapshot.val() != null)
        setinspectorObjects({
          ...snapshot.val()

        })
    })

  }, [])
  
  const onDelete = key => {
    if (window.confirm('Are You Sure To Delete this Inspector ? ')) {
      firebaceDb.child(`inspectors/${key}`).remove(
        err => {
          if (err)
            console.log(err)
          else
            setCurrentId('')
        }
      )


    }



    /*const sendData = async (e)=>{ 
    e.preventDefault()
    setError("")
      try{
        await assignInspectors(route, inspectorID);
        //navigate('/home')
      }catch(error){
        setError(error.message);
      }
    }
*/


  return(
/*<div>
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
          <th>Halt</th>
          <th>In</th>
          <th>Scan</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>Thornton</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Thornton</td>
          
        </tr>

        <tr>
          <td>3</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Thornton</td>
          
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
</div>*/





<div>
      <div style={{ backgroundColor: "#AEAEAE", color: "black", paddingTop: "8vh", paddingBottom: "10vh", paddingLeft: "4vh" }} >
      <a href="/"><Button variant="outline-dark" >Back</Button></a>

        <Container>
          <Row>
            <Col><Inspectorform {...({ addOrEdit, currentId, inspectorObjects })} /></Col>
            <Col>
              <div style={{ paddingLeft: "8vh" }}>
                <h3 data-testid="supheading">Inspector:</h3>
              </div>
              <div style={{ paddingLeft: "7vh", paddingTop: "5vh" }}>
                <Table striped bordered hover style={{ border: "black" }} >
                  <thead  >
                    <tr>
                      <th>Inspector ID</th>
                      <th>Route</th>
                     

                    </tr>
                  </thead>
                  <tbody>

                    {Object.keys(inspectorObjects).map(id => {
                      return <tr key={id}>
                        <td>{inspectorObjects[id].route}</td>
                        <td>{inspectorObjects[id].inspectorID}</td>
                      
                        <td>
                          <a className="btn text-primary" onClick={() => { setCurrentId(id) }} >

                            <i className="fas fa-pencil-alt"></i>
                          </a>
                          <a className="btn text-danger" onClick={() => { onDelete(id) }} >

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
        </Container>


      </div>

    </div>
  
);
}

}

export default AssignInspectors;
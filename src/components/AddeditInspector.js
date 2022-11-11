import React,{useState,useEffect} from "react";
import { Container,Row, Col } from "react-bootstrap";
import Inspecterform from "./Inspecterform";
import firebaceDb from "../firebase";
import { Table} from "react-bootstrap";

const AddeditInspector=()=>{
  var [timeObjects,settime]=useState({})
  var [currentIds,setCurrentIds]=useState('')

   const addOrEditz= obj=>{
     if(currentIds=='' )
    firebaceDb.child('managetimetable').push(
        obj,
        err =>{
            if(err)
            console.log(err)
            else
            setCurrentIds('')
        }
    )
    else
    firebaceDb.child(`managetimetable/${currentIds}`).set(
      obj,
      err =>{
          if(err)
          console.log(err)
          else
          setCurrentIds('')
      }
  )
   }
   useEffect(()=>{
    firebaceDb.child('managetimetable').on('value',snapshot=>{
        if(snapshot.val()!=null)
        settime({
            ...snapshot.val()

        })
    })
},[])
const onDelete=key=>{
if (window.confirm('Are You Shure To Delete ? ')){
  firebaceDb.child(`managetimetable/${key}`).remove(
    err =>{
        if(err)
        console.log(err)
        else
        setCurrentIds('')
    }
)  
}
}

return(
<div >
<Container>
  <Row>
    <Col><Inspecterform {...({addOrEditz,currentIds,timeObjects})}/></Col>
    <Col style={{paddingTop:"15vh"}}>
    
    <Table striped bordered hover variant="light">
  <thead>
  <tr>
      <th>Arival</th>
      <th>Departure</th>
      <th>Driver ID</th>
      <th>From </th>
      <th>To</th>
      <th>Vehicle ID </th>
      <th>Inspecter </th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {Object.keys(timeObjects).map(id=>{
        return<tr>
<td>{timeObjects[id].arival}</td>
<td>{timeObjects[id].departure}</td>
<td>{timeObjects[id].driverid}</td>
<td>{timeObjects[id].from}</td>
<td>{timeObjects[id].to}</td>
<td>{timeObjects[id].vehicleid}</td>
<td>{timeObjects[id].Inspecter}</td>

<a className="btn text-primary" onClick={()=>{setCurrentIds(id)}} >

<i className="fas fa-pen-alt"></i>
</a>

<a className="btn text-danger" onClick={()=>{onDelete(id)}} >

<i className="fas fa-trash-alt"></i>
</a>
            </tr>
    })}
   
 
  </tbody>

</Table>
</Col>
  </Row>
  </Container>


</div> 



);

}
export default AddeditInspector;
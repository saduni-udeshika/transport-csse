import React,{useState,useEffect} from "react";
import { Form,Card} from "react-bootstrap";

const Inspecterform=(props)=>{
  //Add and Edit  Order
    const initiatFieldvalues={
      vehicleid: '',
      driverid: '',
      from: '',
      to: '',
      arival: '',
      departure: '',
      Inspecter: '',                                                
    }
    var[values,setvalues]=useState(initiatFieldvalues)
    
   useEffect(()=>{
      if(props.currentIds=='')
      setvalues({
        ...initiatFieldvalues
      })
      else
      setvalues({
        ...props.timeObjects[props.currentIds]
      }
      )
    },[props.currentIds,props.timeObjects])
    
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
        props.addOrEditz(values)
    }
    return(
<div style={{paddingTop:"5vh"}}>

<Card>
  <div style={{paddingBottom:"2vh",paddingTop:"2vh",paddingLeft:"1vh",paddingRight:"1vh"}}>
<h3>vehicle ID : {values.vehicleid} </h3>

<h3>Driver ID : {values.driverid} </h3>

<h3>From : {values.from}</h3>

<h3>To : {values.to}</h3>

<h3>Add Inspecter</h3>

<br/>
<Form onSubmit={handleFormSubmit}>
<Form.Group className="mb-3" controlId="Inspecter">
    <Form.Label>Inspecter : </Form.Label>
    <Form.Control type="text"  placeholder="Inspecter ..."  name="Inspecter"  value={values.Inspecter} onChange={handleInputChange}/>
  </Form.Group>

    
 
  <br/>
  <input className="btn btn-primary btn-block"  type="submit" value={props.currentId==''?"save":" update"} />
  
</Form>
</div>
   </Card>
</div>


    );
    
    }
    export default Inspecterform;
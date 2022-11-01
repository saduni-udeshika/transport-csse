import React,{useState,useEffect} from "react";
import { Form,Button} from "react-bootstrap";

const Inspectorform=(props)=>{
    const initiatFieldvalues={
       route: '',
       inspectorID: '',     
    }
    var[values,setvalues]=useState(initiatFieldvalues)
    
   useEffect(()=>{
      if(props.currentId=='')
      setvalues({
        ...initiatFieldvalues
      })
      else
      setvalues({
        ...props.inspectorObjects[props.currentId]
      }
      )
    },[props.currentId,props.inspectorObjects])
    
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
        window.alert("Assign Inspector");
        props.addOrEdit(values)
    }
    return(
<div style={{backgroundColor: "#AEAEAE"}}>
<h3>Add Supplier:</h3>
<div style={{paddingLeft:"8vh"}}>
    </div>
<Form onSubmit={handleFormSubmit}>
  <Form.Group className="mb-3" controlId="route">
    <Form.Label>Route: </Form.Label>
    <Form.Control type="text" style={{borderColor:"#ed7829"}}placeholder="Supplier Name" name="route"  value={values.route} onChange={handleInputChange}/>
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="inspectorID">
    <Form.Label>Inspector ID: </Form.Label>
    <Form.Control type="text"style={{borderColor:"#ed7829"}} placeholder="Inspector ID" name="inspectorID"  value={values.inspectorID}  onChange={handleInputChange}/>
  </Form.Group>
  
 
  
  <input className="btn btn-primary btn-block" style={{backgroundColor:"#ed7829",borderColor:"black"}} type="submit" value={props.currentId==''?"Add Inspector":" update"} />
  
</Form>
   
</div>


    );
    
    }
    export default Inspectorform;
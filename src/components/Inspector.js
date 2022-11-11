import React, { useState } from "react";
import { Tab,Tabs,Button  } from "react-bootstrap";
import AddeditInspector from "./AddeditInspector";
const Inspector = () => {
    const [key, setKey] = useState('home');
  return (
    <div style={{paddingBottom:"22vh"}}>
          <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >

      <Tab  eventKey="home" title=" Assign - Inspectors">
          <AddeditInspector/>
      </Tab>
    
      
    </Tabs>


    
    </div>
  );
};

export default Inspector;
import React from "react";
import { Card, Container} from "react-bootstrap";
import "../App.css";


function Footer(){

  var curr_year = new Date().getFullYear();

  return (
//     <footer><body>
//        <Button variant="#">FAQ 💡</Button>
      
//        <Button href="/contactusadmin" className="btn btn-light">CONTACT US 📲</Button>
     
// <Link to= "/about"><Button variant="/about">ABOUT US 🏷️</Button> </Link>
//      <center> <p>Copyright @ {curr_year}</p></center>

//      <div >
//      <img src="https://img.icons8.com/material/24/fa314a/youtube--v1.png"/>
    
//      <img src="https://img.icons8.com/ios-glyphs/30/000000/visa.png"/>
//      <img src="https://img.icons8.com/ios-glyphs/30/000000/mastercard.png"/>
    
//  </div>   
//     </body></footer>
<Container>
<Card className="footer">
<Card.Body><center> <p>Copyright @ {curr_year}</p></center></Card.Body>
</Card>
</Container>
    
  )

}
  
export default Footer;
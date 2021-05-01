import React,{useState} from "react";
//import "../../App.css";
import {
  Button,
  Col,
  Form,
  Container,
  Row,
  Alert,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Location() {

  
  let [Name, setLocation] = useState("");
  let [City, setCity] = useState("");
  let [success, setInsert] = useState([]);

 

  let [NameError, setNameError] = useState({});
  let [CityError, setCityError] = useState({});
 


 


  const submit = () => {
   // event.preventDefault();
   const isValid = validate();
   if (isValid) {
     
      fetch("http://localhost:4000/api/v1/location/addlocation", {
        method: "POST",
        body: JSON.stringify({Name,City  }),
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => response.json())
      .then((response) => setInsert(response.result));
    }
  }
  const validate = () => {
    const NameError = {};
    const CityError = {};
   
    let isvalid = true;

    if (Name == 0) {
      NameError.NameV = "Name is Required";
      isvalid = false;
    }

 
    else if (City == 0) {
      CityError.CityV = "City is Required";
      isvalid = false;
    }
  
    setNameError( NameError)
    setCityError( CityError)
  
    return isvalid;
  };
  return (
    <div style={{ margin: "auto" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container style={{ marginTop: "-10px" }}>
        <h5 style={{ textAlign: "center",textTransform:"uppercase" }}>Add Dog Loction</h5>
        <br />
       
        <Form>
          <Form.Row>
            <Form.Group style={{textAlign:"center"}} as={Col} controlId="formGridEmail">
              <Form.Label>Loction Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Loction"   onChange={(e) => {
                  setLocation(e.target.value);
                }} />
            </Form.Group>

          
          </Form.Row>
           
          <Form.Row>
          <Form.Group style={{textAlign:"center"}} as={Col} controlId="formGridPassword">
              <Form.Label >City</Form.Label>
              <Form.Control   onChange={(e) => {
                  setCity(e.target.value);
                }} type="text" placeholder="Enter City" />
            </Form.Group>
          </Form.Row>


          <Form.Row>
          <Button style={{ margin:"auto"}}   onClick={() => {submit()}}>Submit</Button>
          </Form.Row>

        </Form>
      </Container> 
      {/* npm install antd */} 
      
    </div>
  );
}

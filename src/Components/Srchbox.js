import React from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Button,
  Form,
  
} from "react-bootstrap";
import "./Srchbox.css";

function Srchbox() {
  return (
    <>
    <div className="top">
    <h2 className="header">ADDRESS BOOK</h2>
    </div>
    <div className='first'>
      <Navbar bg="dark" expand="lg" className="Navbr">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search for users details"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
     </div>
   </>
  );
}

export default Srchbox;

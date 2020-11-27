import React from "react";
import Home from "./Home";
import {
  Navbar,
  Nav,
  FormControl,
  Form,
} from "react-bootstrap";
import "./Srchbox.css";

function Srchbox(props) {
  return (
    <>
      <div className="top">
        <div className="first">
          <Navbar bg="dark" expand="lg" className="Navbr">
            <Nav className="mr-auto">
              {" "}
              <h2 className="header">ADDRESS BOOK</h2>
            </Nav>

            <Home />
          </Navbar>{" "}
          <br />
       
          <div className="searchbox">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search for users details"
                className="mr-sm-2"
                onChange={(e) => props.setSearch(e.target.value)}
              />
            </Form>
            </div>
        
        </div>
      </div>
    </>
  );
}

export default Srchbox;

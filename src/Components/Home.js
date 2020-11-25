import React,{ useState,useEffect } from "react";
import { Navbar,Container,Row,Col,Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRequest } from "../redux/action/actions";
import { useHistory } from "react-router-dom";
import "./Home.css";

function Home(props) {
    const [country, setCountry]=useState();
   
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector(
    (state) =>
      state.inforeducer &&
      state.inforeducer.result &&
      state.inforeducer.result.results
  );
  useEffect(() => {
    dispatch(getUsersRequest());
    setCountry([]);
  }, []);
  
  useEffect(() => {
    setCountry(state);
  }, [state]);
 
  const nameHandle=(e)=>{
    setCountry(e.target.value);
 }

 const handleSubmit=()=>{
    props.history.push(`/info/${country}`);
 }

  return (
    <div>
      <Navbar bg="light" variant="light" className="homepage">
        <Container>
          <Row>
            <Col xs={6}>
              <select
                type="text"
                name="country"
                onChange={(e) =>nameHandle(e)}
                >
                <option value>Nationalities</option>
                {state && state.map((opt,i)=>(
                    <option value={opt.location.country}>
                      {opt.location.country}
                    </option>
                ))}
              </select>
            </Col>
            <Col xs={6}>
              <Button variant="dark"
               onClick={handleSubmit}>
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>

    </div>
  );
}

export default Home;

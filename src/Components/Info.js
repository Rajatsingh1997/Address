import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRequest } from "../redux/action/actions";
import PaperComponent from "./Usermodal";
import { Table, Spinner,Button} from "react-bootstrap";
import "./Info.css";


function Info() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  const dispatch = useDispatch();
  const state = useSelector(
    (state) =>
      state.inforeducer &&
      state.inforeducer.result &&
      state.inforeducer.result.results
  );
  //This is for Loader

  const loader = useSelector((state) => state.inforeducer);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showData = (val) => {
    setData(val);
    handleClickOpen();
  };
  return (
    <div>
      <PaperComponent
        open={open}
        state={state && state}
        handleClose={handleClose}
        data={data && data}
      />
      <div className="Box">
        {loader.isloading ? (
          <Spinner animation="border" />
        ) : (
          <Table striped bordered hover className="table">
            <thead>
              <tr>
                <th>Picture </th>
                <th>First </th>
                <th>Last</th>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            {state?.map((val) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>
                        <img src={val?.picture.thumbnail} alt={"img"} />
                      </td>
                      <td>{val?.name.first}</td>
                      <td>{val?.name.last}</td>

                      <td>{val?.login.username}</td>
                      <td>{val?.email}</td>
                      <td>
                        <Button variant="dark" onClick={() => showData(val)}>
                          Details{" "}
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </Table>
        )}
      </div>
    </div>
  );
}

export default Info;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRequest } from "../redux/action/actions";
import PaperComponent from "./Usermodal";
import { Table, Spinner,Button} from "react-bootstrap";
import  Pagination from "./Pagination";
import Srchbox from './Srchbox';
import "./Info.css";


function Info(props) {
  //for modal

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  
  // for pagination 
  const [showPerPage,setShowPerPage]=useState(9);
  const [pagination, setPagination]= useState({
    start:0,
    end:showPerPage
  })
   // for Search

  const [ search, setSearch ] = useState("");
  const [ find, setFind ] =useState([])
  const [arr,setArr]=useState([]);
 
  //for API response

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
  const onPaginationchange=(start,end)=>{
    setPagination({start:start,end:end})
  }

  useEffect(()=>{
    const take = state?.filter((state)=>{
      return(
        state.name.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        state.name.first.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        state.name.last.toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
    })
    setFind(take)
    console.log(search,"ooooo")
  },[search])

  useEffect(() => {
    const countryName = props.match?.params?.country;
    const filteredCountry = state?.filter(
      (allstate) => allstate?.location.country === countryName
    );
   console.log(props.match.params, "ooo");
    setFind(filteredCountry);
    setArr(filteredCountry);
  }, [state]);

 console.log(find,"llllll")
  return (
    <div>
      <Srchbox setSearch={setSearch}/> 
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
          <Table responsive striped bordered hover className="table">
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
            {find?.slice(pagination.start,pagination.end)?.map((val) => {
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
        <Pagination
        showPerPage={showPerPage}
        onPaginationchange={onPaginationchange}
        />
      </div>
    </div>
  );
}

export default Info;

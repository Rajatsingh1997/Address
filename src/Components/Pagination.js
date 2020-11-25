import React,{useState,useEffect} from 'react'
import { Button } from "react-bootstrap";

function Pagination({showPerPage,onPaginationchange}) {
    const[counter,setCounter]=useState(1)
    const[total,setTotal]=useState()
    useEffect(() => {
     const value = showPerPage * counter;
     onPaginationchange(value-showPerPage,value);  
    }, [counter])
    const onButtonClick=(type)=>{
  if (type === "prev"){
      if(counter===1){
          setCounter(1);
      }
      else{
          setCounter(counter-1);
      }
  }else if(type==="next"){
      if(Math.ceil(57/showPerPage)===counter){
          setCounter(counter)
      }
      else{
          setCounter(counter+1)
      }
  }
    }
    return (
        <div className="d-flex justify-content-between">
            <Button variant="dark" className="btn btn-primary"
            onClick={()=>onButtonClick("prev")}
            >Previous</Button>
            <Button  variant="dark" className="btn btn-primary"
             onClick={()=>onButtonClick("next")}
            >Next</Button>
        </div>
    )
}
export default Pagination

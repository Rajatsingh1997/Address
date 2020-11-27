import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function Pagination({ showPerPage, onPaginationchange, seaching }) {
  const [counter, setCounter] = useState(1);
  const[total,setTotal]=useState(57)
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationchange(value - showPerPage, value);
  }, [counter]);
  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(47 / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  console.log(showPerPage, "pppppppppppppp");
  return (
    <div className="d-flex justify-content-between">
      {!seaching && (
        <Button
          variant="dark"
          className="btn btn-primary"
          onClick={() => onButtonClick("prev")}
          disabled={counter === 1 ? true : false}
        >
          Previous
        </Button>
      )}
      {!seaching && (
        <Button
          variant="dark"
          className="btn btn-primary"
          onClick={() => onButtonClick("next")}
          disabled={counter === Math.ceil(47 / showPerPage) ? true : false}
        >
          Next
        </Button>
      )}
    </div>
  );
}
export default Pagination;

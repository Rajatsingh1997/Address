import React from "react";
import {Button} from "react-bootstrap";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";


function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog({
  open,
  handleClose,
  data
}) {
    console.log(data,'nnnnnnnn');
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
         Details:
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Street:-{data?.location?.street?.number+' '+data?.location?.street?.name}<br/>
            City:- {data?.location?.city}<br/>
            State:-{data?.location?.state}<br/>
            Country:-{data?.location?.country}<br/>
            Postcode:-{data?.location?.postcode}<br/>
            Phone:-{data?.phone}<br/>
            Cell:-{data?.cell}<br/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
          onClick={handleClose} 
          variant="dark">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

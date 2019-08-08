import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CommentsChart from "./CommentsChart";
import { string } from "prop-types";

export default function ScrollDialog(props) {
  const { open, scroll, handleClickOpen, handleClose, content } = props;
  let data = [];
  if (content) {
    Object.keys(content).map((key, index) => {
      data.push({ name: index, comment_length: content[key].length });
    });
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title">
          Bar graph for Comments
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          {<CommentsChart data={data} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

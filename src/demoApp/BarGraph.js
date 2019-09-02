import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CommentsChart from "./CommentsChart";

export default function ScrollDialog(props) {
  const { open, scroll, handleClose, content } = props;

  return (
    <div style={{ width: 700 }}>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        fullWidth
      >
        <DialogTitle id="scroll-dialog-title">Graph</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          {<CommentsChart data={content} />}
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

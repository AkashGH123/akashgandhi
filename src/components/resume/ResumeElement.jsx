import React from "react";
import { Typography, Paper } from "@material-ui/core";
import ElementBody from "./ElementBody";

function ResumeElement(props) {
  const { classes, heading, body, paper } = props;
  return (
    <React.Fragment>
      <Paper className={paper}>
        <Typography
          component="h4"
          variant="h4"
          className={classes.heading}
          color="primary"
        >
          {heading}
        </Typography>
        <ElementBody classes={classes} body={body} />
      </Paper>
    </React.Fragment>
  );
}

export default ResumeElement;

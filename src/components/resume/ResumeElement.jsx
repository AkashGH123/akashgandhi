import React from "react";
import { Typography } from "@material-ui/core";
import ElementBody from "./ElementBody";

function ResumeElement(props) {
  const { classes, heading, body } = props;
  return (
    <React.Fragment>
      <Typography
        component="h4"
        variant="h4"
        className={classes.heading}
        color="primary"
      >
        {heading}
      </Typography>
      <ElementBody classes={classes} body={body} />
    </React.Fragment>
  );
}

export default ResumeElement;

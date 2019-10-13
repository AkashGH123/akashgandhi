import React from "react";
import { Typography } from "@material-ui/core";

function ElementBody(props) {
  const { classes, body } = props;

  return body.split("*").map(item => {
    return (
      <Typography
        component="body"
        variant="body"
        className={classes.body}
        color="primary"
        gutterBottom
      >
        {item}
      </Typography>
    );
  });
}

export default ElementBody;

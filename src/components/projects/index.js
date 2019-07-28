import React, { Component } from "react";
import Federalist from "./federalist";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: { flexGrow: 1 }, // a style rule
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: 16
  },
  label: {
    marginRight: 200,
    flex: "right"
  } // a nested style rule
};

class Projects extends Component {
  render() {
    const { classes } = this.props;
    const spacing = 2;
    const element = (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={24}>
          <Grid container justify="left" spacing={spacing}>
            <Federalist
              title="The Federalist papers"
              subheader="Skills : Data Analysis with Python"
              description="Brief description"
              image={process.env.PUBLIC_URL + "/images/FederalistImage.jpg"}
            />
            <Federalist
              title="Malware prediction"
              subheader="Skills : Data Analysis with Python"
              description="Brief description"
              image={process.env.PUBLIC_URL + "/images/kaggle_40.png"}
            />
            <Federalist
              title="IEEE-Fraud Detection"
              subheader="Skills : Data Analysis with Python"
              description="Brief description"
              image={process.env.PUBLIC_URL + "/images/kaggle_40.png"}
            />
          </Grid>
        </Grid>
      </Grid>
    );
    return element;
  }
}

export default withStyles(styles)(Projects);

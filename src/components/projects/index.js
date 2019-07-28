import React, { Component } from "react";
import Federalist from "./federalist";

class Projects extends Component {
  render() {
    return (
      <div>
        <Federalist
          title="The Federalist papers"
          subheader="Skills : Data Analysis with Python"
          description="Brief description"
          image={process.env.PUBLIC_URL + "/images/FederalistImage.jpg"}
        />
      </div>
    );
  }
}

export default Projects;

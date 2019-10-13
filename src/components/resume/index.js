import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import ResumeElement from "./ResumeElement";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: "2%",
    marginLeft: "2%",
    marginBottom: "2%"
  },
  paper: {
    marginBottom: "5%"
  },
  body: {
    marginTop: 8,
    marginLeft: "2%",
    marginBottom: "1%",
    width: "60%"
  },
  link: {
    marginTop: "2%",
    marginLeft: "2%",
    marginBottom: "2%"
  }
}));

function Resume() {
  const classes = useStyles();
  const summary =
    "Data Analytics enthusiast with 3.5 years of experience in Banking domain with proficiency in SQL/Oracle, Python and Scikit learn*Experienced in working with small/large teams in a fast-paced Agile Environment*Excellent communication skills with proven capability to interact with all levels of organization and clients*Active kaggler who worked on multiple projects such as Microsoft malware prediction, IEEE- CIS Fraud Detection etc.";
  const skills =
    "Python(Flask, Pandas, Scikit learn, NumPy, PySpark etc)* R, SQL, Spark, Containerization using Docker, ReactJS, vanilla JS ,Redux* Jupyter Notebooks, Anaconda, cloud computing on AWS and GCP";
  const ml =
    "Regression,Classification,Clustering*Data Exploration, Hyperparameter tuning*Feature Engineering and Feature Selection using PCA,RFS/RBE etc.";

  return (
    <div className={classes}>
      <a href={process.env.PUBLIC_URL + "/Resume.pdf"} download>
        <Typography
          component="h4"
          variant="h6"
          className={classes.link}
          color="primary"
        >
          Download Resume
        </Typography>
      </a>

      <ResumeElement classes={classes} heading="Summary" body={summary} />
      <Divider />
      <ResumeElement classes={classes} heading="Skills" body={skills} />

      <Divider />
      <ResumeElement classes={classes} heading="ML Skills" body={ml} />

      <Divider />
    </div>
  );
}

export default Resume;

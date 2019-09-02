import React from "react";
import { Typography, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  heading: {
    // marginTop: "2%"
    //   marginLeft: "2%",
    //   marginBottom: "2%",
    //   height: 1000
  },
  body: {
    marginTop: 0,
    //marginLeft: "2%",
    //marginBottom: "1%",
    height: 900
  },
  subText: {
    marginLeft: "2%"
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#313942" }} className={classes.body}>
      <div className={classes.subText}>
        <Typography
          component="h3"
          variant="h2"
          className={classes.heading}
          color="secondary"
          gutterBottom
        >
          Welcome..I am glad you visited.
        </Typography>
        <Typography variant="h6" color="secondary" gutterBottom>
          A Brief summary about me...
        </Typography>
        <Typography variant="body1" color="secondary" gutterBottom>
          I am a data Enthusiast who completed his Master's in Business
          Analytics and Information Systems from University of South
          Florida,Tampa in Dec 2018 .
        </Typography>
        <Typography variant="body1" color="secondary" gutterBottom>
          I have more than 4 years for professional work experience working in
          multiple roles such as Environment Delivery Manager , Front End
          technician/developer , Data analyst and Data Engineer .
        </Typography>
        <Typography variant="body1" color="secondary" gutterBottom>
          I enjoy wrangling data and also love performing exploratory analysis .
          I am always on the lookout for new data sources to create interesting
          analysis .
        </Typography>
        <Typography variant="body1" color="secondary" gutterBottom>
          In my spare time I enjoy learning new technologies or solve new
          problems on kaggle competitions . I am a voracious reader (mostly
          technical) and I intend to start reading even more . On weekends I
          enjoy playing Table tennis , badminton or any new activities and
          sometimes I binge watch shows netflix
          <FontAwesomeIcon icon={faSmile} />
        </Typography>
        <Typography variant="body1" color="secondary" gutterBottom>
          Thank you for sparing your valuable time to read through . Browse
          through the website to explore more .
        </Typography>
        <Link
          component={RouterLink}
          to="/resume"
          color="inherit"
          //className={classes.menuButton}
        >
          <Button variant="contained">View Resume</Button>
        </Link>
      </div>
    </div>
  );
}

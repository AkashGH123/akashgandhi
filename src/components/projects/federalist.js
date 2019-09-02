import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    width: 400,
    height: 400,
    marginLeft: "10%",
    marginTop: "10%",
    marginRight: "10%",
    marginBottom: 10
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  button: {
    marginBottom: 1,
    marginTop: 10,
    MarginLeft: 10,
    align: "right"
  }
}));

function Federalist(props) {
  const classes = useStyles();
  const { title, subheader, image, description, filename } = props;

  return (
    <Grid key={1} item>
      <Card className={classes.card}>
        <CardHeader title={title} subheader={subheader} />
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
        <Button
          color="primary"
          href={process.env.PUBLIC_URL + "/projectcode/" + filename + ".html"}
          target="_blank"
        >
          Open
        </Button>
      </Card>
    </Grid>
  );
}

export default Federalist;

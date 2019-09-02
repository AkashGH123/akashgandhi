import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeightPaper: {
    height: 250,
    width: 250,
    marginLeft: 8
  },
  fixedWidthPaper: {
    height: 250,
    width: 1080,
    marginLeft: 8
  },
  title: {
    height: 50,
    color: "primary",
    textAlign: "center",
    marginBottom: 10
  }
}));

function Dashboard(props) {
  const { videoid } = props;
  const classes = useStyles();

  const page = (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h4" color="primary">
          Dashboard
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md="auto" lg="auto">
            <Paper className={classes.fixedWidthPaper}>
              <Typography color="primary" variant="subtitle1">
                {"Audience Sentiments for " + videoid}
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            xs={10}
            md="auto"
            lg="auto"
            alignContent="space-between"
            alignItems="center"
            justify="center"
          >
            <Paper className={classes.fixedHeightPaper}>
              <Typography color="primary" variant="subtitle1">
                {"Video Statistics for " + videoid}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={6} md="auto" lg="auto">
            <Paper className={classes.fixedHeightPaper}>
              <Typography color="primary" variant="subtitle1">
                {"Captions for " + videoid}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={6} md="auto" lg="auto">
            <Paper className={classes.fixedHeightPaper}>
              <Typography color="primary" variant="subtitle1">
                {"Comments for " + videoid}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md="auto" lg="auto">
            <Paper className={classes.fixedHeightPaper}>
              <Typography color="primary" variant="subtitle1">
                {"Others " + videoid}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );

  return <h2>{page}</h2>;
}

export default Dashboard;

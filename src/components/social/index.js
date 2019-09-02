import { GoogleLogin } from "react-google-login";
import React from "react";
import { Typography, Button } from "@material-ui/core";
import history from "../../history";
import { connect } from "react-redux";
import { fetchLogin } from "../../actions/actions";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: "2%",
    marginLeft: "2%",
    marginBottom: "2%"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  body: {
    marginTop: 8,
    marginLeft: "2%",
    marginBottom: "1%"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "primary"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  }
}));

function Index(props) {
  const classes = useStyles();
  const client_id = process.env.REACT_APP_CLIENTID;

  const responseGoogle = response => {
    props.fetchLogin(true);
    history.push("/app");
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="primary">
            DemoApp Login
          </Typography>
          <GoogleLogin
            clientId={client_id}
            buttonText="Sign In with Google"
            color="primary"
            onSuccess={responseGoogle}
            onFailure={response => {
              console.log(response);
            }}
            className={classes.submit}
            cookiePolicy={"single_host_origin"}
            render={renderProps => (
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                color="primary"
                variant="contained"
                fullWidth
                className={classes.submit}
              >
                Sign In with Google
              </Button>
            )}
          />
        </Paper>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  auth: state.auth.signSuccess
});

export default connect(
  mapStateToProps,
  { fetchLogin }
)(Index);

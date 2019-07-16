import { GoogleLogin } from 'react-google-login';

import React from 'react'
import { Typography } from '@material-ui/core';
import history from "../../history"
import {connect} from "react-redux"
import {fetchLogin} from "../../actions/actions"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  heading:{
marginTop:"2%",
marginLeft:"2%",
marginBottom:"2%"
  },
  body:{
      marginTop:8,
      marginLeft:"2%",
      marginBottom:"1%"

  }
}));


function Index(props) {
  
  const classes = useStyles();
  const client_id=process.env.REACT_APP_CLIENTID

     const responseGoogle = response => {
       props.fetchLogin(true)
        
        //  return <Redirect to='/app'/>;
        history.push("/app")
      }


      
        
        return(
            <React.Fragment >
              <div className={classes.heading}>
                <Typography component="h3" variant="h3" className={classes.heading} gutterBottom color="primary">
Login
                </Typography>
            <GoogleLogin
              clientId={client_id}
              buttonText="Sign In with Google"
              color="primary"
              onSuccess={responseGoogle}
              onFailure={response=>{
                console.log(response);
              }}
              //cookiePolicy={'single_host_origin'}
            />
            </div>
            </React.Fragment>
          );
    
}

const mapStateToProps=state=>({
  auth:state.auth.signSuccess
})

export default connect (mapStateToProps,{fetchLogin})(Index);
 

 

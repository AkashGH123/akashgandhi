import { GoogleLogin } from 'react-google-login';

import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import history from "../../history"
import { Redirect } from 'react-router'

class index extends Component {

     responseGoogle = response => {
         //console.log(response)
        //  return <Redirect to='/app'/>;
        return history.push("/#/app")
      }
    render() {
        const client_id=process.env.REACT_APP_CLIENTID
        return(
            <React.Fragment>
                <Typography component="h3" variant="h3" gutterBottom>
Login
                </Typography>
            <GoogleLogin
              clientId={client_id}
              buttonText="Sign In with Google"
              color="primary"
              onSuccess={this.responseGoogle}
              onFailure={response=>{
                console.log(response);
              }}
              cookiePolicy={'single_host_origin'}
            />
            </React.Fragment>
          );
    }
}

export default index
 

 

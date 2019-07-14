import { GoogleLogin } from 'react-google-login';

import React, { Component } from 'react'
import { Typography } from '@material-ui/core';

class index extends Component {

    responseGoogle = (response) => {
        console.log(response);
      }
    render() {
        return(
            <React.Fragment>
                <Typography component="h3" variant="h3" gutterBottom>
Login
                </Typography>
            <GoogleLogin
              clientId="156791993197-f6ldapbdkopm5q6799lhhsodh5t6kkmv.apps.googleusercontent.com"
              buttonText="Sign In with Google"
              color="primary"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            </React.Fragment>
          );
    }
}

export default index
 

 

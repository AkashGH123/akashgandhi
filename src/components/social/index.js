import { GoogleLogin } from 'react-google-login';

import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import history from "../../history"
import { Redirect } from 'react-router'
import {connect} from "react-redux"
import {fetchLogin} from "../../actions/actions"

class index extends Component {

     responseGoogle = response => {
       this.props.fetchLogin("Logged In")
         console.log(this.props.auth)
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
              //cookiePolicy={'single_host_origin'}
            />
            </React.Fragment>
          );
    }
}

const mapStateToProps=state=>({
  auth:state.auth.signSuccess
})

export default connect (mapStateToProps,{fetchLogin})(index);
 

 

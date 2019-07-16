import React from 'react'
import Typography from "@material-ui/core/Typography"
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

export default function About() {
    const classes = useStyles();
   

    
    return (
        <div>
      
    <Typography component="h4" variant="h4" className={classes.heading} color="primary">
        About me
    </Typography>
    </div>
    )
}

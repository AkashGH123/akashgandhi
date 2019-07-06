import React from 'react'
import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { mergeClasses } from '@material-ui/styles';
import Divider from "@material-ui/core/Divider"

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

export default function Resume() {
    const classes = useStyles();
    const objective=<React.Fragment>
<Typography component="h4" variant="h4" className={classes.heading} color="primary">
    Objective
</Typography>
<Typography component="body" variant="body" className={classes.body} >
body
</Typography>

    </React.Fragment>

    const skills=<React.Fragment>
<Typography component="h4" variant="h4" className={classes.heading} color="primary">
            Skills
        </Typography>
        <Typography component="body" variant="body" className={classes.body}>
        body
    </Typography>

    </React.Fragment>


const experience=<React.Fragment>

<Typography component="h4" variant="h4" className={classes.heading} color="primary">
            Work Experience
        </Typography>
        <Typography component="body" variant="body" className={classes.body}>
        body
    </Typography>
</React.Fragment>

const education=<React.Fragment>
    <Typography component="h4" variant="h4" className={classes.heading} color="primary">
            Education
        </Typography>
        <Typography component="body" variant="body" className={classes.body}>
        body
    </Typography>
</React.Fragment>
    return (
        <div>
       {objective}
    <Divider/>
    {skills}
    
    <Divider/>
    {experience}
    <Divider/>
    {education}
    <Divider/>
    <Divider/>
    </div>
    )
}

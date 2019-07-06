import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Button color="inherit" href="/"  className={classes.menuButton}>
         
          <Typography>
             Akash Gandhi
          </Typography>
          </Button>
          
          
          <Typography variant="h6" className={classes.title}>
            
          </Typography>

          <Button color="inherit" href="/about"  className={classes.menuButton}>About Me</Button>
          
          <Button color="inherit" href="/resume"  className={classes.menuButton}>Resume</Button>
          <Button color="inherit" href="/projects"  className={classes.menuButton}>Projects</Button>
          <Button color="inherit" href="others" className={classes.menuButton}>In Progress</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

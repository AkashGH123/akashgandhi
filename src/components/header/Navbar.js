import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';


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
       

          <Link component={RouterLink} to="/" color="inherit" className={classes.title}>
          <Typography variant="h6">
            Akash Gandhi
            </Typography>
            </Link>

          <Link component={RouterLink} to="/about" color="inherit" className={classes.menuButton}>
            <Typography variant="h6">
            About me
            </Typography>
            
            
            </Link>
          <Link component={RouterLink} to="/resume" color="inherit" className={classes.menuButton}>
          <Typography variant="h6">
            Resume
            </Typography>
            </Link>
          <Link component={RouterLink} to="/projects" color="inherit" className={classes.menuButton}>
          <Typography variant="h6">
            Projects
            </Typography>
            </Link>
          <Link component={RouterLink} to="/others" color="inherit" className={classes.menuButton}>
          <Typography variant="h6">
            Login
            </Typography>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import FederalistImage from "../static/images/FederalistImage.jpg"

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      marginLeft:"5%",
      marginTop:"2%"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    button:{
        marginBottom:1,
        marginTop:10,
        MarginLeft:10,
        align:"right"
    }
  }));
  

export default function Federalist() {
    const classes = useStyles();

    return (
        <div>
        <Card className={classes.card}>
      <CardHeader
        title="The Federalist papers"
        subheader="Skills : Data Analysis with Python"
      />
      <CardMedia
        className={classes.media}
        image={FederalistImage}
        title="Federalist Papers"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
       Brief description
        </Typography>
      </CardContent>
           <Button color="primary">
               Open
           </Button>
    </Card>
    </div>
    )
}
import React from 'react';
import { Typography, Paper, Container } from '@material-ui/core';
import useStyles from './styles'; 

function GettingStarted() {
    const classes = useStyles();
  return (
    <div>
    <Container maxWdith='lg'>
      <Paper className={classes.paperBig}>
        <Typography className={classes.typographyBig}>Getting started with Usurp</Typography>
        <Typography className={classes.typography}>1) Create your profile in the profile page.</Typography>
        <Typography className={classes.typography}>2) Start posting articles, projects and informative videos.</Typography>
        <Typography className={classes.typography}>3) Also start posting questions if you need help.</Typography>
        <Typography className={classes.typography}>4) Check for constests and challenges. Participate to get recruited by the top companies in your field.</Typography>
        <Typography className={classes.typography}>5) Level up your profile to join exclusive events, win prizes and opportunities.</Typography>
      </Paper>
      </Container>
    </div>
  )
}

export default GettingStarted

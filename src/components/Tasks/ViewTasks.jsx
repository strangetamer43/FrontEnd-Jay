import React, {useState, useEffect} from 'react';
import {Paper, Button} from '@material-ui/core';
import useStyles from './styles';

const ViewTasks = () => {
    const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
      <Paper className={classes.paper} >
      <typography className={classes.heading}>Graphic Design</typography>
      <typography className={classes.description} >Description</typography>
      <button className={classes.button}>Register</button>
      </Paper>
      <Paper className={classes.paper} >
        <typography className={classes.heading}>UI/UX</typography>
        <typography className={classes.description}>Description</typography>
        <button className={classes.button}>Register</button>
      </Paper>
      <Paper className={classes.paper} >
        <typography className={classes.heading}>Social Media</typography>
        <typography className={classes.description}>Description</typography>
        <button className={classes.button}>Register</button>
      </Paper>
      <Paper className={classes.paper} >
        <typography className={classes.heading}>Digital Marketing</typography>
        <typography className={classes.description}>Description</typography>
        <button className={classes.button}>Register</button>
      </Paper>
      <Paper className={classes.paper}>
        <typography className={classes.heading}>Product Management</typography>
        <typography className={classes.description}>Description</typography>
        <button className={classes.button}>Register</button>
      </Paper>
      <Paper className={classes.paper}>
        <typography className={classes.heading}>Analytics</typography>
        <typography className={classes.description}>Description</typography>
        <button className={classes.button}>Register</button>
      </Paper>
      </div>
    </div>
  )
}

export default ViewTasks

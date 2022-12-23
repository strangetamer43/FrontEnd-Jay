import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid, Card, ListItemAvatar, Button, ListItem, List, Paper, Divider } from '@material-ui/core';
import { getUserProfile } from '../../actions/profile';
import useStyles from "./styles";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Edit from "@material-ui/icons/Edit"
import { Modal } from '@material-ui/core';
import FormPintro from '../Form/FormPintro';

function IntroductionAndGoals({ currentId, setCurrentId }) {
  const classes = useStyles();
  const { profiles, profile, isLoading } = useSelector((state) => state.profiles);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false)
  }
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  useEffect(() => {
    dispatch(getUserProfile());
  }, [currentId, dispatch]);
  
  
  return (
    <Paper className={classes.IntroPaper} elevation={7}>

      <Edit className={classes.editButton} fontSize="medium" onClick={() => { setOpen(true) }} />


      <typography className={classes.IntroHead} > Introduction and Goals of {user?.result?.name}</typography>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        <typography className={classes.smallDetails}>Introduction: {profiles?.data?.introduction}</typography>

        <typography className={classes.smallDetails}>Goals: {profiles?.data?.goals}</typography>
      </div>

      <Modal open={open} onClose={handleClose}>
        <FormPintro currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose} profile={profiles} />
      </Modal>

    </Paper >
  )
}

export default IntroductionAndGoals
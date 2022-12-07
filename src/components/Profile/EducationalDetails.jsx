import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid, Card, ListItemAvatar, Button, ListItem, List, Paper, Divider } from '@material-ui/core';
import { getUserProfile } from '../../actions/profile';
import useStyles from "./styles";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Marginer } from "../Auth/Marginer";
import Edit from "@material-ui/icons/Edit"
import FormPEdu from '../Form/FormPEdu';
import { Modal } from '@material-ui/core';


function EducationalDetails({ currentId, setCurrentId }) {
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

      <div className={classes.Details}>
        <typography variant="h6" className={classes.IntroHead} gutterBottom >
          Educational Qualifications
        </typography>


        <typography className={classes.smallDetails} >
          Graduate/Post Graduate: {profiles?.education}
        </typography>
        <typography className={classes.smallDetails}>
          Senior Secondary Education: {profiles?.education1}
        </typography>
        <typography className={classes.smallDetails}>
          Secondary Education: {profiles?.education2}
        </typography>
      </div>

      <Modal open={open} onClose={handleClose}>
        <FormPEdu currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose} profile={profiles} />
      </Modal>

    </Paper>
  )
}

export default EducationalDetails

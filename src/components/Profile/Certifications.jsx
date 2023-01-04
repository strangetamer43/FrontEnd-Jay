import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid, Card, ListItemAvatar, Button, ListItem, List, Paper, Divider } from '@material-ui/core';
import { getUserProfile } from '../../actions/profile';
import useStyles from "./styles";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Marginer } from "../Auth/Marginer";
import Edit from "@material-ui/icons/Edit"
import FormPCer from '../Form/FormPCer';
import { Modal } from '@material-ui/core';

function Certifications({ currentId, setCurrentId }) {
  const classes = useStyles();
  const { profiles, profile, isLoading } = useSelector((state) => state.profiles);
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const dispatch = useDispatch();

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

      <div className={classes.title}>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <typography variant="h6" className={classes.IntroHead} gutterBottom >
            Certifications or courses
          </typography>

          <div className={classes.smallDetails1}>
          
            {profiles?.data?.certifications?.map((certification) => <typography className={classes.smallDetails} >{certification}</typography>)}
          
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <typography variant="h6" className={classes.IntroHead1} gutterBottom >
            Certification URL's
          </typography>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {profiles?.data?.certificationURL?.map((certificationURL) => <a href="certificationURL" target="_blank"> {certificationURL}</a>)}
          </div>
        </div>
      </div>

      <Modal open={open} onClose={handleClose} >
        <FormPCer currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose} profile={profiles} />
      </Modal>
    </Paper >
  )
}

export default Certifications;
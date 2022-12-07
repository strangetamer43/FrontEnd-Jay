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


          <typography className={classes.smallDetails} >
            {profiles?.certifications?.map((certifications) => <typography> {certifications}</typography>)}
          </typography>

        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <typography variant="h6" className={classes.IntroHead1} gutterBottom >
            Certification URL's
          </typography>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {profiles?.certificationURL?.map((certificationURL) => <Link to={{ pathname: certificationURL }} target="_blank"> {certificationURL}</Link>)}
          </div>
        </div>
      </div>

      <Modal open={open} onClose={handleClose} >
        <FormPCer currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose} profile={profiles} />
      </Modal>
    </Paper >
  )
}

export default Certifications

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Marginer } from "../Auth/Marginer";
import Edit from "@material-ui/icons/Edit"

import { getSpecificUserProfile, getUserProfile } from '../../actions/profile';
import { Container, AppBar, Typography, Grow, Grid, Card, ListItemAvatar, Button, ListItem, List, Paper, Divider } from '@material-ui/core';
import useStyles from "./styles";
import FormbarP from '../FormBar/FormButtonP';
import ProfilePoints from './ProfilePoints';
import { IconButton } from '@material-ui/core';
import FormPd from '../Form/FormPd';
import { Modal } from '@material-ui/core';


const ProfileData = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const { profiles, profile, isLoading } = useSelector((state) => state.profiles);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const dispatch = useDispatch();



  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  useEffect(() => {
    dispatch(getUserProfile());
  }, [currentId, dispatch]);



  return (
    <Paper className={classes.card} elevation={7}>

      <div className={classes.details} >
        <img className={classes.image}
          class_name="header_logo"
          src={user.result.imageUrl}
          alt="profile-picture"
        />

        <typography className={classes.h5} variant="h4" >
          {user.result.name}
        </typography>

        <ProfilePoints creator={profiles?.creator} />

      </div>


      <div className={classes.title}>
        <div className={classes.details2}>
          <typography variant="h5" className={classes.email}  >
            {user.result.email || user.result.emailId}
          </typography>
        </div>

        <div className={classes.details2}>
          <typography variant="h5" className={classes.number}  >
            {user.result.phoneNumber || profiles?.number}
          </typography>
        </div>
      </div>


      <Marginer direction="vertical" margin="40px" />



    </Paper>
  )
}

export default ProfileData;
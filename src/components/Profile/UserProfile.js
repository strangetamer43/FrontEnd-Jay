import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import usurpLogo from "../Sidebar/usurp-logo.png";
import ProfilePoints from '../Profile/ProfilePoints';
import { Marginer } from "../Auth/Marginer";
import { Container, AppBar, Typography, Grow, Grid, Card, ListItemAvatar, Button, ListItem, List, Paper, Divider } from '@material-ui/core';
import useStyles from "./styles";
import FormbarP from '../FormBar/FormButtonP';
import { getUserProfile, getProfile } from '../../actions/profile';
import IntroductionAndGoals from './IntroductionAndGoals';
import EducationalDetails from './EducationalDetails';
import Certifications from './Certifications';
import { useParams } from 'react-router-dom';


const UserProfile = ({ currentId, setCurrentId }) => {
  const params = useParams();
  const classes = useStyles();
  const { profiles, profile, isLoading } = useSelector((state) => state.profiles);
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const id = params.id;
  useEffect(() => {
    dispatch(getProfile(id));
  }, [currentId, dispatch]);

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <>
      <Grow in>

        <Container maxWidth="lg">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Paper className={classes.card} elevation={7}>


              <div className={classes.details}>
                <img className={classes.image}
                  class_name="header_logo"
                  src={user.result.imageUrl}
                  alt="profile-picture"
                />

                <Typography className={classes.h5} variant="h4"  >
                  {user.result.name}
                </Typography>

                <ProfilePoints />

              </div>


              <div className={classes.title}>
                <div className={classes.details2}>
                  <Typography variant="h5" className={classes.h5} gutterBottom >
                    Email ID: {user.result.email || user.result.emailId}
                  </Typography>
                </div>
                <Marginer margin="40px" />
                <div className={classes.details2}>
                  <Typography variant="h5" className={classes.h5} gutterBottom >
                    Phone Number: {user.result.phoneNumber}
                  </Typography>
                </div>
              </div>
            </Paper>
            <IntroductionAndGoals />
            <EducationalDetails />
            <Certifications />
          </div>
        </Container>
      </Grow>

    </>
  )
}

export default UserProfile
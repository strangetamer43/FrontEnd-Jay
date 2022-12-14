import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, AppBar, Typography, Grow, Grid, Card, Button, ListItemAvatar, ListItem, List, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { Marginer } from "../Auth/Marginer";
import { getProfiles } from '../../actions/profile';
import PostsOfUser from '../Posts/UserPostsB';
import axios from 'axios';
import UserQuestions from '../Questions/UserQuestions'
import usurpLogo from "../Sidebar/usurp-logo.png";
import "../../App.css";
import ProfileData from './ProfileData';
import useStyles from "./styles";
import { fetchTopUsers } from '../../api/analysis';
import StatsOfUser1 from './StatsOfUser1';
import IntroductionAndGoals from './IntroductionAndGoals';
import EducationalDetails from './EducationalDetails';
import Certifications from './Certifications';
import Experiences from './Experiences';

const ProfilePage = (props) => {
  const [currentId, setCurrentId] = useState(null);

  const { post, posts, isLoading } = useSelector((state) => state.posts);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));



  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  const dispatch = useDispatch();



  const classes = useStyles();




  return (
    <>
      <Grow in>

        <Container maxWidth="lg">
          <StatsOfUser1 />
          <div style={{ display: 'flex', flexDirection: 'column' }}>

            <ProfileData />
            <IntroductionAndGoals />
            <EducationalDetails />
            <Certifications />
            <Experiences />

          </div>


          <div className={classes.buttons}>
            <a href="/profile"><Button className={classes.button} >{user.result.name}'s Posts</Button></a>
            <a href="/questionspage"> <Button className={classes.button} >Questions by {user.result.name}</Button></a>

          </div>


          <PostsOfUser currentId={currentId} setCurrentId={setCurrentId} />



        </Container>


      </Grow >

    </>
  )
}


export default ProfilePage;
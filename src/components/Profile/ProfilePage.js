import React, { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, AppBar, Typography, Grow, Grid, Card, Button, ListItemAvatar, ListItem, List, Paper} from '@material-ui/core';
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

const ProfilePage = () => {
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
          <StatsOfUser1/>
              <div style={{ display: 'flex', flexDirection: 'column'}}>
                
                <ProfileData />
                
                
                <IntroductionAndGoals/>
                <EducationalDetails/>
                <Certifications/>
                
                </div>
                
                
                <div className={classes.buttons}>
                  <Button className={classes.button} component={Link} to='/profile'>{user.result.name}'s Posts</Button>
                  <Button className={classes.button} component={Link} to='/questionspage' >Questions by {user.result.name}</Button>
                  
                </div>
                
                <Grid item xs={12} sm={9}>
                  <PostsOfUser setCurrentId={setCurrentId}/>
                </Grid>
                
  
              
            </Container>
            
            
        </Grow>
        
      </>
    )
  }


export default ProfilePage
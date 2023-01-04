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
import { getUserProfile, getProfiles, getSpecificUserProfile } from '../../actions/profile';
import { getSpecificUserQuestions } from '../../actions/questions';
import { getSpecificUserPosts } from '../../actions/posts';
import IntroductionAndGoalsView from './IntroductionAndGoalsView';
import EducationalDetailsView from './EducationDetailsView';
import CertificationsView from './CertificationsView';
import ExperiencesView from './ExperiencesView';
import { useParams } from 'react-router-dom';
import Post from '../Posts/Post/Post';
import Question from "../Questions/Question/Question";
import ProgressBar from './ProgressBar';
import Usurper from '../../Assets/usurper.png';
import Pro from '../../Assets/pro.png';
import Master from '../../Assets/master.png';
import Legend from '../../Assets/legend.png';
import UltraL from '../../Assets/ultra legend.png';
import GodL from '../../Assets/godlike.png';
import King from '../../Assets/ruler.png';

import axios from'axios';
const UserProfile = ({ currentId, setCurrentId }) => {
  const params = useParams();
  const classes = useStyles();
  const { profiles, profile, isLoading } = useSelector((state) => state.profiles);
  const { posts } = useSelector((state) => state.posts);
  const { question, questions } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [userProfile, setUserProfile] = useState();
  const location = useLocation();
  const id = params.id;
  
  useEffect(() => {

    dispatch(getSpecificUserProfile(id));
  }, [currentId, dispatch]);
  
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  
  useEffect(() => {
    const formDataD = new FormData();
    formDataD.append("creator", id);
    dispatch(getSpecificUserPosts(formDataD));
  }, [currentId, dispatch]);

  useEffect(() => {
    const formDataQ = new FormData();
    formDataQ.append("creator", id);
    dispatch(getSpecificUserQuestions(formDataQ));
  }, [currentId, dispatch]);

  useEffect(() =>{
    
    const formDataU = new FormData();
    
    formDataU.append("data", id);
    axios({method: 'patch', url: 'https://usurp.live/user', data: formDataU}).then(res => {
    
    setUserProfile(res);
  })
  .catch(function (err) {
      console.error(err);
  })
  }, []);
  
  
  const sum = posts?.data?.map((post) => post?.likes?.length).reduce((prev, curr) => prev + curr, 0)
  const diff = posts?.data?.map((post) => post?.disLikes.length).reduce((prev, curr) => prev + curr, 0)
  const sum1 = posts?.data?.map((post) => post?.comments?.length).reduce((prev, curr) => prev + curr, 0)
  const sum2 = questions?.data?.map((question) => question?.likes?.length).reduce((prev, curr) => prev + curr, 0)
  const diff1 = questions?.data?.map((question) => question?.disLikes?.length).reduce((prev, curr) => prev + curr, 0)
  const sum3 = questions?.data?.map((question) => question?.comments?.length).reduce((prev, curr) => prev + curr, 0)

  const total = (((sum) * 3 + (sum1) * 5 - diff) / 10) + (((sum2) * 3 + (sum3) * 5 - diff1) / 20);
  const totalR = total.toFixed(2);
  
  
  
  const Level = () => {
    if (0 <= total && total <= 10) {
      return <ProgressBar value={total} max={10} />
    }
    else if (10 < total && total <= 50) {
      return <ProgressBar value={total} max={50} />
    }
    else if (50 < total && total <= 100) {
      return <ProgressBar value={total} max={100} />
    }
    else if (100 < total && total <= 250) {
      return <ProgressBar value={total} max={250} />
    }
    else if (250 < total && total <= 500) {
      return <ProgressBar value={total} max={500} />
    }

    else if (500 < total && total <= 750) {
      return <ProgressBar value={total} max={750} />
    }
    else if (750 < total && total <= 1000) {
      return <ProgressBar value={total} max={1000} />
    }
    else if (total > 1000) {
      return <ProgressBar value={total} max={10000} />
    }
    else {
      return " and Questions to see KP"
    }
  }
  const LevelText = () => {
    if (0 <= total && total <= 10) {
      return <typography style={{margin: '1vh 0vh 1vh 0vh'}}>Become a Usurper</typography>
    }
    else if (10 < total && total <= 50) {
      return <typography style={{margin: '1vh 0vh 1vh 0vh'}}>Become a Pro</typography>
    }
    else if (50 < total && total <= 100) {
      return <typography style={{margin: '1vh 0vh 1vh 0vh'}}>Become a Master</typography>
    }
    else if (100 < total && total <= 250) {
      return <typography style={{margin: '1vh 0vh 1vh 0vh'}}>Become a Legend</typography>
    }
    else if (250 < total && total <= 500) {
      return <typography style={{margin: '1vh 0vh 1vh 0vh'}}>Become an Ultra Legend</typography>
    }

    else if (500 < total && total <= 750) {
      return <typography style={{margin: '1vh 0vh 1vh 0vh'}}>Become Godlike</typography>
    }
    else if (750 < total && total <= 1000) {
      return <typography style={{margin: '1vh 0vh 1vh 0vh'}}>Time to rule</typography>
    }
    else if (total > 1000) {
      return <typography style={{margin: '1vh 0vh 1vh 0vh'}}>Rule Well</typography>
    }
    else {
      return "Click on View Posts"
    }
  }
  const Badges = () => {
    if (0 <= total && total <= 10) {
      return <typography style={{ marginLeft: '-30px' }}>User hasn't earned a badge yet</typography>
    } else if (10 < total && total <= 50) {
      return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={Usurper} style={{ width: '15.5vh', height: '15vh' }} />
        <typography style={{margin: '1vh 0vh 1vh 0vh'}} >You are a Usurper!</typography>
      </div>
    }
    else if (50 < total && total <= 100) {
      return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={Pro} style={{ width: '15.5vh', height: '15vh' }} />
        <typography style={{margin: '1vh 0vh 1vh 0vh'}} >You are a Pro!</typography>
      </div>
    } else if (100 < total && total <= 250) {
      return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={Master} style={{ width: '10.75vh', height: '10vh' }} />
        <typography style={{margin: '1vh 0vh 1vh 0vh'}} >You are a Master!</typography>
      </div>
    } else if (250 < total && total <= 500) {
      return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={Legend} style={{ width: '10.675vh', height: '10.5vh' }} />
        <typography style={{margin: '1vh 0vh 1vh 0vh'}} >You are a Legend!</typography>
      </div>
    } else if (500 < total && total <= 750) {
      return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={UltraL} style={{ width: '12vh', height: '9.9vh' }} />
        <typography style={{margin: '1vh 0vh 1vh 0vh'}} >You are an Ultra Legend!</typography>
      </div>
    } else if (750 < total && total <= 1000) {
      return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={GodL} style={{ width: '12.5vh', height: '9.25vh' }} />
        <typography style={{margin: '1vh 0vh 1vh 0vh'}} >You are Godlike!</typography>
      </div>
    } else if (total > 1000) {
      return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={King} style={{ width: '12.1vh', height: '11.5vh' }} />
        <typography style={{margin: '1vh 0vh 1vh 0vh'}} >You are a King!</typography>
      </div>
    } else {
      return "Click on View Posts"
    }
  }
  return (
    <>
      <Grow in>

        <Container maxWidth="lg">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Paper className={classes.card} elevation={7}>


              <div className={classes.details}>
                <img className={classes.image}
                  class_name="header_logo"
                  src={profile?.data?.avatarUrl || userProfile?.data?.data?.imageUrl}
                  alt="profile-picture"
                />

                <Typography className={classes.h5} variant="h4"  >
                {userProfile?.data?.data?.name}
                </Typography>

                <div className={classes.details2}>
                  <div className={classes.KPdiv}>
                    <typography className={classes.KPdetails}>KP: {totalR}</typography>
                  </div>
                  <LevelText />
                  <Level />
                  <div style={{ marginTop: '20px', marginLeft: '30px' }}>
                    <Badges />
                  </div>
                </div>
                
              </div>


              
            </Paper>
            <IntroductionAndGoalsView profile={profile?.data} />
            <EducationalDetailsView profile={profile?.data} />
            <CertificationsView profile={profile?.data} />
            <ExperiencesView profile={profile?.data} />
            <Container maxWidth='lg'/>
            <Marginer direction="vertical" margin="10vh" />
            <typography variant="h4" style={{ color: '#25b8ef', fontSize: '4vh', marginBottom: '4vh' }}>Posts:</typography>
          <Grid className={classes.container} container alignItems="stretch" spacing={8}>
            <Grid item xs={12} sm={6} md={12} spacing={8}>
              {posts?.data?.map((post) => (
                <Grid key={post._id} item xs={12} sm={12} spacing={4}>
                  <Post post={post} setCurrentId={setCurrentId} />

                </Grid>
              ))}
            </Grid>
          </Grid>
          <Marginer direction="vertical" margin="10vh" />
          <typography variant="h4"  style={{ color: '#25b8ef', fontSize: '4vh', marginBottom: '4vh' }} >Questions:</typography>
          <Grid className={classes.container} container alignItems="stretch" spacing={8}>
            <Grid item xs={12} sm={6} md={12} spacing={8}>
              {questions?.data?.map((question) => (
                <Grid key={question._id} item xs={12} sm={12} spacing={4}>
                  <Question question={question} setCurrentId={setCurrentId} />

                </Grid>
              ))}

            </Grid>
            </Grid>
            <Container/>
          </div>
        </Container>
      </Grow>

    </>
  )
}

export default UserProfile;
import React, { useState, useEffect } from "react";
import { Container, Typography, Grow, Grid, Paper, Button, Divider } from '@material-ui/core';
import { useNavigate, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Formbar from '../FormBar/FloatingButtonForm';
import { getUserPosts, getSpecificUserPosts } from '../../actions/posts';
import { getSpecificUserQuestions } from '../../actions/questions';
import { getProfiles, getSpecificUserProfile } from "../../actions/profile";
import { getFollowers, createFollowers, deleteFollowers } from "../../actions/followers";
import { Marginer } from "../Auth/Marginer";
import Post from '../Posts/Post/Post';
import Question from '../Questions/Question/Question';
import ProgressBar from './ProgressBar';
import Usurper from '../../Assets/usurper.png';
import Pro from '../../Assets/pro.png';
import Master from '../../Assets/master.png';
import Legend from '../../Assets/legend.png';
import UltraL from '../../Assets/ultra legend.png';
import GodL from '../../Assets/godlike.png';
import King from '../../Assets/ruler.png';
import "../../App.css";
import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CheckProfile = () => {
  const [currentId, setCurrentId] = useState(null);
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const { question, questions } = useSelector((state) => state.questions);
  const { profile, profiles } = useSelector((state) => state.profiles);



  const query = useQuery();
  const navigate = useNavigate();

  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const searchQuery = query.get('searchQuery');

  useEffect(() => {

    dispatch(getProfiles());
  }, [currentId, dispatch]);

  useEffect(() => {
    const formDataD = new FormData();
    formDataD.append("creator", location.state.creator);
    dispatch(getSpecificUserPosts(formDataD));
  }, [currentId, dispatch]);

  useEffect(() => {
    const formDataQ = new FormData();
    formDataQ.append("creator", location.state.creator);
    dispatch(getSpecificUserQuestions(formDataQ));
  }, [currentId, dispatch]);




  const sum = posts?.data?.map((post) => post.likes.length).reduce((prev, curr) => prev + curr, 0)
  const diff = posts?.data?.map((post) => post.disLikes.length).reduce((prev, curr) => prev + curr, 0)
  const sum1 = posts?.data?.map((post) => post.comments.length).reduce((prev, curr) => prev + curr, 0)
  const sum2 = questions?.data?.map((question) => question.likes.length).reduce((prev, curr) => prev + curr, 0)
  const diff1 = questions?.data?.map((question) => question.disLikes.length).reduce((prev, curr) => prev + curr, 0)
  const sum3 = questions?.data?.map((question) => question.comments.length).reduce((prev, curr) => prev + curr, 0)

  const total = (((sum) * 3 + (sum1) * 5 - diff) / 10) + (((sum2) * 3 + (sum3) * 5 - diff1) / 20);
  const totalR = total.toFixed(2);
  console.log(total);
  console.log(posts);

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
      return <typography style={{ margin: '1vh 0vh 1vh 0vh' }}>Become a Usurper</typography>
    }
    else if (10 < total && total <= 50) {
      return <typography style={{ margin: '1vh 0vh 1vh 0vh' }}>Become a Pro</typography>
    }
    else if (50 < total && total <= 100) {
      return <typography style={{ margin: '1vh 0vh 1vh 0vh' }}>Become a Master</typography>
    }
    else if (100 < total && total <= 250) {
      return <typography style={{ margin: '1vh 0vh 1vh 0vh' }}>Become a Legend</typography>
    }
    else if (250 < total && total <= 500) {
      return <typography style={{ margin: '1vh 0vh 1vh 0vh' }}>Become an Ultra Legend</typography>
    }

    else if (500 < total && total <= 750) {
      return <typography style={{ margin: '1vh 0vh 1vh 0vh' }}>Become Godlike</typography>
    }
    else if (750 < total && total <= 1000) {
      return <typography style={{ margin: '1vh 0vh 1vh 0vh' }}>Time to rule</typography>
    }
    else if (total > 1000) {
      return <typography style={{ margin: '1vh 0vh 1vh 0vh' }}>Rule Well</typography>
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
        <typography style={{ margin: '1vh 0vh 1vh 0vh' }} >You are a Usurper!</typography>
      </div>
    }
    else if (50 < total && total <= 100) {
      return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={Pro} style={{ width: '15.5vh', height: '15vh' }} />
        <typography style={{ margin: '1vh 0vh 1vh 0vh' }} >You are a Pro!</typography>
      </div>
    } else if (100 < total && total <= 250) {
      return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={Master} style={{ width: '10.75vh', height: '10vh' }} />
        <typography style={{ margin: '1vh 0vh 1vh 0vh' }} >You are a Master!</typography>
      </div>
    } else if (250 < total && total <= 500) {
      return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={Legend} style={{ width: '10.675vh', height: '10.5vh' }} />
        <typography style={{ margin: '1vh 0vh 1vh 0vh' }} >You are a Legend!</typography>
      </div>
    } else if (500 < total && total <= 750) {
      return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={UltraL} style={{ width: '12vh', height: '9.9vh' }} />
        <typography style={{ margin: '1vh 0vh 1vh 0vh' }} >You are an Ultra Legend!</typography>
      </div>
    } else if (750 < total && total <= 1000) {
      return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={GodL} style={{ width: '12.5vh', height: '9.25vh' }} />
        <typography style={{ margin: '1vh 0vh 1vh 0vh' }} >You are Godlike!</typography>
      </div>
    } else if (total > 1000) {
      return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={King} style={{ width: '12.1vh', height: '11.5vh' }} />
        <typography style={{ margin: '1vh 0vh 1vh 0vh' }} >You are a King!</typography>
      </div>
    } else {
      return "Click on View Posts"
    }
  }

  const profileId = location?.state?.creator;
  const UserProfiles = profiles?.filter((profile) => profile?.creator === profileId);
  const Using = UserProfiles[0];


  return (
    <>
      <Paper className={classes.card} elevation={7}>
        <div className={classes.details}>
          <img className={classes.image}
            class_name="header_logo"
            src={Using?.avatarUrl}
            alt="profile-picture"
          />
          <typography className={classes.h5} variant="h4" gutterBottom >
            {Using?.name}
          </typography>

        </div>
        <div className={classes.details2}>
          <div style={{ border: '3px solid #25b8ef', borderRadius: '15px', width: '10.5vw', boxShadow: '3px 3px 7.5px rgba(5, 5, 10, 1), -3px -3px 7.5px rgba(255, 255, 255, 0.20), inset 3px 3px 7.5px rgba(5, 5, 10, 1)' }}>
            <typography variant="h4" style={{ color: '#25b8ef', fontSize: '4vh' }}>KP: {totalR}</typography>
          </div>
          <LevelText />
          <Level />
          <div style={{ marginTop: '20px', marginLeft: '30px' }}>
            <Badges />
          </div>
        </div>


      </Paper>
      <Paper className={classes.IntroPaper}>
        <typography className={classes.IntroHead}>Introduction and Goals</typography>
        <div>
          <typography variant="body2" style={{ color: '#eeedee', fontSize: '19px', marginLeft: '65px', marginRight: '45px' }}>Introduction: {Using?.introduction}</typography>
        </div>
        <div>
          <typography variant="body2" style={{ color: '#eeedee', fontSize: '17px', marginLeft: '65px', marginRight: '45px' }}>Goals: {Using?.goals}</typography>
        </div>
      </Paper>
      <Paper className={classes.IntroPaper}>
        <div className={classes.Details}>
          <typography className={classes.IntroHead} gutterBottom >
            Educational Qualifications
          </typography>


          <typography className={classes.smallDetails}  >
            Graduate/Post Graduate: {Using?.education}
          </typography>
          <typography className={classes.smallDetails}  >
            Senior Secondary Education: {Using?.education1}
          </typography>
          <typography className={classes.smallDetails} >
            Secondary Education: {Using?.education2}
          </typography>
        </div>
      </Paper>
      <Paper className={classes.IntroPaper}>
        <div className={classes.title}>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <typography className={classes.IntroHead} gutterBottom >
              Certifications or courses
            </typography>


            <typography className={classes.smallDetails}>
              {Using?.certifications?.map((certifications) => <typography> {certifications}</typography>)}
            </typography>

          </div>


          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <typography className={classes.IntroHead1} gutterBottom >
              Certification URL's
            </typography>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

              {Using?.certificationURL?.map((certificationURL) => <a href={{ pathname: `https://${certificationURL}` }} target="_blank" > {certificationURL}</a>)}
            </div>
          </div>




        </div>
      </Paper>




      <Marginer direction="vertical" margin="10vh" />
      <Grow in>
        <Container maxWidth='md' >
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
          <typography variant="h4" style={{ color: '#25b8ef', fontSize: '4vh', marginBottom: '4vh' }} >Questions:</typography>
          <Grid className={classes.container} container alignItems="stretch" spacing={8}>
            <Grid item xs={12} sm={6} md={12} spacing={8}>
              {questions?.data?.map((question) => (
                <Grid key={question._id} item xs={12} sm={12} spacing={4}>
                  <Question question={question} setCurrentId={setCurrentId} />

                </Grid>
              ))}

            </Grid>
          </Grid>
        </Container>

      </Grow>



    </>
  );
};

export default CheckProfile;
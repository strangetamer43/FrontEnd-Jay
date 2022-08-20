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
  
  const user = JSON.parse(localStorage.getItem('profile'));
  const { followerList, followerLists } = useSelector((state) => state.followerLists);
  const [likes, setLikes] = useState(post?.data?.likes);
  const [disLikes, setDisLikes] = useState(post?.data?.disLikes);
  const [comments, setComments] = useState(post?.data?.comments);
  const [likesQ, setLikesQ] = useState(question?.data?.likesQ);
  const [disLikesQ, setDisLikesQ] = useState(question?.data?.disLikes);
  const [commentsQ, setCommentsQ] = useState(question?.data?.comments);
  
  const [follower, setFollower] = useState("");
  const [names, setNames] = useState("");
  const [creator, setCreator] = useState("");
  const query = useQuery();
  const navigate = useNavigate();

  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const searchQuery = query.get('searchQuery');
 
  const viewPosts = (e) => {
    e.preventDefault();

    const formDataD = new FormData();
    formDataD.append("creator", location.state.creator);

    dispatch(getSpecificUserPosts(formDataD));


  }
  const viewQuestions = (e) => {
    e.preventDefault();

    const formDataQ = new FormData();
    formDataQ.append("creator", location.state.creator);

    dispatch(getSpecificUserQuestions(formDataQ));
  }
 
  useEffect(() => {

    dispatch(getSpecificUserPosts());
  }, [currentId, dispatch]);

  useEffect(() => {

    dispatch(getSpecificUserQuestions());
  }, [currentId, dispatch]);
  useEffect(() => {

    dispatch(getProfiles());
  }, [currentId, dispatch]);
  useEffect(() => {
    dispatch(getFollowers());
  }, [currentId, dispatch]);

  const sum = posts?.data?.map((post) => post.likes.length).reduce((prev, curr) => prev + curr, 0)
  const diff = posts?.data?.map((post) => post.disLikes.length).reduce((prev, curr) => prev + curr, 0)
  const sum1 = posts?.data?.map((post) => post.comments.length).reduce((prev, curr) => prev + curr, 0)
  const sum2 = questions?.data?.map((question) => question.likes.length).reduce((prev, curr) => prev + curr, 0)
  const diff1 = questions?.data?.map((question) => question.disLikes.length).reduce((prev, curr) => prev + curr, 0)
  const sum3 = questions?.data?.map((question) => question.comments.length).reduce((prev, curr) => prev + curr, 0)

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
      return <Typography variant="body1">Become a Usurper</Typography>
    }
    else if (10 < total && total <= 50) {
      return <Typography variant="body1">Become a Pro</Typography>
    }
    else if (50 < total && total <= 100) {
      return <Typography variant="body1">Become a Master</Typography>
    }
    else if (100 < total && total <= 250) {
      return <Typography variant="body1">Become a Legend</Typography>
    }
    else if (250 < total && total <= 500) {
      return <Typography variant="body1">Become an Ultra Legend</Typography>
    }

    else if (500 < total && total <= 750) {
      return <Typography variant="body1">Become Godlike</Typography>
    }
    else if (750 < total && total <= 1000) {
      return <Typography variant="body1">Time to rule</Typography>
    }
    else if (total > 1000) {
      return <Typography variant="body1">Rule Well</Typography>
    }
    else {
      return "Click on View Posts"
    }
  }
  const Badges = () => {
    if (0 <= total && total <= 10) {
      return <Typography style={{ marginLeft: '-30px' }}>User hasn't earned a badge yet</Typography>
    } else if (10 < total && total <= 50) {
      return <div>
        <img src={Usurper} style={{ width: '15.5vh', height: '15vh' }} />
        <Typography style={{ marginLeft: '15px' }}>You are a Usurper!</Typography>
      </div>
    }
    else if (50 < total && total <= 100) {
      return <div>
        <img src={Pro} style={{ width: '15.5vh', height: '15vh' }} />
        <Typography style={{ marginLeft: '20px' }}>You are a Pro!</Typography>
      </div>
    } else if (100 < total && total <= 250) {
      return <div >
        <img src={Master} style={{ width: '10.75vh', height: '10vh' }} />
        <Typography style={{ marginLeft: '-8px' }}>You are a Master!</Typography>
      </div>
    } else if (250 < total && total <= 500) {
      return <div>
        <img src={Legend} style={{ width: '10.675vh', height: '10.5vh' }} />
        <Typography style={{ marginLeft: '-8px' }}>You are a Legend!</Typography>
      </div>
    } else if (500 < total && total <= 750) {
      return <div>
        <img src={UltraL} style={{ width: '12vh', height: '9.9vh' }} />
        <Typography style={{ marginLeft: '-14px' }}>You are an Ultra Legend!</Typography>
      </div>
    } else if (750 < total && total <= 1000) {
      return <div>
        <img src={GodL} style={{ width: '12.5vh', height: '9.25vh' }} />
        <Typography style={{ marginLeft: '-8px' }}>You are Godlike!</Typography>
      </div>
    } else if (total > 1000) {
      return <div>
        <img src={King} style={{ width: '12.1vh', height: '11.5vh' }} />
        <Typography style={{ marginLeft: '-8px' }}>You are a King!</Typography>
      </div>
    } else {
      return "Click on View Posts"
    }
  }
  const followUser = (e) => {
    e.preventDefault();
    setFollower(user?.result?.googleId || user?.result?._id );
    setNames(user?.result?.name);
    const formDataF = new FormData();
    formDataF.append("owner", location.state.creator);
    formDataF.append("follower", follower);
    formDataF.append("names", names);
    console.log(Object.fromEntries(formDataF));
    if(!follower){
      return "Click again!"
    }else{
    dispatch(createFollowers(formDataF));
    }
  }
  const FollowerText = () => {
      if(Followers.length = 1){
        return <Typography className={classes.h6} variant="h6"> {Using?.name} has {Followers.length} follower</Typography>
      }else if (Followers.length > 1){
        return <Typography className={classes.h6} variant="h6"> {Using?.name} has {Followers.length} followers</Typography>
      }else {
        return <Typography className={classes.h6} variant="h6"> {Using?.name} has no followers</Typography>
      }
    }
  const profileId = location?.state?.creator;
  const UserProfiles = profiles?.filter((profile) => profile?.creator === profileId);
  const Using = UserProfiles[0];
  
  const Followers = followerLists?.filter((followerList) => followerList?.owner === profileId);
  return (
    <>
      <Container maxWidth="lg">
        <Paper className={classes.card} elevation={7}>
          <div className={classes.details}>
            <img className={classes.image}
              class_name="header_logo"
              src={Using?.avatarUrl}
              alt="profile-picture"
            />
            <div>
              <Typography className={classes.h5} variant="h4" gutterBottom >
                {Using?.name}
              </Typography>
              <Button onClick={followUser}>Follow {Using?.name}</Button>
              <FollowerText/>
            </div>
            <div className={classes.details2}>
              <div style={{ border: '3px solid #e65100', borderRadius: '10px', width: '190px' }}>
                <Typography variant="h4" style={{ color: '#e65100' }}>KP: {totalR}</Typography>
              </div>
              <LevelText />
              <Level />
              <div style={{ marginTop: '20px', marginLeft: '30px' }}>
                <Badges />
              </div>
            </div>

          </div>
          <div>
            <Typography variant="body2" style={{ color: 'white', fontSize: '19px', marginLeft: '65px', marginRight: '45px' }}>Introduction: {Using?.introduction}</Typography>
          </div>


          <div className={classes.title}>

            <div className={classes.details2}>
              <Typography variant="h6" className={classes.h6} gutterBottom >
                Certifications or courses
              </Typography>

              <Divider style={{ background: 'white', height: '2px' }} />
              <Marginer direction="vertical" margin="30px" />
              <Typography variant="body2" gutterBottom >
                {Using?.certifications?.map((certifications) => <Typography> {certifications}</Typography>)}
              </Typography>

            </div>
            <Divider orientation="vertical" variant="middle" flexItem style={{ background: 'white', width: '2px' }} />
            <div className={classes.details2}>
              <Typography variant="h6" className={classes.h6} gutterBottom >
                Certifications URL's
              </Typography>
              <Divider style={{ background: 'white', height: '2px' }} />
              <Marginer direction="vertical" margin="10px" />
              {Using?.certificationURL?.map((certificationURL) => <a href={{ pathname: `https://${certificationURL}` }} target="_blank" > {certificationURL}</a>)}
            </div>
            <Divider orientation="vertical" variant="middle" flexItem style={{ background: 'white', width: '2px' }} />
            <div className={classes.details2}>
              <Typography variant="h6" className={classes.h6} gutterBottom >
                Educational Qualifications
              </Typography>
              <Divider style={{ background: 'white', height: '2px', width: '70%' }} />
              <Marginer direction="vertical" margin="10px" />
              <Typography variant="body2" style={{ fontSize: '17px' }} className={classes.h6} gutterBottom >
                Graduate/Post Graduate: {Using?.education}
              </Typography>
              <Typography variant="body2" style={{ fontSize: '17px' }} className={classes.h6} gutterBottom >
                Senior Secondary Education: {Using?.education1}
              </Typography>
              <Typography variant="body2" style={{ fontSize: '17px' }} className={classes.h6} gutterBottom >
                Secondary Education: {Using?.education2}
              </Typography>
            </div>

          </div>

          <Marginer direction="vertical" margin="40px" />
          <div>
            <Typography variant="body2" style={{ color: 'white', fontSize: '17px', marginLeft: '65px', marginRight: '45px' }}>Goals: {Using?.goals}</Typography>
          </div>
          <Marginer direction="vertical" margin="15px" />
        </Paper>
      </Container>


      <form>
        <div style={{ marginTop: '100px', marginLeft: '350px' }} className={classes.buttons}>
          <Button style={{ marginLeft: '50px' }} className={classes.button} onClick={viewPosts}>View Posts </Button>
          <Button style={{ marginRight: '350px' }} className={classes.button} onClick={viewQuestions}>View Questions </Button>
        </div>

      </form>
      <Marginer direction="vertical" margin="200px" />
      <Grow in>
        <Container maxWidth='md' >
          <Typography variant="h4" style={{ color: '#03dac6' }}>Posts:</Typography>
          <Grid className={classes.container} container alignItems="stretch" spacing={8}>
            <Grid item xs={12} sm={6} md={12} spacing={8}>
              {posts?.data?.map((post) => (
                <Grid key={post._id} item xs={12} sm={12} spacing={4}>
                  <Post post={post} setCurrentId={setCurrentId} />

                </Grid>
              ))}
            </Grid>
          </Grid>
          <Marginer direction="vertical" margin="75px" />
          <Typography variant="h4" style={{ color: '#03dac6' }}>Questions:</Typography>
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
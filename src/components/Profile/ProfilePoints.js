import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress, Typography } from "@material-ui/core";
import { getUserPosts } from '../../actions/posts';
import { getUserQuestions } from '../../actions/questions';
import ProgressBar from './ProgressBar';
import Pro from '../../Assets/pro.png';
import Master from '../../Assets/master.png';
import Legend from '../../Assets/legend.png';
import UltraL from '../../Assets/ultra legend.png';
import GodL from '../../Assets/godlike.png';
import King from '../../Assets/ruler.png';
import Usurper from '../../Assets/usurper.png';
import useStyles from "./styles";
import { useLocation } from 'react-router-dom';
import { createFollowers } from '../../actions/followers';

const ProfilePoints = ({ creator }) => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const { question, questions } = useSelector((state) => state.questions);
  const [currentId, setCurrentId] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [likes, setLikes] = useState(post?.likes);
  const [disLikes, setDisLikes] = useState(post?.disLikes);
  const [comments, setComments] = useState(post?.comments);
  const [likesQ, setLikesQ] = useState(question?.likesQ);
  const [disLikesQ, setDisLikesQ] = useState(question?.disLikes);
  const [commentsQ, setCommentsQ] = useState(question?.comments);
  const userId = user?.result?.googleId || user?.result?._id;
  const [value, setValue] = useState();
  const [max, setMax] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation()
  useEffect(() => {
    dispatch(getUserPosts(creator));


  }, [currentId, dispatch, creator, location]);
  useEffect(() => {
    dispatch(getUserQuestions(creator));
  }, [currentId, dispatch, creator, location]);
  // console.log(post)
  // console.log(questions)


  const sum = posts.map((post) => post.likes.length).reduce((prev, curr) => prev + curr, 0)
  const diff = posts.map((post) => post.disLikes.length).reduce((prev, curr) => prev + curr, 0)
  const sum1 = posts.map((post) => post.comments.length).reduce((prev, curr) => prev + curr, 0)
  const sum2 = questions.map((question) => question.likes.length).reduce((prev, curr) => prev + curr, 0)
  const diff1 = questions.map((question) => question.disLikes.length).reduce((prev, curr) => prev + curr, 0)
  const sum3 = questions.map((question) => question.comments.length).reduce((prev, curr) => prev + curr, 0)

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
  }
  const LevelText = () => {
    if (0 <= total && total <= 10) {
      return <typography style={{ marginTop: '1.2vh' }} variant="body1">Become a Usurper</typography>
    }
    else if (10 < total && total <= 50) {
      return <typography style={{ marginTop: '1.2vh' }} variant="body1">Become a Pro</typography>
    }
    else if (50 < total && total <= 100) {
      return <typography style={{ marginTop: '1.2vh' }} variant="body1">Become a Master</typography>
    }
    else if (100 < total && total <= 250) {
      return <typography style={{ marginTop: '1.2vh' }} variant="body1">Become a Legend</typography>
    }
    else if (250 < total && total <= 500) {
      return <typography style={{ marginTop: '1.2vh' }} variant="body1">Become an Ultra Legend</typography>
    }

    else if (500 < total && total <= 750) {
      return <typography style={{ marginTop: '1.2vh' }} variant="body1">Become Godlike</typography>
    }
    else if (750 < total && total <= 1000) {
      return <typography style={{ marginTop: '1.2vh' }} variant="body1">Time to rule</typography>
    }
    else if (total > 1000) {
      return <typography style={{ marginTop: '1.2vh' }} variant="body1">Rule Well</typography>
    }
  }
  const Badges = () => {
    if (0 <= total && total <= 10) {
      return <typography style={{ marginLeft: '-30px' }}>You haven't earned a badge yet</typography>
    } else if (10 < total && total <= 50) {
      return <div>
        <img src={Usurper} style={{ width: '15.5vh', height: '15vh' }} />
        <typography style={{ marginLeft: '15px' }}>You are a Usurper!</typography>
      </div>
    }
    else if (50 < total && total <= 100) {
      return <div>
        <img src={Pro} style={{ width: '15.5vh', height: '15vh' }} />
        <typography style={{ marginLeft: '20px' }}>You are a Pro!</typography>
      </div>
    } else if (100 < total && total <= 250) {
      return <div >
        <img src={Master} style={{ width: '10.75vh', height: '10vh' }} />
        <typography style={{ marginLeft: '20px' }}>You are a Master!</typography>
      </div>
    } else if (250 < total && total <= 500) {
      return <div>
        <img src={Legend} style={{ width: '10.675vh', height: '10.5vh' }} />
        <typography style={{ marginLeft: '20px' }}>You are a Legend!</typography>
      </div>
    } else if (500 < total && total <= 750) {
      return <div>
        <img src={UltraL} style={{ width: '12vh', height: '9.9vh' }} />
        <typography style={{ marginLeft: '15px' }}>You are an Ultra Legend!</typography>
      </div>
    } else if (750 < total && total <= 1000) {
      return <div>
        <img src={GodL} style={{ width: '12.5vh', height: '9.25vh' }} />
        <typography style={{ marginLeft: '18px' }}>You are Godlike!</typography>
      </div>
    } else if (total > 1000) {
      return <div>
        <img src={King} style={{ width: '12.1vh', height: '11.5vh' }} />
        <typography style={{ marginLeft: '20px' }}>You are a King!</typography>
      </div>
    } else {
      return "Click on View Posts"
    }
  }
  return (
    isLoading ? <CircularProgress /> : (

      <div className={classes.details2}>
        <div style={{ border: '3px solid #25b8ef', borderRadius: '15px', width: '10.5vw', boxShadow: '3px 3px 7.5px rgba(5, 5, 10, 1), -3px -3px 7.5px rgba(255, 255, 255, 0.3), inset 3px 3px 7.5px rgba(5, 5, 10, 1), inset -3px -3px 7.5px rgba(255,255,255,0.3) ' }}>

          <typography style={{ color: '#25b8ef', fontSize: '4vh' }}>KP: {totalR}</typography>
        </div>
        <LevelText />
        <Level />
        <div style={{ marginTop: '20px', marginLeft: '30px' }}>
          <Badges />
        </div>
      </div>
    )
  );
}

export default ProfilePoints;
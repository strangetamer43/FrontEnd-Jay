import React, { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, AppBar, Typography, Grow, Grid, Card, Button, ListItemAvatar, ListItem, List, Paper} from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";






import "../../App.css";
import ProfileData from './ProfileData';
import useStyles from "./styles";
import QuestionsOfUser from '../Questions/UserQuestions';

const QuestionsPage = () => {
  const [currentId, setCurrentId] = useState(null);

  const { question, questions, isLoading } = useSelector((state) => state.questions);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
}, [location]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const sum = questions.map((question) => question.likes.length).reduce((prev, curr) => prev + curr , 0)
  const diff = questions.map((question) => question.disLikes.length).reduce((prev, curr) => prev + curr, 0)
  const sum1 = questions.map((question) => question.comments.length).reduce((prev, curr) => prev + curr , 0)
  const total = ((sum) * 3 + (sum1) * 5 - diff) / 20;
   
    return (
      <>
        <Grow in>
  
          <Container maxWidth="lg">
              <Grid contianer position= "absolute" justify="space-between" alignItems="stretch" spacing={1}>
                <Paper className={classes.card} elevation={7}>
                <ProfileData creator={user.result._id} />
                </Paper>
                <div className={classes.buttons}>
                  <a href="/profile"><Button className={classes.button} >{user?.result?.name}'s Posts</Button></a>
                  <a href="/questionspage"> <Button className={classes.button} >Questions by {user?.result?.name}</Button></a>
                  
                </div>
                <Grid item xs={12} sm={9}>
                  <QuestionsOfUser setCurrentId={setCurrentId}/>
                </Grid>
                
  
              </Grid>
            </Container>
        </Grow>
      </>
    )
  }


export default QuestionsPage
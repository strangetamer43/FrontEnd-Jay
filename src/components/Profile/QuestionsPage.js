import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, AppBar, Typography, Grow, Grid, Card, Button, ListItemAvatar, ListItem, List, Paper } from '@material-ui/core';
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
  const sum = questions.map((question) => question.likes.length).reduce((prev, curr) => prev + curr, 0)
  const diff = questions.map((question) => question.disLikes.length).reduce((prev, curr) => prev + curr, 0)
  const sum1 = questions.map((question) => question.comments.length).reduce((prev, curr) => prev + curr, 0)
  const total = ((sum) * 3 + (sum1) * 5 - diff) / 20;

  return (
    <>
      <Grow in>

        <Container maxWidth="lg">
          <Grid contianer position="absolute" justify="space-between" alignItems="stretch" spacing={1}>
            <ProfileData />
            <div className={classes.buttons}>
              <Button className={classes.button} component={Link} to='/profile' >{user.result.name}'s Posts</Button>
              <Button className={classes.button} component={Link} to='/questionspage' >Questions by {user.result.name}</Button>

            </div>
            <QuestionsOfUser setCurrentId={setCurrentId} />


          </Grid>
        </Container>
      </Grow>
    </>
  )
}


export default QuestionsPage
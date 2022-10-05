import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, Button, Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getQuestion, getQuestionsBySearch } from '../../actions/questions';
import CommentSection from './CommentSection';
import useStyles from './styles';
import Video from '../../Assets/Video cover.png';
import styled from 'styled-components';
const Style = {
  height: 300,
  width: '100%',
};
const QuestionDetails = () => {
  const { question, questions, isLoading } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getQuestion(id));
  }, [id]);
  useEffect(() => {
    if (question) {
      dispatch(getQuestionsBySearch({ search: 'none', tags: question?.tags.join(',') }));
    }
  }, [question]);
  if (!question) return null;
  if (isLoading) {
    return <Paper elevation={6} className={classes.loadingPaper}>
      <CircularProgress size='7em' />
    </Paper>
  };
  const recomendedQuestions = questions.filter(({ _id }) => _id !== question._id);
  const openQuestion = (_id) => navigate(`/questions/${_id}`);
  const SwitchMedia = () => {
    if (question.imageUrl) {
      return <img className={classes.media} src={question.imageUrl} />
    } else if (question.videoUrl) {
      return <video className={classes.media} src={question.videoUrl} controls controlsList="nodownload" />

    } else {
      return <img className={classes.media} src={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
    }
  }
  return (
    <Paper className={classes.paper} style={{ padding: '20px', borderRadius: '30px', backgroundColor: '#1a1a1a' }} elevation={6}>
      <div >
        <SwitchMedia />
      </div>
      <div >
        <div className={classes.section}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button component={Link} to='/userprofile' state={{ creator: question.creator }} className={classes.button}>
              <div style={{ display: 'flex', direction: 'row', justifyContent: 'flex-start' }}>
                <Avatar className={classes.purple} alt={question.name} src={question?.avatarUrl}></Avatar>
                <Typography className={classes.name}>{question.name}</Typography>
              </div>
            </Button>

          </div>
          <Typography className={classes.title}>{question.title}</Typography>
          <Typography className={classes.tags}>{question.tags?.map((tag) => `#${tag}`)}</Typography>
          <pre className={classes.pre}>{question.message}</pre>

          <Typography className={classes.time}>{moment(question.createdAt).fromNow()}</Typography>


          <Divider style={{ margin: '20px 0' }} />
          <CommentSection question={question} />
          <Divider style={{ margin: '20px 0' }} />
        </div>


      </div>
      {recomendedQuestions.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant='body1'>And there's more...</Typography>
          <Divider />
          <div className={classes.recommendedQuestions}>
            {recomendedQuestions.map(({ title, message, name, likes, disLikes, imageUrl, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer', backgroundColor: '#303030', borderRadius: '25px' }} onClick={() => openQuestion(_id)} key={_id}>
                <Typography variant="h6" gutterBottom className={classes.recommendedTitle} >{title}</Typography>
                <Typography variant="subtitle2" gutterBottom className={classes.recommendedName}>{name}</Typography>
                <Typography variant="subtitle2" gutterBottom className={classes.recommendedName}>{message}</Typography>

                <div style={{ display: 'flex', marginLeft: '1vw' }}>

                  <Typography variant="subtitle1" gutterBottom >Upvotes: {likes.length}</Typography>
                  <Typography variant="subtitle1" style={{ marginLeft: '2vh' }} gutterBottom >Downvotes: {disLikes.length}</Typography>
                </div>
                <img src={imageUrl || Video} className={classes.media2} />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  )
}

export default QuestionDetails; 
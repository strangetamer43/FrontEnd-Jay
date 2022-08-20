import React, {useEffect} from 'react';
import { Paper, Typography, CircularProgress, Divider, Button} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
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
  useEffect (() => {
    dispatch(getQuestion(id)); 
  }, [id]);
   useEffect (() => {
     if(question){
       dispatch(getQuestionsBySearch({ search: 'none', tags: question?.tags.join(',') }));
     }    
   }, [question]);
  if(!question) return null;
  if(isLoading) {
    return <Paper elevation={6} className={classes.loadingPaper}>
      <CircularProgress size='7em'/>
    </Paper>
  };
  const recomendedQuestions = questions.filter(({_id}) => _id !== question._id);
  const openQuestion = (_id) => navigate(`/questions/${_id}`);
  const SwitchMedia = () => {
    if(question.imageUrl) {
      return <img className={classes.media}  src={question.imageUrl}/>
    }else if(question.videoUrl){
      return <video className={classes.media} src={question.videoUrl}  controls controlsList="nodownload"/>

    }else {
      return <img className={classes.media} src={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
    }
  }
  return (
    <Paper style={{ padding: '20px', borderRadius: '15px', margin: '75px', backgroundColor: '#fdf4dc' }} elevation={6}>
      <div className={classes.paper}>
          <div className={classes.section}>
            <Typography variant="h3" component="h2">{question.title}</Typography>
            <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{question.tags?.map((tag) => `#${tag}`)}</Typography>
           <Typography gutterBottom variant="body1" component="p">{question.message}</Typography>
           <div style={{ display: 'flex', flexDirection: 'row' }}>
           <Typography variant="h6">Created by: {question.name}</Typography>
           <Button component={Link} to='/userprofile' state={{ creator: question.creator }} style={{ marginLeft: '10px', backgroundColor: '#022658', color: 'white'}}>View Profile</Button>
           </div>
           <Typography variant="body1">{moment(question.createdAt).fromNow()}</Typography>
           
           
           <Divider style={{ margin: '20px 0' }} />
           <CommentSection question={question}/>
           <Divider style={{ margin: '20px 0' }} />
          </div>
          <div className={classes.imageSection}>
           <SwitchMedia />
          </div>
         
        </div>
        {recomendedQuestions.length && (
          <div className={classes.section}>
            <Typography gutterBottom variant='body1'>And there's more...</Typography>
            <Divider/>
            <div className={classes.recommendedQuestions}>
              {recomendedQuestions.map(({ title, message, name, likes, disLikes, imageUrl, _id}) => (
                <div style={{ margin: '20px' , cursor: 'pointer', backgroundColor: '#022658', borderRadius: '25px' }} onClick={() => openQuestion(_id)} key={_id}>
                  <Typography variant="h5" style={{ color: 'white', marginLeft:'15px', marginRight: '15px', marginTop: '10px' }} gutterBottom >{title}</Typography>
                  <Typography variant="h6" style={{ color: 'white', marginLeft:'15px', marginRight: '15px' }} gutterBottom >{name}</Typography>
                  
                  <Typography variant="subtitle2"  style={{ color: 'white', marginLeft:'15px' }} gutterBottom >Upvotes: {likes.length}</Typography>
                  <Typography variant="subtitle2"  style={{ color: 'white', marginLeft:'15px' }} gutterBottom >Downvotes: {disLikes.length}</Typography>
                  <img style={{ marginLeft:'15px', marginBottom:'10px', marginRight:'15px' }} src={imageUrl || Video} className={classes.media2} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Paper>
  )
}

export default QuestionDetails; 
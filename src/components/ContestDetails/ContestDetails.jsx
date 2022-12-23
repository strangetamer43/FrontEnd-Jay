import React, {useState, useEffect} from 'react';
import { Paper, Typography, CircularProgress, Divider, Button} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import { getContest, getContestsBySearch, registeredUser } from '../../actions/contests';
import CommentSection from './CommentSectionC';
import useStyles from './styles';
import styled from 'styled-components';
const Style = {
  height: 300,
  width: '100%',
};
const ContestDetails = () => {
    
  const { contest, contests, isLoading } = useSelector((state) => state.contests);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();
  const { id } = useParams();
  const [registeredUsers, setRegisteredUsers] = useState(contest?.registeredUsers);
  const userId = user?.result?.googleId || user?.result?._id;
  const hasRegistered = contest?.registeredUsers.find((registeredUser) => registeredUser === (userId));
  const handleRegister = async () => {
    dispatch(registeredUser(contest._id));
    if(hasRegistered){
        setRegisteredUsers(contest?.registeredUsers.filter((id) => id !== (userId)));
    } else {
        setRegisteredUsers([...contest?.registeredUsers, userId]);
    }
};
  useEffect (() => {
    dispatch(getContest(id)); 
  }, [id]);
   useEffect (() => {
     if(contest){
       dispatch(getContestsBySearch({ search: 'none', tags: contest?.tags.join(',') }));
     }    
   }, [contest]);
   const Register = () => {
    if(registeredUsers?.length > 0) {
        return registeredUsers.find((registeredUser) => registeredUser === (userId))
            ?   (
                <Button style={{ marginTop: '10px'}} disabled={!userId} variant="contained" color="secondary" onClick={handleRegister}>&nbsp;{registeredUsers.length > 2 ? `You and ${registeredUsers.length - 1} others` : `${registeredUsers.length} registered${registeredUsers.length > 1 ? '' : ''}` }</Button>
            ) : (
                <Button Button style={{ marginTop: '10px'}} disabled={!userId} variant="contained" color="secondary" onClick={handleRegister}>&nbsp;{registeredUsers.length} {registeredUsers.length === 1 ? 'Registered' : 'Registered'}</Button>

            );
    }
    return <Button style={{ marginTop: '10px'}} disabled={!userId} variant="contained" color="primary" onClick={handleRegister}>&nbsp;Register</Button>;
};
  if(!contest) return null;
  if(isLoading) {
    return <Paper elevation={6} className={classes.loadingPaper}>
      <CircularProgress size='7em'/>
    </Paper>
  };
  const recomendedContests = contests.filter(({_id}) => _id !== contest._id);
  const openContest = (_id) => navigate(`/contests/${_id}`);
  const IfRegistered = () => {
    if(hasRegistered){
      return <Typography style={{fontWeight: 'bold', fontSize: '19px'}}>You have registered!</Typography>
    } else {
      return <Typography>Click the register button to participate!</Typography>
    }
  };
  return (
    <Paper style={{ padding: '20px', borderRadius: '15px', margin: '75px', backgroundColor: '#fdf4dc' }} elevation={6}>
      <div className={classes.paper}>
        <div className={classes.imageSection}>
            <img className={classes.media}  src={contest.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={contest.title} />
        </div>
          <div className={classes.section}>
            <Typography variant="h3" component="h2">{contest.title}</Typography>
            <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{contest.tags?.map((tag) => `#${tag}`)}</Typography>
           <Typography gutterBottom variant="body1" component="p">{contest.message}</Typography>
           <Typography variant="h6">Created by: {contest.name}</Typography>
           <Typography variant="body1">{moment(contest.createdAt).fromNow()}</Typography>
           <div className={classes.section2}>
           <Typography variant="body1">Prizes and Rewards: {contest.prizes}</Typography>  
           <Typography variant="body1">Starts on: {contest.fromDate}</Typography>
           <Typography variant="body1">Ends on: {contest.toDate}</Typography>
           <Typography variant="body1">Number of participants: {contest.registeredUsers.length}</Typography>
           <IfRegistered/>
           <Register/>
           </div>
           
           <Divider style={{ margin: '20px 0' }} />
           <CommentSection contest={contest}/>
           <Divider style={{ margin: '20px 0' }} />
          </div>
          
         
        </div>
        {recomendedContests.length && (
          <div className={classes.section}>
            <Typography gutterBottom variant='body1'>And there's more...</Typography>
            <Divider/>
            <div className={classes.recommendedContests}>
              {recomendedContests.map(({ title, message, name, likes, disLikes, selectedFile, _id}) => (
                <div style={{ margin: '20px' , cursor: 'pointer' }} onClick={() => openContest(_id)} key={_id}>
                  <Typography variant="h5" gutterBottom >{title}</Typography>
                  <Typography variant="h6" gutterBottom >{name}</Typography>
                  <Typography variant="subtitle1" gutterBottom >{message}</Typography>
                  <Typography variant="subtitle2" gutterBottom >Upvotes: {likes.length}</Typography>
                  <Typography variant="subtitle2" gutterBottom >Downvotes: {disLikes.length}</Typography>
                  <img src={selectedFile} className={classes.media2} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Paper>
  )
}

export default ContestDetails; 
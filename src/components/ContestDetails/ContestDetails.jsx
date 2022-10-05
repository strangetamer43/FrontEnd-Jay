import React, { useState, useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
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
    if (hasRegistered) {
      setRegisteredUsers(contest?.registeredUsers.filter((id) => id !== (userId)));
    } else {
      setRegisteredUsers([...contest?.registeredUsers, userId]);
    }
  };
  useEffect(() => {
    dispatch(getContest(id));
  }, [id]);
  useEffect(() => {
    if (contest) {
      dispatch(getContestsBySearch({ search: 'none', tags: contest?.tags.join(',') }));
    }
  }, [contest]);
  const Register = () => {
    if (registeredUsers?.length > 0) {
      return registeredUsers.find((registeredUser) => registeredUser === (userId))
        ? (
          <Button style={{ marginTop: '10px' }} disabled={!userId} variant="contained" color="secondary" onClick={handleRegister}>&nbsp;{registeredUsers.length > 2 ? `You and ${registeredUsers.length - 1} others` : `${registeredUsers.length} registered${registeredUsers.length > 1 ? '' : ''}`}</Button>
        ) : (
          <Button Button style={{ marginTop: '10px' }} disabled={!userId} variant="contained" color="secondary" onClick={handleRegister}>&nbsp;{registeredUsers.length} {registeredUsers.length === 1 ? 'Registered' : 'Registered'}</Button>

        );
    }
    return <Button style={{ marginTop: '10px' }} disabled={!userId} variant="contained" color="primary" onClick={handleRegister}>&nbsp;Register</Button>;
  };
  if (!contest) return null;
  if (isLoading) {
    return <Paper elevation={6} className={classes.loadingPaper}>
      <CircularProgress size='7em' />
    </Paper>
  };
  const recomendedContests = contests.filter(({ _id }) => _id !== contest._id);
  const openContest = (_id) => navigate(`/contests/${_id}`);
  const IfRegistered = () => {
    if (hasRegistered) {
      return <Typography style={{ fontWeight: 'bold', fontSize: '19px' }}>You have registered!</Typography>
    } else {
      return <Typography style={{ color: '#25b8ef' }}> Click the register button to participate!</Typography >
    }
  };
  return (
    <Paper className={classes.paper} style={{ padding: '20px', borderRadius: '15px', backgroundColor: '#1a1a1a' }} elevation={6}>
      <div >
        <div className={classes.imageSection}>
          <img className={classes.media} src={contest.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={contest.title} />
        </div>
        <div className={classes.section}>
          <Typography variant="h3" component="h2" className={classes.title}>{contest.title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2" className={classes.tags}>{contest.tags?.map((tag) => `#${tag}`)}</Typography>
          <Typography gutterBottom variant="h4" component="p" className={classes.pre} >{contest.message}</Typography>
          <Typography variant="h6" className={classes.name}>Created by: {contest.name}</Typography>
          <Typography variant="body1" className={classes.time}>{moment(contest.createdAt).fromNow()}</Typography>
          <div className={classes.section2}>
            <Typography variant="body1" style={{ color: 'white', }}>Prizes and Rewards: {contest.prizes}</Typography>
            <Typography variant="body1" style={{ color: 'white', }}>Starts on: {contest.fromDate}</Typography>
            <Typography variant="body1" style={{ color: 'white', }}>Ends on: {contest.toDate}</Typography>
            <Typography variant="body1" style={{ color: 'white', }}>Number of participants: {contest.registeredUsers.length}</Typography>
            <IfRegistered />
            <Register />
          </div>

          <Divider />
          <CommentSection contest={contest} />
          <Divider />
        </div>


      </div>
      {
        recomendedContests.length && (
          <div className={classes.section}>
            <Typography className={classes.comments} gutterBottom variant='body1'>And there's more...</Typography>
            <Divider />
            <div className={classes.recommendedPosts}>
              {recomendedContests.map(({ title, message, name, likes, disLikes, selectedFile, _id }) => (
                <div style={{ margin: '20px', cursor: 'pointer', backgroundColor: '#303030', borderRadius: '15px', boxShadow: '-3px -3px 8px 3px rgba(255,255,255,0.3), -3px -3px 8px 3px rgba(5,5,10,0.9)' }} onClick={() => openContest(_id)} key={_id}>
                  <Typography variant="h4" gutterBottom className={classes.recommendedTitle}>{title}</Typography>
                  <Typography variant="h5" gutterBottom className={classes.recommendedName}>{name}</Typography>
                  <Typography variant="h5" gutterBottom className={classes.recommendedName}>{message}</Typography>
                  <div style={{ display: 'flex', marginLeft: '1vw' }}>

                    <Typography variant="subtitle2" gutterBottom className={classes.upvotes}>Upvotes: {likes.length}</Typography> &nbsp;
                    <Typography variant="subtitle2" gutterBottom className={classes.upvotes}>Downvotes: {disLikes.length}</Typography>
                  </div>
                  <img src={selectedFile} className={classes.media2} />
                </div>
              ))}
            </div>
          </div>
        )
      }
    </Paper >
  )
}

export default ContestDetails; 
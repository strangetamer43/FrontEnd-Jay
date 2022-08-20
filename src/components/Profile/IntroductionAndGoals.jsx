import React,{ useState, useEffect} from 'react'
import { Container, AppBar, Typography, Grow, Grid, Card, ListItemAvatar, Button, ListItem, List, Paper, Divider} from '@material-ui/core';
import { getUserProfile } from '../../actions/profile';
import useStyles from "./styles";
import { Link, useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

function IntroductionAndGoals({currentId, setCurrentId}) {
    const classes = useStyles();
    const { profiles, profile, isLoading } = useSelector((state) => state.profiles);
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const dispatch = useDispatch();
    
    
    
    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    useEffect(() => {
      dispatch(getUserProfile());
    }, [currentId, dispatch]);
  return (
    <Paper className={classes.IntroPaper} elevation={7}>
      <typography className={classes.IntroHead} > Introduction and Goals of {user?.result?.name}</typography>
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
    <typography className={classes.smallDetails}>Introduction: {profiles?.introduction}</typography>
   
    <typography className={classes.smallDetails}>Goals: {profiles?.goals}</typography>
   </div>
   </Paper>
  )
}

export default IntroductionAndGoals

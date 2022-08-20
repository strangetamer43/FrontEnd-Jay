import React,{ useState, useEffect} from 'react'
import { Container, AppBar, Typography, Grow, Grid, Card, ListItemAvatar, Button, ListItem, List, Paper, Divider} from '@material-ui/core';
import { getUserProfile } from '../../actions/profile';
import useStyles from "./styles";
import { Link, useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { Marginer } from "../Auth/Marginer";
function Certifications({currentId, setCurrentId}) {
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
    <div className={classes.title}>
         
         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
         <typography variant="h6"  className={classes.IntroHead} gutterBottom >
           Certifications or courses
         </typography>
         
         
         <typography className={classes.smallDetails} >
           {profiles?.certifications?.map((certifications) => <typography> {certifications}</typography>)}
          </typography>
         
          </div>
         
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <typography variant="h6" className={classes.IntroHead1} gutterBottom >
           Certifications URL's
          </typography>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {profiles?.certificationURL?.map((certificationURL) => <a href={{ pathname: `https://${certificationURL}`}} target="_blank" > {certificationURL}</a>)}
          </div>
            </div>
    </div>
    </Paper>
  )
}

export default Certifications

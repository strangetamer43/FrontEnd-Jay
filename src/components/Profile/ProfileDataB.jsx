import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Marginer } from "../Auth/Marginer";
import {makeStyles} from '@material-ui/core/styles';
import usurpLogo from "../Sidebar/usurp-logo.png";

import { getUserProfile } from '../../actions/profile';
import { Container, AppBar, Typography, Grow, Grid, Card, ListItemAvatar, Button, ListItem, List, Paper, Divider} from '@material-ui/core';
import useStyles from "./styles";
import FormbarP from '../FormBar/FormButtonP';
import ProfilePoints from './ProfilePoints';
    

const ProfileDataB = ({currentId, setCurrentId}) => {
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
   <>
   

        
        <div className={classes.details}>
        <img className={classes.image}
         class_name="header_logo"
         src={user.result.imageUrl} 
         alt="profile-picture"
        />
        
         <Typography className={classes.h5} variant="h4"  gutterBottom >
           {user.result.name}
         </Typography>
         
          
         </div>
         <div>
          <Typography variant="body2" style={{color: 'white', fontSize: '19px', marginLeft: '65px', marginRight: '45px'}}>Introduction: {profiles?.introduction}</Typography>
         </div>
         
        
         <div className={classes.title}>
         
         <div className={classes.details2}>
         <Typography variant="h6"  className={classes.h6} gutterBottom >
           Certifications or courses
         </Typography>
         
         <Divider style={{background: 'white', height: '2px' }} />
         <Marginer direction="vertical" margin="30px" />
         <Typography variant="body2"  gutterBottom >
           {profiles?.certifications?.map((certifications) => <Typography> {certifications}</Typography>)}
          </Typography>
         
          </div>
          <Divider orientation="vertical" variant= "middle" flexItem style={{background: 'white', width: '2px' }} /> 
          <div className={classes.details2}>
          <Typography variant="h6" className={classes.h6} gutterBottom >
           Certifications URL's
          </Typography>
          <Divider style={{background: 'white', height: '2px' }} /> 
          <Marginer direction="vertical" margin="5px" />
          {profiles?.certificationURL?.map((certificationURL) => <a href={{ pathname: `https://${certificationURL}`}} target="_blank" > {certificationURL}</a>)}
          </div>  
          <Divider orientation="vertical" variant= "middle" flexItem style={{background: 'white', width: '2px' }} /> 
          <div className={classes.details2}>
          <Typography variant="h6" className={classes.h6} gutterBottom >
           Educational Qualifications
          </Typography>
          <Divider style={{background: 'white', height: '2px', width: '70%'}} /> 
          <Marginer direction="vertical" margin="10px" />
          <Typography variant="body2" style={{ fontSize: '17px' }} className={classes.h6} gutterBottom >
           Graduate/Post Graduate: {profiles?.education}
          </Typography>
          <Typography variant="body2" style={{ fontSize: '17px' }} className={classes.h6} gutterBottom >
           Senior Secondary Education: {profiles?.education1}
          </Typography>
          <Typography variant="body2" style={{ fontSize: '17px' }} className={classes.h6} gutterBottom >
           Secondary Education: {profiles?.education2}
          </Typography>
          </div>
           
          </div>
          
          <Marginer direction="vertical" margin="40px" />
         <div>
          <Typography variant="body2" style={{color: 'white', fontSize: '17px', marginLeft: '65px', marginRight: '45px'}}>Goals: {profiles?.goals}</Typography>
         </div>
         <FormbarP currentId={currentId} setCurrentId={setCurrentId}/>
         
             
   </>
  )
}

export default ProfileDataB;
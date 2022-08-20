import React, {useState, useEffect} from 'react'
import styled, {keyframes} from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button} from '@material-ui/core';
import useStyles from './styles'; 
const animation = keyframes`
  0% { opacity: 0; transform: translateX(-300px); filter: blur(5px);}
  
  100% { opacity: 1; transform: translateX(0px); filter: blur(0px);}
  
  
`
const animation1 = keyframes`
  0% { opacity: 0; transform: translateX(1900px); filter: blur(5px);}
  
  100% { opacity: 1; transform: translateX(850px); filter: blur(0px);}
  
  
`

const TextAnimate = styled.span`
  
    opacity: 0;
    display: inline-block;
    animation-name: ${animation};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  
`
const TextAnimate1 = styled.span`
  
    opacity: 0;
    display: inline-block;
    animation-name: ${animation1};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  
`
const ButtonAnimate = styled.button`
  opacity: 0;
  margin-left: 18px;
  margin-top: 18px;
  background: linear-gradient(105deg, rgba(255,252,0,1) 0%, rgba(255,0,0,1) 100%);
  border-radius: 15px;
  width: 100px;
  height: 50px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 550;
  display: inline-block;
  animation-name: ${animation};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`
const ButtonAnimate1 = styled.button`
  opacity: 0;
  margin-left: 18px;
  margin-top: 18px;
  background: linear-gradient(105deg, rgba(255,252,0,1) 0%, rgba(255,0,0,1) 100%);
  border-radius: 15px;
  width: 150px;
  height: 50px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 550;
  display: inline-block;
  animation-name: ${animation1};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`
function EntryPage() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Container maxWidth='xl'>
      <div className={classes.leftSide}>
      <Typography variant='h3'><TextAnimate>Create A Stunning Portfolio</TextAnimate></Typography>
      <Typography variant='h5'><TextAnimate>Showcase your skills to the world. Post your projects and articles that make you stand out. Create a lively professional history!</TextAnimate></Typography>
      
      <Link to="/feed"><ButtonAnimate className={classes.button} >Start Now!</ButtonAnimate></Link>
      
      </div>
      <div className={classes.rightSide}>
      <Typography variant='h3'><TextAnimate1>Participate In Multiple Tournaments</TextAnimate1></Typography>
      <Typography variant='h5'><TextAnimate1>Get practical exposure to each industry through tournaments. Earn jobs, rewards and prizes!</TextAnimate1></Typography>
      <Link to="/contests"><ButtonAnimate1 className={classes.button} >Participate Now!</ButtonAnimate1></Link>
      </div>
      <div className={classes.leftSide}>
        <Typography  variant='h3'><TextAnimate>Conquer Kingdoms To Get Noticed!</TextAnimate></Typography>
        <Typography   variant='h5'><TextAnimate>Game like challenges to make your journey scintilating! Earn KP's, badges and rewards to get noticed easily!</TextAnimate></Typography>
      </div>
      <div className={classes.rightSide}>
      <Typography  variant='h3'><TextAnimate1>Upskill With Groundbreaking Courses</TextAnimate1></Typography>
      <Typography   variant='h5'><TextAnimate1>Courses provided by the top educators of the country. Gain knowledge and value!</TextAnimate1></Typography>
      </div>
      <div className={classes.leftSide}>
      <Typography  variant='h3'><TextAnimate>Know Yourself Better</TextAnimate></Typography>
      <Typography   variant='h5'><TextAnimate>Take world class reputed psychometric tests. Choose your career path accordingly!</TextAnimate></Typography>
      </div>
      </Container>
  )
}

export default EntryPage

import React, {useState, useEffect} from 'react'
import styled, {keyframes} from 'styled-components';
import {motion} from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button} from '@material-ui/core';
import useStyles from './styles'; 
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';
import Logo from '../../Assets/Asset 2.png';
import PsychometricTesting from './PyshometricTesting';
const animation2 = keyframes`
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
    animation-name: ${animation2};
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
  
`
const TextAnimate1 = styled.span`
  
    opacity: 0;
    display: inline-block;
    animation-name: ${animation1};
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
  
`
const Button2 = styled.button`
  
  margin-left: 18px;
  margin-top: 18px;
  background: linear-gradient(35deg, rgba(143,5,227,1) 0%, rgba(6,131,255,1) 100%);
  border-radius: 15px;
  width: 130px;
  height: 50px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 550;
  @media only screen and (max-width: 900px) {
    width: 80px;
    height: 30px;
    font-size: 14px;
    
  }
  @media only screen and (max-width: 650px) {
    width: 80px;
    height: 22px;
    font-size: 12px;
    margin-left: 10px;
    margin-top: 10px;
  }
  @media only screen and (max-width: 450px) {
    width: 75px;
    height: 20px;
    font-size: 10px;
    margin-left: 10px;
    margin-top: 10px;
    
  }
`
const Button1 = styled.button`
  
margin-left: 18px;
margin-top: 18px;
background: linear-gradient(35deg, rgba(143,5,227,1) 0%, rgba(6,131,255,1) 100%);
border-radius: 15px;
width: 130px;
height: 50px;
border: none;
cursor: pointer;
font-size: 18px;
font-weight: 550;
@media only screen and (max-width: 900px) {
  width: 80px;
  height: 30px;
  font-size: 14px;
  
}
@media only screen and (max-width: 650px) {
  width: 88px;
  height: 30px;
  font-size: 12px;
  
}
@media only screen and (max-width: 450px) {
  width: 75px;
  height: 25px;
  font-size: 10px;
  margin-left: 10px;
  margin-top: 10px;
  
}
`
  


function EntryPage() {
  const classes = useStyles();
  const location = useLocation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  }
  );
  const [ref1, inView1] = useInView({
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.2,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.2,  
  });
  const [ref4, inView4] = useInView({
    threshold: 0.2,  
  });
  const [ref5, inView5] = useInView({
    threshold: 0.1, 
  });
  const animation = useAnimation();
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  useEffect(() => {
    if(inView){
        animation.start({
            x: 0, opacity: 1,
            transition: { type: 'spring', duration: 1.5, bounce: 0.3}
        });
    }
    if(!inView){
        animation.start({x: '-100vw', opacity: 0});
    }

  }, [inView]);
  useEffect(() => {
    if(inView4){
        animation4.start({
            x: 0, opacity: 1,
            transition: { type: 'spring', duration: 1.5, bounce: 0.3}
        });
    }
    if(!inView4){
        animation4.start({x: '-100vw', opacity: 0});
    }

  }, [inView4]);
  useEffect(() => {
    if(inView1){
        animation1.start({
            x: 0, opacity: 1,
            transition: { type: 'spring', duration: 1.5, bounce: 0.3}
        });
    }
    if(!inView1){
        animation1.start({x: '-100vw', opacity: 0});
    }

  }, [inView1]);
  useEffect(() => {
    if(inView2){
        animation2.start({
            x: '12vw', opacity: 1,
            transition: { type: 'spring', duration: 1.5, bounce: 0.3}
        });
    }
    if(!inView2){
        animation2.start({x: '100vw', opacity: 0});
    }

  }, [inView2]);
  useEffect(() => {
    if(inView3){
        animation3.start({
            x: '12vw', opacity: 1,
            transition: { type: 'spring', duration: 1.5, bounce: 0.3}
        });
    }
    if(!inView3){
        animation3.start({x: '100vw', opacity: 0});
    }

  }, [inView3]);
  useEffect(() => {
    if(inView5){
        animation5.start({
            rotate: 360, opacity: 1,
            
        });
    }
    if(!inView5){
        animation5.start({x: '0'});
    }

  }, [inView5]);
  
 


  return (
    <Container maxWidth='xl'>
      
        <div className={classes.topButtons}>
        <Button component={Link} to='/auth' className={classes.buttonText}>Log In/Sign Up</Button>
        <Button component={Link} to='/about' className={classes.buttonText}>About Us</Button>
        <Button component={Link} to='/recruiters' className={classes.buttonText}>For Recruiters/Companies</Button>
        </div>
        <img style={{ marginLeft: '10vw', width: '15.5vh', height: '20vh'}} src={Logo}></img>    
      
    <div ref={ref4}>
      <motion.div className={classes.leftSide}
      
      animate={animation4}>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
      <div>
      <Typography className={classes.text} >Create A Stunning Portfolio</Typography>
      <Typography className={classes.textSub} >Showcase your skills to the world. Post your projects and articles that make you stand out. Create a lively professional history! 
      Join the community of like minded individuals to give you feedback and answer any questions!</Typography>
      
      <Link to="/feed"><Button2>Start Now!</Button2></Link>
      </div>
      <div className={classes.ModelCommunity}>
      <Spline scene="https://prod.spline.design/3gDZlvZR0X0PUQjk/scene.splinecode" />
      </div>
      </div>
      </motion.div>
      </div>
      <div ref={ref3}>
      <motion.div className={classes.rightSide}
      
      animate={animation3}
      
      >
      <div style={{ display: 'flex', flexDirection: 'row'}}>
      <div className={classes.Model}>      
      <Spline scene="https://prod.spline.design/Wf5ZxDiATCrJRLrv/scene.splinecode" />
      </div>
      <div>
      <Typography  className={classes.text} variant='h3'>Know Yourself Better!</Typography>
      <Typography  className={classes.textSub} variant='h5'>Take world class reputed psychometric tests. Choose your career path accordingly!</Typography>
      <div className={classes.challenges}>
      <Paper style={{ padding: '2vh'}}>
                <Typography  className={classes.text1} variant='h4'>Career Aptitude tests</Typography>
                <Typography  className={classes.textSub1} variant='h6'>Login and take the test!</Typography>
            </Paper>
            <Paper style={{ padding: '2vh'}}>
                <Typography  className={classes.text1} variant='h4'>Understanding Self</Typography>
                <Typography  className={classes.textSub1} variant='h6'>Login and take the test!</Typography>
            </Paper>
           
            
            </div>
            </div>
      
      </div>
      </motion.div>
      </div>
      
      <div ref={ref}>
      <motion.div className={classes.leftSide}
      
      animate={animation}
      
      >
        <div style={{ display: 'flex', flexDirection: 'row'}}>
        <div>
        <Typography  className={classes.text} variant='h3'>Conquer Kingdoms To Get Noticed!</Typography>
        <Typography  className={classes.textSub} variant='h5'>Game like challenges to make your journey scintilating! Earn KP's, badges and rewards to get noticed easily and secure a job!</Typography>
        <div className={classes.challenges}>
            <Paper>
                <Typography  className={classes.text1} variant='h4'>Challenge 1</Typography>
                <Typography  className={classes.textSub1} variant='h5'>Skills</Typography>
            </Paper>
            <Paper>
                <Typography className={classes.text1} variant='h4'>Challenge 2</Typography>
                <Typography   className={classes.textSub1} variant='h5'>Skills</Typography>
            </Paper>
            <Paper>
                <Typography  className={classes.text1} variant='h4'>Challenge 3</Typography>
                <Typography  className={classes.textSub1} variant='h5'>Skills</Typography>
            </Paper>
            
        </div>
        <Button1>And Much More!</Button1>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className={classes.Model1}>
        <Spline scene="https://prod.spline.design/mSy5SXfgUapMqJhE/scene.splinecode" />
        </div>
        <div className={classes.Model}>
        <Spline scene="https://prod.spline.design/UBZD4r937aN1udQ9/scene.splinecode" />
        </div>
        <div className={classes.Model1}>
        <Spline scene="https://prod.spline.design/NvoPSlUCzRQr32Ze/scene.splinecode" />
        </div>
        </div>
        </div>
      </motion.div>
      </div>
      
      
      

      </Container>
  )
}

export default EntryPage

import React, {useState, useEffect} from 'react'
import styled, {keyframes} from 'styled-components';
import {motion} from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button} from '@material-ui/core';
import useStyles from './styles'; 
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';
import Logo from '../../Assets/Asset 2.png';
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
  background: linear-gradient(105deg, rgba(255,252,0,1) 0%, rgba(255,0,0,1) 100%);
  border-radius: 15px;
  width: 130px;
  height: 50px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 550;
  
`
const Button1 = styled.button`
  
  margin-left: 18px;
  margin-top: 18px;
  background: linear-gradient(105deg, rgba(255,252,0,1) 0%, rgba(255,0,0,1) 100%);
  border-radius: 15px;
  width: 180px;
  height: 50px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 550;
  
  
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
            x: '45vw', opacity: 1,
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
            x: '45vw', opacity: 1,
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
        <Button style={{color: 'white', fontSize: '18px'}}>Log In/Sign Up</Button>
        <Button style={{color: 'white', fontSize: '18px'}}>About Us</Button>
        </div>
        <img style={{ marginLeft: '10vw', width: '15.5vh', height: '18vh'}} src={Logo}></img>    
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', zIndex: -100,
position: 'absolute'}}>
    <motion.div initial={{ y: 0, rotate: 0 }}
    animate={{ y: '-100vh', rotate: 5400 }}
    transition={{ duration: 350, repeat: Infinity }}
    className={classes.backgroundBox}>
    </motion.div>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
        <motion.div 
        initial={{ x: 0, y: 0 }}
        animate={{ x: '-650px', y: '-100vh' }}
        transition={{ duration: 100}}
        className={classes.Squares}>

        </motion.div>
        <motion.div 
        initial={{ x: 0, y: 0 }}
        animate={{ x: '-650px', y: '-100vh' }}
        transition={{ duration: 125}}
        className={classes.Squares1}>
            

        </motion.div>
        <motion.div 
        initial={{ x: 0, y: 0 }}
        animate={{ x: '-650px', y: '-100vh' }}
        transition={{ duration: 150}}
        className={classes.Squares1}>
            

        </motion.div>
    </div>
    </div>   
    <div ref={ref4}>
      <motion.div className={classes.leftSide}
      
      animate={animation4}>
      
      <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} className={classes.text} variant='h3'>Create A Stunning Portfolio</Typography>
      <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} className={classes.text} variant='h5'>Showcase your skills to the world. Post your projects and articles that make you stand out. Create a lively professional history!</Typography>
      
      <Link to="/feed"><Button2>Start Now!</Button2></Link>
      
      </motion.div>
      </div>
      <div ref={ref3}>
      <motion.div className={classes.rightSide}
      
      animate={animation3}
      >
      <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} className={classes.text} variant='h3'>Participate In Multiple Tournaments</Typography>
      <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} className={classes.text} variant='h5'>Get practical exposure to each industry through tournaments. Earn jobs, rewards and prizes!</Typography>
      <Link to="/contests"><Button1>Participate Now!</Button1></Link>
      </motion.div>
      </div>
      <div ref={ref}>
      <motion.div className={classes.leftSide}
      
      animate={animation}
      
      >
        <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} className={classes.text} variant='h3'>Conquer Kingdoms To Get Noticed!</Typography>
        <Typography  style={{ fontFamily: 'Montserrat, sans-serif'}} className={classes.text} variant='h5'>Game like challenges to make your journey scintilating! Earn KP's, badges and rewards to get noticed easily!</Typography>
        <div className={classes.challenges}>
            <Paper>
                <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} variant='h4'>Challenge 1</Typography>
                <Typography style={{ fontFamily: 'Montserrat, sans-serif'}}  variant='h5'>Skills</Typography>
            </Paper>
            <Paper>
                <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} variant='h4'>Challenge 2</Typography>
                <Typography  style={{ fontFamily: 'Montserrat, sans-serif'}} variant='h5'>Skills</Typography>
            </Paper>
            <Paper>
                <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} variant='h4'>Challenge 3</Typography>
                <Typography style={{ fontFamily: 'Montserrat, sans-serif'}}  variant='h5'>Skills</Typography>
            </Paper>
            
        </div>
        <Button1>And Much More!</Button1>
      </motion.div>
      </div>
      <div ref={ref2}>
      <motion.div className={classes.rightSide}
      
      animate={animation2}
      
      >
      <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} className={classes.text} variant='h3'>Upskill With Groundbreaking Courses</Typography>
      <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} className={classes.text}  variant='h5'>Courses provided by the top educators of the country. Gain knowledge and value!</Typography>
      <div className={classes.challenges}>
      <Paper>
                <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} variant='h4'>Course 1</Typography>
                <Typography style={{ fontFamily: 'Montserrat, sans-serif'}}  variant='h5'>Skills</Typography>
            </Paper>
            <Paper>
                <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} variant='h4'>Course 2</Typography>
                <Typography  style={{ fontFamily: 'Montserrat, sans-serif'}} variant='h5'>Skills</Typography>
            </Paper>
            <Paper>
                <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} variant='h4'>Course 3</Typography>
                <Typography style={{ fontFamily: 'Montserrat, sans-serif'}}  variant='h5'>Skills</Typography>
            </Paper>
            
            </div>
            <Button1>And Much More!</Button1> 
      </motion.div>
      </div>
      <div ref={ref1}>
      <motion.div className={classes.leftSide}
      
      animate={animation1}
      
      >
      <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} className={classes.text} variant='h3'>Know Yourself Better</Typography>
      <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} className={classes.text} variant='h5'>Take world class reputed psychometric tests. Choose your career path accordingly!</Typography>
      <div className={classes.challenges}>
      <Paper>
                <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} variant='h4'>DBDA</Typography>
                
            </Paper>
            <Paper>
                <Typography style={{ fontFamily: 'Montserrat, sans-serif'}} variant='h4'>EI</Typography>
                
            </Paper>
           
            
            </div>
      </motion.div>
      </div>
      
      </Container>
  )
}

export default EntryPage

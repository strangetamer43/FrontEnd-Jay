import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import {useAnimation, motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Logo from '../../Assets/Asset 2.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';


import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button} from '@material-ui/core';
const EntryPageForRecruiters = () => {
    const classes = useStyles();
    const location = useLocation();
    const [ref, inView] = useInView({
        threshold: 0.1,
      }
      );
      const [ref1, inView1] = useInView({
        threshold: 0.1,
      });
      const [ref2, inView2] = useInView({
        threshold: 0.1,
      });
      const [ref3, inView3] = useInView({
        threshold: 0.1,  
      });
      const [ref4, inView4] = useInView({
        threshold: 0.1,  
      });
    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const animation4 = useAnimation();
    const animation5 = useAnimation();
    useEffect(() => {
        if(inView){
            animation1.start({
                x: 0, opacity: 1,
                transition: { type: 'spring', duration: 1.5, bounce: 0.3}
            });
        }
        if(!inView){
            animation1.start({x: '-100vw', opacity: 0});
        }
    
      }, [inView]);
      useEffect(() => {
        if(inView1){
            animation2.start({
                x: '12vw', opacity: 1,
                transition: { type: 'spring', duration: 1.5, bounce: 0.3}
            });
        }
        if(!inView1){
            animation2.start({x: '100vw', opacity: 0});
        }
    
      }, [inView1]);
      useEffect(() => {
        if(inView2){
            animation4.start({
                x: '12vw', opacity: 1,
                transition: { type: 'spring', duration: 1.5, bounce: 0.3}
            });
        }
        if(!inView2){
            animation4.start({x: '100vw', opacity: 0});
        }
    
      }, [inView2]);
      useEffect(() => {
        if(inView3){
            animation3.start({
                x: 0, opacity: 1,
                transition: { type: 'spring', duration: 1.5, bounce: 0.3}
            });
        }
        if(!inView3){
            animation3.start({x: '-100vw', opacity: 0});
        }
    
      }, [inView3]);
      useEffect(() => {
        if(inView4){
            animation5.start({
                x: 0, opacity: 1,
                transition: { type: 'spring', duration: 1.5, bounce: 0.3}
            });
        }
        if(!inView4){
            animation5.start({x: '-100vw', opacity: 0});
        }
    
      }, [inView4]);
  return (
    <Container maxWidth='xl'>
        <div className={classes.topButtons}>
        <Button component={Link} to='/auth' className={classes.buttonText}>Log In/Sign Up</Button>
        <Button component={Link} to='/about' className={classes.buttonText}>About Us</Button>
        <Button component={Link} to='/' className={classes.buttonText}>For Candidates/users</Button>
        </div>
        <img style={{ marginLeft: '10vw', width: '15.5vh', height: '20vh'}} src={Logo}></img>
        <div ref={ref}>
        <motion.div className={classes.leftSide}
      
        animate={animation1}>
        <div>
            <Typography className={classes.text}>Create challenges (tests) to find better hires</Typography>
            <Typography className={classes.textSub}>Make your hiring process 3X faster by making candidates take tests/challenges! Know who you're hiring!</Typography>
        </div>
        </motion.div>
        </div>
        <div ref={ref1}>
        <motion.div className={classes.rightSide}
      
        animate={animation2}>
        <div>
            <Typography className={classes.text}>Make use of the templates or pre made tests to make your life easier</Typography>
            <Typography className={classes.textSub}>We have multiple pre-made tests you can use to save time. Just select them and share the link with the candidates.</Typography>
        </div>
        </motion.div>
        </div>
        <div ref={ref3}>
        <motion.div className={classes.leftSide}
        animate={animation3}>
        <div>
            <Typography className={classes.text}>Reduce the resources and time spent on hiring</Typography>
            <Typography className={classes.textSub}>The Average cost of hiring a candidate is ₹40,000. Average time taken to hire a candidate is 45 days. Not anymore! Use our testing/challenges process to make life easier for yourself and spend very little! </Typography>
        </div>
        </motion.div>
        </div>
        <div ref={ref2}>
        <motion.div className={classes.rightSide}
        animate={animation4}>
        <div>
            <Typography className={classes.text}>Contact us to host a tournament, hackathon or challenge!</Typography>
            <Typography className={classes.textSub}>We can source amazing talent via multiple methods than can help you save resources, while helping talet gain exposure and notice your company! Make employer branding simpler!</Typography>
        </div>
        </motion.div>
        </div>
        <div ref={ref4}>
        <motion.div className={classes.leftSide}
        animate={animation5}>
        <div>
            <Typography className={classes.text}>Use our tools or contact us to reduce time and resources spent on hiring!</Typography>
            <Typography className={classes.textSub}>Most Consultancies use inefficent methods to hire! It's time to change that. We help you find people to hire or replace 2.5X faster.</Typography>
        </div>
        </motion.div>
        </div>
    </Container>
  )
}

export default EntryPageForRecruiters;

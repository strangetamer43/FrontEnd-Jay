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
      <div ref={ref3}>
      <motion.div className={classes.rightSide}
      
      animate={animation3}
      >
      <div style={{ display: 'flex', flexDirection: 'row'}}>
      <div className={classes.Model}>
      <Spline scene="https://prod.spline.design/bk3Jl93ffU8drHlZ/scene.splinecode" />
      </div>
      <div>
      <Typography className={classes.text} variant='h3'>Participate in exciting and fun Tournaments</Typography>
      <Typography className={classes.textSub} variant='h5'>Meet like minded people, collaborate, innovate, compete, have fun and learn. Gain practical exposure to industries. Earn jobs, cash prizes and rewards!</Typography>
      <Link to="/contests"><Button1>Participate Now!</Button1></Link>
      </div>
      
      </div>
      </motion.div>
      </div>
      <div ref={ref2}>
      <motion.div className={classes.rightSide}
      
      animate={animation2}
      
      >
        <div style={{ display: 'flex', flexDirection: 'row'}}>
      <div className={classes.Model}>  
      <Spline scene="https://prod.spline.design/ECJTMh9lhmvTVmq2/scene.splinecode" />
      </div>
      <div>
      <Typography  className={classes.text} variant='h3'>Upskill with our groundbreaking bootcamps</Typography>
      <Typography  className={classes.textSub}  variant='h5'>Automated, immersive and personalised learning experience. You learn however you wish!</Typography>
      <div className={classes.challenges}>
      <Paper>
                <Typography  className={classes.text1} variant='h4'>Bootcamp 1</Typography>
                <Typography  className={classes.textSub1} variant='h5'>Skills</Typography>
            </Paper>
            <Paper>
                <Typography className={classes.text1} variant='h4'>Bootcamp 2</Typography>
                <Typography   className={classes.textSub1} variant='h5'>Skills</Typography>
            </Paper>
            <Paper>
                <Typography  className={classes.text1} variant='h4'>Bootcamp 3</Typography>
                <Typography  className={classes.textSub1} variant='h5'>Skills</Typography>
            </Paper>
            
            </div>
            <Button1>And Much More!</Button1> 
            </div>  
            </div>    
      </motion.div>
      </div>
      </Container>
  )
}

export default EntryPage

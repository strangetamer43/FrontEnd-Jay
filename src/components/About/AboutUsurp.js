import React from 'react';
import { Paper, Avatar, Typography, Container } from '@material-ui/core';
import Showcase from '../../Assets/Showcase yourself1.png';
import Become from '../../Assets/Become a usurper1.png';
import Earn from '../../Assets/earn kp1.png';
import Compete from '../../Assets/Compete in tournaments 1.png';
import Jobs from '../../Assets/Win jobs and cash rewards1.png';
import Upskill from '../../Assets/Upskill1.png';
import Usurper from '../../Assets/usruper to ruler1.png';
import usurpLogo from "../Auth/usurp-logo-white.png";
import useStyles from "./styles";

const AboutUsurp = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='xl' >
      <Paper className={classes.card}>
        <div>
          <div className={classes.content}>
            <div className={classes.title}>
              <Typography variant="h2" style={{ fontWeight: '550', color: 'white' }}>About </Typography>
              <img style={{ marginTop: '18px', height: '60px', width: '130px' }} src={usurpLogo} />
            </div>
            <Typography variant="h3" style={{ fontWeight: '550', color: 'white', marginTop: '20px' }}>How can Usurp help?</Typography>
            <Typography variant="h5" style={{ color: 'white', marginTop: '10px' }}>Usurp can help you prove yourself to the world. Your skills, capabilites and abilities can be showcased to the world. We have built a seamless system that can
              aid you in building a comprehensive portfolio, attain jobs and internships from top tier companies and upskill with ease.</Typography>
            <Typography variant="h5" style={{ color: 'white', marginTop: '10px' }}>We understand that job hunting is a painful, strenuous and disheartening process. So is getting noticed/recognised for your skills and talent. Which is why we are building this platform. Stop worrying about getting recruited into your dream role. Start using Usurp to prove how well you can perform
              and leave the rest to us. We will arrange the best opportunities for each and every user.</Typography>
            <Typography variant="h5" style={{ color: 'white', marginTop: '10px' }}>We are in the process of partnering with different instituions and ed tech platforms to bring you courses that can help you upskill very easily. And the best part...? Every course adds value to your Profile
              while you receive a verifiable, trustworthy certificate that exists on the blockchain.</Typography>
            <Typography variant="h3" style={{ fontWeight: '550', color: 'white', marginTop: '20px' }}>How to use Usurp?</Typography>
          </div>
          <div className={classes.content}>
            <img src={Become} style={{ height: '5vh', width: '45vh', marginTop: '15px' }} />
            <Typography variant="h5" style={{ color: 'white' }}>Create an account on Usurp and become a Usurper. Usurp is the fun and simple way to earn a job, showcase your skills and improve your profile.</Typography>
            <img src={Showcase} style={{ height: '4vh', width: '50vh', marginTop: '20px' }} />
            <Typography variant="h5" style={{ color: 'white' }}>Post your personal/professional projects and ask questions in your favorite fields. Put yourself on the map by using our simple interface and let everybody know what you are capable of</Typography>

            <img src={Earn} style={{ height: '8vh', width: '30vh', marginTop: '20px' }} />
            <Typography variant='h5' style={{ color: 'white' }}>Earn points from your activity on this platform. Usurp has a game like interface where you keep earning Knowledge Points (KP)
              which keeps track of your abilites.</Typography>
            <img src={Compete} style={{ height: '5vh', width: '60vh', marginTop: '20px' }} />
            <Typography variant="h5" style={{ color: 'white' }}>Take part in different fun competitions, tournaments and hackathons to gain practical exposure and imporve your skills. You will also be able to network with various people allover the country who share your interests.</Typography>
            <img src={Jobs} style={{ height: '4vh', width: '65vh', marginTop: '20px' }} />
            <Typography variant="h5" style={{ color: 'white' }}>Earn Jobs/Internships and other rewards(KP, Cash rewards, goodies and gifts). Each tournament will have a cash prize for the winner. Participants receive KP that increase your profiles value.</Typography>
            <img src={Upskill} style={{ height: '8vh', width: '30vh', marginTop: '20px' }} />
            <Typography variant="h5" style={{ color: 'white' }}>Take courses with our partner organizations to upskill yourself and earn verificable certificates. Also earn KP to increase your profile's value.</Typography>

            <img src={Usurper} style={{ height: '5vh', width: '60vh', marginTop: '20px' }} />
            <Typography variant="h5" style={{ color: 'white', marginBottom: '18px' }}>Go from being a novice to a master!</Typography>
          </div>

        </div>
      </Paper>
    </Container>
  )
}

export default AboutUsurp
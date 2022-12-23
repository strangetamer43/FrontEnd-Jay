import React from 'react';
import { Typography, Paper, Container, CardMedia } from '@material-ui/core';
import useStyles from './styles'; 
import started1 from '../../Assets/Getting started/Posts/Getting started 1.png';
import started2 from '../../Assets/Getting started/Posts/getting started 2.png';
import started3 from '../../Assets/Getting started/Posts/Getting started 3.png';
import started4 from '../../Assets/Getting started/Posts/Getting started 4.png';
import started5 from '../../Assets/Getting started/Posts/Getting started 5.png';
import started6 from '../../Assets/Getting started/Posts/Getting started 6.png';
import startedQ1 from '../../Assets/Getting started/Posts/q1.png';
import startedQ2 from '../../Assets/Getting started/Posts/q2.png';
import startedQ3 from '../../Assets/Getting started/Posts/q3.png';
import startedQ4 from '../../Assets/Getting started/Posts/q4.png';
import video1 from '../../Assets/Getting started/Posts/Post Upload.mp4';
import video2 from '../../Assets/Getting started/Posts/QuestionUpload.mp4';
function UsingTheApp() {
    const classes = useStyles();
  return (
    <div>
    <Container maxWdith='lg'>
      <Paper className={classes.paperBig}>
        <Typography className={classes.typographyBig}>How do I use the app?</Typography>
        <Typography className={classes.typography} style={{fontSize: '21px'}}>How do I post my projects or an article?</Typography>
        <Typography className={classes.typography}>1) Click on the button Post Something in the center of the screen when you log in.</Typography>
        <img src={started1} className={classes.image}/>
        <Typography className={classes.typography}>2) Type in the Title of your post.</Typography>
        <img src={started2} className={classes.image}/>
        <Typography className={classes.typography}>3) Type in the details of your post.</Typography>
        <img src={started3} className={classes.image}/>
        <Typography className={classes.typography}>4) Type in the skills pertaining to the post. Remember to use commas and no spaces. The hastags will automatically populate once you submit the post.</Typography>
        <img src={started4} className={classes.image2}/>
        <Typography className={classes.typography}>5) You will have to select an Image or a Video to upload with your post.(blank posts wont deploy)</Typography>
        <img src={started5} className={classes.image3}/>
        <Typography className={classes.typography}>6) Click on submit for the post to be uploaded.</Typography>
        <img src={started6} className={classes.image3}/>
        <Typography className={classes.typography}>Here is a video to make things easier</Typography>
        <CardMedia component="video" image={video1} controls className={classes.video} />
        <Typography className={classes.typography} style={{fontSize: '21px'}}>How do I post my questions?</Typography>
        <Typography className={classes.typography}>1) Click on the button Post a question in the Question Feed</Typography>
        <img src={startedQ1} className={classes.image}/>
        <Typography className={classes.typography}>2) Type in the Title of your question.</Typography>
        <img src={startedQ2} className={classes.image}/>
        <Typography className={classes.typography}>3) Type in the details of your question.</Typography>
        <img src={startedQ3} className={classes.image}/>
        <Typography className={classes.typography}>4) Type in the skills pertaining to the question. Remember to use commas and no spaces. The hastags will automatically populate once you submit the question.</Typography>
        <img src={startedQ4} className={classes.image2}/>
        <Typography className={classes.typography}>5) You will have to select an Image or a Video to upload with your question.(blank questions wont deploy)</Typography>
        <img src={started5} className={classes.image3}/>
        <Typography className={classes.typography}>6) Click on submit for the question to be uploaded.</Typography>
        <img src={started6} className={classes.image3}/>
        <Typography className={classes.typography}>Here is a video to make things easier</Typography>
        <CardMedia component="video" image={video2} controls className={classes.video} />
      </Paper>
      </Container>
    </div>
  )
}

export default UsingTheApp
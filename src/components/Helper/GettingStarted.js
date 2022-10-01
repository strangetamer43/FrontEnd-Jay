import React from 'react';
import { Typography, Paper, Container,Box} from '@material-ui/core';
import useStyles from './styles'; 
import started1 from '../../Assets/Getting started/Posts/Getting started 1.png';
import started2 from '../../Assets/Getting started/Posts/getting started 2.png';
import started3 from '../../Assets/Getting started/Posts/Getting started 3.png';
import started4 from '../../Assets/Getting started/Posts/Getting started 4.png';
import started5 from '../../Assets/Getting started/Posts/Getting started 5.png';
import started6 from '../../Assets/Getting started/Posts/Getting started 6.png';
function GettingStarted() {
    const classes = useStyles();
  return (
    <div>
    <Container maxWdith='lg'>
      <Paper className={classes.paperBig}>
        <Typography className={classes.typographyBig}>Getting started with Usurp</Typography>
        <Typography className={classes.typography} style={{fontSize: '21px'}}>How do I post my projects or an article?</Typography>
        <Typography className={classes.typography}>1) Click on the button Post Something in the center of the screen when you log in.</Typography>

        <Box className={classes.divimg}>
        <img src={started1} className={classes.imgst}/>
        </Box>


        <Typography className={classes.typography}>2) Type in the Title of your post.</Typography>
        <Box className={classes.divimg}>
        <img src={started2} className={classes.imgst}/>
        </Box>


        <Typography className={classes.typography}>3) Type in the details of your post.</Typography>
        <Box className={classes.divimg}>
          <img src={started3} className={classes.imgst} />
        </Box>

        <Typography className={classes.typography}>4) Type in the skills pertaining to the post. Remember to use commas and no spaces. The hastags will automatically populate once you submit the post.</Typography>
        <Box className={classes.divimg} >
        <img src={started4} className={classes.imgst}/>
        </Box>


        <Typography className={classes.typography}>5) You will have to select an Image or a Video to upload with your post. </Typography>
        <Box className={classes.divimg}>
        <img src={started5} className={classes.imgst} />
        </Box>

        
        <Typography className={classes.typography}>6) Click on submit for the post to be uploaded.</Typography>
        <Box className={classes.divimg}>
        <img src={started6} className={classes.imgst} />
        </Box>
      </Paper>
      </Container>
    </div>
  )
}

export default GettingStarted

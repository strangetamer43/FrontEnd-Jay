import React, {useState} from 'react'
import useStyles from './styles'; 
import * as BsIcons from "react-icons/bs";
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button, Modal} from '@material-ui/core';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Helper = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles();
  return (
    <div>
      <Button position="fixed" style={{color: '#1a1a1a', background: 'linear-gradient(315deg, rgba(246,0,241,1) 5%, rgba(37,184,239,1) 100%)', boxShadow: '2.5px 2.5px 6px rgba(5, 5, 10, 0.8), -2px -2px 5px rgba(255, 255, 255, 0.40)'}} className={classes.button} onClick={handleOpen}><BsIcons.BsQuestionCircle style={{ marginLeft: '-15px', fontWeight: '650'}}size={50}/></Button>
      <Modal open={open} onClose={handleClose}>
        <Paper className={classes.paper}>
            <div className={classes.placeButtons}>
            <Button className={classes.buttons1} component={Link} to='/usingapp'>How do I use this app?</Button>
            <Button className={classes.buttons1} component={Link} to='/usingapp'>How does this app help me?</Button>
            <Button className={classes.buttons1} component={Link} to='/gettingstarted'>Getting Started</Button>
            <Button className={classes.buttons1} component={Link} to='/upcomingevents'>Upcoming events</Button>
            </div>
        </Paper>
      </Modal>
    </div>
  )
}

export default Helper

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
      <Button position="fixed" className={classes.button} onClick={handleOpen}><BsIcons.BsQuestionCircle className={classes.Icon}  /></Button>
      <Modal open={open} onClose={handleClose}>
        <Paper className={classes.paper}>
            <div className={classes.placeButtons}>
            <Button className={classes.buttons1} component={Link} to='/usingapp'>How do I use this app?</Button>
            
            <Button className={classes.buttons1} component={Link} to='/gettingstarted'>Getting Started</Button>
            <Button className={classes.buttons1} component={Link} to='/upcomingevents'>Upcoming events</Button>
            </div>
        </Paper>
      </Modal>
    </div>
  )
}

export default Helper

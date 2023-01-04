import React, { useState } from 'react';
import useStyles from './styles';
import { Typography, Button, Paper, TextField, Container, Snackbar } from '@material-ui/core';
import { createContact } from '../../actions/contact';

import {Alert} from '@mui/material';
function ContactUs() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [open, setOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataContact = new FormData();
    formDataContact.append("Name", name);
    formDataContact.append("Message", message);

    formDataContact.append("Subject", subject);
    formDataContact.append("Email", email);

    formDataContact.append("PhoneNumber", phoneNumber);

    axios({method: 'post', url: 'https://usurp.live/contact', data: formDataContact}).then(res => {
    setOpen(true);
    console.log(res);
    
  })
  .catch(function (err) {
      console.error(err);
  })
  };

  return (
    <div>
      <Container maxWidth='lg'>
        <Paper className={classes.paper}>
          <Typography className={classes.heading}>Contact Us or Share Feedback</Typography>
          <TextField className={classes.Field} InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ marginBottom: '1vh' }} label="Name" fullWidth onChange={(e) => setName(e.target.value)} />
          <TextField className={classes.Field} InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ marginBottom: '1vh' }} label="Email" fullWidth onChange={(e) => setEmail(e.target.value)} />
          <TextField className={classes.Field} InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ marginBottom: '1vh' }} label="Phone Number" fullWidth onChange={(e) => setPhoneNumber(e.target.value)} />
          <TextField className={classes.Field} InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ marginBottom: '1vh' }} label="Subject" fullWidth onChange={(e) => setSubject(e.target.value)} />
          <TextField className={classes.Field} InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ marginBottom: '1vh' }} label="Message/Feedback" fullWidth rows={5} multiline onChange={(e) => setMessage(e.target.value)} />
          <Button onClick={handleSubmit} className={classes.button}>Contact Us!</Button>
          <Snackbar
                        open={open}
                        onClose={() => { setOpen(false) }}
                        message="Your request/feedback is sent"
                        key={"center bottom"}
                        autoHideDuration={5000}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    >
                        <Alert onClose={() => { setOpen(false) }} severity="success" sx={{ width: '100%' }}> Your request/feedback is sent</Alert>
                        </Snackbar>

        </Paper>
      </Container>
    </div>
  )
}

export default ContactUs

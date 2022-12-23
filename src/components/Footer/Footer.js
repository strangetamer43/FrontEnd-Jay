import React from 'react'
import useStyles from "./style";
import {FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {Button, Typography} from '@material-ui/core';
const Footer = () => {
    const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div>
        <Button>Terms of Service</Button>
        <Button>Privacy Policy</Button>
      </div>
      <div>
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn/>
      </div>
      <Typography>Made in India with  </Typography>
    </div>
  )
}

export default Footer;

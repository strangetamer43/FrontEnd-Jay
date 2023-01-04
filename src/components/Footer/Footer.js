import React from 'react'
import useStyles from "./style";
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Button, Typography } from '@material-ui/core';
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.section}>
      <div className={classes.list}>
        <Typography className={classes.text} >Policies</Typography>
        <a href='https://usurp.tech/termsofservice' className={classes.links}>Terms of Service</a>
        <a href='https://usurp.tech/privacypolicy' className={classes.links}>Privacy Policy</a>
        <a href='https://usurp.tech/contactus' className={classes.links}>Contact Us</a>
      </div>
      <div className={classes.list}>
        <Typography className={classes.text} >Useful Links</Typography>
        <a href= 'https://usurp.tech/gettingstarted' className={classes.links} >Getting Started with Usurp</a>
        <a href= 'https://usurp.tech/usingapp' className={classes.links}>How to use the platform</a>
      </div>
      
      
      <div>
      <Typography className={classes.text} >Social Media Accounts of Usurp...</Typography>
        <label htmlFor='Twitter'>
        <a href='https://twitter.com/usurptech' className={classes.icons}>
        <FaTwitter style={{color: '#25b8ef', cursor: 'pointer'}} size={30}/>
        </a>
        </label>
        <a href='https://www.instagram.com/_usurp/' className={classes.icons}>
        <FaInstagram style={{color: '#25b8ef', cursor: 'pointer'}} size={30}/>
        </a>
        <a href='https://www.linkedin.com/company/usurp-tech/' className={classes.icons}>
        <FaLinkedinIn style={{color: '#25b8ef', cursor: 'pointer'}} size={30}/>
        </a>
      </div>
      </div>
      <div className={classes.miniText}>
        <Typography>Made in India with &#128153; </Typography>
      </div>
    </div>
  )
}

export default Footer;

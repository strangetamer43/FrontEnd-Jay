import React, { useState, useEffect } from 'react';
import "./Header.css";

import * as BiIcons from "react-icons/bi";
import usurpLogo from "./Assets/Asset 1.png";
import { Button, Avatar, Typography } from '@material-ui/core';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import PointsForHeader from './components/Profile/PointsForHeader';

import Sidebar from './components/Sidebar/Sidebar';

import useStyles from './Navbarstyles';





const Header = () => {
   
    
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
      dispatch({ type: 'LOGOUT'});
      navigate('/');
      setUser(null);
  }
      
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;
        if(token) {
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    
    return (
        
        <div className={classes.header}>
            <Sidebar />
            <img style={{ marginLeft: '10vw', width: '2.5vw', height: '2.75vw', }}
                class_name={classes.headerLogo}
                src={ usurpLogo }
                alt="usurp-logo"
            />
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <PointsForHeader/>
                        <typography className={classes.userName} style={{color:"#e2e2de"}} >{user?.result?.name || user.user.name}</typography>
                        <Button component={Link} to='/profile'>
                        <Avatar className={classes.purple} alt={user?.result?.name || user.user.name} src={user?.result?.imageUrl || user.user.imageUrl}></Avatar>
                        </Button>
                        
                        
                    </div>
                ) : (
                    <Button className={classes.button}  fontSize='large' component={Link} to='/'><BiIcons.BiLogIn/>&nbsp;Log In</Button>
                )}
            </Toolbar>
            
        </div>
        
        
    )
               
}

export default Header;
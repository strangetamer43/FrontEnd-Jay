import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid, Card, ListItemAvatar, Button, ListItem, List, Paper, Divider } from '@material-ui/core';
import { getUserProfile } from '../../actions/profile';
import useStyles from "./styles";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Edit from "@material-ui/icons/Edit"
import { Modal } from '@material-ui/core';
import FormPintro from '../Form/FormPintro';

function IntroductionAndGoalsView({ currentId, setCurrentId, profile }) {
    const classes = useStyles();


    return (
        <Paper className={classes.IntroPaper} elevation={7}>



            <typography className={classes.IntroHead} > Introduction and Goals of {profile?.name}</typography>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                <typography className={classes.smallDetails}>Introduction: {profile?.introduction}</typography>

                <typography className={classes.smallDetails}>Goals: {profile?.goals}</typography>
            </div>



        </Paper >
    )
}

export default IntroductionAndGoalsView;
import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid, Card, ListItemAvatar, Button, ListItem, List, Paper, Divider } from '@material-ui/core';
import { getUserProfile } from '../../actions/profile';
import useStyles from "./styles";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Marginer } from "../Auth/Marginer";
import Edit from "@material-ui/icons/Edit"
import FormPEdu from '../Form/FormPEdu';
import { Modal } from '@material-ui/core';


function EducationalDetailsView({ currentId, setCurrentId, profile }) {
    const classes = useStyles();


    return (
        <Paper className={classes.IntroPaper} elevation={7}>

            <div className={classes.Details}>
                <typography variant="h6" className={classes.IntroHead} gutterBottom >
                    Educational Qualifications
                </typography>


                <typography className={classes.smallDetails} >
                    Graduate/Post Graduate: {profile?.education}
                </typography>
                <typography className={classes.smallDetails}>
                    Senior Secondary Education: {profile?.education1}
                </typography>
                <typography className={classes.smallDetails}>
                    Secondary Education: {profile?.education2}
                </typography>
            </div>



        </Paper>
    )
}

export default EducationalDetailsView;
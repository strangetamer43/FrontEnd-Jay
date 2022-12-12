import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid, Card, ListItemAvatar, Button, ListItem, List, Paper, Divider } from '@material-ui/core';
import { getUserProfile } from '../../actions/profile';
import useStyles from "./styles";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Marginer } from "../Auth/Marginer";
import Edit from "@material-ui/icons/Edit"
import FormPCer from '../Form/FormPCer';
import { Modal } from '@material-ui/core';

function CertificationsView({ currentId, setCurrentId, profile }) {
    const classes = useStyles();

    return (
        <Paper className={classes.IntroPaper} elevation={7}>

            <div className={classes.title}>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <typography variant="h6" className={classes.IntroHead} gutterBottom >
                        Certifications or courses
                    </typography>


                    <typography className={classes.smallDetails} >
                        {profile?.certifications?.map((certifications) => <typography> {certifications}</typography>)}
                    </typography>

                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <typography variant="h6" className={classes.IntroHead1} gutterBottom >
                        Certification URL's
                    </typography>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        {profile?.certificationURL?.map((certificationURL) => <Link to={{ pathname: certificationURL }} target="_blank"> {certificationURL}</Link>)}
                    </div>
                </div>
            </div>

        </Paper >
    )
}

export default CertificationsView

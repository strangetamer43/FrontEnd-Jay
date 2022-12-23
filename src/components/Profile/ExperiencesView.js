import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid, Card, ListItemAvatar, Button, ListItem, List, Paper, Divider } from '@material-ui/core';
import { getUserProfile } from '../../actions/profile';
import useStyles from "./styles";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Marginer } from "../Auth/Marginer";
import Edit from "@material-ui/icons/Edit"
import FormPAddExp from '../Form/FormPAddExp';
import FormPRemExp from '../Form/FormPRemExp';
import { Modal } from '@material-ui/core';
import Add from "@material-ui/icons/Add"

const ExperiencesView = ({ currentId, setCurrentId, profile }) => {
    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const dispatch = useDispatch();





    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <Paper className={classes.IntroPaper} elevation={7}>

            <div className={classes.Details}>
                <typography variant="h6" className={classes.IntroHead} gutterBottom >
                    Experiences
                </typography>


                {profile?.experiences?.map((exp, i) => (
                    <>
                        <typography className={classes.smallDetails}>
                            <h6>{exp.title}  |  {exp.company}</h6>
                        </typography>
                        <typography className={classes.smallDetails}>
                            {exp.current ? exp.start + " - Current" : exp.start + " - " + exp.end}&nbsp;
                        </typography>
                        <typography className={classes.smallDetails}>
                            {exp.emptype}
                        </typography>
                        <hr style={{ "color": "white" }}></hr>
                    </>
                ))}
            </div>
        </Paper >
    )
}

export default ExperiencesView;
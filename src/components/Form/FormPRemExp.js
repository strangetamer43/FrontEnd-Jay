import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper, Container, Checkbox } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { createProfile, updateProfile } from "../../actions/profile";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { Grid } from "@material-ui/core"
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/CloseOutlined"
const FormPRemExp = ({ currentId, setCurrentId, handleClose, profile }) => {
    const [profileData, setProfileData] = useState(profile?.data);
    const user = JSON.parse(localStorage.getItem('profile'));
    const [experience, setExperience] = useState(profile?.data?.experiences)

    const profileName = user?.result?.name;
    const email = user?.result?.email;

    console.log(currentId)
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        handleClose()

        const temp = profileData
        temp.experiences = experience

        setProfileData(temp)

        if (profile) {
            dispatch(updateProfile(profile?.data?._id, { ...profileData, name: user?.result?.name, avatarUrl: user.result?.imageUrl }));

        } else {
            dispatch(createProfile({ ...profileData, name: user?.result?.name, avatarUrl: user?.result?.imageUrl }, navigate));
            window.open("/profile", "_self")


        }


    }

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant='h5' align='center'>
                    Please Login to update your profile
                </Typography>
            </Paper>
        );
    }


    const removeExp = (i) => {
        const temp = [...experience]
        temp.splice(i, 1);
        setExperience(temp)

    }

    return (
        <Container >
            <Paper className={classes.paper}>
                {/* <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> */}
                <typography className={classes.formTitle} >Experiences </typography>

                <div style={{ "margin": "10px" }}>
                    {experience?.map((exp, i) => (
                        <>
                            <div key={i} style={{ display: 'flex', flexDirection: 'row', marginLeft: '-12.5px', justifyContent: 'space-between', paddingTop: '5px', paddingBottom: '5px', width: "80%", textAlign: "center", margin: "auto" }}>

                                <typography className={classes.smallDetails} style={{ color: '#25b8ef', marginLeft: '1vh' }}>
                                    <h6>{exp.title} | {exp.company} | {exp.emptype} | {exp.current ? exp.start + " - Current" : exp.start + " - " + exp.end}</h6>
                                </typography>
                                <CloseIcon className={classes.editButton} onClick={() => {
                                    removeExp(i)
                                }} />

                            </div>
                        </>
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '10px' }}>
                    <button className={classes.ButtonS} onClick={handleSubmit} type="submit" >Submit</button>
                    <button className={classes.ButtonC} onClick={handleClose} >Cancel</button>
                </div>

            </Paper>
        </Container >
    );
}

export default FormPRemExp;
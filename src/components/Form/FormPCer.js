import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper, Container } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { createProfile, updateProfile } from "../../actions/profile";

const FormPCer = ({ currentId, setCurrentId, handleClose, profile }) => {
    const [profileData, setProfileData] = useState(profile);
    const user = JSON.parse(localStorage.getItem('profile'));

    const profileName = user?.result?.name;
    const email = user?.result?.email;

    console.log(currentId)
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("heo")
        handleClose()
        setProfileData({ ...profileData, name: e.target.profileName })
        if (profile) {
            dispatch(updateProfile(profile._id, { ...profileData, name: user?.result?.name, avatarUrl: user.result?.imageUrl }));

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


    return (
        <Container>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <typography className={classes.formTitle} >{currentId ? 'Edit' : 'Update'} Profile</typography>
                    <TextField name="certifications" label="Certifications (if any) (Use commas for multiple)" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth value={profileData.certifications} onChange={(e) => setProfileData({ ...profileData, certifications: e.target.value.split(',') })} />
                    <TextField name="certificationURL" label="Certification Link (if any) (Use commas for multiple)" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth value={profileData.certificationURL} onChange={(e) => setProfileData({ ...profileData, certificationURL: e.target.value.split(',') })} />
                </form>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '10px' }}>
                    <button className={classes.ButtonS} onClick={handleSubmit} type="submit" >Submit</button>
                    <button className={classes.ButtonC} onClick={handleClose} >Cancel</button>
                </div>

            </Paper>
        </Container>
    );
}

export default FormPCer;

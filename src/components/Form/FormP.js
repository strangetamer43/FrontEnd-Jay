import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper, Container } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { createProfile, updateProfile } from "../../actions/profile";

const FormP = ({ currentId, setCurrentId }) => {
    const [profileData, setProfileData] = useState({name: '', number: '', introduction:'', education:'', education1:'', education2:'', certifications:'', avatarUrl:'', certificationURL:'', goals:''});
    const profile = useSelector((state) => currentId ? state.profiles.profiles.find((p) => p._id === currentId) : null);
    const user = JSON.parse(localStorage.getItem('profile'));
    
    const profileName = user?.result?.name;
    const email = user?.result?.email;
    
    
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if(profile) setProfileData(profile);
    }, [profile])
    const handleSubmit = (e) => {
        e.preventDefault();
        setProfileData({ ...profileData, name: e.target.profileName })
        

        
        if(currentId) {
            dispatch(updateProfile(currentId, { ...profileData, name: user?.result?.name, avatarUrl: user.result?.imageUrl }));
        } else {
            dispatch(createProfile({ ...profileData, name: user?.result?.name, avatarUrl: user?.result?.imageUrl }, navigate));
        }
        clear();
        
    }
    const clear = () => {
        setCurrentId(null);
        setProfileData({introduction:'', education:'', education1:'', education2:'', certifications:'', certificationURL:'', goals:''});

    }
    if(!user?.result?.name) {
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
                <Typography variant="h6">{currentId ? 'Edit' : 'Update' } Profile</Typography>
               
                <TextField name="introduction" variant="outlined" label="Introduction(Tell us about yourself)" fullWidth value={profileData.introduction} onChange={(e) => setProfileData({ ...profileData, introduction: e.target.value })} />     
                <TextField name="education" variant="outlined" label="Recent Educational Qualifications" fullWidth rows={5} multiline value={profileData.education} onChange={(e) => setProfileData({ ...profileData, education: e.target.value })} />
                <TextField name="education1" variant="outlined" label="Senior Secondary Education" fullWidth rows={2} multiline value={profileData.education1} onChange={(e) => setProfileData({ ...profileData, education1: e.target.value })} />  
                <TextField name="education2" variant="outlined" label="Secondary Education" fullWidth rows={2} multiline value={profileData.education2} onChange={(e) => setProfileData({ ...profileData, education2: e.target.value })} />    
                <TextField name="certifications" variant="outlined" label="Certifications(if any)(Use commas for multiple)" fullWidth value={profileData.certifications} onChange={(e) => setProfileData({ ...profileData, certifications: e.target.value.split(',') })} /> 
                <TextField name="certificationURL" variant="outlined" label="Certification Link (if any)(Use commas for multiple)" fullWidth value={profileData.certificationURL} onChange={(e) => setProfileData({ ...profileData, certificationURL: e.target.value.split(',') })} />   
                <TextField name="goals" variant="outlined" label="Your Goals" fullWidth rows={2} multiline value={profileData.goals} onChange={(e) => setProfileData({ ...profileData, goals: e.target.value })} /> 
                <TextField name="number" variant="outlined" label="Your Phone Number(if logged in using google account)" fullWidth value={profileData.number} onChange={(e) => setProfileData({ ...profileData, number: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>

        </Paper>
        </Container>
    );
}

export default FormP;
import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper, Container } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { createProfile, updateProfile } from "../../actions/profile";

const FormP = ({ currentId, setCurrentId }) => {
    const [profileData, setProfileData] = useState({ name: '', number: '', introduction: '', education: '', education1: '', education2: '', certifications: '', avatarUrl: '', certificationURL: '', goals: '' });
    const profile = useSelector((state) => currentId ? state.profiles.profiles.find((p) => p._id === currentId) : null);
    const user = JSON.parse(localStorage.getItem('profile'));

    const profileName = user?.result?.name;
    const email = user?.result?.email;


    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (profile) setProfileData(profile);
    }, [profile])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("heo")
        setProfileData({ ...profileData, name: e.target.profileName })



        if (currentId) {
            dispatch(updateProfile(currentId, { ...profileData, name: user?.result?.name, avatarUrl: user.result?.imageUrl }));
        } else {
            dispatch(createProfile({ ...profileData, name: user?.result?.name, avatarUrl: user?.result?.imageUrl }, navigate));
        }
        clear();

    }
    const clear = () => {
        setCurrentId(null);
        setProfileData({ introduction: '', education: '', education1: '', education2: '', certifications: '', certificationURL: '', goals: '' });

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

                    <TextField name="introduction" label="Introduction(Tell us about yourself)" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth value={profileData.introduction} onChange={(e) => setProfileData({ ...profileData, introduction: e.target.value })} />
                    <TextField name="education" label="Recent Educational Qualifications" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth rows={5} multiline value={profileData.education} onChange={(e) => setProfileData({ ...profileData, education: e.target.value })} />
                    <TextField name="education1" label="Senior Secondary Education" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth rows={2} multiline value={profileData.education1} onChange={(e) => setProfileData({ ...profileData, education1: e.target.value })} />
                    <TextField name="education2" label="Secondary Education" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth rows={2} multiline value={profileData.education2} onChange={(e) => setProfileData({ ...profileData, education2: e.target.value })} />
                    <TextField name="certifications" label="Certifications (if any) (Use commas for multiple)" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth value={profileData.certifications} onChange={(e) => setProfileData({ ...profileData, certifications: e.target.value.split(',') })} />
                    <TextField name="certificationURL" label="Certification Link (if any) (Use commas for multiple)" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth value={profileData.certificationURL} onChange={(e) => setProfileData({ ...profileData, certificationURL: e.target.value.split(',') })} />
                    <TextField name="goals" label="Your Goals" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth rows={2} multiline value={profileData.goals} onChange={(e) => setProfileData({ ...profileData, goals: e.target.value })} />
                    <TextField name="number" label="Your Phone Number(if logged in using google account)" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth value={profileData.number} onChange={(e) => setProfileData({ ...profileData, number: e.target.value })} />

                </form>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '10px' }}>
                    <button className={classes.ButtonS} onClick={handleSubmit} type="submit" >Submit</button>
                    <button className={classes.ButtonC} onClick={clear} >Clear</button>
                </div>

            </Paper>
        </Container>
    );
}

export default FormP;
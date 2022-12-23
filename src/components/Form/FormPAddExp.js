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

const FormPAddExp = ({ currentId, setCurrentId, handleClose, profile }) => {
    const [profileData, setProfileData] = useState(profile?.data);
    const user = JSON.parse(localStorage.getItem('profile'));
    const [startDate, setStartDate] = React.useState(
        new Date("2014-08-18T21:11:54")
    );
    const [endDate, setEndDate] = React.useState(
        new Date("2014-08-18T21:11:54")
    );


    const profileName = user?.result?.name;
    const email = user?.result?.email;

    
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [experience, setExperience] = useState({
        title: "",
        emptype: "",
        company: "",
        start: "Aug 2014",
        end: "Aug 2014",
        current: false
    })
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // const manageTime = async (e) => {
    //     const temp = months[startDate.getMonth()] + " " + startDate.getFullYear()
    //     setExperience({ ...experience, start: temp })
    //     if (!experience.current) {
    //         const temp = months[endDate.getMonth()] + " " + endDate.getFullYear()
    //         setExperience({ ...experience, end: temp })
    //     }
    //     handleSubmit(e)
    // }
    console.log(experience);
    const handleSubmit = async (e) => {

        e.preventDefault();
        
        handleClose()
        const tempData = profileData?.experiences?.push(experience)
        
        setProfileData({ ...profileData, experiences: tempData })
        console.log(tempData);
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
    const handleTypeChange = (e) => {
        setExperience({ ...experience, emptype: e.target.value })
    }

    const handleStartDateChange = (date) => {
        const temp = months[date.getMonth()] + " " + date.getFullYear()
        setExperience({ ...experience, start: temp })
        setStartDate(date);

    }

    const handleEndDateChange = (date) => {
        const temp = months[date.getMonth()] + " " + date.getFullYear()
        setExperience({ ...experience, end: temp })
        setEndDate(date)

    }

    return (
        <Container >
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <typography className={classes.formTitle} >Previous Experience</typography>

                    <TextField value={experience?.data?.title} name="title" label="Title" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth onChange={(e) => setExperience({ ...experience, title: e.target.value })} />
                    &nbsp;
                    <TextField value={experience?.data?.company} name="company" label="Company" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth onChange={(e) => setExperience({ ...experience, company: e.target.value })} />
                    &nbsp;
                    <FormControl sx={{ m: 1, minWidth: 120 }} style={{ "margin": "10px" }}>

                        <InputLabel id="demo-simple-select-helper-label" style={{ color: '#25b8ef', marginLeft: '1vh' }}>Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={experience?.data?.emptype}
                            label="Type"
                            onChange={handleTypeChange}
                            style={{ color: '#25b8ef', marginLeft: '1vh' }}


                        >

                            <MenuItem value="Full Time" style={{ color: '#000000', marginLeft: '1vh' }}>Full Time</MenuItem>
                            <MenuItem value="Part Time" style={{ color: '#25b8ef', marginLeft: '1vh' }}>Part Time</MenuItem>
                            <MenuItem value="FreeLancer" style={{ color: '#25b8ef', marginLeft: '1vh' }}>FreeLancer</MenuItem>
                        </Select>
                        <FormHelperText style={{ color: '#25b8ef', marginLeft: '1vh' }}>Select Type of Employement</FormHelperText>
                    </FormControl>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '10px' }}>

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <DatePicker
                                    InputLabelProps={{ style: { color: '#25b8ef', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { color: 'rgba(37, 184, 239, 1)', marginLeft: '1vh', marginRight: '1vh' } }}
                                    variant="inline"
                                    openTo="year"
                                    views={["year", "month"]}
                                    label="Start"
                                    helperText="Year & Month"
                                    value={startDate}
                                    onChange={handleStartDateChange}
                                    style={{ "margin": "10px" }}
                                    FormHelperTextProps={{ style: { color: '#25b8ef', marginLeft: '1vh' } }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <DatePicker
                                    InputLabelProps={{ style: { color: '#25b8ef', marginLeft: '1vh' } }}
                                    InputProps={{ disableUnderline: true, style: { color: 'rgba(37, 184, 239, 1)', marginLeft: '1vh', marginRight: '1vh' } }}
                                    FormHelperTextProps={{ style: { color: '#25b8ef', marginLeft: '1vh' } }}

                                    variant="inline"
                                    openTo="year"
                                    views={["year", "month"]}
                                    label="End"
                                    helperText="Year & Month"
                                    value={endDate}
                                    onChange={handleEndDateChange}
                                    style={{ "margin": "10px" }}
                                    disabled={experience?.data?.current}

                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </div>
                    <div style={{ color: '#25b8ef', fontFamily: 'Montserrat, sans-serif' }}>
                        <Checkbox
                            checked={experience.current}
                            onChange={() => {
                                setExperience({ ...experience, current: !experience.current })
                            }}
                        />
                        Current
                    </div>
                </form>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '10px' }}>
                    <button className={classes.ButtonS} onClick={handleSubmit} type="submit" >Submit</button>
                    <button className={classes.ButtonC} onClick={handleClose} >Cancel</button>
                </div>

            </Paper>
        </Container >
    );
}

export default FormPAddExp;
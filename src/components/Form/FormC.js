import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper, Container } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { createContest, updateContest } from "../../actions/contests";

const FormC = ({ currentId, setCurrentId }) => {
    const [contestData, setContestData] = useState({ title: '', message: '', tags: '', selectedFile: '', prizes: '', fromDate: '', toDate: '' });
    const contest = useSelector((state) => currentId ? state.contests.contests.find((p) => p._id === currentId) : null);
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (contest) setContestData(contest);
    }, [contest])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updateContest(currentId, { ...contestData, name: user?.result?.name }));
        } else {
            dispatch(createContest({ ...contestData, name: user?.result?.name }, navigate));
        }
        clear();

    }
    const clear = () => {

        setContestData({ title: '', message: '', tags: '', selectedFile: '', prizes: '', fromDate: '', toDate: '' });

    }
    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant='h5' align='center'>
                    Please Login to post a Contest!
                </Typography>
            </Paper>
        );
    }

    return (
        <Container>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography className={classes.formTitle} variant="h6">{currentId ? 'Edit' : 'Create'} a Contest</Typography>

                    <TextField name="title" label="Contest Name" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '10px', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth value={contestData.title} onChange={(e) => setContestData({ ...contestData, title: e.target.value })} />
                    <TextField name="message" label="Details" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth rows={5} multiline value={contestData.message} onChange={(e) => setContestData({ ...contestData, message: e.target.value })} />
                    <TextField name="tags" label="Skills required" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth value={contestData.tags} onChange={(e) => setContestData({ ...contestData, tags: e.target.value.split(',') })} />
                    <TextField name="prizes" label="Prizes offered" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth value={contestData.prizes} onChange={(e) => setContestData({ ...contestData, prizes: e.target.value })} />
                    <TextField name="startDate" label="Date the event Starts" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth value={contestData.fromDate} onChange={(e) => setContestData({ ...contestData, fromDate: e.target.value })} />
                    <TextField name="endDate" label="Last day of the event" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ borderRadius: '15px', border: '1px solid #25b8ef' }} fullWidth value={contestData.toDate} onChange={(e) => setContestData({ ...contestData, toDate: e.target.value })} />
                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setContestData({ ...contestData, selectedFile: base64 })}
                        />
                    </div>
                </form>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

                    <button className={classes.ButtonS} onClick={handleSubmit} >Submit</button>
                    <button className={classes.ButtonC} onClick={clear} >Clear</button>
                </div>

            </Paper>
        </Container>
    );
}

export default FormC;
import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper, Container } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { createContest, updateContest } from "../../actions/contests";

const FormC = ({ currentId, setCurrentId }) => {
    const [contestData, setContestData] = useState({title:'', message:'', tags:'', selectedFile:'', prizes:'', fromDate:'', toDate:''});
    const contest = useSelector((state) => currentId ? state.contests.contests.find((p) => p._id === currentId) : null);
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if(contest) setContestData(contest);
    }, [contest])
    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId) {
            dispatch(updateContest(currentId, { ...contestData, name: user?.result?.name }));
        } else {
            dispatch(createContest({ ...contestData, name: user?.result?.name }, navigate));
        }
        clear();
        
    }
    const clear = () => {
        
        setContestData({title:'', message:'', tags:'', selectedFile:'', prizes:'', fromDate: '', toDate:''});

    }
    if(!user?.result?.name) {
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
                <Typography variant="h6">{currentId ? 'Edit' : 'Create' } a Question</Typography>
               
                <TextField name="title" variant="outlined" label="Contest Name" fullWidth value={contestData.title} onChange={(e) => setContestData({ ...contestData, title: e.target.value })} />     
                <TextField name="message" variant="outlined" label="Details" fullWidth rows={5} multiline value={contestData.message} onChange={(e) => setContestData({ ...contestData, message: e.target.value })} />     
                <TextField name="tags" variant="outlined" label="Skills required" fullWidth value={contestData.tags} onChange={(e) => setContestData({ ...contestData, tags: e.target.value.split(',') })} />
                <TextField name="prizes" variant="outlined" label="Prizes offered" fullWidth value={contestData.prizes} onChange={(e) => setContestData({ ...contestData, prizes: e.target.value })} />
                <TextField name="startDate" variant="outlined" label="Date the event Starts" fullWidth value={contestData.fromDate} onChange={(e) => setContestData({ ...contestData, fromDate: e.target.value})} />
                <TextField name="endDate" variant="outlined" label="Last day of the event" fullWidth value={contestData.toDate} onChange={(e) => setContestData({ ...contestData, toDate: e.target.value})} />    
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setContestData({ ...contestData, selectedFile: base64 })} 
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>

        </Paper>
        </Container>
    );
}

export default FormC;
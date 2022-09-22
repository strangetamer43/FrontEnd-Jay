import React, { useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button, Input} from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { createTask } from '../../actions/task';
import useStyles from './styles';
function CreateTask({ currentId, setCurrentId }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [peopleCount, setPeopleCount] = useState("");
    const [field, setField] = useState("");
    const [name, setName] = useState("");
    const [tags, setTags] = useState([]);
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () =>{
        e.preventDefault();
        const formDataT = new FormData();
        formDataT.append("title", title);
        formDataT.append('Description', description);
        formDataT.append('peopleCount', peopleCount);
        formDataT.append('name', name);
        formDataT.append('field', field);
        tags.forEach(tag => {formDataT.append("tags", tag)});

        dispatch(createTask(formDataT, navigate)); 
    }
  return (
    <div>
      <Paper className={classes.paper}>
        <typography className={classes.heading}>Create Task</typography>
      <form>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField  className={classes.field} InputLabelProps={{ style: {color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh'}}} InputProps={{ disableUnderline: true, style: {marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef'}}} style={{marginBottom: '1vh'}} label="Title of the task" fullWidth  onChange={(e) => setTitle(e.target.value )}/>
        <TextField className={classes.field} InputLabelProps={{ style: {color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh'}}} InputProps={{ disableUnderline: true, style: {marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef'}}} style={{marginBottom: '1vh'}}  label="Task Description" fullWidth rows={5} multiline onChange={(e) => setDescription(  e.target.value )} />
        <TextField className={classes.field} InputLabelProps={{ style: {color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh'}}} InputProps={{ disableUnderline: true, style: {marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef'}}} style={{marginBottom: '1vh'}}  label="No.of Poeple" fullWidth  onChange={(e) => setPeopleCount(  e.target.value )} />
        <TextField className={classes.field} InputLabelProps={{ style: {color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh'}}} InputProps={{ disableUnderline: true, style: {marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef'}}} style={{marginBottom: '1vh'}}  label="Field (e.g. Web Development)"  fullWidth  onChange={(e) => setField(  e.target.value )} />
        <TextField className={classes.field} InputLabelProps={{ style: {color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh'}}} InputProps={{ disableUnderline: true, style: {marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef'}}} style={{marginBottom: '1vh'}}  label="Skills (Use Commas for multiple skills)"  fullWidth  onChange={(e) => setTags(  e.target.value )} />
          
        <button className={classes.button} onClick={handleClick}>Submit</button>
        </div>
      </form>
      </Paper>
    </div>
  )
}

export default CreateTask

import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper, Container } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import * as BsIcons from "react-icons/bs";
import { createQuestion, updateQuestion } from "../../actions/questions";

const FormQ = ({ currentId, setCurrentId }) => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [tags, setTags] = useState([]);
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [name, setName] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    const question = useSelector((state) => currentId ? state.questions.questions.find((p) => p._id === currentId) : null);
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if(question) setQuestionData(question);
    }, [question])
    const handleSubmit = (e) => {
        
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("message", message);
        tags.forEach(tag => {formData.append("tags", tag)});
        formData.append("name", name);
        formData.append("image", image);
        formData.append("video", video);
        formData.append("avatarUrl", avatarUrl);
        
        dispatch(createQuestion(formData, navigate)); 
    }
    const handleFilechange = async (e) => {
        setImage(e.target.files[0]);
        setName(user?.result?.name);
        setAvatarUrl(user?.result?.imageUrl);
        
    } 
    const handleFilechange1 = async (e) => {
        
        setVideo(e.target.files[0]);
        setName(user?.result?.name);
        setAvatarUrl(user?.result?.imageUrl);
        
    } 
    const clear = () => {
        
        setTitle("");
        setMessage("");
        setTags("");
        setImage(null);
        setVideo(null);

    }
    if(!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant='h5' align='center'>
                    Please Login to post a question, upvote/downvote, comment on other user's questions!
                </Typography>
            </Paper>
        );
    }
    return (
        <Container>
        <Paper className={classes.paper}>

            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Edit' : 'Create' } a Question</Typography>
               <Button>X</Button>
                <TextField name="title" variant="outlined" label="Title" fullWidth onChange={(e) => setTitle(e.target.value )} />     
                <TextField name="message" variant="outlined" label="Question Body" fullWidth rows={5} multiline onChange={(e) => setMessage(e.target.value )} />     
                <TextField name="tags" variant="outlined" label="Skills" fullWidth onChange={(e) => setTags(e.target.value.split(',') )} />    
                <div className={classes.fileInput}>
                    <label htmlFor="image">
                    <BsIcons.BsFillCameraFill style={{color: '#022658', cursor: 'pointer'}} size={30}/>
                    <input type='file' onChange={handleFilechange} name="file" accept="image/*"  id="image" hidden />
                    <Typography style={{ fontSize: '10px'}}>{image?.name}</Typography>
                    </label>
                    <Typography style={{ marginLeft: '75px', fontSize: '13px' }}>Or</Typography>
                    <label htmlFor="video">
                    <BsIcons.BsFillCameraVideoFill style={{color: '#022658', cursor: 'pointer', marginLeft: '75px',}} size={30}/>
                    <input type='file' onChange={handleFilechange1} name="file" accept="video/*"  id="video" hidden />
                    <Typography style={{ fontSize: '10px', marginLeft: '75px'}}>{video?.name}</Typography>
                    </label>
                    
                    
                </div>
                <div style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-between' }}>                
                <Button style={{ marginLeft: '-100px'}}className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" onClick={handleSubmit} fullWidth>Submit</Button>
                
                </div>

            </form>

        </Paper>
        </Container>
    );
}

export default FormQ;
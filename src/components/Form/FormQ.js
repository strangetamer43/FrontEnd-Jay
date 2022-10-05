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
        if (question) setQuestionData(question);
    }, [question])
    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("message", message);
        tags.forEach(tag => { formData.append("tags", tag) });
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
    if (!user?.result?.name) {
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
                    <Typography className={classes.formTitle} variant="h6">{currentId ? 'Edit' : 'Create'} a Question</Typography>

                    <TextField className={classes.Field} name="title" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ marginBottom: '1vh' }} label="Title" fullWidth onChange={(e) => setTitle(e.target.value)} />
                    <TextField className={classes.Field} name="message" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ marginBottom: '1vh' }} label="Question Body" fullWidth rows={5} multiline onChange={(e) => setMessage(e.target.value)} />
                    <TextField className={classes.Field} name="tags" InputLabelProps={{ style: { color: '#25b8ef', fontFamily: 'Montserrat, sans-serif', marginTop: '-0.05vh', marginLeft: '1vh' } }} InputProps={{ disableUnderline: true, style: { marginLeft: '1vh', marginRight: '1vh', color: '#25b8ef' } }} style={{ marginBottom: '1vh' }} label="Skills" fullWidth onChange={(e) => setTags(e.target.value.split(','))} />
                    <div className={classes.fileInput}>
                        <label htmlFor="image">
                            <BsIcons.BsFillCameraFill style={{ color: '#25b8ef', cursor: 'pointer' }} size={30} />
                            <input type='file' onChange={handleFilechange} name="file" accept="image/*" id="image" hidden />
                            <Typography style={{ fontSize: '10px', color: '#c935ff' }}>{image?.name}</Typography>
                        </label>
                        <Typography style={{ color: '#c935ff', marginLeft: '75px', fontSize: '13px' }}>Or</Typography>
                        <label htmlFor="video">
                            <BsIcons.BsFillCameraVideoFill style={{ color: '#25b8ef', cursor: 'pointer', marginLeft: '75px', }} size={30} />
                            <input type='file' onChange={handleFilechange1} name="file" accept="video/*" id="video" hidden />
                            <Typography style={{ fontSize: '10px', marginLeft: '75px', color: '#c935ff' }}>{video?.name}</Typography>
                        </label>


                    </div>
                </form>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: '-15vw', marginTop: '3vh' }}>
                    <button className={classes.ButtonS} onClick={handleSubmit}>Submit</button>
                    <button className={classes.ButtonC} onClick={clear} >Clear</button>
                </div>


            </Paper>
        </Container>
    );
}

export default FormQ;
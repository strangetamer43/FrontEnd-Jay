import React, { useEffect, useState } from 'react'
import { getQuizByUser, getQuizBySearchForUser } from "../../APIServices/QuestionAPI"
import { Grid, CircularProgress, Container, Typography, FormGroup } from "@material-ui/core";

import useStyle from "./Style";
import CssBaseline from '@material-ui/core/CssBaseline';
import MyQuiz from './MyQuiz/MyQuiz';
import NavBar from '../NavBar/NavBar';
import { Dialog, TextField, DialogTitle, DialogContent, DialogActions, DialogContentText, Button, IconButton } from '@material-ui/core';
import { create } from '../../APIServices/QuestionAPI';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import AddCircle from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';


const MyQuizs = () => {
    const classes = useStyle();
    const [quizs, setQuizs] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")).obj ? JSON.parse(localStorage.getItem("profile")).obj : JSON.parse(localStorage.getItem("profile")).result)
    const [searchValue, setSearchValue] = useState("");
    const [instructions, setInstructions] = useState([]);
    const [insvalue, setInsValue] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")).obj ? JSON.parse(localStorage.getItem("profile")).obj : JSON.parse(localStorage.getItem("profile")).result)
        getQuizByUser(user._id)
            .then((data) => {
                setQuizs(data.data)
                setLoading(false);
            }, error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                console.log(resMessage);
            });
    }, [user._id])

    const [open, setOpen] = React.useState(false);

    const [formTitle, setFormTitle] = React.useState("");
    const [formDescription, setFormDescription] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const cancelAddForm = () => {
        handleClose();
        setFormTitle("");
        setFormDescription("");
    }

    const createForm = () => {
        var data = {
            quizName: formTitle,
            description: formDescription,
            createdBy: user._id,
            instructions: instructions
        }
        if (data.name !== "") {
            create(data)
                .then((result) => {
                    console.log(result);
                    navigate("/myChallenges/" + result.data._id);

                },

                    error => {
                        const resMessage =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();
                        console.log(resMessage);
                    }
                );
        }
    }

    const search = (value) => {
        var data = {
            userId: user._id
        }
        getQuizBySearchForUser(value, data)
            .then((data) => {
                setQuizs(data.data)
                setLoading(false);
            },

                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    console.log(resMessage);
                }
            );

    }
    const handleAddInstruction = () => {
        instructions.push(insvalue)
        setInsValue("");
    }
    const removeInstruction = (i) => {
        var temp = [...instructions]
        temp.splice(i, 1);
        setInstructions(temp)
    }



    return (
        <>
            <NavBar current="myQuizs" handleClickOpen={handleClickOpen} search={search} />
            < div >
                <div>
                    <CssBaseline />
                    {isLoading ? (<CircularProgress />) : ""}
                    <Container className={classes.cardGrid} maxWidth="lg">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={searchValue}
                                width="10rem"
                                onChange={(e) => { setSearchValue(e.target.value) }}
                            />
                            <>


                                <Button variant="contained" color="primary" onClick={(e) => { search(searchValue) }}>
                                    Search
                                </Button>
                                &nbsp;
                                <Button variant="contained" color="secondary" href="/myChallenges">
                                    ALL
                                </Button>
                            </>
                        </Form>
                        <div style={{ textAlign: "center", margin: "auto", marginTop: "20px" }}>
                            <Button className="create" onClick={handleClickOpen} startIcon={<AddCircle />}>
                                Create Challenge
                            </Button>
                        </div>

                    </Container>
                    <Container className={classes.cardGrid} maxWidth="lg">
                        <Grid container spacing={6}>
                            {quizs.map((quiz, i) => (
                                <MyQuiz formData={quiz} key={i} />
                            ))}

                        </Grid>
                    </Container>


                </div>
                <div>

                </div>
                <div>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Create Challenge</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Creating  a new challenge, just add challenge name and description.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Challenge Name"
                                type="text"
                                fullWidth={false}
                                value={formTitle}
                                onChange={(e) => { setFormTitle(e.target.value) }}
                            />
                            <br></br>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="description"
                                label="Challenge description"
                                type="text"
                                fullWidth
                                value={formDescription}
                                onChange={(e) => { setFormDescription(e.target.value) }}
                            />
                            <br></br>
                            <br></br>

                            <Typography>Instructions:</Typography>
                            {instructions.map((ins, i) => (
                                <div key={i}>
                                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '-12.5px', justifyContent: 'space-between', paddingTop: '5px', paddingBottom: '5px' }}>
                                        <Typography>--{ins}</Typography>
                                        <IconButton aria-label="delete" onClick={() => { removeInstruction(i) }}>
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                </div>

                            ))}
                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '-12.5px', justifyContent: 'space-between', paddingTop: '5px', paddingBottom: '5px', width: "80%", textAlign: "center", margin: "auto" }}>

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="description"
                                    label="Add Instruction"
                                    type="text"
                                    fullWidth
                                    value={insvalue}
                                    onChange={(e) => { setInsValue(e.target.value) }}
                                />
                                <Button onClick={handleAddInstruction} color="primary" size="small" startIcon={<AddCircle />}>
                                    ADD
                                </Button>
                            </div>


                        </DialogContent>
                        <DialogActions>
                            <Button onClick={cancelAddForm} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={createForm} color="primary">
                                Create
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </>
    )
}

export default MyQuizs
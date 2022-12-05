import React from 'react';
import { Grid } from '@material-ui/core';
import { Paper, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RadioGroup from '@material-ui/core/RadioGroup';
import Divider from '@material-ui/core/Divider';
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, FormControl } from '@material-ui/core';
import { TextField } from '@mui/material';
import { getQuizById } from '../../APIServices/QuestionAPI';
import { uploadVideo } from '../../APIServices/Image';
import { submitResponse } from '../../APIServices/ResponseAPI';
import { submittingQuiz, createResponse } from '../../APIServices/ResponseAPI';
import { useReactMediaRecorder, } from "react-media-recorder";
import "./Style.css"

const CollectResponseAudio = (props) => {

    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem("profile")).obj ? JSON.parse(localStorage.getItem("profile")).obj : JSON.parse(localStorage.getItem("profile")).result)
    const [quizDetails, setQuizDetails] = React.useState();
    const [loading, setLoading] = React.useState(true)
    const [responseData, setResponseData] = React.useState(JSON.parse(localStorage.getItem("response" + props.quizId + user._id)) || [])
    const [noattempts, setNoAttempts] = React.useState(false);
    const [videos, setVideos] = React.useState(JSON.parse(localStorage.getItem("videos")) || [])
    const [currentQuestion, setCurrentQuestion] = React.useState(JSON.parse(localStorage.getItem("currentQuestion" + props.quizId + user._id)) || 0)
    const [isSubmitted, setIsSubmitted] = React.useState(false)
    const [open, setOpen] = React.useState(true)
    const [questions, setQuestions] = React.useState([]);
    const [value, setValue] = React.useState(localStorage.getItem("value" + props.quizId + user._id) || "");
    const [counter, setCounter] = React.useState(JSON.parse(localStorage.getItem("counter" + props.quizId + user._id)) || 1000);
    const [total, setTotal] = React.useState(0);
    const [questionCount, setQuestionCount] = React.useState(JSON.parse(localStorage.getItem("currentQuestion" + props.quizId + user._id)) + 1 || 0);
    const [attribute, setAttribute] = React.useState(JSON.parse(localStorage.getItem("attribute" + props.quizId + user._id)) || "");
    const [aopen, setAopen] = React.useState(JSON.parse(localStorage.getItem("aopen" + props.quizId + user._id)) === false ? false : true);
    const [responseId, setResponseId] = React.useState(localStorage.getItem("responseid" + props.quizId + user._id) || "")







    // Video Recorder 
    const { error, status, startRecording, stopRecording } =
        useReactMediaRecorder({

            audio: true, type: "audio/wav", askPermissionOnMount: true, async onStop(blobstr, blob, data) {

                var file = new File([blob], "sample", { lastModified: new Date().getTime(), type: "audio/wav" })
                console.log(file)
                const formData = new FormData();
                formData.append("file", file)
                formData.append("responseid", responseId)
                formData.append("type", "audio")


                // nextQuestion(true);  

                if (JSON.parse(localStorage.getItem("currentQuestion" + props.quizId + user._id)) >= total) {
                    console.log("inseds")
                    var data = {
                        quizId: quizDetails._id,
                        userId: user._id,
                        response: JSON.parse(localStorage.getItem("response" + props.quizId + user._id)),
                        quizName: quizDetails.quizName,
                        userName: user.name,
                        attribute: attribute,
                        id: responseId
                    }
                    console.log(data);
                    submitResponse(data)
                        .then((data2) => {
                            setIsSubmitted(true);
                            localStorage.removeItem("quizId" + props.quizId + user._id);
                            localStorage.removeItem("currentQuestion" + props.quizId + user._id);
                            localStorage.removeItem("counter" + props.quizId + user._id);
                            localStorage.removeItem("response" + props.quizId + user._id);
                            localStorage.removeItem("value" + props.quizId + user._id);
                            localStorage.removeItem("attribute" + props.quizId + user._id);
                            localStorage.removeItem("aopen" + props.quizId + user._id);
                            localStorage.removeItem("videos" + props.quizId + user._id)
                            localStorage.removeItem("responseid" + props.quizId + user._id)
                            localStorage.setItem("response", JSON.stringify(data2))
                            localStorage.setItem("result", quizDetails.result.show)
                            localStorage.setItem("showscore", quizDetails.showScore)
                            uploadVideo(formData)
                                .then((res) => {
                                    console.log(res);
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

                            window.open("/submitted", "_self");
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
                        )

                } else {
                    uploadVideo(formData)
                        .then((res) => {
                            console.log(res)

                        }, error => {
                            console.log(error)
                        })
                }
            },



        })



    React.useEffect(() => {
        window.addEventListener('beforeunload', async (e) => {
            e.preventDefault();
            stopRecording()
        });

        return () => {
            window.removeEventListener('beforeunload', stopRecording);
            window.addEventListener('unload', stopRecording)
        };
    }, [stopRecording]);



    const handleRadioChange = (j) => {
        var questionId = questions[currentQuestion]._id
        var option = j


        var data = {
            questionId,
            option
        }


        setValue(j)
        // console.log(value)
        var fakeRData = [...responseData];

        var indexOfResponse = fakeRData.findIndex(x => x.questionId === questionId);
        if (indexOfResponse === -1) {
            setResponseData(responseData => [...responseData, data])

        } else {
            fakeRData[indexOfResponse].option = option
            setResponseData(fakeRData);
        }



    };

    const handleTextChange = (j) => {
        var questionId = questions[currentQuestion]._id;
        var option = j

        var data = {
            questionId,
            option
        }
        if (j.trim() === "") {
            setValue("")
        } else {

            setValue(j)
        }

        var fakeData = [...responseData];

        var indexOfResponse = fakeData.findIndex(x => x.questionId === questionId);
        if (indexOfResponse === -1) {
            setResponseData(responseData => [...responseData, data])

        } else {
            fakeData[indexOfResponse].option = option
            setResponseData(fakeData);

        }
    }



    React.useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")).obj ? JSON.parse(localStorage.getItem("profile")).obj : JSON.parse(localStorage.getItem("profile")).result)
        var quizId = props.quizId;
        if (quizId !== undefined) {
            submittingQuiz({ userId: user._id, quizId })
                .then((data) => {

                },
                    error => {
                        setOpen(false);
                        setNoAttempts(true);
                        localStorage.removeItem("quizId" + props.quizId + user._id);
                        localStorage.removeItem("currentQuestion" + props.quizId + user._id);
                        localStorage.removeItem("counter" + props.quizId + user._id);
                        localStorage.removeItem("response" + props.quizId + user._id);
                        localStorage.removeItem("value" + props.quizId + user._id);
                        localStorage.removeItem("attribute" + props.quizId + user._id);
                        localStorage.removeItem("aopen" + props.quizId + user._id);
                        localStorage.removeItem("videos" + props.quizId + user._id)
                        localStorage.removeItem("responseid" + props.quizId + user._id)





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
    }, [props.quizId])



    React.useEffect(() => {
        if (!noattempts && !isSubmitted) {
            localStorage.setItem("quizId" + props.quizId + user._id, props.quizId);
            localStorage.setItem("currentQuestion" + props.quizId + user._id, currentQuestion);
            localStorage.setItem("counter" + props.quizId + user._id, counter);
            localStorage.setItem("response" + props.quizId + user._id, JSON.stringify(responseData));
            localStorage.setItem("value" + props.quizId + user._id, value);
            localStorage.setItem("videos" + props.quizId + user._id, videos)

        }






    }, [user._id, props.quizId, currentQuestion, counter, responseData, noattempts, isSubmitted, value]);


    React.useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")).result);
        var quizId = props.quizId



        if (quizId !== undefined) {
            getQuizById(quizId)
                .then((data) => {
                    setQuizDetails(data.data)
                    setTotal(data.data.questions.length);
                    setQuestions(data.data.questions)
                    setLoading(false);
                    if (data.data.timer === "cumulative") {
                        setCounter(counter < data.data.duration.minutes * 60 + data.data.duration.seconds ? counter : data.data.duration.minutes * 60 + data.data.duration.seconds)
                    } else {

                        setCounter(counter < (data.data.questions[currentQuestion].duration.minutes * 60 + data.data.questions[currentQuestion].duration.seconds) ? counter : data.data.questions[currentQuestion].duration.minutes * 60 + data.data.questions[currentQuestion].duration.seconds)
                    }
                    if (responseId === "") {
                        createResponse()
                            .then((data) => {
                                console.log(data)
                                setResponseId(data.data._id)
                                localStorage.setItem("responseid" + props.quizId + user._id, data.data._id)
                            })

                    }
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

    }, [props.quizId, currentQuestion]);

    React.useEffect(() => {
        if (!open && !noattempts) {
            //timer for quiz - when timer reach 0 end screen appear
            const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

            if (counter === 0) {
                if (quizDetails.timer === "cumulative") {
                    nextQuestion(true)
                } else {

                    nextQuestion();
                }
            }

            return () => clearInterval(timer);
        }

    }, [counter, open, noattempts])



    const nextQuestion = async (flag) => {
        if (questionCount === total || flag) {
            setCurrentQuestion(currentQuestion + 1);
            setLoading(true);
            stopRecording()
        } else {
            setCurrentQuestion(currentQuestion + 1);
            setQuestionCount(questionCount + 1);
            console.log(questionCount);
            if (quizDetails.timer === "individual") {
                setCounter(quizDetails.questions[currentQuestion + 1].duration.minutes * 60 + quizDetails.questions[currentQuestion + 1].duration.seconds)

            }
            setValue("");
        }
    };





    return (
        <>
            {loading ? (<CircularProgress />) : (
                <div style={{ minHeight: '100vh' }}>
                    <div>
                        <AppBar position="static" style={{ backgroundColor: 'teal' }}>
                            <Toolbar>
                                <IconButton edge="start" style={{ marginRight: '10px', marginBottom: '5px' }} color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" style={{}}>
                                    Usurp
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <br></br>

                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={10} sm={8} md={6} style={{ width: '100%' }}>
                                <Grid style={{ borderTop: '10px solid teal', borderRadius: 10 }}>
                                    <div>
                                        <div>
                                            <Paper elevation={2} style={{ width: '100%' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '15px', paddingTop: '20px', paddingBottom: '20px' }}>
                                                    <Typography variant="h4" style={{ fontFamily: 'sans-serif Roboto', marginBottom: "15px" }}>
                                                        {quizDetails.quizName}
                                                    </Typography>
                                                    <Typography variant="subtitle1">{quizDetails.description}</Typography>
                                                </div>
                                            </Paper>
                                        </div>
                                    </div>
                                </Grid>

                                {!isSubmitted ? (

                                    <div>
                                        <br></br>

                                        <Paper className="timer-paper">
                                            <Typography variant="h4" style={{ marginLeft: '10px' }}>Timer</Typography>

                                            <div className="timer">

                                                <div key="minutes" className="col-4">
                                                    <div className="box">
                                                        <p>{Math.floor(counter / 60)}</p>
                                                        <span className="text">Minutes</span>
                                                    </div>
                                                </div>
                                                <div key="seconds" className="col-4">
                                                    <div className="box">
                                                        <p>{('0' + Math.floor(counter % 60)).slice(-2)}</p>
                                                        <span className="text">Seconds</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </Paper>
                                        <Grid>


                                            <div key={currentQuestion}>
                                                <br></br>
                                                <Paper>
                                                    <div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'flex-start',
                                                            marginLeft: '6px',
                                                            paddingTop: '15px',
                                                            paddingBottom: '15px'
                                                        }}>
                                                            <Typography variant="subtitle1" style={{ marginLeft: '10px' }}>{currentQuestion + 1}. {questions[currentQuestion].question}</Typography>

                                                            {questions[currentQuestion].qImage !== "" ? (
                                                                <div>
                                                                    <img src={questions[currentQuestion].qImage} width="50%" height="auto" alt="questionimage" /><br></br><br></br>
                                                                </div>
                                                            ) : ""}

                                                            <div>

                                                                {questions[currentQuestion].questionType === "mcq" ? (
                                                                    <FormControl>
                                                                        <RadioGroup
                                                                            aria-labelledby="demo-radio-buttons-group-label"
                                                                            defaultValue="female"
                                                                            name="radio-buttons-group"
                                                                            value={value}
                                                                            onChange={(e) => {
                                                                                handleRadioChange(e.target.value)
                                                                            }}
                                                                        >
                                                                            {questions[currentQuestion].options.map((op, j) => (
                                                                                <div key={j}>
                                                                                    <div style={{ display: 'flex', marginLeft: '7px' }}>
                                                                                        <FormControlLabel value={op.option} control={<Radio />} label={op.option} />
                                                                                    </div>

                                                                                    <div style={{ display: 'flex', marginLeft: '10px' }}>
                                                                                        {op.image !== "" ? (
                                                                                            <img src={op.image} width="40%" height="auto" alt="optionImage" />
                                                                                        ) : ""}
                                                                                        <Divider />
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </RadioGroup>
                                                                    </FormControl>
                                                                ) : (

                                                                    <>
                                                                        <TextField
                                                                            required
                                                                            id="fullwidth"
                                                                            label="Answer"
                                                                            multiline
                                                                            maxRows={4}
                                                                            value={value}
                                                                            style={{ margin: "10px", width: "150%" }}
                                                                            onChange={(e) => { handleTextChange(e.target.value) }}
                                                                            fullWidth
                                                                            variant="standard"
                                                                        />
                                                                    </>




                                                                )}



                                                            </div>
                                                        </div>
                                                    </div>
                                                </Paper>
                                            </div>

                                        </Grid>
                                        <Grid>
                                            <br></br>
                                            <div style={{ display: 'flex' }}>
                                                <Button id="next" variant="contained" color="primary" onClick={() => { nextQuestion(false) }} disabled={value === "" ? true : false} >
                                                    {questionCount === total ? "End" : "Next"}
                                                </Button>
                                            </div>
                                            <br></br>

                                            <br></br>

                                        </Grid>
                                    </div>
                                ) :
                                    (<></>)
                                }
                            </Grid >


                        </Grid >


                        {/* //TODO: Add a footer here */}
                    </div >
                    <div>
                        <Dialog open={open} onClose={() => { }} aria-labelledby="form-dialog-title" maxWidth="xs">
                            <DialogTitle id="form-dialog-title">Quiz Submission</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    <h4>Quiz Name : {quizDetails.quizName}</h4>
                                    <h4>Description : {quizDetails.description}</h4>
                                    <br></br>
                                    <h4>Instructions:</h4>
                                    {quizDetails?.instructions?.map((ins, i) => (
                                        <h5>--{ins}</h5>
                                    ))}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => {
                                    setOpen(false)
                                    startRecording()

                                }} color="primary">
                                    Continue
                                </Button>
                            </DialogActions>
                        </Dialog>

                        <Dialog open={noattempts} onClose={() => { }} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Quiz Submission</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    <h4>You have submitted the quiz for all the attempts</h4>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => {

                                    window.open("/home", "_self");

                                }} color="primary">
                                    OK
                                </Button>
                            </DialogActions>
                        </Dialog>


                        <Dialog open={aopen && quizDetails.scoring === "numerical"} onClose={() => { }} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Enter Your {quizDetails.numericalAttribute}</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    <TextField
                                        required
                                        id="standard-number"
                                        label={quizDetails.numericalAttribute}
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="standard"
                                        value={attribute}
                                        onChange={(e) => {
                                            setAttribute(e.target.value)
                                        }}
                                    />
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>

                                <Button onClick={() => {
                                    localStorage.setItem("attribute" + props.quizId + user._id, attribute)
                                    localStorage.setItem("aopen" + props.quizId + user._id, false);
                                    setAopen(false);


                                }} color="primary">
                                    OK
                                </Button>
                            </DialogActions>
                        </Dialog>

                        <Dialog open={error || status === "acquiring_media"} onClose={() => { }} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Permission Denied</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    <Typography>
                                        Please Allow the persmission for video / audio then only you will be allow to continue the test
                                    </Typography>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>

                                <Button onClick={() => {
                                    // localStorage.setItem("attribute" + props.quizId + user._id, attribute)
                                    // localStorage.setItem("aopen" + props.quizId + user._id, false);
                                    // setAopen(false);
                                }} color="primary">
                                    OK
                                </Button>
                            </DialogActions>
                        </Dialog>

                    </div>

                </div >
            )
            }

        </>
    )
}

export default CollectResponseAudio;
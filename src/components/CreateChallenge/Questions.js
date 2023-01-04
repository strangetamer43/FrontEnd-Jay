import React, { useRef } from 'react'

import Button from '@material-ui/core/Button';

import { FormHelperText, Radio, Select, InputLabel, Switch, MenuItem, Checkbox, FormControlLabel, FormControl, RadioGroup, Snackbar, Tooltip, Paper, Typography, Box, Grid } from '@material-ui/core';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import Uploader from '../ImageUpload/Uploader';
import { editQuiz } from '../../APIServices/QuestionAPI';
import CircularProgress from '@material-ui/core/CircularProgress';
import SaveIcon from '@material-ui/icons/Save';
import { Alert } from '@mui/material';

import { TextField } from '@mui/material';

import IndQuestion from './IndQuestion';
import ChallengeOptions1 from './ChallengeOptions1';
const Questions = (props) => {


    const [questions, setQuestions] = React.useState([]);
    const [openUploadImagePop, setOpenUploadImagePop] = React.useState(false);
    const [imageContextData, setImageContextData] = React.useState({ question: null, option: null });
    const [quizDetails, setQuizDetails] = React.useState({});
    const [loadingFormData, setLoadingFormData] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const [attempts, setAttempts] = React.useState(1);
    const [quizimage, setQuizImage] = React.useState(false);
    const [result, setResult] = React.useState("false");
    const [resultData, setResultData] = React.useState([]);
    const [visibility, setVisibility] = React.useState(true);
    const [scoring, setScoring] = React.useState("normal")
    const [numericalRange, setNumericalRange] = React.useState([])
    const [numericalAttribute, setNumericalAttribute] = React.useState("");
    const [expanded, setExpanded] = React.useState('');
    const [showScore, setShowScore] = React.useState(true)
    const [timer, setTimer] = React.useState("individual")
    const [minutes, setMinutes] = React.useState()
    const [seconds, setSeconds] = React.useState()
    const [dopen, setDopen] = React.useState(false)
    const [name, setName] = React.useState()
    const [description, setDescription] = React.useState()
    const [instructions, setInstructions] = React.useState()
    const [ins, setIns] = React.useState()
    const [recording, setRecoring] = React.useState("none")
    const [terms, setTerms] = React.useState(false)
    const [termsText, setTermsText] = React.useState("")
    const [temp, setTemp] = React.useState(0)
    const ref = useRef()


    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };




    React.useEffect(() => {
        setVisibility(props.formData.visibility)
        if (props.formData.questions !== undefined) {
            //console.log(props.formData.questions.length);
            if (props.formData.questions.length === 0) {
                setQuestions([{ question: "Question", qImage: "", options: [{ optionText: "Option 1", image: "", value: 1 }], open: false, duration: { minutes: 0, seconds: 0 }, answer: "", questionType: "mcq" }]);
            } else {
                setQuestions(props.formData.questions)
                setAttempts(props?.formData?.attempts);
            }
            setLoadingFormData(false)
        }
        if (props.formData.result !== undefined) {
            setResult(props.formData.result?.show || "false");
            setShowScore(props.formData.showScore === false ? false : true)
            if (props.formData.result.data.length === 0) {
                setResultData([[100, 0, "A"]])
            } else {
                setResultData(props.formData.result.data)
            }
        }
        if (props.formData.numericalRange !== undefined) {
            setNumericalAttribute(props.formData?.numericalAttribute || "")
            setScoring(props.formData?.scoring || "normal")
            if (props.formData.numericalRange.length === 0) {
                setNumericalRange([{ numericalRange: [1, 0], scoreRange: [[1, 0, 1, "A"]] }])
            } else {
                setNumericalRange(props.formData.numericalRange)
            }
        }
        setQuizDetails(props.formData)
        setTimer(props.formData?.timer || "individual")
        setMinutes(props.formData?.duration?.minutes)
        setSeconds(props.formData?.duration?.seconds)
        setName(props.formData?.quizName)
        setDescription(props.formData?.description)
        setInstructions(props.formData?.instructions)
        setRecoring(props.formData?.recording)
        setTerms(props.formData?.terms ? props.formData?.terms : false)
        setTermsText(props.formData?.termsText)
    }, [props, temp])

    console.log(props.formData)
    const functions = {


        set_name: (text) => {
            setName(text)
        },

        handleClose: (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }

            setOpen(false)
        },




        saveQuestions: async () => {
            console.log("auto saving questions initiated");
            await ref.current.saveQuestions()
            var data = {
                quizId: quizDetails._id,
                questions: questions,
                duration: {
                    minutes: minutes,
                    seconds: seconds
                },
                timer: timer,
                recording: recording,


            }
            console.log(data);

            editQuiz(data)
                .then((result) => {
                    setQuestions(result.data.questions)
                    setOpen(true);

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

        },

        checkImageHereOrNotForQuestion: (gg) => {
            // console.log(gg);
            if ((gg === undefined) || (gg === "")) {
                return false;
            } else {
                return true;
            }
        },

        checkImageHereOrNotForOption: (gg) => {
            // console.log(gg);
            if ((gg === undefined) || (gg === "")) {
                return false;
            } else {
                return true;
            }
        },

        addMoreQuestionFieldMCQ: () => {
            functions.expandCloseAll(); //I AM GOD
            setQuestions(questions => [...questions, { question: "Question", qImage: "", options: [{ option: "Option 1", image: "", value: 1 }], open: false, duration: { minutes: 0, seconds: 0 }, answer: 1, questionType: "mcq" }]);
        },

        addResultData: () => {
            functions.expandCloseAll();
            setResultData(resultData => [...resultData, [1, 0, ""]])

        },

        addNumericalRange: () => {
            functions.expandCloseAll();
            setNumericalRange(numericalRange => [...numericalRange, { numericalRange: [1, 0], scoreRange: [[1, 0, 1, "A"]] }])
        },

        addScoreRange: (i) => {
            functions.expandCloseAll();
            numericalRange[i].scoreRange.push([1, 0, 1, "A"]);
            setNumericalRange(numericalRange)
        },

        addMoreQuestionFieldTEXT: () => {
            functions.expandCloseAll();
            setQuestions(questions => [...questions, { question: "Question", qImage: "", open: false, duration: { minutes: 0, seconds: 0 }, questionType: "text" }])
        },

        addMoreQuestionFieldAUDIO: () => {
            functions.expandCloseAll();
            setQuestions(questions => [...questions, { question: "Question", qImage: "", open: false, duration: { minutes: 0, seconds: 0 }, questionType: "audio", multipleAudio: false }])
        },

        copyQuestion: (i) => {
            let qs = [...questions];
            functions.expandCloseAll();
            const myNewOptions = [];
            if (qs[i].questionType === "mcq") {


                const qImage = qs[i].qImage || "";
                var newQuestion = { question: qs[i].question, qImage: qImage, options: qs[i].options, open: false, duration: qs[i].duration, answer: qs[i].answer, questionType: "mcq" }
                setQuestions(questions => [...questions, newQuestion]);
            }
            else if (qs[i].questionType === "audio") {
                var newQuestion1 = { question: qs[i].question, qImage: qs[i].qImage, open: false, duration: qs[i].duration, questionType: qs[i].questionType, multipleAudio: qs[i].multipleAudio }
                setQuestions(questions => [...questions, newQuestion1]);

            } else {
                var newQuestion2 = { question: qs[i].question, qImage: qs[i].qImage, open: false, duration: qs[i].duration, questionType: qs[i].questionType }
                setQuestions(questions => [...questions, newQuestion2]);

            }
        },

        handleImagePopupOpen: () => {
            setOpenUploadImagePop(true);
        },


        uploadImage: (i, j) => {

            setImageContextData({
                question: i,
                option: j
            });
            functions.handleImagePopupOpen();

        },

        uploadQuizImage: () => {
            setQuizImage(true);
            functions.handleImagePopupOpen();
        },

        updateQuizImage: (link) => {
            setQuizImage(false);
            quizDetails.quizImage = link;
        },

        updateImageLink: (link, context) => {

            var optionsOfQuestion = [...questions];
            var i = context.question

            if (context.option == null) {
                optionsOfQuestion[i].qImage = link;
            } else {
                var j = context.option
                optionsOfQuestion[i].options[j].image = link;
            }
            setQuestions(optionsOfQuestion);
        },

        deleteQuestion: (i) => {
            let qs = [...questions];
            if (questions.length > 1) {
                qs.splice(i, 1);
            }
            setQuestions(qs)
        },

        deleteRange: (i) => {
            let tempdata = [...resultData]
            if (resultData.length > 1) {
                tempdata.splice(i, 1)
            }
            setResultData(tempdata);
        },

        deleteScoreRange: (i, j) => {
            let temp = [...numericalRange]
            if (numericalRange[i].scoreRange.length > 1) {
                temp[i].scoreRange.splice(j, 1)
            }
            setNumericalAttribute(temp)

        },


        deleteNumericalRange: (i) => {
            let temp = [...numericalRange]
            if (numericalRange.length > 1) {
                temp.splice(i, 1);
            }
            setNumericalRange(temp)
        },


        handleResultData: (text, i, j) => {
            var tempdata = [...resultData];
            tempdata[i][j] = text
            setResultData(tempdata)

        },



        handleOptionValue: (text, i, j) => {
            var optionsOfQuestion = [...questions];
            optionsOfQuestion[i].options[j].option = text;
            //newMembersEmail[i]= email;
            setQuestions(optionsOfQuestion);
        },


        handleValue: (value, i, j) => {
            var optionsOfQuestion = [...questions];
            optionsOfQuestion[i].options[j].value = value;
            setQuestions(optionsOfQuestion);
        },

        handleQuestionValue: (text, i) => {
            var optionsOfQuestion = [...questions];
            optionsOfQuestion[i].question = text;
            setQuestions(optionsOfQuestion);
        },

        handleNumericalRange: (text, i, j) => {
            var temprange = [...numericalRange]
            temprange[i].numericalRange[j] = Number(text)
            setNumericalRange(temprange)
        },

        handleScoreRangeNumerical: (text, i, j, k) => {
            var temprange = [...numericalRange]
            temprange[i].scoreRange[j][k] = Number(text)
            setNumericalRange(temprange)
        },


        handleScoreRange: (text, i, j, k) => {
            var temprange = [...numericalRange]
            temprange[i].scoreRange[j][k] = text
            setNumericalRange(temprange)
        },


        handleAddInstruction: () => {
            instructions.push(ins)
            setIns("");
        },

        onTermTextChange: (e) => {
            setTermsText(e.target.value)
        },






        addOption: (i) => {
            var optionsOfQuestion = [...questions];
            if (optionsOfQuestion[i].options.length < 5) {
                optionsOfQuestion[i].options.push({ option: "Option " + (optionsOfQuestion[i].options.length + 1), image: "", value: 1 })
            } else {
                console.log("Max  5 options ");
            }
            //console.log(optionsOfQuestion);
            setQuestions(optionsOfQuestion)
        },

        removeOption: (i, j) => {
            var optionsOfQuestion = [...questions];
            if (optionsOfQuestion[i].options.length > 1) {
                optionsOfQuestion[i].options.splice(j, 1);
                setQuestions(optionsOfQuestion)
                console.log(i + "__" + j);
            }
        },

        showAsQuestion: (i) => {
            let qs = [...questions];
            qs[i].open = false;
            setQuestions(qs);
        },

        expandCloseAll: () => {
            let qs = [...questions];
            for (let j = 0; j < qs.length; j++) {
                qs[j].open = false;
            }
            setQuestions(qs);
        },

        handleExpand: (i) => {
            let qs = [...questions];
            for (let j = 0; j < qs.length; j++) {
                if (i === j) {
                    qs[i].open = true;

                } else {
                    qs[j].open = false;
                }
            }
            setQuestions(qs);
        },


        handleCorrectAnswer: (e, i) => {
            var optionsOfQuestion = [...questions];
            optionsOfQuestion[i].answer = e.target.value;
            setQuestions(optionsOfQuestion);
        },
        handleTimer: (text) => {
            setTimer(text)
        },



        handleMinutesChange: (i, value) => {
            var temp = [...questions]
            temp[i].duration.minutes = value;
            setQuestions(temp)

        },
        handleScondsChange: (i, value) => {
            var temp = [...questions]
            temp[i].duration.seconds = value;
            setQuestions(temp)
        },

        removeInstruction: (i) => {
            var temp = [...instructions]
            temp.splice(i, 1);
            setInstructions(temp)
        },

        handleAudio: (i) => {
            var optionsOfQuestion = [...questions];
            optionsOfQuestion[i].multipleAudio = !optionsOfQuestion[i].multipleAudio;
            //newMembersEmail[i]= email;
            setQuestions(optionsOfQuestion);
        }
    }


    function questionsUI() {
        return questions.map((ques, i) => (
            <div>
                <IndQuestion timer={timer} formData={quizDetails} i={i} questions={questions} copyQuestion={functions.copyQuestion} deleteQuestion={functions.deleteQuestion} name={name} />
            </div>

        ))



    }

    function optionsOne() {
        return (
            <div>
                <ChallengeOptions1
                    formData={quizDetails}
                    key={instructions}
                    name={name}
                    description={description}
                    instructions={instructions}
                    minutes={minutes}
                    seconds={seconds}
                    timer={timer}
                    functions={functions}
                    visibility={visibility} attempts={attempts} result={result} resultData={resultData}
                    showScore={showScore}
                    numericalAttribute={numericalAttribute}
                    scoring={scoring}
                    numericalRange={numericalRange}
                    recording={recording}
                    terms={terms}
                    termsText={termsText}
                    ref={ref}
                    function={functions}
                />
            </div>
        )
    }


    return (
        <>
            {optionsOne()}
            <div className="body">
                <div style={{ marginTop: '15px', marginBottom: '7px' }}>

                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        {loadingFormData ? (<CircularProgress />) : ""}

                        <Grid item xs={10} sm={8} md={6} style={{ width: '100%' }}>
                            <Grid style={{ paddingTop: '10px' }}>
                                <div>
                                    <Uploader handleImagePopOpen={openUploadImagePop} handleImagePopClose={() => { setOpenUploadImagePop(false) }} updateImageLink={functions.updateImageLink} updateQuizImage={functions.updateQuizImage} contextData={imageContextData} quizImage={quizimage} />

                                    <Paper style={{ width: '100%' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '15px', paddingTop: '20px', paddingBottom: '20px' }}>
                                            <Typography>Challenge Timer</Typography>
                                            <FormControl>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                    value={timer}
                                                    onChange={(e) => functions.handleTimer(e.target.value)}
                                                >
                                                    <FormControlLabel value="individual" control={<Radio />} label="Individual" />
                                                    <FormControlLabel value="cumulative" control={<Radio />} label="Cumulative" />

                                                </RadioGroup>

                                            </FormControl>
                                            {timer === "cumulative" ? (
                                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '-12.5px', justifyContent: 'space-between', paddingTop: '5px', paddingBottom: '5px', width: "70%", textAlign: "center", margin: "auto" }}>

                                                    <TextField
                                                        required
                                                        label="Minutes"
                                                        type='number'
                                                        placeholder="Mintues"
                                                        style={{ margin: '5px' }}
                                                        value={minutes}
                                                        size="small"
                                                        onChange={(e) =>
                                                            setMinutes(Number(e.target.value))
                                                        }
                                                    />
                                                    <TextField
                                                        required
                                                        label="Seconds"
                                                        type='number'
                                                        placeholder="Seconds"
                                                        style={{ margin: '5px' }}
                                                        value={seconds}
                                                        size="small"
                                                        onChange={(e) => setSeconds(Number(e.target.value))
                                                        }
                                                    />
                                                </div>

                                            ) : ""}

                                        </div>
                                    </Paper>
                                    <br></br>
                                    <Paper style={{ width: '100%' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '15px', paddingTop: '20px', paddingBottom: '20px' }}>
                                            <Typography style={{ marginTop: '10px' }}>Recoring</Typography>
                                            <FormControl>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                    value={recording}
                                                    onChange={(e) => setRecoring(e.target.value)}
                                                >
                                                    <FormControlLabel value="video" control={<Radio />} label="Video & Screen" />
                                                    <FormControlLabel value="audio" control={<Radio />} label="audio" />
                                                    <FormControlLabel value="screen" control={<Radio />} label="Screen" />
                                                    <FormControlLabel value="none" control={<Radio />} label="No Recording" />


                                                </RadioGroup>

                                            </FormControl>

                                        </div>

                                    </Paper>
                                    <br></br>
                                    {questionsUI()}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Snackbar
                        open={open}
                        onClose={functions.handleClose}
                        message="Questions Updated"
                        key={"center bottom"}
                        autoHideDuration={5000}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    >
                        <Alert onClose={functions.handleClose} severity="success" sx={{ width: '100%' }}>
                            Questions Updated
                        </Alert>
                    </Snackbar>
                </div>
            </div>

            <div className="body">
                <div style={{ marginTop: '15px', marginBottom: '7px', paddingBottom: "30px" }}>

                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        {loadingFormData ? (<CircularProgress />) : ""}

                        <Grid item xs={10} sm={8} md={6} style={{ width: '100%' }}>
                            <Grid style={{ paddingTop: '10px' }}>
                                <div>
                                    <Button
                                        variant="contained"

                                        onClick={functions.addMoreQuestionFieldMCQ}
                                        endIcon={<AddCircleIcon />}
                                        style={{ margin: '5px' }}
                                    >Add MCQ </Button>

                                    <Button
                                        variant="contained"

                                        onClick={functions.addMoreQuestionFieldTEXT}
                                        endIcon={<AddCircleIcon />}
                                        style={{ margin: '5px' }}
                                    >Add TextField </Button>
                                    {recording === "none" ? (<Button
                                        variant="contained"

                                        onClick={functions.addMoreQuestionFieldAUDIO}
                                        endIcon={<AddCircleIcon />}
                                        style={{ margin: '5px' }}
                                    >Add AudioQue </Button>
                                    ) : ""}

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={functions.saveQuestions}
                                        style={{ margin: '15px' }}
                                        endIcon={<SaveIcon />}
                                    >Save Questions </Button>
                                    <Button variant="contained" color="secondary" href="/myChallenges" >Back</Button>

                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    );
}
export default Questions;
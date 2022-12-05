import React from 'react'
import AddCircle from '@material-ui/icons/AddCircle';
import { TextField } from '@mui/material';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';

import { FormHelperText, Select, InputLabel, Switch, MenuItem, Checkbox, FormControlLabel, FormControl, RadioGroup, Snackbar, Tooltip, Paper, Typography, Box, Grid } from '@material-ui/core';
import AccordionActions from '@material-ui/core/AccordionActions';
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core';

import Divider from '@material-ui/core/Divider';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Uploader from '../ImageUpload/Uploader';
import { editQuiz } from '../../APIServices/QuestionAPI';
import CircularProgress from '@material-ui/core/CircularProgress';
import SaveIcon from '@material-ui/icons/Save';
import { Alert } from '@mui/material';
import ExpandMore from "@material-ui/icons/ExpandMore"
import { ThemeProvider } from '@mui/system';


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

    }, [props])




    function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };




    function saveQuestions() {
        console.log("auto saving questions initiated");
        console.log(resultData)
        var data = {
            quizId: quizDetails._id,
            quizName: name,
            description: description,
            questions: questions,
            attempts: attempts,
            quizImage: quizDetails.quizImage,
            result: {
                show: result,
                data: resultData
            },
            visibility: visibility,
            scoring: scoring,
            numericalAttribute: numericalAttribute,
            numericalRange: numericalRange,
            showScore: showScore,
            duration: {
                minutes: minutes,
                seconds: seconds
            },
            timer: timer,
            instructions: instructions,
            recording: recording,

        }

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

    }

    function checkImageHereOrNotForQuestion(gg) {
        // console.log(gg);
        if ((gg === undefined) || (gg === "")) {
            return false;
        } else {
            return true;
        }
    }

    function checkImageHereOrNotForOption(gg) {
        // console.log(gg);
        if ((gg === undefined) || (gg === "")) {
            return false;
        } else {
            return true;
        }
    }

    function addMoreQuestionFieldMCQ() {
        expandCloseAll(); //I AM GOD

        setQuestions(questions => [...questions, { question: "Question", qImage: "", options: [{ option: "Option 1", image: "", value: 1 }], open: false, duration: { minutes: 0, seconds: 0 }, answer: 1, questionType: "mcq" }]);
    }

    function addResultData() {
        expandCloseAll();
        setResultData(resultData => [...resultData, [1, 0, ""]])

    }

    function addNumericalRange() {
        expandCloseAll();
        setNumericalRange(numericalRange => [...numericalRange, { numericalRange: [1, 0], scoreRange: [[1, 0, 1, "A"]] }])
    }

    function addScoreRange(i) {
        expandCloseAll();
        numericalRange[i].scoreRange.push([1, 0, 1, "A"]);
        setNumericalRange(numericalRange)
    }

    function addMoreQuestionFieldTEXT() {
        expandCloseAll();
        setQuestions(questions => [...questions, { question: "Question", qImage: "", open: false, duration: { minutes: 0, seconds: 0 }, questionType: "text" }])
    }

    function addMoreQuestionFieldAUDIO() {
        expandCloseAll();
        setQuestions(questions => [...questions, { question: "Question", qImage: "", open: false, duration: { minutes: 0, seconds: 0 }, questionType: "audio", multipleAudio: false }])
    }

    function copyQuestion(i) {
        let qs = [...questions];
        expandCloseAll();
        const myNewOptions = [];
        qs[i].options.forEach(opn => {
            if ((opn.image !== undefined) || (opn.image !== "")) {
                var opn1new = {
                    optionText: opn.option,
                    optionImage: opn.image
                }
            } else {
                var opn1new = {
                    optionText: opn.option
                }
            }
            myNewOptions.push(opn1new)
        });
        const qImage = qs[i].qImage || "";
        var newQuestion = { questionText: qs[i].question, questionImage: qImage, options: myNewOptions, open: true, duration: qs[i].duration, answer: qs[i].answer }
        setQuestions(questions => [...questions, newQuestion]);
    }

    const handleImagePopupOpen = () => {
        setOpenUploadImagePop(true);
    };


    function uploadImage(i, j) {

        setImageContextData({
            question: i,
            option: j
        });
        handleImagePopupOpen();

    }

    function uploadQuizImage() {
        setQuizImage(true);
        handleImagePopupOpen();
    }

    function updateQuizImage(link) {
        setQuizImage(false);
        quizDetails.quizImage = link;
    }

    function updateImageLink(link, context) {

        var optionsOfQuestion = [...questions];
        var i = context.question

        if (context.option == null) {
            optionsOfQuestion[i].qImage = link;
        } else {
            var j = context.option
            optionsOfQuestion[i].options[j].image = link;
        }
        setQuestions(optionsOfQuestion);
    }

    function deleteQuestion(i) {
        let qs = [...questions];
        if (questions.length > 1) {
            qs.splice(i, 1);
        }
        setQuestions(qs)
    }

    function deleteRange(i) {
        let tempdata = [...resultData]
        if (resultData.length > 1) {
            tempdata.splice(i, 1)
        }
        setResultData(tempdata);
    }

    function deleteScoreRange(i, j) {
        let temp = [...numericalRange]
        if (numericalRange[i].scoreRange.length > 1) {
            temp[i].scoreRange.splice(j, 1)
        }
        setNumericalAttribute(temp)

    }


    function deleteNumericalRange(i) {
        let temp = [...numericalRange]
        if (numericalRange.length > 1) {
            temp.splice(i, 1);
        }
        setNumericalRange(temp)
    }


    function handleResultData(text, i, j) {
        var tempdata = [...resultData];
        tempdata[i][j] = text
        setResultData(tempdata)

    }



    function handleOptionValue(text, i, j) {
        var optionsOfQuestion = [...questions];
        optionsOfQuestion[i].options[j].option = text;
        //newMembersEmail[i]= email;
        setQuestions(optionsOfQuestion);
    }


    function handleValue(value, i, j) {
        var optionsOfQuestion = [...questions];
        optionsOfQuestion[i].options[j].value = value;
        setQuestions(optionsOfQuestion);
    }

    function handleQuestionValue(text, i) {
        var optionsOfQuestion = [...questions];
        optionsOfQuestion[i].question = text;
        setQuestions(optionsOfQuestion);
    }

    function handleNumericalRange(text, i, j) {
        var temprange = [...numericalRange]
        temprange[i].numericalRange[j] = Number(text)
        setNumericalRange(temprange)
    }

    function handleScoreRangeNumerical(text, i, j, k) {
        var temprange = [...numericalRange]
        temprange[i].scoreRange[j][k] = Number(text)
        setNumericalRange(temprange)
    }


    function handleScoreRange(text, i, j, k) {
        var temprange = [...numericalRange]
        temprange[i].scoreRange[j][k] = text
        setNumericalRange(temprange)
    }


    const handleAddInstruction = () => {
        instructions.push(ins)
        setIns("");
    }







    function addOption(i) {
        var optionsOfQuestion = [...questions];
        if (optionsOfQuestion[i].options.length < 5) {
            optionsOfQuestion[i].options.push({ option: "Option " + (optionsOfQuestion[i].options.length + 1), image: "", value: 1 })
        } else {
            console.log("Max  5 options ");
        }
        //console.log(optionsOfQuestion);
        setQuestions(optionsOfQuestion)
    }

    function removeOption(i, j) {
        var optionsOfQuestion = [...questions];
        if (optionsOfQuestion[i].options.length > 1) {
            optionsOfQuestion[i].options.splice(j, 1);
            setQuestions(optionsOfQuestion)
            console.log(i + "__" + j);
        }
    }

    function showAsQuestion(i) {
        let qs = [...questions];
        qs[i].open = false;
        setQuestions(qs);
    }

    function expandCloseAll() {
        let qs = [...questions];
        for (let j = 0; j < qs.length; j++) {
            qs[j].open = false;
        }
        setQuestions(qs);
    }

    function handleExpand(i) {
        let qs = [...questions];
        for (let j = 0; j < qs.length; j++) {
            if (i === j) {
                qs[i].open = true;

            } else {
                qs[j].open = false;
            }
        }
        setQuestions(qs);
    }


    function handleCorrectAnswer(e, i) {
        var optionsOfQuestion = [...questions];
        optionsOfQuestion[i].answer = e.target.value;
        setQuestions(optionsOfQuestion);
    }



    function handleMinutesChange(i, value) {
        var temp = [...questions]
        temp[i].duration.minutes = value;
        setQuestions(temp)

    }
    function handleScondsChange(i, value) {
        var temp = [...questions]
        temp[i].duration.seconds = value;
        setQuestions(temp)
    }

    const removeInstruction = (i) => {
        var temp = [...instructions]
        temp.splice(i, 1);
        setInstructions(temp)
    }

    function handleAudio(i) {
        var optionsOfQuestion = [...questions];
        optionsOfQuestion[i].multipleAudio = !optionsOfQuestion[i].multipleAudio;
        //newMembersEmail[i]= email;
        setQuestions(optionsOfQuestion);
    }
    function questionsUI() {
        return questions.map((ques, i) => (

            <div>
                <div style={{ marginBottom: "15px" }}>

                    <Accordion onChange={() => { handleExpand(i) }} expanded={questions[i].open}>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            elevation={1} style={{ width: '120%' }}
                            className="summary"
                        >

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '3px', paddingTop: '15px', paddingBottom: '15px' }}>
                                {/* <TextField id="standard-basic" label=" " value="Question" InputProps={{ disableUnderline: true }} />  */}

                                <Typography variant="subtitle1" style={{ marginLeft: '0px' }}>{i + 1}.{ques.question}</Typography>


                                {ques.qImage !== "" ? (
                                    <div>
                                        <img src={ques.qImage} alt="questionimage" width="300px" height="auto" /><br></br><br></br>
                                    </div>
                                ) : ""}
                                {ques.questionType === "mcq" && ques.options.map((op, j) => (

                                    <div key={j}>
                                        <div style={{ display: 'flex' }}>
                                            <FormControlLabel disabled control={<Radio style={{ marginRight: '3px', }} />} label={
                                                <Typography style={{ color: '#555555' }}>
                                                    {ques.options[j].option}
                                                </Typography>
                                            } />
                                        </div>

                                        <div>
                                            {op.image !== "" ? (
                                                <img src={op.image} alt="optionimage" width="160px" height="auto" />
                                            ) : ""}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </AccordionSummary>

                        <AccordionDetails className='details'>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '15px', marginTop: '-15px' }}>
                                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                                    <Typography style={{ marginTop: '20px' }}>{i + 1}.</Typography>
                                    <TextField
                                        fullWidth={true}
                                        placeholder="Question Text"
                                        style={{ marginBottom: '18px' }}
                                        rows={2}
                                        rowsMax={20}
                                        multiline={true}
                                        required
                                        value={ques.question}
                                        variant="filled"
                                        onChange={e => handleQuestionValue(e.target.value, i)}
                                    />
                                    <Tooltip title="Add Image">

                                        <IconButton aria-label="upload image" onClick={() => { uploadImage(i, null) }}>
                                            <CropOriginalIcon />
                                        </IconButton>
                                    </Tooltip>

                                </div>

                                <div>
                                    {
                                        checkImageHereOrNotForQuestion(ques.qImage) ? (
                                            <div>
                                                <div style={{ width: '150px', display: 'flex', alignItems: 'flex-start', paddingLeft: '20px' }}>
                                                    <img src={ques.qImage} width="150px" height="auto" alt="questionImage" />
                                                    <Tooltip title="Remove Image">

                                                        <IconButton style={{ marginLeft: '-15px', marginTop: '-15px', zIndex: 999, backgroundColor: 'lightgrey', color: 'grey' }}
                                                            size="small"
                                                            onClick={() => {
                                                                updateImageLink("", { question: i, option: null })
                                                            }}>
                                                            <CloseIcon />
                                                        </IconButton>
                                                    </Tooltip>

                                                </div>
                                            </div>
                                        ) : ""
                                    }
                                </div>
                                <div>
                                    {/* Create a list of durations */}

                                    <br></br>
                                    {timer === "individual" ? (
                                        <>
                                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                <InputLabel id="demo-simple-select-helper-label"><Typography>Duration: </Typography></InputLabel>
                                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '-12.5px', justifyContent: 'space-between', paddingTop: '5px', paddingBottom: '5px', width: "70%", textAlign: "center", margin: "auto" }}>

                                                    <TextField
                                                        required
                                                        label="Minutes"
                                                        type='number'
                                                        placeholder="Mintues"
                                                        style={{ margin: '5px' }}
                                                        value={ques.duration.minutes}
                                                        size="small"
                                                        onChange={(e) => {
                                                            handleMinutesChange(i, Number(e.target.value))
                                                        }}
                                                    />
                                                    <TextField
                                                        required
                                                        label="Seconds"
                                                        type='number'
                                                        placeholder="Seconds"
                                                        style={{ margin: '5px' }}
                                                        value={ques.duration.seconds}
                                                        size="small"
                                                        onChange={(e) => {
                                                            handleScondsChange(i, Number(e.target.value))
                                                        }}
                                                    />
                                                </div>

                                            </FormControl>
                                        </>
                                    ) : ""}

                                </div>
                                <br></br>

                                {ques.questionType === "text" ? (

                                    <div style={{ width: '130%' }}>
                                        <br></br>

                                        <TextField
                                            id="standard-basic"
                                            placeholder="Option text"
                                            style={{ marginTop: '5px', width: "100%" }}
                                            value="Answer"
                                            disabled
                                            fullWidth
                                            variant="standard"
                                            required
                                        />
                                    </div>
                                ) :
                                    ques.questionType === "audio" ? (
                                        <>
                                            <FormControlLabel control={<Checkbox />} checked={ques.multipleAudio} onChange={() => handleAudio(i)} label="Multiple Audio Record" color="success" />
                                        </>
                                    ) : ""
                                }



                                <div style={{ width: '100%' }}>

                                    {ques.questionType === "mcq" && ques.options.map((op, j) => (
                                        <>
                                            <div key={j}>
                                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '-12.5px', justifyContent: 'space-between', paddingTop: '5px', paddingBottom: '5px' }}>
                                                    <Radio disabled />
                                                    <TextField
                                                        required
                                                        placeholder="Option text"
                                                        style={{ marginTop: '5px', width: "100%" }}
                                                        value={op.option}
                                                        onChange={(e) => { handleOptionValue(e.target.value, i, j) }}

                                                    />

                                                    <Tooltip title="Add Image">

                                                        <IconButton aria-label="upload image" onClick={() => { uploadImage(i, j) }}>
                                                            <CropOriginalIcon />
                                                        </IconButton>
                                                    </Tooltip>

                                                    <Tooltip title="Delete Option">

                                                        <IconButton aria-label="delete" onClick={() => { removeOption(i, j) }}>
                                                            <CloseIcon />
                                                        </IconButton>
                                                    </Tooltip>

                                                    <FormControl sx={{ m: 1, minWidth: 120 }} margin="none" color="secondary" fullWidth="true" style={{ width: "40%" }}>
                                                        <InputLabel id="demo-simple-select-helper-label">Value</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-helper-label"
                                                            id="demo-simple-select-helper"
                                                            value={op.value}
                                                            label="Value"
                                                            onChange={(e) => { handleValue(e.target.value, i, j) }}

                                                        >

                                                            <MenuItem value={-4}>-4</MenuItem>
                                                            <MenuItem value={-3}>-3</MenuItem>
                                                            <MenuItem value={-2}>-2</MenuItem>
                                                            <MenuItem value={-1}>-1</MenuItem>
                                                            <MenuItem value={0}>0</MenuItem>
                                                            <MenuItem value={1}>1</MenuItem>
                                                            <MenuItem value={2}>2</MenuItem>
                                                            <MenuItem value={3}>3</MenuItem>
                                                            <MenuItem value={4}>4</MenuItem>

                                                        </Select>
                                                        <FormHelperText >Select value </FormHelperText>
                                                    </FormControl>
                                                    <Divider />
                                                </div>

                                                <div>
                                                    {
                                                        checkImageHereOrNotForOption(op.image) ? (
                                                            <div>
                                                                <div style={{ width: '150px', display: 'flex', alignItems: 'flex-start', paddingLeft: '20px' }}>
                                                                    <img src={op.image} width="90px" height="auto" alt="optionImage" />
                                                                    <Tooltip title="Remove Image">

                                                                        <IconButton style={{ marginLeft: '-15px', marginTop: '-15px', zIndex: 999, backgroundColor: 'lightgrey', color: 'grey' }}
                                                                            size="small"
                                                                            onClick={() => {
                                                                                updateImageLink("", { question: i, option: j })
                                                                            }}
                                                                        >
                                                                            <CloseIcon />
                                                                        </IconButton>
                                                                    </Tooltip>

                                                                </div>
                                                                <br></br>
                                                                <br></br>
                                                            </div>
                                                        ) : ""
                                                    }
                                                </div>
                                            </div>

                                        </>
                                    ))}
                                </div>


                                {ques.questionType === "mcq" && ques.options.length < 5 ? (
                                    <div>
                                        <FormControlLabel disabled control={<Radio />} label={
                                            <Button size="small" onClick={() => { addOption(i) }} style={{ textTransform: 'none', marginLeft: "-5px" }}>
                                                Add Option
                                            </Button>
                                        } />
                                    </div>

                                ) : ""}

                                <br></br>
                                <br></br>
                                {ques.questionType === "mcq" ? (

                                    <div key={i}>
                                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="demo-simple-select-helper-label">Correct Answer</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                value={ques.answer}
                                                label="Correct Option"
                                                onChange={(e) => { handleCorrectAnswer(e, i) }}
                                            >
                                                {ques.options.map((op, j) => (
                                                    <MenuItem value={op.option}>Option {op.option}</MenuItem>
                                                ))}
                                            </Select>
                                            <FormHelperText>Select the correct answer</FormHelperText>
                                        </FormControl>
                                    </div>
                                ) : ""}

                            </div>
                        </AccordionDetails>

                        <Divider />



                        <AccordionActions>


                            <Tooltip title="Copy Question">

                                <IconButton aria-label="Copy" onClick={() => { copyQuestion(i) }}>
                                    <FilterNoneIcon />
                                </IconButton>
                            </Tooltip>

                            <Divider orientation="vertical" flexItem />
                            <Tooltip title="Delete Question">

                                <IconButton aria-label="delete" onClick={() => { deleteQuestion(i) }}>
                                    <DeleteOutlineIcon />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Hide Question">

                                <IconButton aria-label="View" onClick={() => { showAsQuestion(i) }}>
                                    <VisibilityIcon />
                                </IconButton>
                            </Tooltip>

                        </AccordionActions>
                    </Accordion>

                </div>
            </div >

        ))



    }


    return (
        <div className="body">
            <div style={{ marginTop: '15px', marginBottom: '7px', paddingBottom: "30px" }}>
                <Dialog open={dopen} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit Challenge</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Edit Challenge Name , Descriptiona and Instructions
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Challenge Name"
                            type="text"
                            fullWidth={false}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <br></br>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="description"
                            label="Challenge description"
                            type="text"
                            fullWidth
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                        />
                        <br></br>
                        <br></br>
                        <Typography>Instructions:</Typography>
                        {instructions?.map((ins, i) => (
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
                                value={ins}
                                onChange={(e) => { setIns(e.target.value) }}
                            />
                            <Button color="primary" size="small" startIcon=<AddCircle /> onClick={() => handleAddInstruction()}>
                                ADD
                            </Button>
                        </div>


                    </DialogContent>
                    <DialogActions>

                        <Button color="primary" onClick={() => {
                            setDopen(!dopen)
                        }}>
                            DONE
                        </Button>
                    </DialogActions>
                </Dialog>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    {loadingFormData ? (<CircularProgress />) : ""}

                    <Grid item xs={10} sm={8} md={6} style={{ width: '100%' }}>

                        <Grid style={{ borderTop: '10px solid teal', borderRadius: 10 }}>
                            <div>
                                <div>
                                    <Paper elevation={2} style={{ width: '100%' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '15px', paddingTop: '20px', paddingBottom: '20px' }}>
                                            <Typography variant="h4" style={{ fontFamily: 'sans-serif Roboto', marginBottom: "15px" }}>
                                                {name}
                                            </Typography>
                                            <Typography variant="subtitle1">{description}</Typography>
                                            {instructions?.map((ins, i) => (
                                                <Typography >--{ins}</Typography>
                                            ))}

                                        </div>
                                        <Button variant="contained" color="primary" style={{ margin: '10px' }} onClick={(e) => setDopen(!dopen)}>EDIT</Button>
                                    </Paper>
                                </div>
                            </div>
                        </Grid>


                        <Grid style={{ paddingTop: '10px' }}>
                            <div>
                                <Uploader handleImagePopOpen={openUploadImagePop} handleImagePopClose={() => { setOpenUploadImagePop(false) }} updateImageLink={updateImageLink} updateQuizImage={updateQuizImage} contextData={imageContextData} quizImage={quizimage} />

                                <Paper style={{ width: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '15px', paddingTop: '20px', paddingBottom: '20px' }}>
                                        <Typography style={{ marginTop: '20px' }}>Challenge Image</Typography>
                                        <Tooltip title="Add Image">

                                            <IconButton aria-label="upload image" onClick={() => { uploadQuizImage() }}>
                                                <CropOriginalIcon />
                                            </IconButton>
                                        </Tooltip>

                                    </div>
                                    <div>
                                        {
                                            checkImageHereOrNotForQuestion(quizDetails.quizImage) ? (
                                                <div>
                                                    <div style={{ width: '150px', display: 'flex', alignItems: 'flex-start', paddingLeft: '20px' }}>
                                                        <img src={quizDetails.quizImage} width="150px" height="auto" alt="questionImage" />
                                                        <Tooltip title="Remove Image">

                                                            <IconButton style={{ marginLeft: '-15px', marginTop: '-15px', zIndex: 999, backgroundColor: 'lightgrey', color: 'grey' }}
                                                                size="small"
                                                                onClick={() => {
                                                                    updateQuizImage("")
                                                                }}>
                                                                <CloseIcon />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            ) : ""
                                        }
                                    </div>
                                </Paper>
                                <br></br>
                                <Paper style={{ width: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '15px', paddingTop: '20px', paddingBottom: '20px' }}>
                                        <Typography>Challenge Timer</Typography>
                                        <FormControl>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                                value={timer}
                                                onChange={(e) => setTimer(e.target.value)}
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
                                <br></br>
                                {questionsUI()}
                                <br></br>
                                <Paper style={{ width: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '15px', paddingTop: '20px', paddingBottom: '20px' }}>

                                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="demo-simple-select-helper-label">Attempts</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                value={attempts}
                                                label="Attempts"
                                                onChange={(e) => { setAttempts(e.target.value) }}
                                            >
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                                <MenuItem value={6}>6</MenuItem>
                                                <MenuItem value={7}>7</MenuItem>
                                                <MenuItem value={8}>8</MenuItem>
                                                <MenuItem value={9}>9</MenuItem>
                                                <MenuItem value={10}>10</MenuItem>
                                                <MenuItem value={100000}>UNLIMITED</MenuItem>

                                            </Select>
                                            <FormHelperText>Select the no of attempts for question</FormHelperText>
                                        </FormControl>

                                        <Divider />
                                    </div>
                                </Paper>
                                <br></br>
                                <Paper style={{ width: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '15px', paddingTop: '20px', paddingBottom: '20px' }}>
                                        <Typography style={{ marginTop: '10px' }}>Result</Typography>


                                        <FormControl>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name="radio-buttons-group"
                                                value={result}
                                                onChange={(e) => {
                                                    setResult(e.target.value)
                                                }}

                                            >

                                                <div key="result">
                                                    <div style={{ display: 'flex', marginLeft: '7px' }}>
                                                        <FormControlLabel value="false" control={<Radio />} label="Don't Show Result" />
                                                    </div>
                                                    <div style={{ display: 'flex', marginLeft: '7px' }}>
                                                        <FormControlLabel value="true" control={<Radio />} label="Show Result" />
                                                    </div>
                                                </div>
                                            </RadioGroup>
                                            {result === "true" ? (
                                                <FormControlLabel control={<Checkbox />} checked={showScore} onChange={(e) => {
                                                    setShowScore(!showScore)
                                                }} label="Show Score" color="success" />
                                            ) : ""}
                                        </FormControl>

                                        <Divider />

                                    </div>
                                </Paper>
                                <br></br>

                                <Paper style={{ width: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '15px', paddingTop: '20px', paddingBottom: '20px' }}>
                                        <Typography style={{ marginTop: '10px' }}>Scoring</Typography>
                                        <FormControl>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                                value={scoring}
                                                onChange={(e) => setScoring(e.target.value)}
                                            >
                                                <FormControlLabel value="normal" control={<Radio />} label="Normal Scoring" />
                                                <FormControlLabel value="numerical" control={<Radio />} label="Numerical Scoring" />

                                            </RadioGroup>

                                        </FormControl>
                                        {
                                            scoring === "normal" && resultData.map((data, i) => (

                                                <div key={i}>
                                                    {/* {console.log(resultData[1][0], resultData[0][1])} */}
                                                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '-12.5px', justifyContent: 'space-between', paddingTop: '5px', paddingBottom: '5px', width: "80%", textAlign: "center", margin: "auto" }}>
                                                        <TextField
                                                            required
                                                            label="Score"
                                                            type='number'
                                                            placeholder="start"
                                                            style={{ margin: '5px' }}
                                                            value={data[0]}
                                                            size="small"
                                                            error={i > 0 && resultData[i][0] >= resultData[i - 1][1]}
                                                            helperText={i > 0 && resultData[i][0] >= resultData[i - 1][1] ? "Invalid value" : ""}
                                                            onChange={(e) => {
                                                                handleResultData(e.target.value, i, 0)
                                                            }} />

                                                        <Typography style={{ margin: '10px' }}>to  </Typography>
                                                        <TextField
                                                            required
                                                            type='number'
                                                            placeholder="end"
                                                            style={{ marginTop: '5px' }}
                                                            value={data[1]}
                                                            size="small"
                                                            label="Score"
                                                            error={resultData[i][1] > resultData[i][0]}
                                                            helperText={resultData[i][1] > resultData[i][0] ? "Invalid value" : ""}
                                                            onChange={(e) => {
                                                                handleResultData(e.target.value, i, 1)
                                                            }} />
                                                        <Typography style={{ margin: '10px' }}>  =   </Typography>
                                                        <TextField
                                                            required
                                                            placeholder="grade"
                                                            style={{ marginTop: '5px' }}
                                                            value={data[2]}
                                                            size="small"
                                                            label="Grade"
                                                            onChange={(e) => {
                                                                handleResultData(e.target.value, i, 2)
                                                            }} />
                                                        <Tooltip title="Delete Range">

                                                            <IconButton aria-label="upload image" onClick={() => { deleteRange(i) }}>
                                                                <DeleteOutlineIcon />
                                                            </IconButton>
                                                        </Tooltip>

                                                    </div>



                                                </div>
                                            ))
                                        }

                                        {scoring === "normal" && resultData.length < 5 ? (
                                            <Button size="small" startIcon={<AddCircle />} onClick={addResultData}>
                                                Add Range
                                            </Button>
                                        ) : ""}

                                        {scoring === "numerical" ? (
                                            <>
                                                <Typography style={{ margin: '10px' }}>Attribute Name:</Typography>

                                                <TextField

                                                    required
                                                    id="outlined-required"
                                                    label="Attribute"
                                                    value={numericalAttribute}
                                                    onChange={(e) => {
                                                        setNumericalAttribute(e.target.value)
                                                    }}
                                                />
                                                <br></br>
                                            </>
                                        )
                                            : ""}

                                        {scoring === "numerical" && numericalRange.map((data, i) => (
                                            <>
                                                <Accordion expanded={expanded === 'range' + (i + 1)} onChange={handleChange('range' + (i + 1))} style={{ marginRight: '2%' }}>
                                                    <AccordionSummary expandIcon={<ExpandMore />}
                                                        aria-controls="panel2a-content"
                                                        id="panel2a-header">
                                                        <Typography>Numerical Range {i + 1}</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <div key={i}>
                                                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '-12.5px', justifyContent: 'space-between', paddingTop: '5px', paddingBottom: '5px', width: "80%", textAlign: "center", margin: "auto" }}>
                                                                <Typography style={{ margin: '10px' }}>Numerical:</Typography>

                                                                <TextField
                                                                    required
                                                                    label="Value"
                                                                    type='number'
                                                                    placeholder="start"
                                                                    style={{ margin: '5px' }}
                                                                    value={data.numericalRange[0]}
                                                                    size="small"
                                                                    error={i > 0 && numericalRange[i].numericalRange[0] >= numericalRange[i - 1].numericalRange[1]}
                                                                    helperText={i > 0 && numericalRange[i].numericalRange[0] >= numericalRange[i - 1].numericalRange[1] ? "Invalid value" : ""}
                                                                    onChange={(e) => {
                                                                        handleNumericalRange(e.target.value, i, 0)
                                                                    }} />

                                                                <Typography style={{ margin: '10px' }}>to  </Typography>
                                                                <TextField
                                                                    required
                                                                    type='number'
                                                                    placeholder="end"
                                                                    style={{ marginTop: '5px' }}
                                                                    value={data.numericalRange[1]}
                                                                    size="small"
                                                                    label="Value"
                                                                    error={numericalRange[i].numericalRange[1] > numericalRange[i].numericalRange[0]}
                                                                    helperText={numericalRange[i].numericalRange[1] > numericalRange[i].numericalRange[0] ? "Invalid value" : ""}
                                                                    onChange={(e) => {
                                                                        handleNumericalRange(e.target.value, i, 1)
                                                                    }} />
                                                                <Tooltip title="Delete Range">
                                                                    <IconButton aria-label="upload image" onClick={() => { deleteNumericalRange(i) }}>
                                                                        <DeleteOutlineIcon />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </div>

                                                            <br></br>
                                                            <Typography style={{ margin: '10px' }}>Score Range:</Typography>
                                                            {data.scoreRange.map((score, j) => (
                                                                <div key={j}>
                                                                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '-12.5px', justifyContent: 'space-between', paddingTop: '5px', paddingBottom: '5px', width: "100%", textAlign: "center", margin: "auto" }}>

                                                                        <TextField
                                                                            required
                                                                            label="Score"
                                                                            type='number'
                                                                            placeholder="start"
                                                                            style={{ margin: '5px' }}
                                                                            value={score[0]}
                                                                            size="small"
                                                                            error={j > 0 && numericalRange[i].scoreRange[j][0] >= numericalRange[i].scoreRange[j - 1][1]}
                                                                            helperText={j > 0 && numericalRange[i].scoreRange[j][0] >= numericalRange[i].scoreRange[j - 1][1] ? "Invalid value" : ""}
                                                                            onChange={(e) => {
                                                                                handleScoreRangeNumerical(e.target.value, i, j, 0)
                                                                            }}

                                                                        />

                                                                        <Typography style={{ margin: '10px' }}>to  </Typography>
                                                                        <TextField
                                                                            type='number'
                                                                            required
                                                                            placeholder="end"
                                                                            style={{ marginTop: '5px' }}
                                                                            value={score[1]}
                                                                            size="small"
                                                                            label="Score"
                                                                            error={numericalRange[i].scoreRange[j][1] > numericalRange[i].scoreRange[j][0]}
                                                                            helperText={numericalRange[i].scoreRange[j][1] > numericalRange[i].scoreRange[j][0] ? "Invalid value" : ""}
                                                                            onChange={(e) => {
                                                                                handleScoreRangeNumerical(e.target.value, i, j, 1)
                                                                            }}

                                                                        />
                                                                        <Typography style={{ margin: '10px' }}>  =   </Typography>

                                                                        <TextField
                                                                            type='number'
                                                                            required
                                                                            placeholder="end"
                                                                            style={{ marginTop: '5px' }}
                                                                            value={score[2]}
                                                                            size="small"
                                                                            label="Score"
                                                                            onChange={(e) => {
                                                                                handleScoreRangeNumerical(e.target.value, i, j, 2)
                                                                            }}

                                                                        />

                                                                        <Typography style={{ margin: '10px' }}>  =   </Typography>
                                                                        <TextField
                                                                            required
                                                                            placeholder="grade"
                                                                            style={{ marginTop: '5px' }}
                                                                            value={score[3]}
                                                                            size="small"
                                                                            label="Grade"
                                                                            onChange={(e) => {
                                                                                handleScoreRange(e.target.value, i, j, 3)
                                                                            }}

                                                                        />
                                                                        <Tooltip title="Delete Range">
                                                                            <IconButton aria-label="upload image" onClick={() => { deleteScoreRange(i, j) }}>
                                                                                <DeleteOutlineIcon />
                                                                            </IconButton>
                                                                        </Tooltip>
                                                                    </div>
                                                                </div>
                                                            ))}


                                                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '-12.5px', justifyContent: 'space-between', paddingTop: '5px', paddingBottom: '5px', width: "80%" }}>

                                                                {scoring === "numerical" ? (
                                                                    <Button size="small" startIcon={<AddCircle />} onClick={() => { addScoreRange(i) }}>
                                                                        Add Range
                                                                    </Button>
                                                                ) : ""}
                                                            </div>

                                                        </div>


                                                    </AccordionDetails>
                                                </Accordion>
                                                <br></br>
                                            </>

                                        ))}



                                        {scoring === "numerical" ? (
                                            <Button size="small" startIcon={<AddCircle />} onClick={addNumericalRange}>
                                                Add Range
                                            </Button>
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


                                <Box>
                                    <FormControlLabel
                                        sx={{
                                            display: 'block',
                                        }}
                                        control={
                                            <Switch
                                                checked={visibility}
                                                onChange={() => { setVisibility(!visibility) }}
                                                name="loading"
                                                color="primary"
                                            />
                                        }
                                        label={<Typography variant='h6' style={{ color: "white" }}>Challenge Visibility</Typography>
                                        }
                                    />
                                </Box>



                                <div>
                                    <Button
                                        variant="contained"

                                        onClick={addMoreQuestionFieldMCQ}
                                        endIcon={<AddCircleIcon />}
                                        style={{ margin: '5px' }}
                                    >Add MCQ </Button>

                                    <Button
                                        variant="contained"

                                        onClick={addMoreQuestionFieldTEXT}
                                        endIcon={<AddCircleIcon />}
                                        style={{ margin: '5px' }}
                                    >Add TextField </Button>
                                    {recording === "none" ? (<Button
                                        variant="contained"

                                        onClick={addMoreQuestionFieldAUDIO}
                                        endIcon={<AddCircleIcon />}
                                        style={{ margin: '5px' }}
                                    >Add AudioQue </Button>
                                    ) : ""}

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={saveQuestions}
                                        style={{ margin: '15px' }}
                                        endIcon={<SaveIcon />}
                                    >Save Questions </Button>
                                    <Button variant="contained" color="secondary" href="/myChallenges" >Back</Button>

                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Snackbar
                    open={open}
                    onClose={handleClose}
                    message="Questions Updated"
                    key={"center bottom"}
                    autoHideDuration={5000}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                >
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Questions Updated
                    </Alert>
                </Snackbar>
            </div>
        </div>

    );
}
export default Questions

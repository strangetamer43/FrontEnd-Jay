import React from 'react'
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

import Divider from '@material-ui/core/Divider';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import Uploader from '../ImageUpload/Uploader';


const IndQuestion = (props) => {

    const [questions, setQuestions] = React.useState(props.questions);

    const [i, setI] = React.useState(props.i)
    const [openUploadImagePop, setOpenUploadImagePop] = React.useState(false);
    const [imageContextData, setImageContextData] = React.useState({ question: null, option: null });
    const [quizDetails, setQuizDetails] = React.useState({});
    const [quizimage, setQuizImage] = React.useState(false);
    const [timer, setTimer] = React.useState("individual")
    const [instructions, setInstructions] = React.useState()
    const [terms, setTerms] = React.useState(false)
    const [minutes, setMinutes] = React.useState()
    const [seconds, setSeconds] = React.useState()
    const [recording, setRecoring] = React.useState("none")







    React.useEffect(() => {


        setQuizDetails(props.formData)
        setTimer(props?.timer)
        setInstructions(props.formData?.instructions)
        setTerms(props?.formData?.terms ? props?.formData?.terms : terms)
        setQuestions(props.questions)




    }, [props, terms])






    const checkImageHereOrNotForQuestion = (gg) => {
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

    const handleQuestionValue = (text, i) => {
        var optionsOfQuestion = [...questions];
        optionsOfQuestion[i].question = text;
        setQuestions(optionsOfQuestion);
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



    function handleAudio(i) {
        var optionsOfQuestion = [...questions];
        optionsOfQuestion[i].multipleAudio = !optionsOfQuestion[i].multipleAudio;
        //newMembersEmail[i]= email;
        setQuestions(optionsOfQuestion);
    }
    return (
        <div>
            <div style={{ marginBottom: "15px" }}>


                <Accordion onChange={() => { handleExpand(i) }} expanded={questions[i]?.open}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        elevation={1} style={{ width: '100%' }}
                        className="summary"
                    >

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '3px', paddingTop: '15px', paddingBottom: '15px' }}>
                            {/* <TextField id="standard-basic" label=" " value="Question" InputProps={{ disableUnderline: true }} />  */}

                            <Typography variant="subtitle1" style={{ marginLeft: '0px' }}>{i + 1}.{questions[i].question}</Typography>


                            {questions[i].qImage !== "" ? (
                                <div>
                                    <img src={questions[i].qImage} alt="questionimage" width="300px" height="auto" /><br></br><br></br>
                                </div>
                            ) : ""}
                            {questions[i].questionType === "mcq" && questions[i].options.map((op, j) => (

                                <div key={j}>
                                    <div style={{ display: 'flex' }}>
                                        <FormControlLabel disabled control={<Radio style={{ marginRight: '3px', }} />} label={
                                            <Typography style={{ color: '#555555' }}>
                                                {questions[i].options[j].option}
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
                                    value={questions[i].question}
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
                                    checkImageHereOrNotForQuestion(questions[i].qImage) ? (
                                        <div>
                                            <div style={{ width: '150px', display: 'flex', alignItems: 'flex-start', paddingLeft: '20px' }}>
                                                <img src={questions[i].qImage} width="150px" height="auto" alt="questionImage" />
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
                                                    value={questions[i].duration.minutes}
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
                                                    value={questions[i].duration.seconds}
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

                            {questions[i].questionType === "text" ? (

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
                                questions[i].questionType === "audio" ? (
                                    <>
                                        <FormControlLabel control={<Checkbox />} checked={questions[i].multipleAudio} onChange={() => handleAudio(i)} label="Multiple Audio Record" color="success" />
                                    </>
                                ) : ""
                            }



                            <div style={{ width: '100%' }}>

                                {questions[i].questionType === "mcq" && questions[i].options.map((op, j) => (
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


                            {questions[i].questionType === "mcq" && questions[i].options.length < 5 ? (
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
                            {questions[i].questionType === "mcq" ? (

                                <div key={i}>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-helper-label">Correct Answer</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={questions[i].answer}
                                            label="Correct Option"
                                            onChange={(e) => { handleCorrectAnswer(e, i) }}
                                        >
                                            {questions[i].options.map((op, j) => (
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

                            <IconButton aria-label="Copy" onClick={() => { props.copyQuestion(i) }}>
                                <FilterNoneIcon />
                            </IconButton>
                        </Tooltip>

                        <Divider orientation="vertical" flexItem />
                        <Tooltip title="Delete Question">

                            <IconButton aria-label="delete" onClick={() => { props.deleteQuestion(i) }}>
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
                <Uploader handleImagePopOpen={openUploadImagePop} handleImagePopClose={() => { setOpenUploadImagePop(false) }} updateImageLink={updateImageLink} updateQuizImage={updateQuizImage} contextData={imageContextData} quizImage={quizimage} />


            </div>
        </div >

    )
}

export default IndQuestion;
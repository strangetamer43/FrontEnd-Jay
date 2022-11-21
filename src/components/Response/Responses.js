import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import { getResponseByQuizId } from '../../APIServices/ResponseAPI';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Paper, Container, Button } from '@material-ui/core';
import Form from 'react-bootstrap/Form';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import { getResponseByUserName } from '../../APIServices/ResponseAPI';




const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Responses = (props) => {
    const classes = useStyles();

    const [quizDetails, setQuizDetails] = React.useState({});
    const [responseData, setResponseData] = React.useState([]);
    const [questions, setQuestions] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [expanded, setExpanded] = React.useState('');

    const [searchValue, setSearchValue] = React.useState("");



    const search = (value) => {

        getResponseByUserName(value)
            .then((data) => {
                console.log(data);
                setResponseData(data.data)
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



    React.useEffect(() => {
        if (props.formData) {
            // console.log(props.formData.questions.length);
            setQuestions(props.formData.questions)

            setQuizDetails(props.formData)
        }
        var quizId = props.quizId

        if (quizId !== undefined && quizId !== "") {
            getResponseByQuizId(quizId)
                .then((data) => {
                    setResponseData(data.data)
                    setLoading(false)
                    console.log(data)
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
    }, [props.quizId, props.formData]);


    function getSelectedOption(qId, i, j) {
        var oneResData = responseData[j];
        //console.log(oneResData);

        var selectedOp = oneResData.response.filter(qss => qss.questionId === qId);

        if (selectedOp.length > 0) {

            var finalOption = selectedOp[0].option;
            return finalOption;
        } else {
            return "not attempted";
        }


        // return selectedOp[0].optionId;
        //this.students.filter(stud => stud.Class==className);
    }

    // function getOptionTextById(optionId, questionId, i){
    // var finalOption = questions[i].options.find(oo => oo._id === optionId);
    // return finalOption.optionText
    // }



    return (
        <>
            {loading ? (<CircularProgress />) : (
                <>
                    <Container className={classes.cardGrid} maxWidth="lg" style={{ marginTop: "30px" }}>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="User Name"
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
                                <Button variant="contained" color="secondary" href={"/myChallenges/" + props.quizId}>
                                    ALL
                                </Button>
                            </>
                        </Form>
                    </Container>
                    <div style={{ margin: "30px" }}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={10} sm={8} md={8} style={{ width: '100%' }}>

                                <Grid style={{ borderRadius: 10 }}>
                                    {
                                        responseData.map((res, i) => (
                                            <>
                                                <Paper elevation={2} style={{ width: '100%' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '15px', paddingTop: '20px', paddingBottom: '20px' }}>

                                                        <Typography variant='h5' >
                                                            <b>{"Name : " + res.userName}    {" | Total Score : " + res.correctAnswers}</b>
                                                        </Typography>
                                                        <br></br>
                                                        <Typography sx={{ color: 'text.secondary' }}></Typography>
                                                        {questions.map((ques, j) => (
                                                            <>
                                                                <Typography key={j} variant="h6">{"Question : " + ques.question}</Typography>
                                                                <Typography key={j} variant="h6">{"Answer : "}{getSelectedOption(ques._id, j, i)}</Typography>
                                                                <br></br>
                                                            </>

                                                        ))}
                                                    </div>
                                                </Paper>
                                                <br></br>
                                            </>

                                        ))
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>

                </>
            )
            }


        </>


    )
};
export default Responses



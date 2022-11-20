import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Button, Typography } from '@material-ui/core';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Questions from '../CreateChallenge/Questions';
import Response from '../Response/Responses';
import ArrowBack from "@material-ui/icons/ArrowBack"
import { IconButton } from '@material-ui/core';
import { getQuizById } from '../../APIServices/QuestionAPI';
import { useParams } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        //paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
        justifySelf: 'center',
        alignContent: 'center',
        marginRight: '200px'


    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        display: 'flex',
        alignContent: 'space-between',
        alignItems: 'center'
    },
    body: {
        background: "black"
    }

}));



const ShowMyQuiz = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem("profile")).obj ? JSON.parse(localStorage.getItem("profile")).obj : JSON.parse(localStorage.getItem("profile")).result)
    const [quizId, setQuizId] = React.useState("");


    const [quizDetails, setQuizDetails] = React.useState({});
    const [openOfAlert, setOpenOfAlert] = React.useState(false);



    const params = useParams();


    React.useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")).obj ? JSON.parse(localStorage.getItem("profile")).obj : JSON.parse(localStorage.getItem("profile")).result)
    }, [])









    const handleChange = (event, newValue) => {
        setValue(newValue);
    };




    React.useEffect(() => {
        var quizId = params.quizId
        if (quizId !== undefined) {
            setQuizId(quizId)
            getQuizById(quizId)
                .then((data) => {
                    // console.log(data);     
                    setQuizDetails(data.data)
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
    }, [params.quizId]);


    return (
        <div>
            {quizDetails.createdBy === user._id ? (
                <div>
                    <div className={classes.root}>
                        <AppBar position="static" style={{ backgroundColor: 'white' }} elevation={2}>
                            <Toolbar className={classes.toolbar}>

                                <Typography variant="h5" noWrap style={{ marginTop: '8.5px', color: 'black' }} >

                                    <IconButton aria-label="View" href="/myChallenges">
                                        <ArrowBack />
                                    </IconButton>
                                    &nbsp;{quizDetails.quizName}
                                </Typography>

                                <Tabs
                                    className={classes.title}
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered
                                >
                                    <Tab label="Questions" />
                                    <Tab label="Responses" />
                                </Tabs>

                            </Toolbar>
                        </AppBar>
                    </div>


                    <div>
                        <TabPanel value={value} index={0}>
                            <Questions formData={quizDetails} />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Response formData={quizDetails} quizId={quizId} />
                        </TabPanel>
                    </div>
                </div>
            ) : (
                <p>you're not the owner of the form</p>
            )}
        </div>
    );
}

export default ShowMyQuiz;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};




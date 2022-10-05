import React from "react";
import useStyles from "./styles";
import { Grid, CircularProgress, Paper, Typography } from "@material-ui/core";
import Question from './Question/Question';
import { useSelector } from "react-redux";
import { Marginer } from "../Auth/Marginer";
import Formbar from "../FormBar/FormButton";

const Questions = ({ setCurrentId }) => {
    const { questions, isLoading } = useSelector((state) => state.questions);
    const classes = useStyles();
    if (!questions.length && !isLoading) return (
        <div style={{ marginLeft: '130px' }}>
            <Formbar />
            <Paper className={classes.paper} style={{ marginLeft: '50px' }}>
                <Typography variant='h5' align='center'>
                    Please use the Button above to create a Question!!
                </Typography>
            </Paper>
        </div>
    );

    return (
        isLoading ? <CircularProgress /> : (

            <Grid className={classes.container1} container alignItems="stretch" spacing={8}>

                <Marginer direction="vertical" margin="75px" />
                <Formbar />
                {questions.map((question) => (
                    <Grid key={question._id} item xs={12} md={12} sm={12}>
                        <Question question={question} setCurrentId={setCurrentId} />

                    </Grid>
                ))}

            </Grid>

        )
    );

}

export default Questions;
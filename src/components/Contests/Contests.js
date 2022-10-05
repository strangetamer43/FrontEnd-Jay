import React from "react";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";
import Contest from './Contest/Contest';
import { useSelector } from "react-redux";
import { Marginer } from "../Auth/Marginer";
import Formbar from "../FormBar/FormButtonC";

const Contests = ({ setCurrentId }) => {
    const { contests, isLoading } = useSelector((state) => state.contests || {});

    const classes = useStyles();


    return (
        isLoading ? <CircularProgress /> : (

            <Grid className={classes.container1} container alignItems="stretch" spacing={8}>

                <Marginer direction="vertical" margin="75px" />
                <Formbar />
                {contests?.map((contest) => (
                    <Grid key={contest._id} item xs={12} md={12} sm={12} >
                        <Contest contest={contest} setCurrentId={setCurrentId} />

                    </Grid>
                ))}

            </Grid>

        )
    );

}

export default Contests;
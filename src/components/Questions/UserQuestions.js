import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button} from '@material-ui/core';
import { useNavigate, useLocation } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Formbar from '../FormBar/FormButton';
import { getUserQuestions } from '../../actions/questions';
import { Marginer } from "../Auth/Marginer";
import Questions from '../Questions/Questions';

import "../../App.css";
import useStyles from './styles'; 

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const QuestionsOfUser = () => {
  const [currentId, setCurrentId] = useState(null);
  const {question, questions, isLoading} = useSelector((state) => state.questions);
  const query = useQuery();
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const searchQuery = query.get('searchQuery');
  useEffect(() => {
    dispatch(getUserQuestions());
  }, [currentId, dispatch]);
  
  if(questions.length === 0 && !isLoading) { 
    return (
        <div style={{ marginLeft: "135px" }}>
        <Formbar/>
        <Paper className={classes.paper}>
            <Typography variant='h5' align='center'>
                Please use the Button above to create your first Question!!
            </Typography>
        </Paper>
        </div>
    );

    
}
  
  
  return (
    <>
    
        
        <Grow in>
          <Container maxWidth='xl' >
          
            <Grid contianer position= "absolute" justify="space-between" alignItems="stretch" Spacing={3} className={classes.gridContainer}>
              <Grid item xs={12} sm={6} md={12} >
                <Questions setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>

        </Grow>
        
        
    </>
  );
};

export default QuestionsOfUser;
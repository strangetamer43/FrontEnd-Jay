import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button} from '@material-ui/core';
import { useNavigate, useLocation } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';
import { useDispatch } from "react-redux";
import { getQuestions, getQuestionsBySearch } from '../../actions/questions';
import { Marginer } from "../Auth/Marginer";
import Questions from '../Questions/Questions';
import Header from "../../Header";
import FormQ from '../Form/FormQ';
import "../../App.css";
import useStyles from './styles'; 

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const QuestionFeed = () => {
  const [currentId, setCurrentId] = useState(null);
  const query = useQuery();
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const searchQuery = query.get('searchQuery');
  useEffect(() => {
    dispatch(getQuestions());
  }, [currentId, dispatch]);
  
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const searchQuestion = () => {
    if(search.trim() || tags) {
      dispatch(getQuestionsBySearch({ search, tags: tags.join(',') }));
      navigate(`/questions/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate('/questions');
    }
  };
  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      searchQuestion();
    }
  };
  const handleAdd = (tag) => setTags([ ...tags, tag]);
  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete)); 
  
  
  return (
    <>
    
    
        <Grow in>
          <Container maxWidth='xl' >
          
          <Paper className={classes.appBarSearch} postition='static' color='inherit'>
                  <TextField className={classes.searchBar} onKeyPress={handleKeyPress} label='Search Questions' InputLabelProps={{style: {color: '#25b8ef', marginLeft: '1vh'}}} InputProps={{ disableUnderline: true, style: {color: 'rgba(37, 184, 239, 1)', marginLeft: '1vh', marginRight: '1vh'}}}  value={search} onChange={(e) => setSearch(e.target.value)}/>
                  <ChipInput className={classes.searchBar} InputProps={{ disableUnderline: true, style: {color: 'rgba(37, 184, 239, 1)', marginLeft: '1vh'}}} style={{ margin: '10px 0' }} InputLabelProps={{style: {color: '#25b8ef', marginLeft: '1vh', marginRight: '1vh'}}} value={tags} onAdd={handleAdd} onDelete={handleDelete} label="Search Using Skills" />
                  <Button onClick={searchQuestion} className={classes.searchButton} > Search</Button>
          </Paper>
           <div className={classes.questions}>
            <Grid contianer position= "absolute" justify="space-between" alignItems="stretch" Spacing={3} className={classes.gridContainer}>
              <Grid item xs={12} sm={12} md={8  } >
                <Questions setCurrentId={setCurrentId}/>
              
              
            </Grid>
            </Grid>
            </div>
          </Container>

        </Grow>
        
        
    </>
  );
};

export default QuestionFeed;
import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button} from '@material-ui/core';
import { useNavigate, useLocation } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';
import { useDispatch } from "react-redux";
import { getContests, getContestsBySearch } from '../../actions/contests';
import { Marginer } from "../Auth/Marginer";
import Contests from '../Contests/Contests';
import FormQ from '../Form/FormQ';
import "../../App.css";
import useStyles from './styles'; 

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ContestFeed = () => {
  const [currentId, setCurrentId] = useState(null);
  const query = useQuery();
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const searchQuery = query.get('searchQuery');
  useEffect(() => {
    dispatch(getContests());
  }, [currentId, dispatch]);
  
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const searchContest = () => {
    if(search.trim() || tags) {
      dispatch(getContestsBySearch({ search, tags: tags.join(',') }));
      navigate(`/contests/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate('/contests');
    }
  };
  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      searchContest();
    }
  };
  const handleAdd = (tag) => setTags([ ...tags, tag]);
  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete)); 
  
  
  return (
    <>
    
    
        <Grow in>
          <Container maxWidth='xl' >
          
          <Paper className={classes.appBarSearch}>
                  <TextField name='search'  onKeyPress={handleKeyPress} className={classes.searchBar} InputLabelProps={{style: {color: '#25b8ef', marginLeft: '1vh'}}} InputProps={{ disableUnderline: true, style: {color: 'rgba(37, 184, 239, 1)', marginLeft: '1vh', marginRight: '1vh'}}} label='Search Contests' value={search} onChange={(e) => setSearch(e.target.value)}/>
                  <ChipInput style={{ margin: '10px 0' }}  className={classes.searchBar} value={tags} onAdd={handleAdd} onDelete={handleDelete} InputLabelProps={{style: {color: '#25b8ef', marginLeft: '1vh'}}} InputProps={{ disableUnderline: true, style: {color: 'rgba(37, 184, 239, 1)', marginLeft: '1vh', marginRight: '1vh'}}} label="Search Using Skills required" />
                  <Button onClick={searchContest} className={classes.searchButton}> Search</Button>
                </Paper>
            <Grid contianer position= "absolute" justify="space-between" alignItems="stretch" Spacing={3} className={classes.gridContainer}>
              <Grid item xs={12} sm={6} md={9} >
                <Contests setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
              
              </Grid>
            </Grid>
          </Container>

        </Grow>
        
        
    </>
  );
};

export default ContestFeed;
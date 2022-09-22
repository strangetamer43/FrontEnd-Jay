import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button, Input} from '@material-ui/core';
import { useNavigate, useLocation } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';
import { useDispatch } from "react-redux";
import { getPosts, getPostsBySearch } from '../../actions/posts';
import { Marginer } from "../Auth/Marginer";
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Helper from '../Helper/Helper';
import axios from 'axios';
import useStyles from './styles'; 
import { fetchTopUsers } from "../../api/analysis";
import Top5Posts from './Top5Posts';
import Leaderboard from './Leaderboard';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ContentFeed = () => {
  const [currentId, setCurrentId] = useState(null);
  
  const query = useQuery();
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const searchQuery = query.get('searchQuery');
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);
    
  
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const searchPost = () => {
    if(search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      navigate(`/feed/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate('/feed');
    }
  };
  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      searchPost();
    }
  };
  const handleAdd = (tag) => setTags([ ...tags, tag]);
  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete)); 
  
  
  return (
    <>
    
    
        <Grow in>
          <Container maxWidth='xl' >
          
          <div style={{ display: 'flex', flexDirection: 'row'}}>
          <Paper className={classes.appBarSearch}  color='inherit'>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                  <TextField className={classes.searchBar}  name='search'  onKeyPress={handleKeyPress} InputLabelProps={{style: {color: '#25b8ef', marginLeft: '1vh'}}} InputProps={{ disableUnderline: true, style: {color: 'rgba(37, 184, 239, 1)', marginLeft: '1vh', marginRight: '1vh'}}} label='Search Posts' value={search} onChange={(e) => setSearch(e.target.value)}/>
                  <ChipInput className={classes.searchBar1} InputProps={{ disableUnderline: true, style: {color: 'rgba(37, 184, 239, 1)', marginLeft: '1vh', marginRight: '1vh'}}} value={tags} onAdd={handleAdd} InputLabelProps={{style: {color: '#25b8ef', marginLeft: '1vh'}}} onDelete={handleDelete} label="Search Using Skills(press enter)"/>
                 </div>
                  <Button onClick={searchPost}  className={classes.button} variant='contained'> Search</Button>
                  
                </Paper>
                
            
            </div>

            <Leaderboard/>
                <Helper/>
            <Grid contianer position= "absolute" justify="space-between" alignItems="stretch" Spacing={3} className={classes.gridContainer}>
              <Grid item xs={12} sm={6} md={9} >
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
              
            </Grid>
            
          </Container>
          
        </Grow>
        
        
    </>
  );
};

export default ContentFeed;
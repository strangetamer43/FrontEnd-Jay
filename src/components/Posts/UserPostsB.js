import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button} from '@material-ui/core';
import { useNavigate, useLocation } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Formbar from '../FormBar/FloatingButtonForm';
import { getUserPosts } from '../../actions/posts';
import { Marginer } from "../Auth/Marginer";
import Posts1 from '../Posts/Posts1';

import "../../App.css";
import useStyles from './styles'; 

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PostsOfUser = ({ currentId, setCurrentId, show = true }) => {
  const {post, posts, isLoading} = useSelector((state) => state.posts);
  
  const query = useQuery();
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const searchQuery = query.get('searchQuery');
  useEffect(() => {
    dispatch(getUserPosts(currentId));
  }, [currentId, dispatch]);
  
  if (posts.length === 0 && !isLoading && show) { 
    return (
        <div style={{ marginLeft: '130px'}}>
        <Formbar />
        <Paper className={classes.paper} style={{ marginTop: '10px'}}>
            <Typography variant='h5' align='center'>
                Please use the Button above to create your first Post!!
            </Typography>
        </Paper>
        </div>
    );

    
}
  
  
  return (
    <>
    
        
        <Grow in>
          <Container maxWidth='lg' >
          
            <Grid contianer justify="space-between" alignItems="stretch" Spacing={3} className={classes.gridContainer1} >
              <Grid item xs={12} sm={12} md={12} >
              <Posts1 setCurrentId={setCurrentId} show={show} />
              </Grid>
            </Grid>
          </Container>

        </Grow>
        
        
    </>
  );
};

export default PostsOfUser;
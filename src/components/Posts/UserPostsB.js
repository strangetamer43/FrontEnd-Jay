import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button} from '@material-ui/core';
import { useNavigate, useLocation } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Formbar from '../FormBar/FloatingButtonForm';
import { getUserPosts } from '../../actions/posts';
import { Marginer } from "../Auth/Marginer";
import Posts from '../Posts/Posts';

import "../../App.css";
import useStyles from './styles'; 

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PostsOfUser = () => {
  const [currentId, setCurrentId] = useState(null);
  const {post, posts, isLoading} = useSelector((state) => state.posts);
  
  const query = useQuery();
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const searchQuery = query.get('searchQuery');
  useEffect(() => {
    dispatch(getUserPosts());
  }, [currentId, dispatch]);
  
  if(posts.length === 0 && !isLoading) { 
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
          <Container maxWidth='xl' >
          
            <Grid contianer position= "absolute" justify="space-between" alignItems="stretch" Spacing={3} className={classes.gridContainer}>
              <Grid item xs={12} sm={12} md={12} >
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>

        </Grow>
        
        
    </>
  );
};

export default PostsOfUser;
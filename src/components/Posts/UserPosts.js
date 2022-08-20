import React,{useState, useEffect} from "react";
import useStyles from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { TextField, Button, Typography, Paper, Container } from "@material-ui/core";
import { Grid, CircularProgress } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts} from '../../actions/posts';
import Post from './Post/Post';
import { useSelector } from "react-redux";
import Formbar from '../FormBar/FloatingButtonForm';
import { Marginer } from "../Auth/Marginer";



const UserPosts = () => {
    
    const {post, posts, isLoading} = useSelector((state) => state.posts);
    const [filteredList, setFilteredList] = useState(posts);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [currentId, setCurrentId] = useState(null);
    const userId = user?.result?.googleId || user?.result?._id;
    console.log(userId);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const filterPosts = (filteredData) => {
        
        if (!userId) {
          return filteredData;
        }
        const filteredPosts = filteredData.filter(
            (post) => post.creator === userId
          );
          return filteredPosts;
          
        };
    useEffect(() => {
        

       
            const filteredData = filterPosts(posts);
    
            setFilteredList(filteredData);
            }, [post]);
    const classes = useStyles();
   
    console.log(filteredList);
    
    if(filteredList.length === 0 && !isLoading) { 
        return (
            <div>
            <Formbar/>
            <Paper className={classes.paper}>
                <Typography variant='h5' align='center'>
                    Please use the Button above to create your first Post!!
                </Typography>
            </Paper>
            </div>
        );
    
        
    }
    return (
        isLoading ? <CircularProgress /> : (
            
            <Grid className={classes.container} container alignItems="stretch" spacing={8}>
                
                <Marginer direction="vertical" margin="75px" />
                
                {filteredList.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} >
                        <Post post={post} setCurrentId={setCurrentId} />

                    </Grid>
                ))}
                
            </Grid>
            
        )
    );
    
}

export default UserPosts;
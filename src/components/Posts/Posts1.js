import React,{useState} from "react";
import useStyles from "./styles";
import { Grid, CircularProgress, Paper, Typography } from "@material-ui/core";
import Post from './Post/Post';
import { useSelector } from "react-redux";

import { Marginer } from "../Auth/Marginer";
import Formbar1 from "../FormBar/FloatingButtonForm1";

const Posts1 = ({ setCurrentId, show }) => {
    const {posts, isLoading} = useSelector((state) => state.posts);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [creator, setCreator] = useState(null);
    const userId = user?.result?.googleId || user?.result?._id;
    const classes = useStyles();
    
    
    if(!posts.length && !isLoading  && show) return (
        <div>
        <Formbar/>
        <Paper className={classes.paper}>
            <Typography variant='h5' align='center'>
                Please use the Button above to create a Post!!
            </Typography>
        </Paper>
        </div>
    );
    
    return (
        isLoading ? <CircularProgress /> : (
            
            <Grid className={classes.container1} container alignItems="stretch" spacing={8}>
                
                <Marginer direction="vertical" margin="75px" />
                {show ? (<Formbar1 />) : ""}
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} >
                        <Post post={post} setCurrentId={setCurrentId} />

                    </Grid>
                ))}
                
            </Grid>
            
        )
    );
    
}

export default Posts1;
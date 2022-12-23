import React, {useState, useRef } from 'react';
import { Typography, TextField, Button, Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../actions/posts';

import useStyles from './styles';

const CommentSection = ({ post }) => {
    const classes = useStyles();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment ] = useState('');
    const dispatch = useDispatch();
    const commentsRef = useRef(); 
    const user = JSON.parse(localStorage.getItem('profile'));
    const handleClick = async () => {
        const finalComment = { value: `${user.result.name}: ${comment}`, userID: user?.result?._id, name: user?.result?.name, profile: user?.result?.imageUrl };

        const newComments = await dispatch(commentPost(finalComment, post._id));
        setComments(newComments);
        setComment('');
        commentsRef.current.scrollIntoView({ behaviour: 'smooth'});
    };

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography className={classes.comments} gutterBottom varaint="h6">Comments...</Typography>
                    {comments?.map((c, i) => (
                        <>
                        <Avatar sx={{ width: 10, height: 10 }} className={classes.purple} alt={post.name} src={c.profile}></Avatar>
                        <Typography className={classes.comments} key={i} gutterBottom varaint="subtitle1">
                            <typography className={classes.nameComments} >{c.value}</typography>
                        </Typography>
                    </>
                    ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name && (
                    <div className={classes.commentOut}>
                        <typography className={classes.comments} gutterBottom varaint="h6">Write a comment</typography>
                        <TextField
                            fullWidth
                            rows={3}
                            
                            label='Comment here...'
                            multiline
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className={classes.commentField}
                            InputLabelProps={{style: {color: '#25b8ef', marginLeft: '1vh', marginTop: '0.5vh'}}}
                            InputProps={{ style: {color: 'rgba(37, 184, 239, 1)', margin: '0vh 1vh 0vh 1vh'}}}
                        />
                        <Button style={{ marginTop: '2vh'}} className={classes.commentButton} fullWidth  disabled={!comment} variant="contained" onClick={handleClick}>
                            Comment
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentSection;
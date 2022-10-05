import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../actions/posts';

import useStyles from './styles';

const CommentSection = ({ post }) => {
    const classes = useStyles();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const commentsRef = useRef();
    const user = JSON.parse(localStorage.getItem('profile'));
    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`;

        const newComments = await dispatch(commentPost(finalComment, post._id));
        setComments(newComments);
        setComment('');
        commentsRef.current.scrollIntoView({ behaviour: 'smooth' });
    };

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography className={classes.comments} gutterBottom varaint="h6">Comments...</Typography>
                    {comments?.map((c, i) => (
                        <Typography className={classes.comments} key={i} gutterBottom varaint="subtitle1">
                            <typography className={classes.nameComments} >{c.split(': ')[0]}</typography>:{c.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name && (
                    <div style={{ width: '70%' }}>
                        <typography className={classes.comments} gutterBottom varaint="h6">Write a comment</typography>
                        <TextField
                            fullWidth
                            rows={3}
                            placeholder='Comment Here....'
                            multiline
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className={classes.commentField}
                            InputLabelProps={{ style: { color: '#25b8ef' } }}
                            InputProps={{ style: { color: 'rgba(37, 184, 239, 1)' } }}
                        />
                        <Button style={{ marginTop: '2vh' }} className={classes.commentButton} fullWidth disabled={!comment} variant="contained" onClick={handleClick}>
                            Comment
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentSection;
import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { commentContest } from '../../actions/contests';

import useStyles from './styles';

const CommentSection = ({ contest }) => {
    const classes = useStyles();
    const [comments, setComments] = useState(contest?.comments);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const commentsRef = useRef();
    const user = JSON.parse(localStorage.getItem('profile'));
    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`;

        const newComments = await dispatch(commentContest(finalComment, contest._id));
        setComments(newComments);
        setComment('');
        commentsRef.current.scrollIntoView({ behaviour: 'smooth' });
    };

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography className={classes.comments} gutterBottom varaint="h6">Comments</Typography>
                    {comments.map((c, i) => (
                        <Typography className={classes.comments} key={i} gutterBottom varaint="subtitle1">
                            <strong className={classes.nameComments}>{c.split(': ')[0]}</strong>:{c.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name && (
                    <div style={{ width: '70%' }}>
                        <Typography className={classes.comments} gutterBottom varaint="h6">Write a comment</Typography>
                        <TextField
                            fullWidth
                            rows={3}
                            variant="outlined"
                            label='Comment'
                            multiline
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className={classes.commentField}

                            InputLabelProps={{ style: { color: '#25b8ef' } }}
                            InputProps={{ style: { color: 'rgba(37, 184, 239, 1)' } }}
                        />
                        <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment} variant="contained" color="primary" onClick={handleClick}>
                            Comment
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentSection;
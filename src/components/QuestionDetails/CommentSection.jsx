import React, {useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { commentQuestion } from '../../actions/questions';

import useStyles from './styles';

const CommentSection = ({ question }) => {
    const classes = useStyles();
    const [comments, setComments] = useState(question?.comments);
    const [comment, setComment ] = useState('');
    const dispatch = useDispatch();
    const commentsRef = useRef(); 
    const user = JSON.parse(localStorage.getItem('profile'));
    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`;

        const newComments = await dispatch(commentQuestion(finalComment, question._id));
        setComments(newComments);
        setComment('');
        commentsRef.current.scrollIntoView({ behaviour: 'smooth'});
    };

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <typography className={classes.comments}>Comments...</typography>
                    {comments.map((c, i) => (
                        <Typography  className={classes.comments} key={i} gutterBottom varaint="subtitle1">
                            <strong>{c.split(': ')[0]}</strong>:{c.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name && (
                    <div style={{ width:'50%'}}>
                        <typography className={classes.comments}>Write a comment</typography>
                        <TextField
                            fullWidth
                            rows={3}
                            
                            label='Comment'
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
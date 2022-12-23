import React, {useState, useRef } from 'react';
import { Typography, TextField, Button, Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { commentContest } from '../../actions/contests';

import useStyles from './styles';

const CommentSection = ({ contest }) => {
    const classes = useStyles();
    const [comments, setComments] = useState(contest?.comments);
    const [comment, setComment ] = useState('');
    const dispatch = useDispatch();
    const commentsRef = useRef(); 
    const user = JSON.parse(localStorage.getItem('profile'));
    const handleClick = async () => {
        const finalComment = { value: `${user.result.name}: ${comment}`, userID: user?.result?._id, name: user?.result?.name, profile: user?.result?.imageUrl };

        const newComments = await dispatch(commentContest(finalComment, contest._id));
        setComments(newComments);
        setComment('');
        commentsRef.current.scrollIntoView({ behaviour: 'smooth'});
    };

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom varaint="h6">Comments</Typography>
                    {comments?.map((c, i) => (
                        <>
                            <Avatar sx={{ width: 10, height: 10 }} className={classes.purple} alt={contest.name} src={c.profile}></Avatar>
                            <Typography className={classes.comments} key={i} gutterBottom varaint="subtitle1">
                                <typography className={classes.nameComments} >{c.value}</typography>
                            </Typography>
                        </>
                    ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name && (
                    <div style={{ width:'70%'}}>
                        <Typography gutterBottom varaint="h6">Write a comment</Typography>
                        <TextField
                            fullWidth
                            rows={3}
                            variant="outlined"
                            label='Comment'
                            multiline
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Button style={{ marginTop: '10px'}} fullWidth  disabled={!comment} variant="contained" color="primary" onClick={handleClick}>
                            Comment
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentSection;
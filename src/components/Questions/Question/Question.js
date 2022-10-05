import React, { useState } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Modal, ButtonBase, Avatar, Paper } from '@material-ui/core';

import * as GoIcons from 'react-icons/go';
import * as ImIcons from 'react-icons/im';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useStyles from "./styles";
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteQuestion, likeQuestion, disLikeQuestion } from "../../../actions/questions";
import { useNavigate } from 'react-router-dom';

const Question = ({ question, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const navigate = useNavigate();
    const [likes, setLikes] = useState(question?.likes);
    const [disLikes, setDisLikes] = useState(question?.disLikes);
    const [comments, setComments] = useState(question?.comments);
    const userId = user?.result?.googleId || user?.result?._id;
    const hasLikedQuestion = question.likes.find((like) => like === (userId));
    const hasDisLikedQuestion = question.disLikes.find((disLike) => disLike === (userId));
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleLike = async () => {
        dispatch(likeQuestion(question._id));
        if (hasLikedQuestion) {
            setLikes(question.likes.filter((id) => id !== (userId)));
        } else {
            setLikes([...question.likes, userId]);
        }
    };
    const handleDisLike = async () => {
        dispatch(disLikeQuestion(question._id));
        if (hasDisLikedQuestion) {
            setDisLikes(question.disLikes.filter((id) => id !== (userId)));
        } else {
            setDisLikes([...question.disLikes, userId]);
        }
    };
    const Likes = () => {
        if (likes?.length > 0) {
            return likes.find((like) => like === (userId))
                ? (
                    <><GoIcons.GoArrowUp fontSize="large" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} upvote${likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><GoIcons.GoArrowUp fontSize="large" />&nbsp;{likes.length} {likes.length === 1 ? 'Upvote' : 'Upvoted'}</>

                );
        }
        return <><GoIcons.GoArrowUp fontSize="large" />&nbsp;Upvote</>;
    };
    const Dislikes = () => {
        if (disLikes?.length > 0) {
            return disLikes.find((disLike) => disLike === (userId))
                ? (
                    <><GoIcons.GoArrowDown fontSize="large" />&nbsp;{disLikes.length > 2 ? `You and ${disLikes.length - 1} others` : `${disLikes.length} downvote${disLikes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><GoIcons.GoArrowDown fontSize="large" />&nbsp;{disLikes.length} {disLikes.length === 1 ? 'Downvote' : 'Downvoted'}</>

                );
        }
        return <><GoIcons.GoArrowDown fontSize="large" />&nbsp;Downvote</>;
    };

    const openQuestion = () => navigate(`/questions/${question._id}`);
    const MediaSwitchQ = () => {
        if (question?.imageUrl) {
            return <CardMedia className={classes.media} image={question?.imageUrl} title={question.title} />
        } else if (question.videoUrl) {
            return <CardMedia component="video" image={question.videoUrl} title={question.title} controls />

        } else {
            return <CardMedia className={classes.media} image={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={question.title} />
        }
    }
    const DifferenceLikes = () => {
        return ((likes.length) * 3 + (comments.length) * 5 - disLikes.length) / 20;
    }
    return (
        <Card className={classes.card} raised evelation={6}>
            <ButtonBase className={classes.cardButton} onClick={openQuestion}>


                <MediaSwitchQ />
                <div className={classes.overlay}>
                    <div className={classes.nameDet}>

                        <Avatar className={classes.purple} alt={question.name} src={question.avatarUrl} ></Avatar>
                        <Typography variant="h6" className={classes.name}>{question.name} </Typography>
                    </div>
                    <Typography variant="body2">{moment(question.createdAt).fromNow()}</Typography>

                </div>

                <div className={classes.overlay2}>

                    <div className={classes.KPnumber}>
                        <Typography style={{ color: 'white' }} className={classes.KPcount} >
                            KP: <DifferenceLikes />
                        </Typography>
                    </div>


                </div>


                <div className={classes.details}>
                    <Typography className={classes.tags} style={{ color: '#c935ff' }} >{question.tags.map((tag) => `#${tag} `)}</Typography>

                </div>
                <Typography className={classes.title} variant="h5">{question.title}</Typography>
                <CardContent>
                    <Typography variant="body1" gutterBottom style={{ color: 'white' }}>{question.message}</Typography>
                </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button disabled={!user?.result} style={{ color: '#80e27e' }} onClick={handleLike}><Likes /></Button>
                <Button disabled={!user?.result} style={{ color: '#F44336' }} onClick={handleDisLike}><Dislikes /></Button>
                {(user?.result?.googleId === question?.creator || user?.result?._id === question?.creator) && (
                    <Button size="small" color="primary" style={{ color: 'indigo' }} onClick={handleOpen}><ImIcons.ImCross fontSize="small" />&nbsp; Remove</Button>
                )}


            </CardActions>
            <Modal open={open}>

                <Paper className={classes.removeDialog} style={{ height: '120px', width: '26%', background: '#fdf4dc' }} >
                    <Typography style={{ fontWeight: '550', fontSize: '20px' }}>&nbsp;Are you sure you want to remove this question?</Typography>
                    <Button style={{ marginLeft: '30px', marginTop: '10px', borderRadius: '15px', background: '#022658', border: '3px solid #1167bf', color: '#fff', fontWeight: '500', fontSize: '17px', paddingRight: '0.5rem', paddingLeft: '0px', outline: 'none', cursor: 'pointer' }} onClick={() => dispatch(deleteQuestion(question._id))}><BsIcons.BsCheckLg style={{ color: 'green' }} />&nbsp;&nbsp;Yes</Button>
                    <Button style={{ marginLeft: '60px', marginTop: '10px', borderRadius: '15px', background: '#022658', border: '3px solid #1167bf', color: '#fff', fontWeight: '500', fontSize: '17px', paddingRight: '0.5rem', paddingLeft: '0px', outline: 'none', cursor: 'pointer' }} onClick={handleClose}><MdIcons.MdClose style={{ color: 'red' }} size={26} />&nbsp;No</Button>
                </Paper>

            </Modal>


        </Card >
    );
}

export default Question;
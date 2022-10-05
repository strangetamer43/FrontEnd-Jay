import React, { useState } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Modal, ButtonBase } from '@material-ui/core';

import * as GoIcons from 'react-icons/go';
import * as ImIcons from 'react-icons/im';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useStyles from "./styles";
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteContest, likeContest, disLikeContest } from "../../../actions/contests";
import { useNavigate } from 'react-router-dom';

const Contest = ({ contest, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const navigate = useNavigate();
    const [likes, setLikes] = useState(contest?.likes);
    const [disLikes, setDisLikes] = useState(contest?.disLikes);
    const userId = user?.result?.googleId || user?.result?._id;
    const hasLikedContest = contest.likes.find((like) => like === (userId));
    const hasDisLikedContest = contest.disLikes.find((disLike) => disLike === (userId));
    const handleLike = async () => {
        dispatch(likeContest(contest._id));
        if (hasLikedContest) {
            setLikes(contest.likes.filter((id) => id !== (userId)));
        } else {
            setLikes([...contest.likes, userId]);
        }
    };
    const handleDisLike = async () => {
        dispatch(disLikeContest(contest._id));
        if (hasDisLikedContest) {
            setDisLikes(contest.disLikes.filter((id) => id !== (userId)));
        } else {
            setDisLikes([...contest.disLikes, userId]);
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

    const openContest = () => navigate(`/contests/${contest._id}`);
    return (
        <Card className={classes.card} raised evelation={6}>
            <ButtonBase className={classes.cardButton} onClick={openContest}>


                <CardMedia className={classes.media} image={contest.selectedFile} title={contest.title} />
                <div className={classes.overlay}>
                    <Typography variant="h6">{contest.name}</Typography>
                    <Typography variant="body2">{moment(contest.createdAt).fromNow()}</Typography>

                </div>

                <div className={classes.overlay2}>

                    {(user?.result?.googleId === contest?.creator || user?.result?._id === contest?.creator) && (
                        <Button style={{ color: 'purple' }} size="small" onClick={() => setCurrentId(contest._id)}>
                            <MoreHorizIcon fontSize="large" />
                        </Button>

                    )}

                </div>


                <div className={classes.details}>
                    <Typography className={classes.tags} style={{ color: '#c935ff' }} >{contest.tags.map((tag) => `#${tag} `)}</Typography>


                </div>
                <Typography className={classes.title} variant="h5" gutterBottom>{contest.title}</Typography>
                <CardContent>
                    <Typography variant="body1" gutterBottom style={{ color: 'white' }}>{contest.message}</Typography>
                </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} style={{ color: '#80e27e' }} onClick={handleLike}><Likes /></Button>
                <Button size="small" color="primary" disabled={!user?.result} style={{ color: '#F44336' }} onClick={handleDisLike}><Dislikes /></Button>
                {(user?.result?.googleId === contest?.creator || user?.result?._id === contest?.creator) && (
                    <Button size="small" color="primary" style={{ color: 'indigo' }} onClick={() => dispatch(deleteContest(contest._id))}><ImIcons.ImCross fontSize="small" />&nbsp; Remove</Button>
                )}


            </CardActions>


        </Card>
    );
}

export default Contest;
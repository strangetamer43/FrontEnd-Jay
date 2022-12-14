import React, { useState } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Modal, ButtonBase, Avatar, Paper } from '@material-ui/core';

import * as GoIcons from 'react-icons/go';
import * as ImIcons from 'react-icons/im';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useStyles from "./style";
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost, disLikePost } from "../../../actions/posts";
import { useNavigate } from 'react-router-dom';

const Post = ({ post, setCurrentId, handleImage }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const navigate = useNavigate();
    const [likes, setLikes] = useState(post?.likes);
    const [disLikes, setDisLikes] = useState(post?.disLikes);
    const [comments, setComments] = useState(post?.comments);
    const userId = user?.result?.googleId || user?.result?._id;
    const hasLikedPost = post.likes.find((like) => like === (userId));
    const hasDisLikedPost = post.disLikes.find((disLike) => disLike === (userId));
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleLike = async () => {
        dispatch(likePost(post._id));
        if (hasLikedPost) {
            setLikes(post.likes.filter((id) => id !== (userId)));
        } else {
            setLikes([...post.likes, userId]);
        }
    };
    const handleDisLike = async () => {
        dispatch(disLikePost(post._id));
        if (hasDisLikedPost) {
            setDisLikes(post.disLikes.filter((id) => id !== (userId)));
        } else {
            setDisLikes([...post.disLikes, userId]);
        }
    };
    const Likes = () => {
        if (likes?.length > 0) {
            return likes.find((like) => like === (userId))
                ? (
                    <><GoIcons.GoArrowUp size={25} />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} upvote${likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><GoIcons.GoArrowUp size={25} />&nbsp;{likes.length} {likes.length === 1 ? 'Upvote' : 'Upvoted'}</>

                );
        }
        return <><GoIcons.GoArrowUp size={25} />Upvote</>;
    };
    const Dislikes = () => {
        if (disLikes?.length > 0) {
            return disLikes.find((disLike) => disLike === (userId))
                ? (
                    <><GoIcons.GoArrowDown size={25} />&nbsp;{disLikes.length > 2 ? `You and ${disLikes.length - 1} others` : `${disLikes.length} downvote${disLikes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><GoIcons.GoArrowDown size={25} />&nbsp;{disLikes.length} {disLikes.length === 1 ? 'Downvote' : 'Downvoted'}</>

                );
        }
        return <><GoIcons.GoArrowDown size={25} />&nbsp;Downvote</>;
    };
    const DifferenceLikes = () => {
        return ((likes.length) * 3 + (comments.length) * 5 - disLikes.length) / 10;
    }
    const openPost = () => navigate(`/feed/${post._id}`);
    const MediaSwitch = () => {
        if (post?.imageUrl) {
            return <CardMedia className={classes.media} image={post?.imageUrl} title={post.title} />
        } else if (post.videoUrl) {
            return <CardMedia component="video" image={post.videoUrl} title={post.title} controls />

        } else {
            return <CardMedia className={classes.media} image={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
        }
    }
    return (
        <Card className={classes.card} raised evelation={6}>
            <ButtonBase className={classes.cardButton} onClick={openPost}>

                <MediaSwitch />

                <div className={classes.overlay}>
                    <div className={classes.nameDet}>
                        <Avatar className={classes.purple} alt={post.name} src={post.avatarUrl}></Avatar>
                        <typography variant="h6" className={classes.name}>{post.name}</typography>
                    </div>
                    <typography variant="body2">{moment(post.createdAt).fromNow()}</typography>

                </div>

                <div className={classes.overlay2}>

                    <div className={classes.KPnumber}>
                        <typography style={{ color: 'white' }} className={classes.KPcount} >
                            KP: <DifferenceLikes />
                        </typography>
                    </div>


                </div>


                <div className={classes.details}>
                    <typography className={classes.tags} style={{ color: '#c935ff' }} >{post.tags.map((tag) => `#${tag} `)}</typography>

                </div>
                <typography className={classes.title} variant="h5" gutterBottom>{post.title}</typography>
                <CardContent>

                </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} style={{ color: '#80e27e' }} className={classes.buttons} onClick={handleLike}><Likes /></Button>
                <Button size="small" color="primary" disabled={!user?.result} style={{ color: '#F44336' }} className={classes.buttons} onClick={handleDisLike}><Dislikes /></Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size="small" color="secondary" style={{ color: '#9C50B6' }} className={classes.buttons} onClick={handleOpen}><ImIcons.ImCross size={20} />&nbsp; Remove</Button>
                )}


            </CardActions>
            <Modal open={open}>

                <Paper className={classes.removeDialog} >
                    <typography style={{ fontWeight: '600', fontSize: '2.5vh', color: '#eeddee' }}>&nbsp;Are you sure you want to remove this post?</typography>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '3vh' }}>
                        <Button className={classes.yesbutton} onClick={() => dispatch(deletePost(post._id))}><BsIcons.BsCheckLg style={{ color: 'green', marginLeft: '-0.75vw' }} />&nbsp;&nbsp;Yes</Button>
                        <Button className={classes.nobutton} onClick={handleClose}><MdIcons.MdClose style={{ color: '#a80202', marginLeft: '-1vw' }} size={26} />&nbsp;No</Button>
                    </div>
                </Paper>

            </Modal>


        </Card>
    );
}

export default Post;
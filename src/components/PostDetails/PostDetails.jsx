import React, { useState, useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, Grid, Container, Button, Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Image } from 'react-fullscreen-image';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getPost, getPostsBySearch, getSpecificUserPosts } from '../../actions/posts';
import CommentSection from './CommentSection';
import useStyles from './styles';
import Video from '../../Assets/Video cover.png';
import styled from 'styled-components';
import { getSpecificUserProfile } from '../../actions/profile';

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const [likes, setLikes] = useState(post?.likes);
  const [disLikes, setDisLikes] = useState(post?.disLikes);
  const [comments, setComments] = useState(post?.comments);
  const [creator, setCreator] = useState(post?.creator);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();
  const but = post?.creator;
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);
  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    }
  }, [post]);
  if (!post) return "no post";
  if (isLoading) {
    return <Paper elevation={6} className={classes.loadingPaper}>
      <CircularProgress size='7em' />
    </Paper>
  };
  const recomendedPosts = posts?.filter(({ _id }) => _id !== post?._id);
  const openPost = (_id) => navigate(`/feed/${_id}`);
  const DifferenceLikes = () => {
    return ((likes.length) * 3 + (comments.length) * 5 - disLikes.length) / 10;
  }

  const viewProfile = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("creator", creator);

    dispatch(getSpecificUserProfile(formData, navigate));


  };
  const SwitchMedia = () => {
    if (post.imageUrl) {
      return <img className={classes.media} src={post.imageUrl} />
    } else if (post.videoUrl) {
      return <video className={classes.media} src={post.videoUrl} controls controlsList="nodownload" />

    } else {
      return <img className={classes.media} src={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
    }
  }
  const SwitchMediaP = () => {
    if (!post.videoUrl) {
      return <img style={{ marginLeft: '15px', marginBottom: '10px', marginRight: '15px' }} src={post.imageUrl} className={classes.media2} />
    } else if (!post.imageUrl) {
      return <video style={{ marginLeft: '15px', marginBottom: '10px', marginRight: '15px' }} src={post.videoUrl} className={classes.media2} />
    }
  }

  return (
    <form>
      <Paper className={classes.paper} style={{ padding: '20px', borderRadius: '30px', backgroundColor: '#1a1a1a' }} elevation={6}>
        <div >
          <div>
            <SwitchMedia />
          </div>
          <div className={classes.section}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Button component={Link} to='/userprofile' state={{ creator: post.creator }} className={classes.button}>
                <div style={{ display: 'flex', direction: 'row', justifyContent: 'flex-start' }}>
                  <Avatar className={classes.purple} alt={post.name} src={post.avatarUrl}></Avatar>
                  <Typography className={classes.name}>{post.name}</Typography>
                </div>
              </Button>

            </div>
            <Typography className={classes.time}>{moment(post.createdAt).fromNow()}</Typography>
            <Typography className={classes.title}>{post.title}</Typography>
            <Typography className={classes.tags}>{post.tags?.map((tag) => `#${tag}`)}</Typography>
            <pre gutterBottom variant="body1" className={classes.pre} >{post.message}</pre>




            <CommentSection post={post} />

          </div>


        </div>
        {recomendedPosts.length && (
          <div className={classes.section}>
            <Divider />
            <Typography className={classes.comments} gutterBottom variant='body1'>And there's more...</Typography>

            <div className={classes.recommendedPosts}>

              {recomendedPosts.map((post) => (

                <div style={{ margin: '20px', cursor: 'pointer', backgroundColor: '#303030', borderRadius: '15px', boxShadow: '-3px -3px 8px 3px rgba(255,255,255,0.3), -3px -3px 8px 3px rgba(5,5,10,0.9)' }} onClick={() => openPost(post._id)} key={post._id}>


                  <Typography gutterBottom variant="h6" className={classes.recommendedTitle} >{post.title}</Typography>
                  <Typography variant="subtitle2" gutterBottom className={classes.recommendedName} >{post.name}</Typography>
                  <Typography variant="subtitle2" gutterBottom className={classes.recommendedName} >{post.message}</Typography>

                  <div style={{ display: 'flex', marginLeft: '1vw' }}>
                    <Typography className={classes.upvotes} gutterBottom variant="subtitle1" >Upvotes: {post.likes.length}</Typography>
                    <Typography className={classes.upvotes} gutterBottom variant="subtitle1" style={{ marginLeft: '2vh' }} >Downvotes: {post.disLikes.length}</Typography>
                  </div>
                  <img src={post.imageUrl || Video} className={classes.media2} />


                </div>

              ))}

            </div>
          </div>
        )
        }
      </Paper >
    </form >
  )
}


export default PostDetails; 
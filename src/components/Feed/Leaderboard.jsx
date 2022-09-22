import React, {useState, useEffect} from 'react';
import {Paper, Modal, Button} from '@material-ui/core';
import {BsFileEarmarkPostFill} from 'react-icons/bs';
import {GiSkills} from 'react-icons/gi';
import LeaderboardIm from '../../Assets/winner.png';
import {FaUsers} from 'react-icons/fa';
import axios from 'axios';
import useStyles from './styles'; 
const Leaderboard = () => {
    const [data, setData] = useState({}); 
    const [tagData, setTagData] = useState({});
    const [open, setOpen] = useState(false);
    const [openP, setOpenP] = useState(false);
    const [openS, setOpenS] = useState(false);
    
    
    const classes = useStyles();
    
    
    
    const getUsersData = (e) => {
        e.preventDefault();
        setOpen(true)
      axios.get('http://127.0.0.1:5000/top5users').then(res => {
          setData(res)
      })
      .catch(function (err) {
          console.error(err);
      }
      )};
      
      
    
    const getTagsData = (e) => {
        e.preventDefault();
        setOpenS(true);
      axios.get('http://127.0.0.1:5000/top5tags').then(res => {
        setTagData(res)
      }).catch(function (err) {
          console.log(err);
      })
    };
    const [postData, setPostData] = useState({});
    
    const getPostsData = (e) => {
        e.preventDefault();
        setOpenP(true);
        axios.get('http://127.0.0.1:5000/top5posts').then(res => {
            setPostData(res)
        })
        .catch(function (err) {
            console.error(err);
        }
        )};
        
    const handleClose = () => setOpen(false);
    const handleCloseP = () => setOpenP(false);
    const handleCloseS = () => setOpenS(false);    
    const top5posts = postData.data;
    
    const top5posts1 = top5posts?.slice(2, top5posts.length - 2);
    const top5posts2 = top5posts1?.replaceAll('","', ' ');
    const top5posts3 = top5posts2?.replaceAll('":"', ': ');
    const top5posts4 = top5posts3?.replaceAll('"', '');
    const top5posts5 = top5posts4?.replaceAll('},{', ',');
    const top5posts6 = top5posts5?.replaceAll('_', ' ');
    const top5posts7 = top5posts6?.split(',');
    const dil = data?.data;
    const dil1 = dil?.replaceAll('":{"', ' => ');
    const dil2 = dil1?.slice(2, dil1.length - 2);
    const dil3 = dil2?.replaceAll('}', '');
    const dil4 = dil3?.replaceAll('"', '');
  
    const dil5 = dil4?.split(',');
    const tagdil = tagData?.data;
    
    const tagdil1 = tagdil?.slice(74, tagdil?.length - 3);
    const tagdil2 = tagdil1?.replaceAll('",' , ': ');  
    const tagdil3 = tagdil2?.replaceAll('["' , '');
    const tagdil4 = tagdil3?.replaceAll(']', '');
    const tagdil5 = tagdil4?.split(',');
  return (
    <div>
      <Paper className={classes.leaderboardButtons}>
        <img src={LeaderboardIm} className={classes.LeaderboardIcon}/>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Button className={classes.buttonsL} onClick={getUsersData}>
        <FaUsers size={30} style={{marginLeft: '-0.75vw'}}/>
        </Button>
        <Button className={classes.buttonsP} onClick={getPostsData}>
        <BsFileEarmarkPostFill size={30} style={{marginLeft: '-0.75vw'}}/>
        </Button>
        <Button className={classes.buttonsQ} onClick={getTagsData}>
        <GiSkills size={30} style={{marginLeft: '-0.75vw'}}/>
        </Button>
        </div>
        </Paper>
        <Modal open={open} onClose={handleClose}>
        <Paper className={classes.appBarSearch1}>
              <typography className={classes.topTitle}>Top 5 Users</typography>
              {dil5?.map((item,i) => <li key={i} className={classes.top5users}><span>{item}</span></li>)}
            </Paper>
            </Modal>
            <Modal open={openS} onClose={handleCloseS}>
            <Paper className={classes.appBarSearch1}>
              <typography className={classes.topTitle}>Top 5 Skills</typography>
              {tagdil5?.map((item,i) => <li key={i} className={classes.top5users}><span>{item} KP</span></li>)}
            </Paper>
            </Modal>
            <Modal open={openP} onClose={handleCloseP}>
            <Paper className={classes.appBarSearch1}>
              <typography className={classes.topTitle}>Top 5 Posts</typography>
              {top5posts7?.map((item,i) => <li key={i} className={classes.top5users}><span>{item}</span></li>)}
            </Paper>
            </Modal>
      
    </div>
  )
}

export default Leaderboard

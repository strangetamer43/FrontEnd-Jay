import React,{useState, useEffect} from 'react';
import {Typography} from '@material-ui/core';
import axios from 'axios';
import useStyles from './styles'; 
function Top5Posts() {
    const [postData, setPostData] = useState({});
    const classes = useStyles();
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/top5posts').then(res => {
            setPostData(res)
        })
        .catch(function (err) {
            console.error(err);
        }
        )}, [])
        
    const top5posts = postData.data;
    
    const top5posts1 = top5posts?.slice(2, top5posts.length - 2);
    const top5posts2 = top5posts1?.replaceAll('","', ' ');
    const top5posts3 = top5posts2?.replaceAll('":"', ': ');
    const top5posts4 = top5posts3?.replaceAll('"', '');
    const top5posts5 = top5posts4?.replaceAll('},{', ',');
    const top5posts6 = top5posts5?.replaceAll('_', ' ');
    const top5posts7 = top5posts6?.split(',');
    
  return (
    <div>
      {top5posts7?.map((item,i) => <li key={i} className={classes.top5users}><span>{item}</span></li>)}
    </div>
  )
}

export default Top5Posts

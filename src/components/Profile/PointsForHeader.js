import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserPosts } from '../../actions/posts';
import { getUserQuestions } from '../../actions/questions';
import { CircularProgress, Typography } from "@material-ui/core";
import axios from'axios';
import useStyles from "./styles";
function PointsForHeader() {
  const [headerData, setHeaderData] = useState({});
  
  const user = JSON.parse(localStorage.getItem('profile'));
  const name = user?.result?.name;
  useEffect(() =>{
    
    const formData1 = new FormData();
    
    formData1.append("Name", name);
    axios({method: 'post', url: 'http://127.0.0.1:5000/rankingspercentileprofiles', data: formData1}).then(res => {
    
    setHeaderData(res);
  })
  .catch(function (err) {
      console.error(err);
  })
  }, []);
  const classes = useStyles();
  const dataNew = headerData?.data;
  const dataNew1 = dataNew?.slice(7, dataNew.length - 20);
  const dataNew2 = dataNew1?.replace('":', ':  ');
  
  return (
    <div style={{ marginRight: '15px'}}>
      <typography variant="h4" style={{ color: '#03dac6', fontSize: '3.8vh' }}>KP: {dataNew2}</typography>
    </div>
  )
}

export default PointsForHeader

import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserPosts } from '../../actions/posts';
import { getUserQuestions } from '../../actions/questions';
import { CircularProgress, Typography } from "@material-ui/core";
import axios from'axios';
import useStyles from "./styles";
function PointsForHeader() {
  const [headerData, setHeaderData] = useState({});
  const [headerData1, setHeaderData1] = useState({});
  const user = JSON.parse(localStorage.getItem('profile'));
  const name = user?.result?.name;
  useEffect(() =>{
    
    const formData1 = new FormData();
    
    formData1.append("Name", name);
    axios({method: 'post', url: 'https://2f2t3o.deta.dev/rankingspercentileprofiles', data: formData1}).then(res => {
    
    setHeaderData(res);
  })
  .catch(function (err) {
      console.error(err);
  })
  }, []);

  useEffect(() =>{
    
    const formData2 = new FormData();
    
    formData2.append("Name", name);
    axios({method: 'post', url: 'https://2f2t3o.deta.dev/rankingspercentilequestions', data: formData2}).then(res => {
    
    setHeaderData1(res);
  })
  .catch(function (err) {
      console.error(err);
  })
  }, []);

  const classes = useStyles();
  const dataNew = headerData?.data;
  const dataNew1 = dataNew?.slice(7, dataNew.length - 20);
  const dataNew2 = dataNew1?.replace('":', ':  ');
  const dataNew3 = parseFloat(dataNew2);
  const dataQ = headerData1?.data;
  const dataQ1 = dataQ?.slice(7, dataQ.length - 20);
  const dataQ2 = dataQ1?.replace('":', ': ');
  const dataQ3 = parseFloat(dataQ2);
  
  let total = 0;
  let totalR = 0;
  const ViewPoints = () =>{
    if(!dataQ3){
      return total = total + dataNew2; 
    }else if (!dataNew3){
      return total = total + dataQ2
    }else{
      total = parseFloat(total) + dataNew3 + dataQ3
      return totalR = total.toFixed(2)
    };
  };
  
 
  return (
    <div className={classes.headerPoints} >
      <typography variant="h4" className={classes.kpFirst}>KP:&nbsp; </typography>
      <typography className={classes.kpSecond}><ViewPoints/></typography>
    </div>
  )
}

export default PointsForHeader

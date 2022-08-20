import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Card, Button, ListItemAvatar, ListItem, List, Paper} from '@material-ui/core';
import useStyles from "./styles";
import { Doughnut } from "react-chartjs-2";
import axios from 'axios';
import styled from 'styled-components';



function StatsOfUser() {
  
    const [dataP, setDataP] = useState({});
    const [dataT, setDataT] = useState({});
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const getData = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("Name", user?.result?.name)
        axios({method: 'post', url: 'http://127.0.0.1:5000/rankingspercentileprofiles', data: formData}).then(res => {
        setDataP(res);
       
      })
      .catch(function (err) {
          console.error(err);
      })
        }
     const getDataTags = (e) => {
        e.preventDefault();
        
        const formData1 = new FormData();
        formData1.append("Name", user?.result?.name)
        axios({method: 'post', url: 'http://127.0.0.1:5000/rankinsgpercentileusers', data: formData1}).then(res => {
        setDataT(res);
        
      })
      .catch(function (err) {
          console.error(err);
      })
    }      
   
    const classes = useStyles();
    const dataNew = dataP.data;
    const dataNew1 = dataNew?.slice(12, dataNew.length - 2);
    const dataNew2 = dataNew1?.replace('":', ':  ');
    const dataNew3 = dataNew2?.slice(13, dataNew2.length);
    const dataNew4 = 100 - dataNew3;
    const dataTNew = dataT.data;
    const dataTNew1 = dataTNew?.slice(2, dataTNew.length - 2);
    const dataTNew2 = dataTNew1?.replace( /[""()"']/g, "");
    const dataTNew3 = dataTNew2?.replaceAll( ', :', ': ');
    const dataTNew4 = dataTNew3?.replaceAll(",", " ");
    const dataTNew5 = dataTNew4?.replaceAll('} {', ',');
    const dataTNew6 = dataTNew5?.split(',');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const chartData = [];
    chartData[0] = dataNew3;
    chartData[1] = dataNew4;
    console.log(chartData);
  return (
    <Paper className={classes.card} elevation={7}>
      <Typography>{user?.result?.name}'s Stats</Typography>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} className={classes.statsB}>
        <Button className={classes.ButtonP} onClick={getData}>Get Profile Percentile</Button>
        <Button className={classes.ButtonS} onClick={getDataTags}>Get Top 5 Skills </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography className={classes.h5}>{dataNew2}</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        {dataTNew6?.map((item,i) => <li key={i} className={classes.top5users}><span>{item}</span></li>)}
        
        </div>
        </div>
        
        
    </Paper>
  )
}

export default StatsOfUser

import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Card, Button, ListItemAvatar, ListItem, List, Paper, Modal} from '@material-ui/core';
import useStyles from "./styles";
import { Doughnut, Radar} from "react-chartjs-2";
import * as ImIcons from 'react-icons/im';
import {TbWaveSawTool} from 'react-icons/tb';
import {GiSkills} from 'react-icons/gi';
import {ImStatsDots} from 'react-icons/im';
import {FaPercentage} from 'react-icons/fa';
import { ArcElement } from "chart.js";
import axios from 'axios';
import styled from 'styled-components';
import DoughnutChart from './Doughnut';
const Wrapper = styled.div``;

function StatsOfUser1() {
  const [open, setOpen] = useState(false);
  const [openP, setOpenP] = useState(false);
  const [openH, setOpenH] = useState(false);
    const [dataP, setDataP] = useState({});
    const [dataT, setDataT] = useState({});
    const [postdataFreq, setPostdataFreq] = useState({});
    const user = JSON.parse(localStorage.getItem('profile'));
    const getData = (e) => {
      e.preventDefault();
      setOpen(true)
        const formData = new FormData();
        formData.append("Name", user?.result?.name)
        
        axios({method: 'post', url: 'https://2f2t3o.deta.dev/rankingspercentileprofiles', data: formData}).then(res => {
        
        setDataP(res);
        
      })
      .catch(function (err) {
          console.error(err);
      })
        };
        const getDataTags = (e) => {
          e.preventDefault();
          setOpenP(true);
          
          const formData1 = new FormData();
          formData1.append("Name", user?.result?.name)
          axios({method: 'post', url: 'https://2f2t3o.deta.dev/rankinsgpercentileusers', data: formData1}).then(res => {
          setDataT(res);
          
        })
        .catch(function (err) {
            console.error(err);
        })
      }       
    
    const getDataPostsFreq = (e) => {
      e.preventDefault();
      setOpenH(true);
      const formData2 = new FormData();
      formData2.append("Name", user?.result?.name)
      axios({method: 'post', url: 'https://2f2t3o.deta.dev/rateofposts', data: formData2}).then (res => {
        setPostdataFreq(res);
    })
    .catch(function (err) {
      console.error(err);
    })}
    const classes = useStyles();
    const dataNew = dataP.data;
    const dataNew1 = dataNew?.slice(12, dataNew.length - 2);
    const dataNew2 = dataNew1?.replace('":', ':  ');
    const dataNew3 = dataNew2?.slice(13, dataNew2.length);
    const dataNew4 = 100 - dataNew3;
    const dataTNew = dataT?.data;
    
    const dataTNew1 = dataTNew?.slice(2, dataTNew.length - 2);
    const dataTNew2 = dataTNew1?.replace( /[""()"']/g, "");
    const dataTNew3 = dataTNew2?.replaceAll( ', :', ': ');
    const dataTNew4 = dataTNew3?.replaceAll(",", " ");
    const dataTNew5 = dataTNew4?.replaceAll('} {', ',');
    const dataTNew6 = dataTNew5?.split(',');
    const dataForStatC = dataTNew5?.replaceAll(',' , ' ');
    const dataForStatC1 = dataForStatC?.replaceAll(': ', ',');
    const dataForStatC2 = dataForStatC1?.replaceAll(' ', ',');
    const dataForStatC3 = dataForStatC2?.split(',');
    
    const chartData = [];
    chartData[0] = dataNew3;
    chartData[1] = dataNew4;
    const chartData2 = [];
    const chartDataValues = [];
    
      if (dataForStatC3?.length <= 9) {
        chartData2[0] = dataForStatC3[1];
      }else if(dataForStatC3?.length <= 17) {
        chartData2[0] = dataForStatC3[1];
        chartData2[1] = dataForStatC3[9];
      }else if (dataForStatC3?.length <= 25) {
        chartData2[0] = dataForStatC3[1];
        chartData2[1] = dataForStatC3[9];
        chartData2[2] = dataForStatC3[17];
      }else if(dataForStatC3?.length <= 33){
        chartData2[0] = dataForStatC3[1];
        chartData2[1] = dataForStatC3[9];
        chartData2[2] = dataForStatC3[17];
        chartData2[3] = dataForStatC3[25];
      }else if(dataForStatC3?.length <= 41) {
        chartData2[0] = dataForStatC3[1];
        chartData2[1] = dataForStatC3[9];
        chartData2[2] = dataForStatC3[17];
        chartData2[3] = dataForStatC3[25];
        chartData2[4] = dataForStatC3[33];
      }
    
    
      if (dataForStatC3?.length <= 9 ) {
        chartDataValues[0] = dataForStatC3[7];
      }else if(dataForStatC3?.length <= 17) {
        chartDataValues[0] = dataForStatC3[7];
        chartDataValues[1] = dataForStatC3[15];
      }else if (dataForStatC3?.length <= 25) {
        chartDataValues[0] = dataForStatC3[7];
        chartDataValues[1] = dataForStatC3[15];
        chartDataValues[2] = dataForStatC3[23];
      }else if(dataForStatC3?.length <= 33){
        chartDataValues[0] = dataForStatC3[7];
        chartDataValues[1] = dataForStatC3[15];
        chartDataValues[2] = dataForStatC3[23];
        chartDataValues[3] = dataForStatC3[31];
      }else if(dataForStatC3?.length <= 41) {
        chartDataValues[0] = dataForStatC3[7];
        chartDataValues[1] = dataForStatC3[15];
        chartDataValues[2] = dataForStatC3[23];
        chartDataValues[3] = dataForStatC3[31];
        chartDataValues[4] = dataForStatC3[39];
      }
    
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenP = () => setOpenP(true);
    const handleCloseP = () => setOpenP(false);
    const handleCloseH = () => setOpenH(false);
    
   const postfreqdata = postdataFreq.data;
   console.log(postfreqdata);
   
  return (
    <div className={classes.statFunc}>
    <Paper className={classes.statsCard} elevation={7}>
      
      
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} className={classes.statsB}>
      <ImStatsDots size={40} style={{ marginLeft: '2vw', color: '#25b8ef'}}/>
        <Button className={classes.ButtonP} onClick={getData}><FaPercentage  size={30}/></Button>
        <Button className={classes.ButtonQ} onClick={getDataTags}><GiSkills size={30}/> </Button>
        <Button className={classes.ButtonS} onClick={getDataPostsFreq}><TbWaveSawTool style={{color: '#e2e2de'}} size={30}/> </Button>
        </div>
        <Modal open={open} >
        <Paper className={classes.Modal}>
        <Button onClick={handleClose}><ImIcons.ImCross  style={{color: '#03dac6', cursor: 'pointer', marginLeft: '20vw', marginTop: '-6vh'}} size={20}/></Button>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <typography className={classes.h6}>{dataNew2}</typography>
        
        </div>
       
        <div style={{ display: 'flex',  flexDirection: 'row', justifyContent: 'space-around'}}> 
        <div style={{ height: '300px', width: '300px' }}>
        <Doughnut
          data={{
            labels: ['% of People you beat', '% of People who beat you'],
                
            datasets: [
              {
                label: 'percentile',
                data: chartData,
                
                backgroundColor: ["rgba(0,229,255,1)",
                                  "rgba(5,5,5,1)",
              ],
              
                borderColor: "rgba(255,255,255,1)",
              
                hoverOffset: 4
              }
            ]
          }}
          height={300}
          width={300}
          options= {{
            
            legend: {
              labels: {
                fontSize: 12,
                fontColor: 'white',
                
                
              }
            }
          }}
        /> 
        
        </div>
        </div>
        </Paper>
        </Modal>
        <Modal open={openP} >
          <Paper className={classes.Modal1}>
            
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <typography className={classes.h6}>Skill Percentile</typography>
          <Button onClick={handleCloseP}><ImIcons.ImCross  style={{color: '#03dac6', cursor: 'pointer'}} size={20}/></Button>
          </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        {dataTNew6?.map((item,i) => <li key={i} className={classes.top5users}><span>{item}</span></li>)}
        
        </div>
        <div style={{ height: '300px', width: '300px' }}>
          <Radar
          data={{
            labels: chartData2
                  
          ,
                
            datasets: [
              {
                label: 'top 5 skills (percentile)',
                data: chartDataValues,
                
                backgroundColor: ["rgba(0,229,255,0.31)",
                                  
              ],
              
                borderColor: "rgba(255,255,255,1)",
              
                hoverOffset: 4
              }
            ]
          }}
          height={750}
          width={750}
          options= {{
            scales: {
              r: {
                angleLines: {
                  color: 'white'
                },
                grid: {
                  color: 'white',
                }
              }
            },
            
            legend: {
              labels: {
                fontSize: 12,
                fontColor: 'white',
                
                
              }
            }
          }}
          />
        
        </div>
        </Paper>
        </Modal>
        
        <Modal open={openH} onClose={handleCloseH} >
          <Paper className={classes.Modal}>
          <typography className={classes.h6}>Post Frequency</typography>
            <div style={{ display: 'flex', flexDirection: 'column' , justifyContent: 'space-between', marginTop: '2vh'}}>
            <typography className={classes.frequencyDet}>Daily Frequency: {postfreqdata?.Rate_Daily}</typography>
            <typography className={classes.frequencyDet}>Weekly Frequency: {postfreqdata?.Rate_Weekly}</typography>
            <typography className={classes.frequencyDet}>Monthly Frequency: {postfreqdata?.Rate_Monthly}</typography>
            <typography className={classes.frequencyDet}>Total Posts: {postfreqdata?.Total_Posts}</typography>
            </div>
          </Paper>
        </Modal>
    </Paper>
    </div>
  )
}

export default StatsOfUser1

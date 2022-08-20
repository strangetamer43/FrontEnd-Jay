import React, {useState} from 'react';
import styled from 'styled-components';

const Bar = styled.div`
 progress {
    margin-right: -8px;
 }

 progress[value] {
    width: 175px;
    -webkit-appearance: none;
    appearance: none;
 }

 progress[value]::-webkit-progress-bar {
    height: 18px;
    border-radius: 6px;
    background-color: #616161;
 }
 progress[value]::-webkit-progress-value {
    height: 18px;
    border-radius: 6px;
    background: linear-gradient(90deg, rgba(2,38,88,1) 20%, rgba(3,218,198,1) 100%);
    border-bottom: 1px solid #530000;
 }

`;

const ProgressBar = ({ value, max}) => {
    const perc = (value/max) * 100;
    const percR = perc.toFixed(2);
    
    return( 
        <Bar>
        <progress value={value} max={max} />
        <span>{ percR }%</span>
        </Bar>
    )
}


export default ProgressBar;
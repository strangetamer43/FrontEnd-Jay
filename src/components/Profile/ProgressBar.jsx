import React, {useState} from 'react';
import styled from 'styled-components';

const Bar = styled.div`
 progress {
    margin-right: -8px;
 }

 progress[value] {
    width: 185px;
    -webkit-appearance: none;
    appearance: none;
 }

 progress[value]::-webkit-progress-bar {
    height: 18px;
    border-radius: 6px;
    background-color: #616161;
    box-shadow:  1.5px 1.5px 2px 1.5px rgba(5, 5, 10, 0.8),  -1.5px -1.5px 2px 1.5px rgba(255, 255, 255, 0.20);
 }
 progress[value]::-webkit-progress-value {
    height: 18px;
    border-radius: 7.5px;
    background: linear-gradient(90deg, rgba(145,2,238,1) 0%, rgba(37,184,239,1) 100%);
    
    box-shadow:  inset 1.5px 1.5px 2px 1.5px rgba(5, 5, 10, 0.35), inset -1.5px -1.5px 2px 1.5px rgba(5, 5, 10, 0.35);
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
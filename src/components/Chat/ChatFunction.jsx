import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import {Paper, Typography} from '@material-ui/core';

import { ChannelContainer, ChannelListContainer} from './index';
const apiKey = '2u3wpnda2gze';


const client = StreamChat.getInstance(apiKey);
const user = JSON.parse(localStorage.getItem('profile'));


const ChatFunction = () => {
  return (
    <div className='app__wrapper'>
      <Paper style={{ marginTop: '350px', marginLeft: '650px'}}>
       <Typography style={{ marginTop: '50px', marginLeft: '30px', marginRight: '30px', marginBottom: '50px' }} variant="h1">Coming Soon!!</Typography>
       </Paper>
    </div>
  );
}

export default ChatFunction;
import { Send } from '@mui/icons-material';
import { Avatar, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import Message from './Message';

const Conversation = () => {

  const messageOne = {messageID: 1, userID: 1, messageText: 'Hey man how are you?'};
  const messageTwo = {messageID: 2, userID: 2, messageText: "I'm doing great, how are you?"};
  const messageThree = {messageID: 3, userID: 1, messageText: "Excellent!"};
  const messageFour = {messageID: 4, userID: 1, messageText: "I've been meaning to ask you, are you going to be able to attend the web development seminar? I have absolutely been looking forward to it and was wondering if you wanted to carpool together since it has been a long time since we have seen one another. It feels like just yesterday that we were sitting in class and beginning our coding journey! Just let me know if it is something that you are interested in because I will absolutely be looking forward to it"};
  const messageFive = {messageID: 5, userID: 1, messageText: "Hello?"};
  const messageSix = {messageID: 6, userID: 2, messageText: "Sorry for the late reply. It sounds like a great idea! I will let you know when I figure out my schedule and get back to you on what time I will be available"};
  const messageSeven = {messageID: 7, userID: 1, messageText: 'Sounds Good!'};
  const messages = [messageOne, messageTwo, messageThree, messageFour, messageFive, messageSix, messageSeven];

  return (
    <div className='conversation-div'>
      <div className='conversation-header-div'>
        <Avatar />
        <Typography variant='h5'>Display Name</Typography>
      </div>

    
      <div className='conversation-scroll-div'>
        {messages.map((message) => (
          <Message key={message} conversationMessage={message}/>
        ))}
      </div>

      <div className='conversation-toolbar-div'>
          <TextField placeholder='Start a new message' variant='filled' InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Send />
              </InputAdornment>
            )
          }} />
      </div>

    </div>
  )
}

export default Conversation
import { Send } from '@mui/icons-material';
import { Avatar, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import Message from './Message';

const Conversation = () => {

  const messages = [true,false,true,true,true,false];

  return (
    <div className='conversation-div'>
      <div className='conversation-header-div'>
        <Avatar />
        <Typography variant='h5'>Display Name</Typography>
      </div>

    
      <div className='conversation-scroll-div'>
        {messages.map((message) => (
          <Message key={message} fromUser={message}/>
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
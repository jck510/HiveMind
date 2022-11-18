import { AddCircleOutline, Search, Settings, SettingsOutlined } from '@mui/icons-material'
import { InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import MessageList from './MessageList'

const MessagesPage = () => {
  return (
    <div className='messages-page-div'>
      <div className='messages-page-header-div'>
        <Typography variant='h5'>Messages</Typography>
        <div className='messages-page-header-tools-div'>
          <SettingsOutlined />
          <AddCircleOutline />
        </div>

        <TextField variant='outlined' placeholder='Search Direct Messages' InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Search />
            </InputAdornment>
          ),
        }}/>
      </div>

      <MessageList />
      
    </div>
  )
}

export default MessagesPage
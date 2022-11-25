import { AddCircleOutline, Search, Settings, SettingsOutlined } from '@mui/icons-material'
import { InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Conversation from './Conversation'
import MessageList from './MessageList'
import SelectAConversation from './SelectAConversation'

const MessagesPage = () => {

  const [currentConversationSelected, setCurrentConversationSelected] = useState(null);

  return (
    <div className='messages-page-div'>

      <div className='messages-page-toolbar-div'>
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
      <SelectAConversation />
      
    </div>
  )
}

export default MessagesPage
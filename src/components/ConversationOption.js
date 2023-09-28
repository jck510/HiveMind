import { Avatar, Typography } from '@mui/material'
import React from 'react'

const ConversationOption = ({sender, mostRecentMessageReceived}) => {
  return (
    <div className='conversation-option-div'>
        <Avatar />

        <div className='conversation-option-content-div'>
            <div className='conversation-option-content-header-div'>
                <h4>Display Name</h4>
                <p>UserName</p>
                <p>TimeStamp</p>
            </div>

            <p>Message Preview</p>

        </div>
    </div>
  )
}

export default ConversationOption
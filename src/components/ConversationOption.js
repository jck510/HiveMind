import { Avatar, Typography } from '@mui/material'
import React from 'react'

const ConversationOption = () => {
  return (
    <div className='conversation-option-div'>
        <Avatar />

        <div className='conversation-option-content-div'>
            <div className='conversation-option-content-header-div'>
                <Typography variant='h6'>Display Name</Typography>
                <Typography variant='subtitle1'>UserName</Typography>
                <Typography variant='subtitle1'>TimeStamp</Typography>
            </div>

            <Typography variant='subtitle2'>Message Preview</Typography>

        </div>
    </div>
  )
}

export default ConversationOption
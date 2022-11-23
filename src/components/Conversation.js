import { Button, Typography } from '@mui/material'
import React from 'react'

const Conversation = () => {
  return (
    <div className='conversation-div'>
        <Typography variant='h2'>Select a conversation</Typography>
        <Typography variant='subtitle1'>Choose from your existing conversations, start a new one, or just buzz around.</Typography>
        <Button variant='contained'>New Message</Button>

    </div>
  )
}

export default Conversation
import { AttachFile, EmojiNature } from '@mui/icons-material'
import { Avatar, BottomNavigation, Button, TextField, Tooltip } from '@mui/material'
import React from 'react'


const CreatePost = ({modalHandler}) => {
  return (
    <div className='create-post-div'>
        <Avatar className='create-post-avatar'/>
        <div className='create-post-content-div'>
          <TextField  label="What's Buzzing?" variant='outlined' className='create-post-text-field'/>
          <div className='create-post-tools-div'>
            <Tooltip title='Attach Photo or Video' className='create-post-attachment-tooltip post-reply-tooltip'><AttachFile /></Tooltip>
            <Button variant='contained' startIcon={<EmojiNature font className='button-inner-icon'/>} onClick={() => modalHandler(false)}>Pollinate</Button>
          </div>
        </div>

    </div>
  )
}

export default CreatePost
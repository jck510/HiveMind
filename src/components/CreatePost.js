import { AttachFile, EmojiNature } from '@mui/icons-material'
import { Avatar, BottomNavigation, Button, TextField, Tooltip } from '@mui/material'
import React from 'react'


const CreatePost = ({modalHandler}) => {
  return (
    <div className='create-post-div'>
        <Avatar />
        <TextField  label="What's Buzzing?" variant='outlined' className='create-post-text-field'/>
        <div className='create-post-tools-div'>
          <Tooltip title='Attach Photo or Video'><AttachFile /></Tooltip>
          <Button variant='contained' startIcon={<EmojiNature font/>} onClick={() => modalHandler(false)}>Pollinate</Button>
        </div>
        

    </div>
  )
}

export default CreatePost
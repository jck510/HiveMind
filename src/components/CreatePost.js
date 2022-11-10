import { AttachFile, EmojiNature } from '@mui/icons-material'
import { BottomNavigation, Button, TextField, Tooltip } from '@mui/material'
import React from 'react'


const CreatePost = () => {
  return (
    <div className='create-post-div'>
        <TextField  label="What's Buzzing?" variant='outlined' className='create-post-text-field'/>
        <div className='create-post-tools-div'>
          <Tooltip title='Attach Photo or Video'><AttachFile /></Tooltip>
          <Button variant='contained' startIcon={<EmojiNature font/>} >Pollinate</Button>
        </div>
        

    </div>
  )
}

export default CreatePost
import { AttachFile, EmojiNature } from '@mui/icons-material'
import { BottomNavigation, Button } from '@mui/material'
import React from 'react'


const CreatePost = () => {
  return (
    <div className='create-post-div'>
        <input type='text' placeholder="What's Buzzing?" className='create-post-text-field'/>
        <div className='create-post-tools-div'>
          <AttachFile />
          <Button variant='contained' startIcon={<EmojiNature font/>} >Pollinate</Button>
        </div>
        

    </div>
  )
}

export default CreatePost
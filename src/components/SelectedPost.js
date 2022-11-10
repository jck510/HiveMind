import {ChatBubbleOutline, FavoriteBorder, IosShare, Repeat, West } from '@mui/icons-material'
import { AppBar, Avatar, Button, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import Replies from './Replies'

const SelectedPost = () => {
    // Posts may have an image or possible a video
  return (
    <div className='user-post-div'>
      <AppBar position='sticky' >
        <Tooltip title='Back'><West /></Tooltip>
        <Typography variant='h5'>Buzz</Typography>
      </AppBar>
        <Avatar />
        <Typography variant='h4'>Display Name</Typography>
        <Typography variant='subtitle1'>UserName</Typography>

        {/* Check to see if the post is a response to another post, if so then show the post it was replying to */}

        <p>Content</p>
        <Typography variant='subtitle1'>TimeStamp</Typography>

        <div className='user-post-interactions-div'>
          {/* If there is no interactions in a particular category, it will not be displayed */}
          <Typography variant='subtitle1'># Repollinations</Typography>
          {/* Open to quoted pollinations for future reference */}
          <Typography variant='subtitle1'># Likes</Typography>
        </div>

        <div className='user-post-tools-div'>
          <Tooltip title='Reply'><ChatBubbleOutline /></Tooltip>
          <Tooltip title='Repollinate'><Repeat /></Tooltip>
          <Tooltip title='Like'><FavoriteBorder /></Tooltip>
          <Tooltip title='Share'><IosShare /></Tooltip>
        </div>
        <div className='user-post-reply-div'>
          <Avatar />
          <TextField variant='outlined' label='What would you like to reply?' />
          <Button variant='contained' className='user-post-reply-button'>Reply</Button>
        </div>
        {/* Pass in the post id as a prop in order to pull up replies from the database */}
        <Replies />
    </div>
  )
}

export default SelectedPost
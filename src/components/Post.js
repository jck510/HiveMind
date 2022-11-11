import { ChatBubbleOutline, FavoriteBorder, IosShare, MoreHoriz, Repeat } from '@mui/icons-material'
import { Avatar, Menu, Tooltip, Typography } from '@mui/material'
import React from 'react'

const Post = ({postDetails}) => {
  return (
    <div className='post-div'>
        {/* Will be a conditional statement determining if the post was reshared (repollenated) by a user they follow. If so then will have a little script at the top containing who did */}
        <Avatar />
        <div className='post-header-div'>
            <Typography variant='h5'>Display Name</Typography>
            {/* Verified Badge? */}
            <Typography variant='h6'>UserName</Typography>
            <Typography variant='body1'>TimeStamp</Typography>
        </div>

        <Tooltip><MoreHoriz /></Tooltip>

        {/* If it is a reply then it will say it is replying to a user */}
    
        <Typography variant='subtitle1'>Content</Typography>

        <div className='post-tools-div'>
            <Tooltip title='Reply'><ChatBubbleOutline /></Tooltip>
            <Tooltip title='Repollinate'><Repeat /></Tooltip>
            <Tooltip title='Like'><FavoriteBorder /></Tooltip>
            <Tooltip title='Share'><IosShare /></Tooltip>
        </div>
    
    </div>
  )
}

export default Post
import { ChatBubbleOutline, FavoriteBorder, IosShare, MoreHoriz, Repeat } from '@mui/icons-material'
import { Avatar, Tooltip, Typography } from '@mui/material'
import React from 'react'

const Post = ({postDetails}) => {
  return (
    <div className='post-div'>
        {/* Will be a conditional statement determining if the post was reshared (repollenated) by a user they follow. If so then will have a little script at the top containing who did */}
        <Avatar />
        <div className='post-content-wrapper-div'>
        <div className='post-header-div'>
            <h5 className='post-display-name'>Display Name</h5>
            {/* Verified Badge? */}
            <h7 className='post-user-name'>UserName</h7>
            <h7 className='post-time-stamp-separator'> - </h7>
            <h7 className='post-time-stamp'>TimeStamp</h7>
        </div>

        {/* If it is a reply then it will say it is replying to a user */}
    
        <Typography variant='subtitle1' className='post-content'>Content</Typography>

        <div className='post-tools-div'>
            <Tooltip title='Reply'><ChatBubbleOutline /></Tooltip>
            <Tooltip title='Repollinate'><Repeat /></Tooltip>
            <Tooltip title='Like'><FavoriteBorder /></Tooltip>
            <Tooltip title='Share'><IosShare /></Tooltip>
        </div>

        </div>

        <Tooltip title='More'><MoreHoriz /></Tooltip>
    
    </div>
  )
}

export default Post
import { ChatBubbleOutline, FavoriteBorder, IosShare, MoreHoriz, Repeat } from '@mui/icons-material'
import { Avatar, Tooltip } from '@mui/material'
import React from 'react'

const Post = ({postDetails}) => {
  return (
    <div className='post-div'>
        {/* Will be a conditional statement determining if the post was reshared (repollenated) by a user they follow. If so then will have a little script at the top containing who did */}
        <Avatar />
        <div className='post-content-wrapper-div'>
        <div className='post-header-div'>
          <div className='post-header-details-div'>
            <h5 className='post-display-name'>Display Name</h5>
            {/* Verified Badge? */}
            <h7 className='post-user-name'>UserName</h7>
            <h7 className='post-time-stamp-separator'> - </h7>
            <h7 className='post-time-stamp'>TimeStamp</h7>
          
          </div>
            
            
            <Tooltip title='More' className='post-reply-tooltip'><MoreHoriz className='post-reply-icon'/></Tooltip>
        
        </div>

        {/* If it is a reply then it will say it is replying to a user */}
    
        <p className='post-content'>Content</p>

        <div className='post-tools-div'>
            <Tooltip title='Reply' className='post-reply-tooltip'><ChatBubbleOutline className='post-reply-icon'/></Tooltip>
            <Tooltip title='Repollinate' className='post-repollinate-tooltip'><Repeat className='post-repollinate-icon'/></Tooltip>
            <Tooltip title='Like' className='post-like-tooltip'><FavoriteBorder className='post-like-icon'/></Tooltip>
            <Tooltip title='Share' className='post-reply-tooltip'><IosShare className='post-reply-icon'/></Tooltip>
        </div>

        </div>

        
    
    </div>
  )
}

export default Post
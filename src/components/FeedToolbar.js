import { Badge } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { FaForumbee, FaHashtag, FaHome, FaRegBell } from 'react-icons/fa'

const FeedToolbar = ({notifications}) => {

  // const [unOpenedNotifications, setUnopenedNotifications] = useState({notifications});

  return (
    <div className='feed-toolbar-div'>
        <FaHome className='feed-toolbar-button'/>
        <FaHashtag className='feed-toolbar-button'/>
        <Badge badgeContent={notifications ? notifications : 0} color='primary'>
          <FaRegBell className='feed-toolbar-button'/>
        </Badge>
        
        <FaForumbee className='feed-toolbar-button'/>
        <image src=''/>
    </div>
  )
}

export default FeedToolbar
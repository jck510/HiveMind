import { EmojiNature, Hive, MailOutline, NotificationsOutlined, Search, Tag } from '@mui/icons-material'
import { Avatar, Badge, Icon, Tooltip } from '@mui/material'
import React from 'react'

const FeedToolbarOption = ({title, notifications , messages}) => {

  

  return (
    <Tooltip title={title} className='tool-bar-option-tooltip'>
        <div className='tool-bar-option-div'>
            {title === 'Hive' && <Hive fontSize='large'/>}
            {title === 'Search' && <Search fontSize='large'/>}
            {title === 'Notifications' && <Badge badgeContent={notifications ? notifications : 0}><NotificationsOutlined fontSize='large'/></Badge>}
            {title === 'Messages' && <Badge badgeContent={messages ? messages : 0}><MailOutline fontSize='large'/></Badge>}
            {title === 'Profile' && <Avatar fontSize='large'/>}
            {title === 'Pollinate' && <EmojiNature fontSize='large'/>}
            <h2>{title}</h2>
        </div>
        
    </Tooltip>
  )
}

export default FeedToolbarOption
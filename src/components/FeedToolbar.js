import { Hive, MailOutline, NotificationsOutlined, Search, Tag } from '@mui/icons-material'
import { Avatar, Badge, Icon, List, ListItemIcon, MenuList, Tooltip } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import FeedToolbarOption from './FeedToolbarOption'


const FeedToolbar = ({notifications, messages}) => {

  // const [unOpenedNotifications, setUnopenedNotifications] = useState({notifications});

  return (
    <div>
      <h1>HiveMind</h1>
      <List className='feed-toolbar-list'>

          <FeedToolbarOption title='Hive'/>
          <FeedToolbarOption title='Search' />
          <FeedToolbarOption title='Notifications' notifications={notifications}/>
          <FeedToolbarOption title='Messages' messages={messages}/>
          <FeedToolbarOption title='Profile' />
          <FeedToolbarOption title='Pollinate' />

      </List>
    </div>
  )
}

export default FeedToolbar
import { Hive, MailOutline, NotificationsOutlined, Search, Tag } from '@mui/icons-material'
import { Avatar, Badge, Icon, List, ListItemIcon, MenuList, Tooltip } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import AppToolBarOption from './AppToolbarOption'


const AppToolBar = ({notifications, messages}) => {

  // const [unOpenedNotifications, setUnopenedNotifications] = useState({notifications});

  return (
    <div>
      <h1>HiveMind</h1>
      <List className='feed-toolbar-list'>

          <AppToolBarOption title='Hive'/>
          <AppToolBarOption title='Search' />
          <AppToolBarOption title='Notifications' notifications={notifications}/>
          <AppToolBarOption title='Messages' messages={messages}/>
          <AppToolBarOption title='Profile' />
          <AppToolBarOption title='Pollinate' />

      </List>
    </div>
  )
}

export default AppToolBar
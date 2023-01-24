import { Hive, MailOutline, NotificationsOutlined, Search, Tag } from '@mui/icons-material'
import { Avatar, Badge, Icon, List, ListItemIcon, MenuList, Tooltip } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AppToolBarOption from './AppToolbarOption'


const AppToolBar = ({notifications, messages, modalOpen}) => {

  // const [unOpenedNotifications, setUnopenedNotifications] = useState({notifications});

  return (
    <div className='app-toolbar-div'>
      <h1>HiveMind</h1>
      <List className='feed-toolbar-list'>

          <div><Link to='/hive'><AppToolBarOption title='Hive'/></Link></div>
          <div><Link to='/search'><AppToolBarOption title='Search' /></Link></div>
          <div><Link to='/notifications'><AppToolBarOption title='Notifications' notifications={notifications}/></Link></div>
          <div><Link to='/messages'><AppToolBarOption title='Messages' messages={messages}/></Link></div>
          <div><Link to='/profile/jck'><AppToolBarOption title='Profile' /></Link></div>
          <div onClick={() => modalOpen(true)}><AppToolBarOption title='Pollinate' /></div>
          {/* <div><Link to='/pollinate'><AppToolBarOption title='Pollinate' /></Link></div> */}

      </List>
    </div>
  )
}

export default AppToolBar
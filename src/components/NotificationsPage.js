import { Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import Feed from './Feed'
import NotificationFeed from './NotificationFeed'

const NotificationsPage = () => {
  return (
    <div className='notifications-page-div'>
        <div className='notifications-page-header-div'>
            <Typography variant='h5'>Notifications</Typography>


            {/* <Tabs>
                <Tab label='All'/>
                <Tab label='Verified'/>
                <Tab label='Mentions'/>
            </Tabs> */}
        </div>

        <NotificationFeed />
        


    </div>
  )
}

export default NotificationsPage
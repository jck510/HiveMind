import { Tab, Tabs } from '@mui/material'
import React from 'react'
import Feed from './Feed'

const ProfileDetailsFeed = () => {
    // Will determine what the feed will be populated with depending on the current tab open
  return (
    <div>
        <Tabs >
          <Tab label='Pollenations'/>
          <Tab label='Media'/>
          <Tab label='Likes'/>
        </Tabs>
        <Feed />
    </div>
  )
}

export default ProfileDetailsFeed
import { KeyboardBackspace } from '@mui/icons-material'
import React from 'react'
import ProfileDetails from './ProfileDetails'
import ProfileDetailsFeed from './ProfileDetailsFeed'

const ProfilePage = () => {
  return (
    <div className='profile-page-div'>
      <div className='profile-page-header-div home-page-header-div'>
          <KeyboardBackspace />
          <h2>Display Name</h2>

      </div>
        <ProfileDetails />
        <ProfileDetailsFeed />
    </div>
  )
}

export default ProfilePage
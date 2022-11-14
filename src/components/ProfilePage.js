import React from 'react'
import ProfileDetails from './ProfileDetails'
import ProfileDetailsFeed from './ProfileDetailsFeed'

const ProfilePage = () => {
  return (
    <div className='profile-page-div'>
        <ProfileDetails />
        <ProfileDetailsFeed />
    </div>
  )
}

export default ProfilePage
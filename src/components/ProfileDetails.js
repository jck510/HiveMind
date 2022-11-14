import { Verified } from '@mui/icons-material'
import { Avatar, Button, Tab, Tabs } from '@mui/material'
import React from 'react'


const ProfileDetails = () => {
  return (
    <div className='profile-details-div'>
        <Avatar src='' className='profile-details-profile-picture'></Avatar>
        <image src='' className='profile-details-banner-picture' />
        {/* Will show edit profile button if the user logged in is the same as the profile that is being viewed */}
        <button>Edit profile</button>
        {/* Otherwise there will be a follow button */}
        <Button variant='contained'>Follow</Button>
        <h3>Display Name</h3>
        <Verified />
        <h5>Username</h5>
        <h5>Member Since </h5>
        <h6>Followers</h6>
        <h6>Following</h6>
        
    </div>
  )
}

export default ProfileDetails
import { CalendarMonth, KeyboardBackspace, Verified } from '@mui/icons-material'
import { Avatar, Button, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'


const ProfileDetails = () => {
  return (
    <div className='profile-details-div'>
        <div className='profile-details-header-div'>
          <KeyboardBackspace />
          <Typography variant='h5'>Display Name</Typography>

        </div>
        <Avatar src='' className='profile-details-profile-picture'></Avatar>
        <image src='' className='profile-details-banner-picture' />
        {/* Will show edit profile button if the user logged in is the same as the profile that is being viewed */}
        <button>Edit profile</button>
        {/* Otherwise there will be a follow button */}
        <Button variant='contained'>Follow</Button>
        <h3>Display Name</h3>
        <Verified />
        <h5>Username</h5>
        <div>
          <CalendarMonth />
          <h5>Member Since </h5>
        </div>
        
        <h6>Followers</h6>
        <h6>Following</h6>
        
    </div>
  )
}

export default ProfileDetails
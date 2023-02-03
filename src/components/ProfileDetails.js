import { CalendarMonth, KeyboardBackspace, Verified } from '@mui/icons-material'
import { Avatar, Button, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'


const ProfileDetails = () => {
  return (
    <div className='profile-details-div'>
        
        <img alt='' src='../assets/images/samplebanner.jpg' className='profile-details-banner-picture' height='200px' width='595px' />
        
        <div className='profile-details-profile-picture-and-button-div'>
        <Avatar src='' className='profile-details-profile-picture' sx={{height: '140px', width: '140px' , outline: '5px solid white', marginLeft: '20px', marginTop: '-75px'}} ></Avatar>
        
        <div className='profile-details-button-div'>

          {/* Will show edit profile button if the user logged in is the same as the profile that is being viewed */}
          <button>Edit profile</button>
          {/* Otherwise there will be a follow button */}
          <Button variant='contained'>Follow</Button>

        </div>

        </div>
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
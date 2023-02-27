import { CalendarMonth, KeyboardBackspace, MoreHoriz, Verified } from '@mui/icons-material'
import { Avatar, Button, Tab, Tabs, Tooltip, Typography } from '@mui/material'
import React from 'react'


const ProfileDetails = () => {
  return (
    <div className='profile-details-div'>
        
        <img alt='' src='../assets/images/samplebanner.jpg' className='profile-details-banner-picture' height='200px' width='595px' />
        
        <div className='profile-details-profile-picture-and-button-div'>
        <Avatar src='' className='profile-details-profile-picture' sx={{height: '140px', width: '140px' , outline: '5px solid white', marginLeft: '20px', marginTop: '-75px'}} ></Avatar>
        
        <div className='profile-details-button-div'>

          {/* Will show edit profile button if the user logged in is the same as the profile that is being viewed */}
          <button className='edit-profile-button'>Edit profile</button>
          {/* Otherwise there will be a follow button and settings button */}
          <Tooltip title='More'><MoreHoriz /></Tooltip>
          
          <Button variant='contained' 
          sx={{ 
            textTransform:'none', 
            backgroundColor: 'black', 
            fontWeight: 'bold',
            borderRadius: '25px'
            }}
          >Follow</Button>

        </div>

        </div>

      <div className='profile-details-profile-information-div'>
        <div className='profile-details-display-name-div'>
          <h3 className='profile-details-display-name'>Display Name</h3>
          <Verified />
        </div>
        
        <h5 className='profile-details-username'>Username</h5>
        <div className='profile-details-member-since-div'>
          <CalendarMonth />
          <h5>Member Since </h5>
        </div>
        
        <div className='profile-details-follower-numbers-div'>
          <h6 className='followers-label'>Followers</h6>
          <h6 className='followers-label'>Following</h6>
        </div>
        
      </div>
    </div>
  )
}

export default ProfileDetails
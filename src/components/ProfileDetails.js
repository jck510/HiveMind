import React from 'react'
import { GiBee } from 'react-icons/gi';

const ProfileDetails = () => {
  return (
    <div className='profile-details-div'>
        <image src='' className='profile-details-profile-picture'/>
        <image src='' className='profile-details-banner-picture' />
        <button>Edit profile</button>
        <h3>Display Name</h3>
        <GiBee />
        <h5>Username</h5>
        <h5>Member Since </h5>
        <h6>Followers</h6>
        <h6>Following</h6>
    </div>
  )
}

export default ProfileDetails
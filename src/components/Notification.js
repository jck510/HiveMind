import { Favorite, Person, Repeat } from '@mui/icons-material'
import React from 'react'
import Post from './Post'

const Notification = ({notificationDetails}) => {
  return (
    <div className='notification-div'>
      {/* There will be a conditional here to determine which icon will be shown for the given notification */}
      <Favorite />
      <Person />
      <Repeat />

      {/* The following notifications can consist of 
      
      Display Name Repollenated your post
      Post text/ link to post with the photo

      Display Name Liked your post
      Post text/ link to post with the photo

      Display Name followed you

      Display Name liked your reply
      Post text/ link to post with the photo

      Display Name @username - timestamp
      Replying to @users associated with the post
      Post text/link to post with the photo
      
      */}
    </div>
  )
}

export default Notification
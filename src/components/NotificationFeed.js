import React from 'react'
import Notification from './Notification';

const NotificationFeed = () => {

    const notifications = [0,1,2,3,4,5,6,7,8];

  return (
    <div className='notification-feed-div'>
      {notifications.map((notification) => (
        <Notification notificationDetails={notification}/>
      ))}
    </div>
  )
}

export default NotificationFeed
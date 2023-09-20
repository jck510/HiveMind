import React from 'react'

const Message = ({conversationMessage}) => {

  const loggedInUserID = 1;
  // The line above will need to be switched to include the id of the current user that is logged in

  console.log(conversationMessage.userID, ' had a message id of ', conversationMessage.messageID);
  return (
    <div className='message-div'>
        {(conversationMessage.userID === loggedInUserID) ? <h5>Blue</h5> : <h5>Grey</h5>}
        <h6>{conversationMessage.messageText}</h6>
    </div>
  )
}

export default Message
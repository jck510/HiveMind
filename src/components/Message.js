import React from 'react'

const Message = ({conversationMessage}) => {

  const loggedInUserID = 1;
  // The line above will need to be switched to include the id of the current user that is logged in

  console.log(conversationMessage.userID, ' had a message id of ', conversationMessage.messageID);
  return (
    <div className='conversation-messages-div'>
        {(conversationMessage.userID === loggedInUserID) ? <h5 className='your-own-message-bubble'>{conversationMessage.messageText}</h5> : <h5 className='another-user-message-bubble'>{conversationMessage.messageText}</h5>}
        {/* need to add image/ attachment messages */}
    </div>
  )
}

export default Message
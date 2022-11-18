import React from 'react'
import ConversationOption from './ConversationOption';

const MessageList = () => {

    const conversations = [0,1,2,3,4,5,6,7,8];

  return (
    <div className='message-list-div'>
        {conversations.map((conversation) => (
            <ConversationOption />
        ))}
    </div>
  )
}

export default MessageList
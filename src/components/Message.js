import React from 'react'

const Message = ({fromUser}) => {
  return (
    <div className='message-div'>
        {fromUser ? <h5>Blue</h5> : <h5>Grey</h5>}
    </div>
  )
}

export default Message
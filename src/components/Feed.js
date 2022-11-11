import React from 'react'
import Post from './Post';


// This component will contain a list of posts. Will load the 30 most recent posts. Number is subject to change upon further testing
const Feed = () => {

  // Will load posts from the database
  const posts = [1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,1,11,1];

  return (
    <div className='feed-div'>
      {posts.map((post) => (
        <Post postDetails={post}/>
      ))}
    </div>
  )
}

export default Feed
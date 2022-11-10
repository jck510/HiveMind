import { AppBar, Typography } from '@mui/material'
import React from 'react'
import CreatePost from './CreatePost'
import FeedToolbar from './FeedToolbar'
import SelectedPost from './SelectedPost'

const Home = () => {
  return (
    <div className='home-page-div'>
        <FeedToolbar />
        {/* <div className='home-page-content-div'>
            <AppBar position='sticky'>
                <Typography variant='h5'>Home</Typography>
            </AppBar>
        
        <CreatePost />
        </div> */}
        <SelectedPost />
    </div>
  )
}

export default Home
import { AppBar, Typography } from '@mui/material'
import React from 'react'
import CreatePost from './CreatePost'
import Feed from './Feed'
import AppToolBar from './AppToolbar'
import SelectedPost from './SelectedPost'

const Home = () => {
  return (
    <div className='home-page-div'>
        <AppToolBar />
        <div className='home-page-content-div'>
            <AppBar position='sticky'>
                <Typography variant='h5'>The Hive</Typography>
            </AppBar>
        
        <CreatePost />
        <Feed />
        </div>
    </div>
  )
}

export default Home
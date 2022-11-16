import { AppBar, Typography } from '@mui/material'
import React from 'react'
import CreatePost from './CreatePost'
import Feed from './Feed'
import AppToolBar from './AppToolbar'
import SelectedPost from './SelectedPost'

const Home = () => {
  return (
    <div className='home-page-div'>
        <div className='home-page-content-div'>
            <div className='home-page-header-div'>
                <Typography variant='h5'>The Hive</Typography>
            </div>
        
        <CreatePost />
        <Feed />
        </div>
    </div>
  )
}

export default Home
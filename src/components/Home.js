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
                <h2 className='page-header'>The Hive</h2>
            </div>
        
        <CreatePost />
        <Feed />
        </div>
    </div>
  )
}

export default Home
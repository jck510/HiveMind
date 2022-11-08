import { AppBar } from '@mui/material'
import React from 'react'

const MainHeader = () => {
  return (
    <div className='main-header-div'>
        <AppBar color='primary' position='static'>
        <h1>HiveMind</h1>
        </AppBar>
    </div>
  )
}

export default MainHeader
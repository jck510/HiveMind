import { Close } from '@mui/icons-material'
import { Box, Modal, Tooltip, Typography } from '@mui/material'
import React from 'react'
import CreatePost from './CreatePost'

const Pollinate = ({isOpen, modalHandler}) => {
  return (
    <div className='pollinate-modal-div'>
        <Modal open={isOpen} onClose={() => modalHandler(false)}>
            <Box position='absolute' top='50%' left='50%' backgroundColor='white'>
                <Tooltip title='Close' onClick={() => modalHandler(false)}><Close /></Tooltip>
                <CreatePost modalHandler={modalHandler}/>
            </Box>
        </Modal>
    </div>
  )
}

export default Pollinate
import { KeyboardBackspace, Search } from '@mui/icons-material'
import { InputAdornment, TextField, Tooltip } from '@mui/material'
import React from 'react'

const SearchPage = () => {
  return (
    <div className='search-page-div'>
        <div className='search-page-header-div'>

            {/* <Tooltip title='Back'><KeyboardBackspace /></Tooltip> */}
            <TextField placeholder='Search HiveMind' InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <Search />
                    </InputAdornment>
                ),
            }}
            variant='outlined'/>

        </div>

    </div>
  )
}

export default SearchPage
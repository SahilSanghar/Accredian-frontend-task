import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../assets/logo.png'
import { Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
return (
    <Box display='flex' justifyContent='space-between' paddingInline='200px' marginTop='10px'>
        <Stack display='inline'>
            <img src={Logo} alt='Logo' className='Logo' style={{ width: '115px' }} />
            <Button sx={{ backgroundColor: '#1A73E8' , color: 'white', width: '116px', textTransform: 'none', marginLeft: '20px', marginBottom: '32px' , '&:hover': { backgroundColor: '#1A73E8 !important' }}}> 
                Courses
                <KeyboardArrowDownIcon />
            </Button>
        </Stack>
        <Stack display='inline'>
            <Typography>
                Refer & Earn &nbsp;&nbsp;
                Resources &nbsp;&nbsp;
                About Us &nbsp;&nbsp;
            <Button sx={{ backgroundColor: '#A9B5C6', color: 'black', textTransform: 'none', marginBottom: "3px", '&:hover': { backgroundColor: '#A9B5C6 !important' }}}>
                Login
            </Button>
            <Button sx={{ width: '110px', backgroundColor: '#1A73E8' , color: 'white', marginLeft: '15px' , textTransform: 'none', marginBottom: "3px", '&:hover': { backgroundColor: '#1A73E8 !important' }}}>
                Try for free
            </Button>
            </Typography>
        </Stack>
    </Box>
)
}

export default Header
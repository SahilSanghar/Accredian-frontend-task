import React from 'react'
import FooterHead from '../Components/FooterHead'
import { Box, Divider } from '@mui/material'
import Details from '../Components/Details'
import Copyright from '../Components/Copyright'

const Footer = () => {
return (
    <Box height='800px' sx={{ backgroundColor: '#282828', color: 'white'}}>
        <FooterHead />
        <Divider variant="middle" sx={{ borderColor: 'white', width: '1100px', marginX: '200px' }}  />
        <Details />
        <Copyright />
    </Box>
)
}

export default Footer
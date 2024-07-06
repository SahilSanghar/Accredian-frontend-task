import React from 'react'
import { Box, Button, Typography } from '@mui/material'

const Navbar = () => {
return (
    <Box display='flex' alignItems='center' justifyContent='center' sx={{ backgroundColor: '#EEF5FF' }}>
        <Typography>
            Navigate your ideal career path with tailored expert advice
        </Typography>
        <Button sx={{ textTransform: 'none', '&:hover': { backgroundColor: 'transparent !important' }}}>
            Contact Expert
        </Button>
    </Box>
)
}

export default Navbar
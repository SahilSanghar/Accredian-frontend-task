import { Box, Typography } from '@mui/material'
import React from 'react'

const Copyright = () => {
return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
        <Typography variant='body1' sx={{ textAlign: 'center' }}>
            &copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </Typography>
    </Box>
)
}

export default Copyright
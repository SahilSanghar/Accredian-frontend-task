import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../assets/footerLogo.png'

const FooterHead = () => {
return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', paddingTop: '30px', marginY: '50px'}}>
        <Stack>
            <img src={Logo} alt='Logo' height='50px' width='150px' />
        </Stack>

        <Stack>
            <Button sx={{ height: '40px', width: '250px', backgroundColor: '#007BFF !important', color: 'white', borderRadius: '5px', '&:hover': {border: '2px solid #fff',},}}>
                Schedule 1-on-1 Call Now
            </Button>
            <Typography color='white' variant='p' align='center' paddingTop='5px'>
                Speak with our Learning Advisor
            </Typography>
        </Stack>
    </Box>
)
}

export default FooterHead
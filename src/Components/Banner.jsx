import { Box, Grid, Stack, Typography } from '@mui/material'
import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import BannerImg from '../assets/banner.png'
import Money1 from '../assets/belowMoney.png'
import Money2 from '../assets/moneyTopLeft.png'
import Money3 from '../assets/moneyTopRight.png'
import Money4 from '../assets/moneyBgRight.png'
import Money5 from '../assets/moneyBgTop.png'

const Banner = () => {
    const navigate = useNavigate(); // Initialize navigate

    const handleReferNow = () => {
        navigate('/refer'); // Navigate to '/refer' route on button click
    };

return (
    <Box>
        <Stack direction="row" marginInline='500px' borderRadius='40px' paddingY='10px' sx={{ backgroundColor: '#EEF5FF' }}>
            <Typography paddingLeft='65px'>
                Refer
            </Typography>
            <Typography paddingLeft='50px'>
                Benefits
            </Typography>
            <Typography paddingLeft='50px'>
                FAQs
            </Typography>
            <Typography paddingLeft='50px'>
                Support
            </Typography>
        </Stack>
        <Grid container spacing={2} width='1000px' height='450px' borderRadius='30px' marginTop='30px' marginLeft='230px' sx={{ backgroundColor: '#EEF5FF', boxShadow: '0px 0px 65px rgba(0, 7, 43, 0.21)', }}>
            <Grid xs={4} paddingLeft='50px' paddingY='80px'>
                <Typography variant="h3" fontWeight='bold'>
                    Let's Learn <br/>
                    & Earn
                </Typography>
                <Typography variant="h5" paddingTop='40px'>
                    Get a chance to win <br />
                    up-to <Typography variant='span'>
                                Rs. 15,000
                            </Typography>
                </Typography>
                <Button sx={{ width: '110px', backgroundColor: '#1A73E8' , color: 'white', marginTop: '30px' , textTransform: 'none', marginBottom: "3px", '&:hover': { backgroundColor: '#1A73E8 !important' }}} onClick={handleReferNow}>
                    Refer Now
                </Button>
            </Grid>
            <Grid item xs={8} sx={{ position: 'relative', height: '450px', width: '630px' }}>
        <Box
        component="img"
        src={BannerImg}
        alt="Banner Img"
        sx={{ height: '100%', width: '100%', objectFit: 'cover', marginBottom: '20px' }}
        />
        <Box
        component="img"
        src={Money1}
        alt="Money 1"
        sx={{ position: 'absolute', top: '78%', left: '12%', height: '105px' }}
        />
        <Box
        component="img"
        src={Money2}
        alt="Money 2"
        sx={{ position: 'absolute', top: '0%', left: '-50%', height: '70px' }}
        />
        <Box
        component="img"
        src={Money3}
        alt="Money 3"
        sx={{ position: 'absolute', top: '0%', left: '80%', height: '70px' }}
        />
        <Box
        component="img"
        src={Money4}
        alt="Money 4"
        sx={{ position: 'absolute', top: '40%', left: '78%', height: '110px' }}
        />
        <Box
        component="img"
        src={Money5}
        alt="Money 5"
        sx={{ position: 'absolute', top: '0%', left: '30%', height: '110px' }}
        />
    </Grid>
        </Grid>
    </Box>
)
}

export default Banner
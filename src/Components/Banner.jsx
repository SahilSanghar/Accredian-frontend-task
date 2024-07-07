import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import BannerImg from '../assets/banner.png';
import Money1 from '../assets/belowMoney.png';
import Money2 from '../assets/moneyTopLeft.png';
import Money3 from '../assets/moneyTopRight.png';
import Money4 from '../assets/moneyBgRight.png';
import Money5 from '../assets/moneyBgTop.png';

const Banner = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('refer');

    const handleReferNow = () => {
        navigate('/refer');
    };

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    return (
        <Box>
            <Stack direction="row" marginInline='500px' borderRadius='40px' paddingY='10px' sx={{ backgroundColor: '#EEF5FF' }}>
                <Typography
                    paddingLeft='65px'
                    onClick={() => scrollToSection('refer')}
                    style={{
                        cursor: 'pointer',
                        color: activeSection === 'refer' ? '#1A73E8' : 'inherit',
                        position: 'relative'
                    }}
                >
                    Refer
                    {activeSection === 'refer' && <span style={{ position: 'absolute', bottom: '-5px', left: '82%', transform: 'translateX(-50%)', backgroundColor: '#1A73E8', width: '4px', height: '4px', borderRadius: '50%', display: 'block' }}></span>}
                </Typography>
                <Typography
                    paddingLeft='50px'
                    onClick={() => scrollToSection('benefits')}
                    style={{
                        cursor: 'pointer',
                        color: activeSection === 'benefits' ? '#1A73E8' : 'inherit',
                        position: 'relative'
                    }}
                >
                    Benefits
                    {activeSection === 'benefits' && <span style={{ position: 'absolute', bottom: '-5px', left: '75%', transform: 'translateX(-50%)', backgroundColor: '#1A73E8', width: '4px', height: '4px', borderRadius: '50%', display: 'block' }}></span>}
                </Typography>
                <Typography
                    paddingLeft='50px'
                    onClick={() => scrollToSection('FAQ')}
                    style={{
                        cursor: 'pointer',
                        color: activeSection === 'FAQ' ? '#1A73E8' : 'inherit',
                        position: 'relative'
                    }}
                >
                    FAQs
                    {activeSection === 'FAQ' && <span style={{ position: 'absolute', bottom: '-5px', left: '78%', transform: 'translateX(-50%)', backgroundColor: '#1A73E8', width: '4px', height: '4px', borderRadius: '50%', display: 'block' }}></span>}
                </Typography>
                <Typography
                    paddingLeft='50px'
                    onClick={() => scrollToSection('support')}
                    style={{
                        cursor: 'pointer',
                        color: activeSection === 'support' ? '#1A73E8' : 'inherit',
                        position: 'relative'
                    }}
                >
                    Support
                    {activeSection === 'support' && <span style={{ position: 'absolute', bottom: '-5px', left: '74%', transform: 'translateX(-50%)', backgroundColor: '#1A73E8', width: '4px', height: '4px', borderRadius: '50%', display: 'block' }}></span>}
                </Typography>
            </Stack>
            <Grid container spacing={2} width='1000px' height='450px' borderRadius='30px' marginTop='30px' marginLeft='230px' sx={{ backgroundColor: '#EEF5FF', boxShadow: '0px 0px 65px rgba(0, 7, 43, 0.21)' }}>
                <Grid item xs={4} paddingLeft='50px' paddingY='80px'>
                    <Typography variant="h3" fontWeight='bold' paddingTop='70px' paddingLeft='25px'>
                        Let's Learn <br/>
                        & Earn
                    </Typography>
                    <Typography variant="h5" paddingTop='40px' paddingLeft='25px'>
                        Get a chance to win <br />
                        up-to <Typography variant='span'>
                            Rs. 15,000
                        </Typography>
                    </Typography>
                    <Button
                        sx={{
                            width: '110px',
                            backgroundColor: '#1A73E8',
                            color: 'white',
                            marginTop: '30px',
                            textTransform: 'none',
                            marginBottom: "3px",
                            marginLeft: '25px',
                            '&:hover': { backgroundColor: '#1A73E8' }
                        }}
                        onClick={handleReferNow}
                    >
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
    );
};

export default Banner;

import React from 'react';
import { Paper, Typography, Stack, Box, Button } from '@mui/material';
import circle from '../assets/SupportCircle.png';
import Headeset from '../assets/Headset.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Support = () => {
return (
    <Paper
    sx={{
        width: '1300px',
        height: '210px',
        backgroundColor: '#1A73E8',
        color: 'white',
        borderRadius: '12px',
        border: '1px solid #1A73E8',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px', // Inner alignment
        boxSizing: 'border-box',
        marginY: '100px',
        marginX: '90px',
        position: 'relative', // Ensure relative positioning for z-index to work
    }}
    >
      {/* Left Section */}
    <Box paddingX="50px" sx={{ cursor: 'pointer', zIndex: 2 }}> {/* Higher z-index for overlay */}
        <img src={Headeset} alt="Headset" />
    </Box>

      {/* Middle Section */}
    <Stack spacing={2} sx={{ zIndex: 2 }}> {/* Higher z-index for overlay */}
        <Typography variant="h5" gutterBottom>
            Want to delve deeper into the program?
        </Typography>
        <Typography variant="body1">
            Share your details to receive expert insights from our program team!
        </Typography>
    </Stack>

      {/* Right Section (Circle Image) */}
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px', marginRight: '20px', zIndex: 1 }}> {/* Lower z-index for background */}
        <img src={circle} alt="Circle" height="200px" width="130%" />
    </Box>

    {/* Button Section */}
    <Box sx={{ position: 'absolute', right: '120px', bottom: '80px', zIndex: 2 }}> {/* Higher z-index for overlay */}
        <Button sx={{ backgroundColor: 'white !important', color: "#3B82F6", width: '190px', height: '50px', fontSize: '20px', textTransform: 'none' }}>
            Get in touch &nbsp; <ArrowForwardIosIcon />
        </Button>
    </Box>
    </Paper>
);
};

export default Support;

import React, { useState, useEffect } from 'react';
import { Box, Menu, MenuItem, Stack, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Logo from '../assets/logo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (cookies.user) {
            setIsLoggedIn(true);
        }
    }, [cookies.user]);

    const handleCoursesClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCoursesClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        removeCookie('user', { path: '/' });
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <Box display='flex' justifyContent='space-between' paddingInline='200px' marginTop='10px'>
            <Stack display='inline'>
                <img src={Logo} alt='Logo' className='Logo' style={{ width: '115px' }} />
                <Button sx={{ backgroundColor: '#1A73E8', color: 'white', width: '116px', textTransform: 'none', marginLeft: '20px', marginBottom: '32px', '&:hover': { backgroundColor: '#1A73E8 !important' } }} onClick={handleCoursesClick}>
                    Courses
                    <KeyboardArrowDownIcon />
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCoursesClose}
                >
                    <MenuItem onClick={handleCoursesClose}>Product Management</MenuItem>
                    <MenuItem onClick={handleCoursesClose}>Strategy & Leadership</MenuItem>
                    <MenuItem onClick={handleCoursesClose}>Business Management</MenuItem>
                    <MenuItem onClick={handleCoursesClose}>Fintech</MenuItem>
                    <MenuItem onClick={handleCoursesClose}>Senior Management</MenuItem>
                    <MenuItem onClick={handleCoursesClose}>Data Science</MenuItem>
                    <MenuItem onClick={handleCoursesClose}>Digital Transformation</MenuItem>
                    <MenuItem onClick={handleCoursesClose}>Business Analytics</MenuItem>
                </Menu>
            </Stack>
            <Stack display='inline'>
                <Typography>
                    Refer & Earn &nbsp;&nbsp;
                    Resources &nbsp;&nbsp;
                    About Us &nbsp;&nbsp;
                    {isLoggedIn ? (
                        <Button sx={{ backgroundColor: 'whitesmoke !important', color: 'black', textTransform: 'none', marginBottom: "3px" }} onClick={handleLogout}>
                            Logout
                        </Button>
                    ) : (
                        <>
                            <Button sx={{ backgroundColor: 'whitesmoke !important', color: 'black', textTransform: 'none', marginBottom: "3px" }} onClick={() => navigate('/login')}>
                                Login
                            </Button>
                            <Button sx={{ width: '110px', backgroundColor: '#1A73E8', color: 'white', marginLeft: '15px', textTransform: 'none', marginBottom: "3px", '&:hover': { backgroundColor: '#1A73E8 !important' } }} onClick={() => navigate('/register')}>
                                Try for free
                            </Button>
                        </>
                    )}
                </Typography>
            </Stack>
        </Box>
    );
}

export default Header;

import { Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SchoolIcon from '@mui/icons-material/School';

const style = {
    py: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
};

const GradientSchoolIcon = () => {
    return (
    <svg width="24" height="24" viewBox="0 0 24 24">
        <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#29ABE2', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#6200D2', stopOpacity: 1 }} />
        </linearGradient>
        </defs>
        <SchoolIcon sx={{ fill: 'url(#gradient1)' }} />
    </svg>
    );
};

const bonusData = [
    { program: 'Professional Certificate Program in Product Management', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
    { program: 'PG Certificate Program in Strategic Product Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Executive Program in Data Driven Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { program: 'Executive Program in Product Management and Digital Transformation', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { program: 'Executive Program in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { program: 'Advanced Certification in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { program: 'Executive Program in Product Management and Project Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' }
];

const Benefits = () => {
    const [activeItem, setActiveItem] = useState('ALL PROGRAMS');

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };
    
return (
<Grid container spacing='-50px' marginTop='2px'>
<Grid item xs={4}>
            <ListItem>
                <List sx={{ width: '90%', paddingTop: '0px', boxShadow: '0px 1px 24.4px 1px rgba(0, 0, 0, 0.16)', borderRadius: '8px', paddingBottom: '0px' }}>
                    <ListItem
                        sx={{
                            backgroundColor: activeItem === 'ALL PROGRAMS' ? '#1A73E8' : 'transparent',
                            color: activeItem === 'ALL PROGRAMS' ? 'white' : 'black',
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleItemClick('ALL PROGRAMS')}
                    >
                        <ListItemText primary="ALL PROGRAMS" />
                        <ArrowForwardIosIcon />
                    </ListItem>
                    <Divider variant="middle" component="li" />
                    <ListItem
                        sx={{
                            backgroundColor: activeItem === 'PRODUCT MANAGEMENT' ? '#1A73E8' : 'transparent',
                            color: activeItem === 'PRODUCT MANAGEMENT' ? 'white' : 'black',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleItemClick('PRODUCT MANAGEMENT')}
                    >
                        <ListItemText primary="PRODUCT MANAGEMENT" />
                        <ArrowForwardIosIcon />
                    </ListItem>
                    <Divider variant="middle" component="li" />
                    <ListItem
                        sx={{
                            backgroundColor: activeItem === 'STRATEGY & LEADERSHIP' ? '#1A73E8' : 'transparent',
                            color: activeItem === 'STRATEGY & LEADERSHIP' ? 'white' : 'black',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleItemClick('STRATEGY & LEADERSHIP')}
                    >
                        <ListItemText primary="STRATEGY & LEADERSHIP" />
                        <ArrowForwardIosIcon />
                    </ListItem>
                    <Divider variant="middle" component="li" />
                    <ListItem
                        sx={{
                            backgroundColor: activeItem === 'BUSINESS MANAGEMENT' ? '#1A73E8' : 'transparent',
                            color: activeItem === 'BUSINESS MANAGEMENT' ? 'white' : 'black',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleItemClick('BUSINESS MANAGEMENT')}
                    >
                        <ListItemText primary="BUSINESS MANAGEMENT" />
                        <ArrowForwardIosIcon />
                    </ListItem>
                    <Divider variant="middle" component="li" />
                    <ListItem
                        sx={{
                            backgroundColor: activeItem === 'FINTECH' ? '#1A73E8' : 'transparent',
                            color: activeItem === 'FINTECH' ? 'white' : 'black',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleItemClick('FINTECH')}
                    >
                        <ListItemText primary="FINTECH" />
                        <ArrowForwardIosIcon />
                    </ListItem>
                    <Divider variant="middle" component="li" />
                    <ListItem
                        sx={{
                            backgroundColor: activeItem === 'SENIOR MANAGEMENT' ? '#1A73E8' : 'transparent',
                            color: activeItem === 'SENIOR MANAGEMENT' ? 'white' : 'black',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleItemClick('SENIOR MANAGEMENT')}
                    >
                        <ListItemText primary="SENIOR MANAGEMENT" />
                        <ArrowForwardIosIcon />
                    </ListItem>
                    <Divider variant="middle" component="li" />
                    <ListItem
                        sx={{
                            backgroundColor: activeItem === 'DATA SCIENCE' ? '#1A73E8' : 'transparent',
                            color: activeItem === 'DATA SCIENCE' ? 'white' : 'black',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleItemClick('DATA SCIENCE')}
                    >
                        <ListItemText primary="DATA SCIENCE" />
                        <ArrowForwardIosIcon />
                    </ListItem>
                    <Divider variant="middle" component="li" />
                    <ListItem
                        sx={{
                            backgroundColor: activeItem === 'DIGITAL TRANSFORMATION' ? '#1A73E8' : 'transparent',
                            color: activeItem === 'DIGITAL TRANSFORMATION' ? 'white' : 'black',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleItemClick('DIGITAL TRANSFORMATION')}
                    >
                        <ListItemText primary="DIGITAL TRANSFORMATION" />
                        <ArrowForwardIosIcon />
                    </ListItem>
                    <Divider variant="middle" component="li" />
                    <ListItem
                        sx={{
                            backgroundColor: activeItem === 'BUSINESS ANALYTICS' ? '#1A73E8' : 'transparent',
                            color: activeItem === 'BUSINESS ANALYTICS' ? 'white' : 'black',
                            cursor: 'pointer',
                            borderBottomLeftRadius: '8px',
                            borderBottomRightRadius: '8px',
                        }}
                        onClick={() => handleItemClick('BUSINESS ANALYTICS')}
                    >
                        <ListItemText primary="BUSINESS ANALYTICS" />
                        <ArrowForwardIosIcon />
                    </ListItem>
                </List>
            </ListItem>
</Grid>

<Grid xs={8}>
    <ListItem sx={{ width: '900px' }}>
    <TableContainer component={Paper} sx={{boxShadow: '0px 4px 29.3px 0px rgba(60, 60, 60, 0.15)', borderRadius: '14px'}}>
    <Table>
        <TableHead>
            <TableRow sx={{ backgroundColor: '#1A73E859', width: '100%' }}>
                <TableCell sx={{ fontSize: '20px', color: '#1350A0'}}>Programs</TableCell>
                <TableCell sx={{ fontSize: '20px', color: '#1350A0', paddingX: '10px', borderLeft: '2px solid rgba(0, 0, 0, 0.16)'}}>Referrer Bonus</TableCell>
                <TableCell sx={{ fontSize: '20px', color: '#1350A0', paddingX: '10px', borderLeft: '2px solid rgba(0, 0, 0, 0.16)'}}>Referee Bonus</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {bonusData.map((row) => (
            <TableRow key={row.program}>
                <TableCell component="th" scope="row">
                <GradientSchoolIcon />
                <Typography variant='span' paddingLeft='10px'>
                    {row.program}
                </Typography>
                </TableCell>
                <TableCell align="center" sx={{ borderLeft: '2px solid rgba(0, 0, 0, 0.16)'}}>{row.referrerBonus}</TableCell>
                <TableCell align="center" sx={{ borderLeft: '2px solid rgba(0, 0, 0, 0.16)'}}>{row.refereeBonus}</TableCell>
            </TableRow>
        ))}
        </TableBody>
        </Table>
    </TableContainer>
    </ListItem>
</Grid>
</Grid>
)
}

export default Benefits
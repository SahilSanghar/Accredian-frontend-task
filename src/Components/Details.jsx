import React from 'react';
import { Grid, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Details = () => {
return (
<Grid container spacing={2} marginTop='10px'>
    <Grid item xs={4} marginLeft='170px'>
            <Typography variant='h5' marginLeft='30px'>
                All Programs
            </Typography>
    <ListItem>
    <List sx={{ width: '65%', paddingTop: '0px' }}>
        <ListItem>
            <ListItemText primary="DATA SCIENCE & AI" />
            <AddIcon />
        </ListItem>
        <ListItem>
            <ListItemText primary="PRODUCT MANAGEMENT" />
            <AddIcon />
        </ListItem>
        <ListItem>
            <ListItemText primary="BUSINESS ANALYTICS" />
            <AddIcon />
        </ListItem>
        <ListItem>
            <ListItemText primary="DIGITAL TRANSFORMATION" />
            <AddIcon />
        </ListItem>
        <ListItem>
            <ListItemText primary="BUSINESS MANAGEMENT" />
            <AddIcon />
        </ListItem>
        <ListItem>
            <ListItemText primary="PROJECT MANAGEMENT" />
            <AddIcon />
        </ListItem>
        <ListItem>
            <ListItemText primary="STRATEGY & LEADERSHIP" />
            <AddIcon />
        </ListItem>
        <ListItem>
            <ListItemText primary="SENIOR MANAGEMENT" />
            <AddIcon />
        </ListItem>
        <ListItem>
            <ListItemText primary="FINTECH" />
            <AddIcon />
        </ListItem>
    </List>
    </ListItem>
    </Grid>
    <Grid item xs={4}>
        <Stack>
            <Typography variant='h5'>
                Contact Us
            </Typography>
            <Typography variant='p' paddingTop='5px'>
                Email us (For Data Science Queries): admissions@accredian.com
            </Typography>
            <Typography variant='p' paddingTop='4px'>
                Email us (For Product Management Queries):pm@accredian.com
            </Typography>
            <Typography variant='p' paddingTop='4px'>
            Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
            </Typography>
            <Typography variant='p' paddingTop='4px'>
            Product Management Admission Helpline:+91 9625811095
            </Typography>
            <Typography variant='p' paddingTop='4px'>
            Enrolled Student Helpline: +91 7969322507
            </Typography>
            <Typography variant='p' paddingTop='4px'>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
            Haryana 122015
            </Typography>
        </Stack>
        <Stack>
            <Typography variant='h5' paddingTop='15px'>
                Why Accredian
            </Typography>
            <Typography variant='p' paddingTop='5px'>
                Follow Us
            </Typography>
            <Typography variant='p' paddingTop='8px' sx={{cursor: 'pointer'}}>
                <FacebookIcon /> &nbsp;&nbsp;&nbsp;
                <LinkedInIcon /> &nbsp;&nbsp;&nbsp;
                <TwitterIcon /> &nbsp;&nbsp;&nbsp;
                <InstagramIcon /> &nbsp;&nbsp;&nbsp;
                <YouTubeIcon />
            </Typography>
        </Stack>
    </Grid>
    <Grid item xs={2}>
        <Stack>
            <Typography variant='h5'>
                Accredian
            </Typography>
            <Typography variant='p' paddingTop='5px'>
                About
            </Typography>
            <Typography variant='p' paddingTop='4px'>
                Career
            </Typography>
            <Typography variant='p' paddingTop='4px'>
                Blog
            </Typography>
            <Typography variant='p' paddingTop='4px'>
                Admission Policy
            </Typography>
            <Typography variant='p' paddingTop='4px'>
                Referral Policy
            </Typography>
            <Typography variant='p' paddingTop='4px'>
                Privacy Policy
            </Typography>
            <Typography variant='p' paddingTop='4px'>
                Terms Of Services
            </Typography>
            <Typography variant='p' paddingTop='4px'>
                Master FAQs
            </Typography>
        </Stack>
    </Grid>
</Grid>
);
};

export default Details;

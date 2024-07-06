import { Button, Grid, Paper, Popover, Stack, Typography } from '@mui/material'
import React from 'react'

const FAQ = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

return (
<Grid container spacing='-50px' marginTop='100px'>
    <Grid xs={4} paddingX='80px'>
        <Paper
        sx={{
        width: '259px',
        height: '68px',
        borderRadius: '7px',
        color: '#1A73E8',
        border: '2px solid #E2E8F0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 2px 26.6px 0px rgba(0, 0, 0, 0.18)',
        padding: '2px', // Inner alignment padding
        }}>
            <Typography variant='h6'>
                Eligibility
            </Typography>
        </Paper>
        <Paper
        sx={{
        width: '259px',
        height: '68px',
        borderRadius: '7px',
        border: '2px solid #737373',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
        // boxShadow: '0px 2px 26.6px 0px rgba(0, 0, 0, 0.18)',
        padding: '2px', // Inner alignment padding
        }}>
            <Typography variant='h6'>
                How To Use?
            </Typography>
        </Paper>
        <Paper
        sx={{
        width: '259px',
        height: '68px',
        borderRadius: '7px',
        border: '2px solid #737373',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
        // boxShadow: '0px 2px 26.6px 0px rgba(0, 0, 0, 0.18)',
        padding: '2px', // Inner alignment padding
        }}>
            <Typography variant='h6'>
                Terms & Conditions
            </Typography>
        </Paper>
    </Grid>

    <Grid xs={8}>
        <Button aria-describedby={id} onClick={handleClick} sx={{ color: '#1A73E8', backgroundColor: 'transparent !important' }}>
            Do I need to have prior Product Management and Project Management experience to enroll in the program?
        </Button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
        }}
            sx={{
                backgroundColor: 'transparent !important'
            }}
        >
            <Typography sx={{ p: 2 }}>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it <br />
            suitable for individuals from any field of work.</Typography>
        </Popover>
        <Button aria-describedby={id} onClick={handleClick} sx={{ color: 'black', backgroundColor: 'transparent !important', marginTop: '100px' }}>
            What is the minimum system configuration required?
        </Button>
        {/* <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
        }}
        >
            {/* <Typography sx={{ p: 2 }}>The content of the Popover.</Typography> */}
        {/* </Popover> */} 
    </Grid>
</Grid>
)
}

export default FAQ
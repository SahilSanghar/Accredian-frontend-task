import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import circles from '../assets/circle.png'
import Add from '../assets/Add.png'
import Note from '../assets/note.png'
import Wallet from '../assets/wallet.png'

const Process = () => {
    const navigate = useNavigate();

    const handleReferNow = () => {
        navigate('/refer');
    };

return (
    <Box id='refer' height='615px' marginTop='50px' paddingY='20px' sx={{ backgroundColor: '#EEF5FF' }}>
        <Stack>
            <Typography variant='h5' textAlign='center'>
                How Do I <Typography variant='span' color='#1A73E8'>
                    Refer?
                </Typography>
            </Typography>
        </Stack>
        <Stack marginTop='-60px' alignItems='center' sx={{ position: 'relative', marginTop: '-60px' }}>
            <Box
        component="img"
        src={circles}
        alt="Circles"
        sx={{ height: '530px', width: '1100px' }}
        />
        
        <Box sx={{ position: 'absolute', top: '50%', left: '23%', textAlign: 'center' }}>
        <img src={Add} alt="Add" style={{marginLeft: '30px'}} /><br/><br />
        <Typography color="black" variant='p'>
            Submit referrals easily via <br />
            out website's Referral <br />
            section.
        </Typography>
        </Box>
        
        <Box sx={{ position: 'absolute', top: '49%', left: '44%', textAlign: 'center' }}>
        <img src={Note} alt="Note" /><br /><br />
        <Typography color="black" variant='p'>
            Earn rewards once your <br />
            referral joins an Accredian <br />
            program.
        </Typography>
        </Box>
        
        <Box sx={{ position: 'absolute', top: '48%', left: '66%', textAlign: 'center' }}>
        <img src={Wallet} alt="Wallet" /> <br /><br />
        <Typography color="black" variant='p'>
            Both parties receive a <br />
            bonus 30 days after <br />
            program enrollment.
        </Typography>
        </Box>
        </Stack>
        <Stack alignItems='center'>
            <Button sx={{ width: '200px', height: '40px', backgroundColor: '#1A73E8' , color: 'white', marginTop: '50px' , textTransform: 'none', marginBottom: "3px", '&:hover': { backgroundColor: '#1A73E8 !important' }}}  onClick={handleReferNow}>
                Refer Now
            </Button>
        </Stack>
    </Box>
)
}

export default Process
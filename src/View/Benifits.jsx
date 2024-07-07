import { Box, Button, FormControl, FormControlLabel, FormGroup, FormLabel, Stack, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Benefits from '../Components/Benefits'

const Benifits = () => {
    const navigate = useNavigate();
    const [enrolled, setEnrolled] = useState(true);

    const handleReferNow = () => {
        navigate('/refer');
    };

    const handleChange = (event) => {
        setEnrolled(event.target.checked);
    };

return (
    <Box id="benefits" marginY='50px'>
        <Stack>
            <Typography variant='h5' textAlign='center'>
                What Are The <Typography variant='span' color='#1A73E8'>
                    Referral Benifts?
                </Typography>
            </Typography>
        </Stack>
        <Stack marginX='50px'>
            <FormControl component="fieldset" sx={{ alignItems: 'end', marginRight: '100px'}}>
                {/* <FormLabel component="legend">Label placement</FormLabel> */}
                <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="Enrolled"
                    control={<Switch checked={enrolled} onChange={handleChange} color="primary" />}
                    label="Enrolled"
                    labelPlacement="start"
                />
                </FormGroup>
            </FormControl>
            <Benefits />
        </Stack>
        <Stack alignItems='center'>
            <Button sx={{ width: '200px', height: '50px', lineHeight: '24px', alignItems: 'center', fontSize: '18px', backgroundColor: '#1A73E8' , color: 'white', marginTop: '50px' , borderRadius: '8px', textTransform: 'none', marginBottom: "3px", '&:hover': { backgroundColor: '#1A73E8 !important' }}} onClick={handleReferNow}>
                Refer Now
            </Button>
        </Stack>
    </Box>
)
}

export default Benifits
import { Box, Typography } from '@mui/material'
import React from 'react'
import FAQ from '../Components/FAQ'
import Support from '../Components/Support'

const FAQs = () => {
return (
    <Box marginY='150px'>
        <Typography variant='h4' textAlign='center'>
            Frequently Asked&nbsp;
            <Typography variant='span' color='#1A73E8'>
                Questions
            </Typography>
        </Typography>
        <FAQ />
        <Support />
    </Box>
)
}

export default FAQs
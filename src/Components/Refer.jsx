import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Refer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        referralName: '',
        referralEmail: '',
        password: '',
    });


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', formData);
            console.log(response.data); // Handle success
            navigate('/'); 
        } catch (error) {
            console.error('Error referring user:', error); // Handle error
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" align="center" gutterBottom>
                    Refer Now
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Your Name"
                            variant="outlined"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Your Email"
                            variant="outlined"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Referral's Name"
                            variant="outlined"
                            name="referralName"
                            value={formData.referralName}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Referral's Email"
                            variant="outlined"
                            type="email"
                            name="referralEmail"
                            value={formData.referralEmail}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Password"
                            variant="outlined"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                    <Button fullWidth variant="contained" color="primary" type="submit">
                        Refer Now
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Refer;

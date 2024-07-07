import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
    // Add registration logic here
    };

return (
<Container maxWidth="sm">
    <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
            Register
        </Typography>
    <form onSubmit={handleRegister}>
        <Box mb={2}>
            <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </Box>
        <Box mb={2}>
            <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </Box>
        <Box mb={2}>
            <TextField
                fullWidth
                label="Confirm Password"
                variant="outlined"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
        </Box>
        <Button fullWidth variant="contained" color="primary" type="submit">
            Register
        </Button>
    </form>
    </Box>
</Container>
);
};

export default RegisterForm;

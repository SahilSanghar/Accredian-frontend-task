import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user']);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password,
            });

            // Set user cookie
            setCookie('user', response.data.token, { path: '/' });

            // Clear form fields
            setEmail('');
            setPassword('');

            // Redirect to the home page
            navigate('/');
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Failed to login. Please check your credentials and try again.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" align="center" gutterBottom>
                    Login
                </Typography>
                {error && (
                    <Typography variant="body2" color="error" align="center">
                        {error}
                    </Typography>
                )}
                <form onSubmit={handleLogin}>
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
                    <Button fullWidth variant="contained" color="primary" type="submit">
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default LoginForm;

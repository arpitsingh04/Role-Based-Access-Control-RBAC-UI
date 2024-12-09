import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const Dashboard = () => {
    return (
        <Box textAlign="center" style={{ margin: '20px' }}>
            <Typography variant="h4" style={{ marginBottom: '20px' }}>
                Welcome to the RBAC Dashboard
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '20px' }}>
                Manage users, roles, and permissions efficiently.
            </Typography>
            <Button variant="contained" color="primary" size="large">
                Get Started
            </Button>
        </Box>
    );
};

export default Dashboard;

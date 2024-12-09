import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box
            style={{
                marginTop: '20px',
                padding: '10px',
                textAlign: 'center',
                background: '#f5f5f5',
                borderTop: '1px solid #ddd',
            }}
        >
            <Typography variant="body2">
                &copy; 2024 RBAC Dashboard. All Rights Reserved.
            </Typography>
        </Box>
    );
};

export default Footer;

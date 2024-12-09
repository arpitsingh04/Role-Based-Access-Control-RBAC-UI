import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Checkbox } from '@mui/material';
import axios from 'axios';

const PermissionAssignment = () => {
    const { roles, permissions, setPermissions } = useContext(AppContext);

    useEffect(() => {
        axios.get('http://localhost:3001/permissions')
            .then(response => setPermissions(response.data))
            .catch(error => console.error(error));
    }, [setPermissions]);

    return (
        <Box>
            <Typography variant="h5" style={{ marginBottom: '20px' }}>
                Permission Assignment
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Role</TableCell>
                        {permissions.map(permission => (
                            <TableCell key={permission.id}>{permission.name}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {roles.map(role => (
                        <TableRow key={role.id}>
                            <TableCell>{role.name}</TableCell>
                            {permissions.map(permission => (
                                <TableCell key={permission.id}>
                                    <Checkbox />
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default PermissionAssignment;

import React, { useState } from 'react';
import { mockUsers, mockRoles } from '../mock/api';
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

const UsersPage = () => {
    const [users, setUsers] = useState(mockUsers);

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div>
            <h2>User Management</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>{user.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleDelete(user.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default UsersPage;

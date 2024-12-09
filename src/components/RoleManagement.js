import React from 'react';
import { useRBAC } from '../contexts/RBACContext';

const RoleManagement = () => {
    const { roles, setRoles } = useRBAC();

    return (
        <div>
            <h2>Role Management</h2>
            <ul>
                {roles.map((role, index) => (
                    <li key={index}>{role}</li>
                ))}
            </ul>
        </div>
    );
};

export default RoleManagement;

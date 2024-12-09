import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const UserManagement = () => {
    const { users, setUsers } = useContext(AppContext);

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, [setUsers]);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/users/${id}`)
            .then(() => setUsers(users.filter(user => user.id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>User Management</h2>
            <button onClick={() => alert('Add User form goes here!')}>Add User</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.role} 
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;

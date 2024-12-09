import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Drawer, Toolbar } from '@mui/material';

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Toolbar />
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/users">
                    <ListItemText primary="User Management" />
                </ListItem>
                <ListItem button component={Link} to="/roles">
                    <ListItemText primary="Role Management" />
                </ListItem>
                <ListItem button component={Link} to="/permissions">
                    <ListItemText primary="Permission Assignment" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;

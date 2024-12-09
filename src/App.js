import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import UsersPage from './pages/UsersPage';
import RolesPage from './pages/RolesPage';
import PermissionsPage from './pages/PermissionsPage';

const App = () => {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ flexGrow: 1 }}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/users" element={<UsersPage />} />
                        <Route path="/roles" element={<RolesPage />} />
                        <Route path="/permissions" element={<PermissionsPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;

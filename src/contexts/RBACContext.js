import React, { createContext, useState, useContext } from 'react';

// Create Context
const RBACContext = createContext();

// Context Provider
export const RBACProvider = ({ children }) => {
    const [roles, setRoles] = useState([]);
    const [permissions, setPermissions] = useState([]);

    return (
        <RBACContext.Provider value={{ roles, setRoles, permissions, setPermissions }}>
            {children}
        </RBACContext.Provider>
    );
};

// Custom Hook for Using RBAC Context
export const useRBAC = () => useContext(RBACContext);

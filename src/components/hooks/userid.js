// AuthContext.js - Create an authentication context
import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Store the user information

    // Function to set the user when they log in or sign up
    const login = (userData) => {
        setUser(userData);
    };

    // Function to log the user out
    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

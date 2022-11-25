import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'

// Import functions
import { isToken } from '../utils/login'

const PrivateRoutes = () => {
    let auth = false;

    isToken() ? auth = true : auth = false;

    return (
        auth ? <Outlet /> : <Navigate to='/' />
    );
};

export default PrivateRoutes;
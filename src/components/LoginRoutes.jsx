import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'

// Import functions
import { isToken } from '../utils/login'

const LoginRoutes = () => {
    let auth = false;

    isToken() ? auth = true : auth = false;

    return (
        auth ? <Navigate to='/' /> :  <Outlet />
    );
};

export default LoginRoutes;
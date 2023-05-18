import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthProvider } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuthProvider()
    const location = useLocation()

    if (loading) {
        return <h2>Loading...</h2>
    }
    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
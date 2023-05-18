import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthProvider } from '../AuthProvider/AuthProvider';
import Loading from '../components/Loading'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuthProvider()
    const location = useLocation()

    if (loading) {
        return <Loading />
    }
    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
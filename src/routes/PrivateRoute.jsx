import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthProvider } from '../AuthProvider/AuthProvider';
import Loading from '../components/Loading'
import Swal from 'sweetalert2'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuthProvider()
    const location = useLocation()

    if (loading) {
        return <Loading />
    }
    if (user) {
        return children
    } else {

        Swal.fire({
            title: 'Opps!',
            text: 'You Have to Login First to See This Page',
            // icon: 'error',
            confirmButtonText: 'Cool'
        })

        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

};

export default PrivateRoute;
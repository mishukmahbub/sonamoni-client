import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log('user in private route', user);
    if (loading) {
        return <div className="mx-auto w-48 h-48 border-8 border-t-0 border-red-600 rounded-full animate-spin"></div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
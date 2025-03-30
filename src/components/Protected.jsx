import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
const Protected = () => {
    const { authState } = useAuth();

    if (!authState.isAuthenticated) {
        return <Navigate to="/" />
    }
    return <Outlet />;

}
export default Protected

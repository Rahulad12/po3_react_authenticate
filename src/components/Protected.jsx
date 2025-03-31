import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
const Protected = () => {
    const { authState } = useAuth();

    if (!authState.isAuthenticated) {
        return <Navigate to="/" />
    }
    // if (!authState.isFormSubmitted && window.location.pathname !== "/details") {
    //     return <Navigate to="/details" />;
    // }
    // return <Outlet />;

    return authState.isFormSubmitted ? <Outlet /> : <Navigate to="/details" />

}
export default Protected

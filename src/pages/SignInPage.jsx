import React from 'react';
import "../styles/form.css";
import SigninForm from '../components/SigninForm';
import useAuth from '../hooks/useAuth';
import { showToast } from '../utils/toastMessage';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const SignInPage = () => {
    const { loginUser, authState } = useAuth();
    const navigate = useNavigate();

    // Redirect if user is authenticated
    if (authState.isAuthenticated) return <Navigate to="/home" />

    const { message, loading } = authState;
    const submithandler = async (formData) => {
        try {
            const response = await loginUser(formData);
            if (response) {
                showToast(message, "success");
            } else {
                showToast(message, "error");
            }
            navigate("/home");
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='signin-page'>
            <SigninForm submithandler={submithandler} loading={loading} />
        </div>
    );
};

export default SignInPage;

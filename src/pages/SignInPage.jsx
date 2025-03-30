import React from 'react';
import "../styles/form.css";
import SigninForm from '../components/SigninForm';
import useAuth from '../hooks/useAuth';
import { showToast } from '../utils/toastMessage';
const SignInPage = () => {
    const { loginUser, authState } = useAuth();
    const { message, loading } = authState;
    const submithandler = async (formData) => {
        try {
            await loginUser(formData);
            message && message === "Invalid credentials" ? showToast(message, "error") : showToast(message, "success");

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

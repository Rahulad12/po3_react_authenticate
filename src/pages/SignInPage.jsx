import React from 'react';
import "../styles/form.css";
import SigninForm from '../components/SigninForm';

const SignInPage = () => {
    const submithandler = (formData) => {
        console.log("Submitted:", formData);
    };

    return (
        <div className='signin-page'>
            <SigninForm submithandler={submithandler} />
        </div>
    );
};

export default SignInPage;

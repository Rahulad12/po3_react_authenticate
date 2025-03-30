import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SigninForm = ({ submithandler, loading }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [formErrors, setFormErrors] = useState({
        email: false,
        password: false
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const { email, password } = formData;
        const errors = {};
        if (!email) errors.email = "Email Field is Required"
        if (!password) errors.password = "Password Field is Required"

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setIsLoading(false);
            return;
        }

        // Clear previous errors if form is valid
        setFormErrors({});
        // Pass form data to the submit handler
        submithandler(formData);

        // Simulating an async login process
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className='container'>
            <form className='form' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">Email address</label>
                    <input
                        type='text'
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    {formErrors && <span className='text-danger'>{formErrors.email}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {formErrors && <span className='text-danger'>{formErrors.password}</span>}

                </div>
                <div className='mb-3'>
                    <button className='btn btn-primary' disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Login"}
                    </button>
                </div>
            </form>
            <div className='signin-footer'>
                <p>Donot Have Account ? <Link to="/register">SignUp</Link></p>
            </div>
        </div>
    );
};

export default SigninForm;

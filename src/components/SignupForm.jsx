import React, { useState } from 'react';
import {formValidator} from '../utils/formValidator.js';
import { Link } from 'react-router-dom';
const SignupForm = ({ submitHandler }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    console.log(formData)
    const [formErrors, setFormErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationResult = formValidator(formData);
        console.log(validationResult)
        console.log(!validationResult.isValid)

        // Check if form is valid
        if (!validationResult.isValid) {
            setFormErrors(validationResult.errors);
            return;
        }

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            setFormErrors({ confirmPassword: "Passwords do not match" });
            return;
        }

        setIsLoading(true);
        const { email, password } = formData;
        submitHandler({ email, password });

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
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
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                    {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
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
                    {formErrors.password && <span className="text-danger">{formErrors.password}</span>}
                </div>

                <div className='mb-3'>
                    <label htmlFor='InputConfirmPassword' className='form-label'>Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="InputConfirmPassword"
                        name='confirmPassword' // Fixed the name attribute
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {formErrors.confirmPassword && <span className="text-danger">{formErrors.confirmPassword}</span>}
                </div>

                <div className='mb-3'>
                    <button className='btn btn-primary' disabled={isLoading}>
                        {isLoading ? "Signing up..." : "Sign Up"}
                    </button>
                </div>
            </form>
            <div className='footer'>
                <p>Already Have Account? <Link to="/">SingIn</Link></p>
            </div>
        </div>
    );
};

export default SignupForm;

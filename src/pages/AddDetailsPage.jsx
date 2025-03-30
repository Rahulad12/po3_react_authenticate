import React, { useEffect, useState } from 'react';
import '../styles/addDetails.css';
import useAuth from '../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import { registerEmployee } from '../service/employeeService.js';
import { showToast } from '../utils/toastMessage.js';
import { detailsFormValidator } from '../utils/formValidator.js';
const AddDetailsPage = () => {
    const { authState, getUserDetails } = useAuth();
    const navigate = useNavigate();

    console.log(authState)
    useEffect(() => {
        if (authState.isFormSubmitted) {
            navigate('/home');
        }
    }, [authState.isFormSubmitted, navigate])

    const [formError, setFormError] = useState({})
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        department: '',
        joineddate: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const filterData = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            position: formData.position.trim(),
            department: formData.department.trim(),
            joineddate: formData.joineddate.trim()
        }
        console.log(filterData)
        const validationErrors = detailsFormValidator(filterData);

        if (Object.keys(validationErrors).length > 0) {
            setFormError(validationErrors);
            return; // Stop submission if errors exist
        }

        try {
            const response = await registerEmployee(filterData);
            if (response.success) {
                localStorage.setItem('hasCompletedDetails', true);
                showToast(response.message, 'success');
                navigate('/home');
            }
            else {
                showToast(response.message, 'error');
            }
        } catch (error) {
            showToast(error.message, 'error');
        }

    };

    return authState.isFormSubmitted ? <Navigate to={'/home'} /> : (
        <div className='detailsContainer'>
            <div className='detailsHead'>
                <h3>Fill Up This form</h3>
            </div>
            <div className='detailsBody'>
                <form onSubmit={handleSubmit} className='details-form'>
                    <div className='form-group'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
                        {formError.name && <p className="error-text">{formError.name}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' id='email' value={formData.email} onChange={handleChange} />
                        {formError.email && <p className="error-text">{formError.email}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone'>Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <p style={
                            {
                                fontSize: '12px',
                                color: 'gray'
                            }
                        }>Format: +9779812345678</p>
                        {formError.phone && <p className="error-text">{formError.phone}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='position'>Position</label>
                        <input type='text' name='position' id='position' value={formData.position} onChange={handleChange} />
                        {formError.position && <p className="error-text">{formError.position}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='department'>Department</label>
                        <input type='text' name='department' id='department' value={formData.department} onChange={handleChange} />
                        {formError.department && <p className="error-text">{formError.department}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='joineddate'>Joined Date</label>
                        <input type='date' name='joineddate' id='joineddate' value={formData.joineddate} onChange={handleChange} />
                        {formError.joineddate && <p className="error-text">{formError.joineddate}</p>}
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='submit-button'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDetailsPage;

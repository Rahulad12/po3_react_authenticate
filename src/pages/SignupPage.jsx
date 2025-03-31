import React from 'react'
import SignupForm from '../components/signUpForm'
import { register } from "../service/authService.js"
import useAuth from "../hooks/useAuth.jsx"
import { showToast } from '../utils/toastMessage.js'
import { Navigate, useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const { loginUser, authState } = useAuth();
  console.log(authState)
  const navigate = useNavigate();

  // Redirect if user is authenticated
  if (authState.isAuthenticated) return <Navigate to="/home" />

  const submitHandler = async (bodyData) => {
    try {
      const response = await register(bodyData);
      if (response.success) {
        showToast(response?.message, "success")
        await loginUser({ email: bodyData.email, password: bodyData.password });
        navigate("/details")
      } else {
        showToast(response?.message, "error")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='singup-container'>
      <SignupForm submitHandler={submitHandler} />
    </div>
  )
}

export default SignupPage

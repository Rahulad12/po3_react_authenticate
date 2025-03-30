import React from 'react'
import SignupForm from '../components/signUpForm'
const SignupPage = () => {
  const submitHandler = (bodyData) => {
    console.log(bodyData)
  }
  return (
    <div className='singup-container'>
      <SignupForm submitHandler={submitHandler} />
    </div>
  )
}

export default SignupPage

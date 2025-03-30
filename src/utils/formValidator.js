
const formValidator = (formdata) => {
    const { email, password } = formdata;
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);

    return {
        isValid: isEmailValid && isPasswordValid,
        errors: {
            email: !isEmailValid ? "Invalid Email Format" : null,
            password: !isPasswordValid ? "Password must be at least 6 characters long, contain 1 uppercase letter, 1 number, and 1 special character" : null
        }
    }
}

const formNullCheck = (formdata) => {
    let errors = {};
    if (!formdata.email) {
        errors.email = "Email Field is Required"
    }
    if (!formdata.password) {
        errors.password = "Password Field is Required"
    }
    return errors;
}
export { formValidator, formNullCheck };
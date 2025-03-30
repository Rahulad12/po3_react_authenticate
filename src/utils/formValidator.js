
const formValidator = (formdata) => {
    const { email, password } = formdata;
    console.log(email, password)
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    const phoneRegex = /^\+?\d{10}$/;



    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);
    return {
        isValid: isEmailValid && isPasswordValid,
        errors: {
            email: !isEmailValid ? "Invalid Email Format" : null,
            password: !isPasswordValid ? "Password must be at least 6 characters long, contain 1 uppercase letter, 1 number, and 1 special character" : null,

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

const detailsFormValidator = (formdata) => {
    const { name, email, phone, position, department, joineddate } = formdata;
    let errors = {};

    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!phone) errors.phone = "Phone is required";
    if (!position) errors.position = "Position is required";
    if (!department) errors.department = "Department is required";
    if (!joineddate) errors.joineddate = "Joined Date is required";

    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+\d{1,3}\d{10}$/;

    if (email && !emailRegex.test(email)) {
        errors.email = "Invalid email format";
    }
    if (phone && !phoneRegex.test(phone)) {
        errors.phone = "Phone must start with a country code and have exactly 10 digits after it (e.g., +9779812345678)";
    }

    return errors;
};

export { formValidator, formNullCheck, detailsFormValidator };
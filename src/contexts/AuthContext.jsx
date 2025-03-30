import { createContext, useState } from "react";
import { login } from "../service/authService.js";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: null,
        role: null,
        isAuthenticated: false,
        message: null,
        loading: true,
    })

    const loginUser = async (bodyData) => {
        try {
            setAuthState({ ...authState, loading: true, message: null, isAuthenticated: false });
            const response = await login(bodyData);
            console.log(response, response.success)
            if (response.success) {
                setAuthState({
                    ...authState,
                    token: response?.user?.token,
                    role: response?.user?.role,
                    isAuthenticated: true,
                    message: response?.message,
                    loading: false
                })
                localStorage.setItem('token', response?.user?.token);
                return true
            }

            else {
                setAuthState({
                    ...authState,
                    token: null,
                    role: null,
                    isAuthenticated: false,
                    message: response?.message,
                    loading: false
                })
                return false
            }

        } catch (error) {
            console.log(error)
            setAuthState({ ...authState, message: error.message, loading: false })
            return false
        }
    }
    const logOut = () => {
        console.log("Loggin out")
        localStorage.removeItem('token');
        setAuthState({ ...authState, token: null, role: null, isAuthenticated: false, message: null, loading: false })

    };

    return (
        <AuthContext.Provider value={{ authState, loginUser, logOut }}>
            {children}
        </AuthContext.Provider>
    )

}



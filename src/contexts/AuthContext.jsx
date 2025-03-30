import { createContext, useEffect, useState } from "react";
import { login, getUser, logout } from "../service/authService.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialAuthState = {
        token: localStorage.getItem("token") || null,
        role: localStorage.getItem("role") || null,
        isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false, // Fix boolean issue
        message: null,
        loading: false,
        isFormSubmitted: false,
    };

    const [authState, setAuthState] = useState(initialAuthState);

    const loginUser = async (bodyData) => {
        try {
            setAuthState((prevState) => ({ ...prevState, loading: true, message: null, isAuthenticated: false }));

            const response = await login(bodyData);
            if (response.success) {
                const { token, role, isAuthenticated } = response.user;

                setAuthState((prevState) => ({
                    ...prevState,
                    token,
                    role,
                    isAuthenticated: isAuthenticated,
                    message: response.message,
                    loading: false,
                }));

                localStorage.setItem("token", token);
                localStorage.setItem("role", role);
                localStorage.setItem("isAuthenticated", isAuthenticated); // Store as boolean

                return true;
            } else {
                setAuthState((prevState) => ({
                    ...prevState,
                    token: null,
                    role: null,
                    isAuthenticated: false,
                    message: response.message,
                    loading: false,
                }));
                return false;
            }
        } catch (error) {
            console.error(error);
            setAuthState((prevState) => ({ ...prevState, message: error.message, loading: false }));
            return false;
        }
    };

    const getUserDetails = async () => {
        try {
            const response = await getUser();
            if (response.success) {
                setAuthState((prevState) => ({
                    ...prevState,
                    isFormSubmitted: response.user.isFormCompleted,
                }));
            }
        } catch (error) {
            console.error(error);
            setAuthState((prevState) => ({ ...prevState, message: error.message, loading: false }));
        }
    };

    const logOut = async () => {
        try {
            await logout();
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("isAuthenticated");

            setAuthState({
                token: null,
                role: null,
                isAuthenticated: false,
                message: null,
                loading: false,
                isFormSubmitted: false,
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (authState.isAuthenticated) {
            getUserDetails();
        }
    }, [authState.isAuthenticated]);

    return (
        <AuthContext.Provider value={{ authState, loginUser, logOut, getUserDetails }}>
            {children}
        </AuthContext.Provider>
    );
};

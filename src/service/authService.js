import { AUTH_URL } from "../.constant.js";
import { showToast } from "../utils/toastMessage.js";
import { api } from "./api.js";

const login = async (bodyData) => {
    try {
        const response = await api.post(`${AUTH_URL}/login`, bodyData);
        const result = await response.json();
        return result;
    } catch (error) {
        showToast(error.message, "error");
    }

}

const register = async (bodyData) => {
    try {
        const response = await api.post(`${AUTH_URL}/register`, bodyData);
        const result = await response.json();
        return result;
    } catch (error) {
        showToast(error.message, "error");
    }
}

const logout = async () => {
    try {
        const response = await api.post(`${AUTH_URL}/logout`);
        const result = await response.json();
        return result;
    } catch (error) {
        showToast(error.message, "error");
    }
}
const getUser = async () => {
    try {
        const response = await api.get(`${AUTH_URL}/user`);
        const result = await response.json();
        return result;
    } catch (error) {
        showToast(error.message, "error");
    }
}

export { login, register, getUser , logout};
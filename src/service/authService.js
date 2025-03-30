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

export { login, register }
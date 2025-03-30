import { EMPLOYEE_URL } from "../.constant";
import { showToast } from "../utils/toastMessage.js";
import { api } from "./api";
const registerEmployee = async (bodyData) => {
    try {
        const response = await api.post(`${EMPLOYEE_URL}/register`, bodyData);
        const result = await response.json();
        return result;
    } catch (error) {
        showToast(error.message, "error");
    }
}

const getEmployees = async () => {
    try {
        const response = await api.get(`${EMPLOYEE_URL}`);
        const result = await response.json();
        return result;
    } catch (error) {
        showToast(error.message, "error");
    }
}
export { registerEmployee, getEmployees };
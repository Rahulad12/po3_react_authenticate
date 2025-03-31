import { getEmployees } from "../service/employeeService.js";

import { createContext, useState, useEffect } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await getEmployees();
                setEmployee(response?.emp?.[0] || {});
            } catch (error) {
                console.error("Error fetching employee:", error);
                setEmployee({});
            }
        };

        fetchEmployee();
    }, []);
    return (
        <EmployeeContext.Provider value={{ employee }}>
            {children}
        </EmployeeContext.Provider>
    );

}
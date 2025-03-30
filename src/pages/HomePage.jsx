import React, { useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import Section from '../components/Section.jsx'
import { getEmployees } from '../service/employeeService.js';
const HomePage = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployee = async () => {
            const employee = await getEmployees();
            setEmployees(employee?.emp[0]);
        }
        fetchEmployee();
    }, []);

    return (
        <>
            <Header employees={employees}/>
            <Section employees={employees} />
        </>
    )
}

export default HomePage

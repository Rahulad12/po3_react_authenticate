import React, { useContext } from 'react'
import Header from '../components/Header.jsx'
import Section from '../components/Section.jsx'
import { EmployeeContext } from '../contexts/EmployeeContext.jsx';
const HomePage = () => {
    const { employee } = useContext(EmployeeContext)
    console.log(employee)
    return (
        <>
            <Header />
            <Section />
        </>
    )
}

export default HomePage

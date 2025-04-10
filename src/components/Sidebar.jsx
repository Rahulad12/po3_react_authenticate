import { X } from 'lucide-react'
import React, { useContext } from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext.jsx'
const Sidebar = ({ logOut, closeSideBar }) => {
    const { employee } = useContext(EmployeeContext)
    return (
        <div>
            <nav className='side-nav'>
                <div className='side-nav-head'>
                    <h3 className='head-title'>{employee?.name}</h3>
                    <span className='close-btn' onClick={closeSideBar}><X /></span>
                </div>
                <ul className='nav-list'>
                    <li className='nav-link'>Profile</li>
                    <li className='nav-link' onClick={logOut}>Logout</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar

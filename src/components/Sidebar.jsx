import { X } from 'lucide-react'
import React from 'react'
const Sidebar = ({ logOut, closeSideBar, employees }) => {

    return (
        <div>
            <nav className='side-nav'>
                <div className='side-nav-head'>
                    <h3 className='head-title'>{employees?.name}</h3>
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

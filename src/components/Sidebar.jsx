
import React from 'react'

const Sidebar = ({ logOut }) => {
    return (
        <div>
            <nav className='side-nav'>
                <h3 className='side-nav-head'>Rahul Adhikari</h3>
                <ul className='nav-list'>
                    <li className='nav-link'>Profile</li>
                    <li className='nav-link' onClick={logOut}>Logout</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar

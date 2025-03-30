import React, { useState } from 'react'
import "../styles/header.css"
import Sidebar from './Sidebar'
import { Menu } from 'lucide-react'
const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const logOut = () => {
        console.log("Logout clicked")
    }
    const toggleSideBar = () => {
        setShowSidebar(!showSidebar)
    }
    console.log(showSidebar)
    return (
        <div>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <li className='nav-link'><a href="#">Home</a></li>
                    <li className='nav-link'><a href="#about">About</a></li>
                    <li className='nav-link'><a href="#">Contact</a></li>
                </ul>
                {/* This is end of the navbar where it include side bar option to click */}
                <div className='nav-end'>
                    <button className='side-bar-button' onClick={toggleSideBar}>
                        <Menu />
                    </button>
                </div>
            </nav>


            {/* sidebar rendering */}
            {showSidebar && (
                <Sidebar logOut={logOut} closeSideBar={toggleSideBar} />
            )}
        </div>
    )
}



export default Header

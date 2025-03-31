import React, { useState } from 'react'
import "../styles/header.css"
import Sidebar from './Sidebar'
import { Menu } from 'lucide-react'
import useAuth from "../hooks/useAuth";
import { Link } from 'react-router-dom';
const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const { logOut } = useAuth();
    const logOutHandler = async () => {
        await logOut();
    }

    const toggleSideBar = () => {
        setShowSidebar(!showSidebar)
    }
    return (
        <div>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <li className='nav-link'><a href="#">Home</a></li>
                    <li className='nav-link'><a href="#about">About</a></li>
                    <li className='nav-link'><a href="#">Contact</a></li>
                    <li className='nav-link'><Link to="/details">Details</Link></li>
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
                <Sidebar logOut={logOutHandler} closeSideBar={toggleSideBar}/>
            )}
        </div>
    )
}



export default Header

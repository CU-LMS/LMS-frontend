import React from 'react';

import { BsSearch, BsFillEnvelopeFill } from 'react-icons/bs';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ setIsSidebar, isSidebar }) => {
    return (
        <div className='header'>
            <div className="container-fluid">
                <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between align-items-center">
                    <div className="navbar-brand d-flex align-items-center">
                        <Link className='nav-link' onClick={() => setIsSidebar(!isSidebar)} title='menu'><FaBars className='navbar-item' /></Link>
                        <Link to="/">
                            <img src="https://www.cuchd.in/includes/assets/images/header-footer/cu-logo-white.webp" alt="logo" className='navbar-img' />
                        </Link>
                    </div>
                    <div className="nav-items">
                        <div className="icon d-flex align-items-center">
                            <Link className='nav-link' title='search'><BsSearch className='navbar-item' /></Link>
                            <Link className='nav-link' title='messages'><BsFillEnvelopeFill className='navbar-item' /></Link>
                            <Link className='nav-link' title='profile'><FaUserCircle className='navbar-item' /></Link>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Header
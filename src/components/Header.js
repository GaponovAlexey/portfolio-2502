import React, { useState } from 'react'

import { Link } from "react-router-dom";

import Logo from '../assets/images/logo.png'
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

function Header() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar (!sidebar);

    return (
        <div className="header">
            <Link to="/"><div className="header--logo">
                <img src={Logo} alt="" />
                <span>adstoria</span>
            </div></Link> 

            <div className="header--nav-mobile">
                        <AiOutlineMenu size="25px" onClick={showSidebar} />  
                    </div>

                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>                        
                        <div className="nav-menu-items">
                            <Link to="/">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/about-us">About Us</Link>
                            <Link to="/contact">Contact</Link>
                        </div>                  
                    </nav>

            <div className="header--nav">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about-us">About Us</Link>
            </div>

            <Link to="/contact"><div className="header--cta">
                Contact
                <BsFillArrowRightCircleFill size="23" />
            </div></Link>
        </div>
    )
}

export default Header

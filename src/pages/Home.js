import React, { useState } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { motion, AnimatePresence } from "framer-motion"

import Logo from '../assets/images/logo.png'
import Video from '../assets/images/video_compressed.webm'
import VideoFull from '../assets/images/video_full.mp4'

import { Link } from "react-router-dom";

import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

function Home() {
    const handle = useFullScreenHandle();

    const [menu, setMenu] = useState(false);
    const showMenu = () => setMenu (!menu);

    return (
        <AnimatePresence>
        <motion.div className="main_home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="main_home--info">

                <div className="main_home--info--header">

                    <Link to="/"><div className="main_home--info--header--logo">
                        <img src={Logo} alt="" />
                        <span>adstoria</span>
                    </div></Link>     

                    
                    <div className="main_home--info--header--nav-mobile">
                        <AiOutlineMenu size="25px" onClick={showMenu} />  
                    </div>

                    <nav className={menu ? 'nav-menu active' : 'nav-menu'}>                        
                        <div className="nav-menu-items">
                            <Link to="/">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/about-us">About Us</Link>
                            <Link to="/contact">Contact</Link>
                        </div>                  
                    </nav>

                </div>          

                <div className="main_home--info--title">
                    <h1>Evolve into your full potential with creative & growth solutions</h1>

                    <p>These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful but has to feel and function beautifully, too. Crafted to perfection.</p>
                </div>                

                <div className="main_home--info--cta">
                <Link to="/services"><button>
                    Get started
                    <BsFillArrowRightCircleFill size="35" />
                    </button></Link>
                </div>

            </div>

            <div className="main_home--video">
                <div className="main_home--video--nav">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="main_home--video--cta">
                <button onClick={handle.enter}>
                    Watch video
                    <BsFillPlayCircleFill size="35" />
                </button>
                <FullScreen handle={handle}>
                    <video controls lazy loop autoPlay muted src={VideoFull} class="video-full" />
                </FullScreen>
                </div>
                <video lazy loop autostart autoPlay muted src={Video} />
            </div>
        </motion.div>
        </AnimatePresence>
    )
}

export default Home

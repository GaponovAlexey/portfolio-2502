import React from 'react'
import { Helmet } from "react-helmet";

import ServicesBrand from '../assets/images/services-brand.png'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { MdOutlineHorizontalRule } from 'react-icons/md'

import Fade from 'react-reveal/Fade';
import { motion, AnimatePresence } from "framer-motion"

function Services() {
    return (
        <>
            <Helmet>
                <title>Services - Adstoria</title>
            </Helmet>
            <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} >

            <Header />

        
            <div className="main_services">

                <div className="main_services--item">
                <Fade left>
                    <div className="main_services--item--top">
                        <div className="main_services--item--top--number">
                            1
                        </div>
                        <div className="main_services--item--top--title">
                            <h2>Brand Strategy</h2>
                        </div>
                    </div>
                    <div className="main_services--item--content">
                        <p>The Goal of any brand is to stand out against competitors. Creating an identity or strategy, you should not ignore the digital environment, in which now 90% of communication takes place. We understand it, so we properly integrate modern technologies and tools into your communication.</p>
                        <div className="main_services--item--content--list">
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Art direction
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Corporate identity
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Graphic design
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Photography
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Video production
                            </div>
                        </div>
                    
                    </div>
                    </Fade>
                </div>

                
                <div className="main_services--item bg-color none-mobile">
                <Fade right><img src={ServicesBrand} alt="" /></Fade>
                </div>

                
                <div className="main_services--item bg-color none-mobile">
                <Fade left><img src={ServicesBrand} alt="" /></Fade>
                </div>

                <div className="main_services--item">
                <Fade right>
                    <div className="main_services--item--top">
                        <div className="main_services--item--top--number empty-number">
                            2
                        </div>
                        <div className="main_services--item--top--title">
                            <h2>Digital Experience</h2>
                        </div>
                    </div>
                    <div className="main_services--item--content">
                        <p>Modern digital technology is a starting point for the first introduction to your company. Creating projects at the interface of art, convenience, and technology, we cover all your needs, making communication with your brand unique unrepeatable, and momorable.</p>
                        <div className="main_services--item--content--list">
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Digital strategy
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Web design
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Content creation
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />User experience
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Web development
                            </div>
                        </div>
                    
                    </div>
                    </Fade>
                </div>

            </div>

            <Footer />
            </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Services

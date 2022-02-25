import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Link } from "react-router-dom";

import { BiErrorAlt } from 'react-icons/bi';

function Contact() {
    return (
        <>
            <Header />

            <div className="main_404">
                <div className="main_404--content">
                    <BiErrorAlt size="150" />
                    <h2>OOPS! Nothing to see here...</h2>
                    <Link to="/">Click here to go back home</Link>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact

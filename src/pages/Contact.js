import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import logobg from '../assets/images/logo-white-stroke.png'

import { RiPhoneFill, RiMailFill, RiMapPin2Fill } from 'react-icons/ri';
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";

import { ExternalLink } from 'react-external-link';
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import Fade from 'react-reveal/Fade';

function Contact() {
    return (
        <>
            <Header />

            <Fade>
            <div className="main_contact">
                <div className="main_contact--informations">
                    <img src={logobg} className="background" alt="background cotact adstoria logo" />
                    <div className="main_contact--informations--top">
                        <h1>Contact informations</h1>
                        <p>Feel free to ask us any questions</p>
                    </div>
                    <ul>
                        <li><RiPhoneFill size="30px" />+917-684-7265</li>
                        <li><RiMailFill size="30px" />contact@adstoria.io</li>
                        <li><RiMapPin2Fill size="30px" />30 N, Gould St, Sheridan, WY</li>
                    </ul>
                    <div className="main_contact--informations--icons">
                        <ExternalLink className="icon" href="https://www.facebook.com/AdStoria-Lab-107793971775092"><RiFacebookBoxFill size="25"  /></ExternalLink>
                        <ExternalLink className="icon" href="https://www.linkedin.com/company/adstoria-lab"><RiLinkedinBoxFill size="25"  /></ExternalLink>
                        <ExternalLink className="icon" href="https://www.instagram.com/adstoria.io/"><RiInstagramFill size="25"  /></ExternalLink>
                        <ExternalLink className="icon" href="https://www.youtube.com/channel/UClo6adnxsLZd0igSHge06GA/"><RiYoutubeFill size="25"  /></ExternalLink>
                        <ExternalLink className="icon" href="https://www.twitter.com/adstoria" target="_blank"><RiTwitterFill size="25"  /></ExternalLink>
                    </div>
                </div>


                <div className="main_contact--form">
                    <form>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est sapien, hendrerit id elit vitae, laoreet iaculis odio. Nunc id augue vestibulum ipsum rhoncus rhoncus vel eu orci. Nullam mauris quam, consequat at lacinia in, ultrices et mauris. Vivamus euismod auctor posuere.</p>
                        <h4>First Name</h4>
                        <input placeholder="First Name" />
                        <h4>Last Name</h4>
                        <input placeholder="Last Name" />
                        <h4>Email</h4>
                        <input placeholder="Email" />
                        <h4>Message</h4>
                        <textarea placeholder="Message" />
                        <Link to="/contact">
                            <div className="button">
                                Send 
                                <BsFillArrowRightCircleFill size="23" />
                            </div>
                        </Link>
                    </form>
                </div>
                
            </div>

            </Fade>

            <Footer />

        </>
    )
}

export default Contact

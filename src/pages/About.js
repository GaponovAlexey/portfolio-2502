import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import Fade from 'react-reveal/Fade';

function About() {
    return (
        <>
            <Header />

            <div className="main_about">
                <div className="main_about--top">

                <Fade left>
                    <div className="main_about--top--item">
                        <h2>Who we are?</h2>
                        <p>We are the first to know that your company’s identity it’s considered to be one of the most important and valuable asset. Being part of Cold Mountain group, we form a dynamic team with creative thinking and fresh perspectives, developing innovative  work within the marketing and advertising industry for our partners.</p>
                    </div>
                </Fade>

                <Fade right>
                    <div className="main_about--top--item red">
                        <h2>What we do?</h2>
                        <p>Implement creative branding concepts and functional marketing strategies that grow awareness and generate action. Based on your company’s values, we create without inhibitions in ways that feel natural and true for your targeted audience.</p>
                    </div>
                </Fade>

                </div>

                <div className="main_about--content">
                    <Fade><h1>How we do it?</h1></Fade>

                    <Fade top>
                    <div className="main_about--content--step">
                        <div className="main_about--content--step--image">
                        </div>

                        <p><span>We listen to your story</span>. We need to get familiar with your business perspectives, so tell us all about your vision and your goals, in order to raise the authenticity of your brand to the highest peaks.</p>
                    </div>
                    </Fade>

                    <Fade top>
                    <div className="main_about--content--step">
                        <div className="main_about--content--step--image">
                        </div>

                        <p><span>We analyze and find solutions</span>. It’s time to plan the strategy perfectly adapted to your needs, giving your brand a voice and visual identity. Basically, we turn your story into a clear and comprehensive expression.</p>
                    </div>
                    </Fade>

                    <Fade top>
                    <div className="main_about--content--step">
                        <div className="main_about--content--step--image">
                        </div>

                        <p><span>We implement and optimize</span>. Our integrated strategies cross a 360° marketing journey with measurable effects, smoothly covering all services from branding, advertising campaigns, digital tactics, marketing strategies and everything in between.</p>
                    </div>
                    </Fade>

                    <Fade top>
                    <div className="main_about--content--step">
                        <div className="main_about--content--step--image hidden">
                        </div>

                        <p><span>We launch! Now your brand is ready to be seen, chosen and remembered!</span></p>
                    </div>
                    </Fade>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default About

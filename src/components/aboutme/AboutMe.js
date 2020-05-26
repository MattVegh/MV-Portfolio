import React from 'react'
import { Link } from 'react-router-dom'
import './AboutMe.css'

export default function AboutMe() {
    return (
        <section id="aboutme">
            <h2 class="about-title">About Me</h2>
            <p>
                I'm Currently in Austin, Texas by way of Cleveland. I'm a graduate of Thinkful's FullStack Web
            Developer program.</p>
            <p>I am a Full stack developer skilled in JavaScript, React, HTML and CSS with a love for front-end design and analytical thinking.</p>
            <p>My background in retail management has provided me with a proven track-record of effortless client relations and working well in fast-paced environments. 
                I'm excited to join a team of like-minded professionals who enjoy being challenged on a daily basis.  </p>



            <Link to='/projects' className='link-from-about'>Check out what I've been working on</Link>
            <a href='https://docs.google.com/document/d/1lRcfOrECDg5ur8RaSDmVaHUagvxgyxPiJ1QhnJ01Mq0/edit?usp=sharing' className='link-to-resume' target='_blank'>My Resume</a>
        </section>
    )
}
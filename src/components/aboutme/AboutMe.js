import React from 'react'
import { Link } from 'react-router-dom'
import './AboutMe.css'

export default function AboutMe() {
    return (
        <section id="aboutme">
            <h2 class="about-title">About Me</h2>
            <p className='about-p'>
                I'm Currently in Austin, Texas by way of Cleveland. I'm a graduate of Thinkful's FullStack Web
            Developer program.</p>
                <p>Tech-wise I came from a background of basically only knowing how to turn a computer on, so learning how to code
            was quite the jump.
                Professionally I have years of experience in retail and warehouse management environments, 
            which has given me a proven track-record of great client relations and an understanding of how to work in a fast-paced environment.
            </p>
                <p>Now I'm a Full Stack Developer skilled in JavaScript, React, Express, and RESTful API's.</p>
               
            

            <Link to='/projects' className='link-from-about'>Check out what I've been working on</Link>
        </section>
    )
}
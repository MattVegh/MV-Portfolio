import React from 'react'
import { Link } from 'react-router-dom'
import './AboutMe.css'

export default function AboutMe() {
    return (
        <section id="aboutme">
            <h2 class="about-title">About Me</h2>
            <p className='about-p'>I'm Currently in Austin, TX by way of Cleveland. I'm a graduate of Thinkful's FullStack Web
            Developer
            program.
            I came from a background of basically only knowing how to turn a computer on, so learning how to code
            was
            quite the jump. But as I continue to learn I find that I'm loving the creative freedom coding gives you.
            I am currently using what I've learned doing freelance and personal work.
            </p>

            <Link to='/projects' className='link-from-about'>Check out what I've been working on</Link>
        </section>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'
import './Headers.css'

export default function SideHeader() {
    return (
        <div className='side-header'>
            <div className='inner-side-header'>
                <div className="headshot-container">
                    <img src="https://user-images.githubusercontent.com/49329279/73220721-bcc6e180-4124-11ea-9d7c-16930e5c9a99.JPG"
                        alt="head shot" class="head-shot" />
                </div>
                <div className='title-container'>
                    <h1 className='name-title'>Matthew Vegh</h1>
                    <p className='subtitle'>Full-Stack Web Developer</p>
                </div>
                <nav className='nav-buttons'>
                    <Link className="nav-link" to='/'>About</Link>
                    <Link className="nav-link" to='/projects'>Projects</Link>
                    <Link className='nav-link' to='/contact'>Connect with me!</Link>
                </nav>
                <div id="contact-box">
                    <div className="contactlinks">
                        <a className="email" href="mailto:mdv240@gmail.com" target="_blank"><i className="fas fa-envelope-square"></i></a>
                        <a className="github" href="https://github.com/MattVegh" target="_blank"><i className="fab fa-github-square"></i></a>
                        <a className="linkedin" href="https://www.linkedin.com/in/mattvegh/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


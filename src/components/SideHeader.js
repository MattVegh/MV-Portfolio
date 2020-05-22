import React from 'react'
import '../App.css'

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
                    <a className="nav-link" href="#aboutme">About</a>
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                </nav>
                <div id="contact-box">
                    <div className="contactlinks">
                        <a clasNames="email" href="mailto:mdv240@gmail.com" target="_blank"><i className="fas fa-envelope-square"></i></a>
                        <a className="github" href="https://github.com/MattVegh" target="_blank"><i className="fab fa-github-square"></i></a>
                        <a className="linkedin" href="https://www.linkedin.com/in/mattvegh/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


import React from 'react'
import { Link } from 'react-router-dom'
import './Headers.css'

export default function TopHeader() {
    return (
        <div className='top-header'>
                <nav className='nav-buttons'>
                    <Link className="nav-link" to='/'>About</Link>
                    <Link className="nav-link" to='/projects'>Portfolio</Link>
                </nav>
                <div id="contact-box">
                    <div className="contactlinks">
                        <a className="email" href="mailto:mdv240@gmail.com" target="_blank"><i className="fas fa-envelope-square"></i></a>
                        <a className="github" href="https://github.com/MattVegh" target="_blank"><i className="fab fa-github-square"></i></a>
                        <a className="linkedin" href="https://www.linkedin.com/in/mattvegh/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            
        </div>
    )
}


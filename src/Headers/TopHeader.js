import React from 'react'
import { Link } from 'react-router-dom'
import './Headers.css'

export default function TopHeader() {
    return (
        <div className='top-header'>
            <nav className='top-nav-buttons'>
                <div className='top-nav-link-box'>
                    <Link className="top-nav-link" to='/'>About</Link>
                    <Link className="top-nav-link" to='/projects'>Portfolio</Link>
                </div>
                <div className='top-contactlinks'>
                    <a className="email" href="mailto:mdv240@gmail.com" target="_blank"><i className="fas fa-envelope-square"></i></a>
                    <a className="github" href="https://github.com/MattVegh" target="_blank"><i className="fab fa-github-square"></i></a>
                    <a className="linkedin" href="https://www.linkedin.com/in/mattvegh/" target="_blank"><i className="fab fa-linkedin"></i></a>
                </div>
            </nav>
        </div>
    )
}


import React from 'react'
import { Link } from 'react-router-dom'
import './ContactInfo.css'

export default function ContactInfo() {
    return (
        <section id="contactInfo">
            <h3 className='contact-title'>How to reach me:</h3>
            <div className='contactInfo-links'>
                <a className="email" href="mailto:mdv240@gmail.com" target="_blank">Email</a>
                <a className="github" href="https://github.com/MattVegh" target="_blank">GitHub</a>
                <a className="linkedin" href="https://www.linkedin.com/in/mattvegh/" target="_blank">LinkedIn</a>
                <a className='telegram' href='https://www.telegramstop.com/' target='_blank'>Telegram <span className='notasponsor'>(#notasponsor)</span></a>
            </div>
        </section>
    )
}
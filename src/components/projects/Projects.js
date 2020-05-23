import React from 'react'
import './Projects.css'

export default function Projects() {
    return (
        <section id="projects">
            <h2 className="portfolio-title">Porfolio</h2>
            <div className="projects-container">
                <div className="project">
                    <a className="app-link" target="_blank" href="https://roll-a-char-app.mdv240.now.sh/">Roll A
                        Char</a>
                    <p>A full stack application I made that gives you a headstart in character creation in the table-top RPG
                        Dungeons & Dragons</p>
                    <div className="img-container">
                        <a className="trigger_popup">
                            <img className="app-ss"
                                src="https://user-images.githubusercontent.com/49329279/70679113-d5089d00-1c59-11ea-9876-6e41d68e3e28.png"
                                alt="Screenshot from Roll A Char home page" />
                        </a>
                    </div>

                    <a className="github-link" target="_blank" href="https://github.com/MattVegh/roll-a-char-app">GitHub</a>
                    <p>Tech used: React, PostgreSQL, REST API</p>
                </div>

                <div className="project">
                    <a className="app-link" target="_blank" href="https://pic-some-app.mdv240.now.sh/">Pic Some</a>
                    <p>A sample program created to demonstrate use of React hooks, context, and route learned from a Bob Ziroll Scrimba course</p>
                    <div className="img-container">
                        <a className="trigger_popup">
                            <img className="app-ss"
                                src="https://user-images.githubusercontent.com/49329279/81028575-a927c700-8e47-11ea-90b0-7fecdddeece2.png"
                                alt="Screenshot from Pic Some home page" />
                        </a>
                    </div>
                    <a className="github-link" target="_blank"
                        href="https://github.com/MattVegh/pic-some-app">GitHub</a>
                    <p>Tech used: React Hooks, Context, Router</p>
                </div>

                <div className="project">
                    <a className="app-link" target="_blank" href="https://speed-typing-game.mdv240.now.sh/">Speed Typing Game</a>
                    <div className="img-container">
                        <a className="trigger_popup">
                            <img className="app-ss"
                                src="https://user-images.githubusercontent.com/49329279/77836688-48112300-7126-11ea-9ba6-ef401e8efdd2.png"
                                alt="Screenshot from Speed Typing Game" />
                        </a>
                    </div>
                    <p>A short and sweet speed typing game made to show knowledge in React Hooks</p>
                    <a className="github-link" target="_blank" href="https://github.com/MattVegh/Speed-Typing-Game">GitHub</a>
                    <p>Tech used: React Hooks</p>

                </div>
            </div>
        </section>
    )
}
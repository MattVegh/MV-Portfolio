import React from 'react';
import './App.css';
import SideHeader from './components/SideHeader'

function App() {
  return (
    <div className="App">
      <SideHeader />

      <main>

        <section id="aboutme">
          <h2 class="title forAboutMe">About Me</h2>
          <p>I'm Currently in Austin, TX by way of Cleveland. I'm a graduate of Thinkful's FullStack Web
          Developer
          program.
          I came from a background of basically only knowing how to turn a computer on, so learning how to code
          was
          quite the jump. But as I continue to learn I find that I'm loving the creative freedom coding gives you.
          I am currently using what I've learned doing freelance and personal work.
            </p>
        </section>
        <section id="portfolio">
          <h2 className="title forPortfolio">Porfolio</h2>
          <div className="projects-container">
            <div className="project">
              <a className="app-link" target="_blank" href="https://roll-a-char-app.mdv240.now.sh/">Roll A
                        Char</a>
              <div className="img-container">
                <a className="trigger_popup">
                  <img className="app-ss"
                    src="https://user-images.githubusercontent.com/49329279/70679113-d5089d00-1c59-11ea-9876-6e41d68e3e28.png"
                    alt="Screenshot from Roll A Char home page" />
                        </a>
                    </div>
                <p>An app that gives you a headstart in character creation in the table-top RPG
                        Dungeons & Dragons</p>
                <a className="github-link" target="_blank" href="https://github.com/MattVegh/roll-a-char-app">GitHub</a>
                <p>Tech used: React, PostgreSQL, REST API</p>
              </div>

              <div className="project">
                <a className="app-link" target="_blank" href="https://off-my-chest-client.mdv240.now.sh/">Off My
                        Chest</a>
                <div className="img-container">
                  <a className="trigger_popup">
                    <img className="app-ss"
                      src="https://user-images.githubusercontent.com/49329279/72658163-bbeabe80-3972-11ea-8015-e681fbc7db83.png"
                      alt="Screenshot from Off My Chest home page" />
                        </a>
                    </div>
                  <p>A judgement free place where you can post what is on your mind</p>
                  <a className="github-link" target="_blank"
                    href="https://github.com/MattVegh/off-my-chest-client">GitHub</a>
                  <p>Tech used: React, PostgreSQL, REST API</p>
                </div>

                <div className="project">
                  <a className="app-link" target="_blank" href="https://mattvegh.github.io/NBA-API-Project/">NBA
                        Player Stats</a>
                  <div className="img-container">
                    <a className="trigger_popup">
                      <img className="app-ss nba-ss"
                        src="https://user-images.githubusercontent.com/49329279/73223734-b63c6800-412c-11ea-80c4-a259b3129b0b.png"
                        alt="Screenshot from NBA Player Stats" />
                        </a>
                    </div>
                    <p>An app made last year to display NBA player stats</p>
                    <a className="github-link" target="_blank" href="https://github.com/MattVegh/NBA-API-Project">GitHub</a>
                    <p>Tech used: HTML, CSS, JavaScript</p>

                  </div>
                </div>
        </section>
              <div className="popup-box">
                <span className="helper"></span>
                <div className="popup-helper">
                  <div className="popup-close-button">&times;</div>
                  <div className="popup-img-container">
                    <a className="popup-img-link" href="">
                      <img className="popup-ss app-ss" alt="pop up image" src="." />
                    </a>
                </div>
                  </div>
                </div>
    </main>
            </div>
  );
}

export default App;

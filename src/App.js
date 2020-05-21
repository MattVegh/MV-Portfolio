import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
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
          <nav clasNames='nav-buttons'>
            <a clasNames="nav-link" href="#aboutme">About</a>
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </nav>
          <div id="contact-box">
            <h2 clasNames="title forContact">Contact</h2>
            <div className="contactlinks">
              <a clasNames="email" href="mailto:mdv240@gmail.com" target="_blank"><i className="fas fa-envelope-square"></i></a>
              <a className="github" href="https://github.com/MattVegh" target="_blank"><i className="fab fa-github-square"></i></a>
              <a className="linkedin" href="https://www.linkedin.com/in/mattvegh/" target="_blank"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

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

import React from 'react';
import './App.css';
import SideHeader from './components/SideHeader'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <SideHeader />

      <main>
        <AboutMe />
        <Projects />
        
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

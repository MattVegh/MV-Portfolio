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

      </main>
    </div>
  );
}

export default App;

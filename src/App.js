import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import SideHeader from './Headers/SideHeader'
import TopHeader from './Headers/TopHeader'
import AboutMe from './components/aboutme/AboutMe'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div className="App">
      <SideHeader />
      <TopHeader />
      <main>
        <Switch>
          <Route exact path='/'>
            <AboutMe />
          </Route>

          <Route path='/projects'>
            <Projects />
          </Route>
        </Switch>

      </main>
    </div>
  );
}

export default App;

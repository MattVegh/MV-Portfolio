import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import SideHeader from './components/SideHeader'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <SideHeader />

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

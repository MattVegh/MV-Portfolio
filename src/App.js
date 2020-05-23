import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import SideHeader from './components/SideHeader'
import TopHeader from './components/TopHeader'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

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

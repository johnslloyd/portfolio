import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";
import Work from './components/work.js';
import Ideas from './components/ideas.js';
import Ventures from './components/ventures.js';
import Resume from './components/resume.js';
import Nav from './components/nav.js';
import './styles/App.css';


function App() {
  return (
    <HashRouter basename="/">
    <Nav />
    <section id="main-content">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/ideas" component={Ideas} />
        <Route path="/ventures" component={Ventures} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </section>
    </HashRouter>

  );
}

const Home = () => (
<div className="contentBody">
 <h2>Hey Yall</h2>
 <p>some content about</p>
 <ul>
  <li>for Design Leadership and Relationships</li>
  <li>culture, values, and process</li>
  <li>Design at Scale</li>
  <li>Design Systems</li>
  <li>Communicating the value of design and research</li>
 </ul>
</div>
);


export default App;

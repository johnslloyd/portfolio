import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component{
  render(){
    return (
      <section>
       <a href="/" className="homelink"><h1>John Lloyd</h1></a>
        <ul id="navigation-bar">
            <li><Link to="/work" className="item">Work</Link></li>
            <li><Link to="/resume" className="item">Resume</Link></li>
            <li><Link to="/ideas" className="item">Ideas</Link></li>
            <li><Link to="/ventures" className="item">Ventures</Link></li>
        </ul>
        </section>
    );
  }
}

export default Nav;

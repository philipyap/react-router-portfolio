import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import Homepage from './Homepage'
import About from './About'
import Blog from './Blog'
import Projects from './Projects'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Homepage</Link>{'  '}
          <Link to="/About">AboutMe</Link>{'  '} 
          <Link to="/Blog">Blog</Link>{'  '} 
          <Link to="/Projects">Projects</Link>{'  '} 
        </nav>
        <Route exact path='/' component={Homepage} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />
        <Route path='/projects' component={Projects} />
      </div>  
    </Router>
    
  );
}

export default App;

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
import Weather from './Weather'

function App() {
  const blog=[
    "How to code ?",
    "How to build a website ?",
    "How to create an app ?"
  ]


  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Homepage</Link>{'  '}
          <Link to="/About">AboutMe</Link>{'  '} 
          <Link to="/Blog">Blog</Link>{'  '} 
          <Link to="/Projects">Projects</Link>{'  '} 
          <Link to='/Weather'>Weather</Link>{'  '}
        </nav>
        <Route exact path='/' component={Homepage} />
        <Route path='/about' component={About} />
        <Route path='/blog' render={() => <Blog blog={blog}/>} />
        <Route path='/projects' component={Projects} />
        <Route path='/weather' component={Weather} />
      </div>  
    </Router>
    
  );
}

export default App;

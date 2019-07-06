import React from 'react';
import './App.css';
import Navbar from "./components/header/Navbar"
import { HashRouter as Router, Route } from "react-router-dom";
import Projects from "./components/projects/index"
import Resume from "./components/resume/resume"

function Root() {
  return <h2>Root</h2>;
}

function About() {
  return <h2>About</h2>;
}

// function Resume() {
//   return <h2>Resume</h2>;
// }


function Certification(){
  return <h2>Certification</h2>
}

function App() {
  return (
   
    <div>
       <Router>
    
      <Navbar/>

      <Route exact path="/" component={Root} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/certification" component={Certification} />
      </Router>
      
    </div>
  
  );
}

export default App;

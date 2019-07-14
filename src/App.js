import React from 'react';
import './App.css';
import Navbar from "./components/header/Navbar"
import { HashRouter as Router, Route } from "react-router-dom";
import Projects from "./components/projects/index"
import Resume from "./components/resume/resume"
import googlelogin from "./components/social/index"


import {connect} from "react-redux"
import {fetchLogin} from "./actions/actions"
// import history from "./history"

function Root() {
  return <h2>Welcome</h2>;
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

function MyApp() {
  return <h2>Demo App</h2>;
}

function App() {
  return (
   
    <div>
       <Router 
       //history={history}
       >
    
      <Navbar/>

      <Route exact path="/" component={Root} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/certification" component={Certification} />
      <Route path="/others" component={googlelogin} />
      <Route path="/app" component={MyApp} />
      </Router>
      
    </div>

  
  );
}

export default connect (null,{fetchLogin})(App);

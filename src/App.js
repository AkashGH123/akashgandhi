import React,{Component} from 'react';
import './App.css';
import Navbar from "./components/header/Navbar"
import { HashRouter as Router, Route } from "react-router-dom";
import Projects from "./components/projects/index"
import Resume from "./components/resume/resume"
import googlelogin from "./components/social/index"


import {connect} from "react-redux"
import {fetchLogin} from "./actions/actions"
// import history from "./history"






class App extends Component {

  constructor(props){
super(props)
this.state={}
this.Root=this.Root.bind(this)
this.About=this.About.bind(this)
this.Certification=this.Certification.bind(this)
this.MyApp=this.MyApp.bind(this)
  }


   Root() {
    return <h2>Welcome</h2>;
  }
  
   About() {
    return <h2>About</h2>;
  }
  
  // function Resume() {
  //   return <h2>Resume</h2>;
  // }
  
  
   Certification(){
    return <h2>Certification</h2>
  }
  
   MyApp() {
  return this.props.auth?<h2>DemoApp</h2>:<h2>Login failed</h2>
 
  }


  render() {
    return (
   
      <div>
         <Router 
         //history={history}
         >
      
        <Navbar/>
  
        <Route exact path="/" component={this.Root} />
        <Route path="/about" component={this.About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/certification" component={this.Certification} />
        <Route path="/others" component={googlelogin} />
        <Route path="/app" component={this.MyApp} />
        </Router>
        
      </div>
  
    
    )
  }
}

const mapStateToProps=state=>({
  auth:state.auth.signSuccess
})

export default connect (mapStateToProps,{fetchLogin})(App);

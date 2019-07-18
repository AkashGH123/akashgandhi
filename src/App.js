import React,{Component} from 'react';
import './App.css';
import Navbar from "./components/header/Navbar"
import { HashRouter as Router, Route } from "react-router-dom";
import Projects from "./components/projects/index"
import Resume from "./components/resume/resume"
import googlelogin from "./components/social/index"
import Home from "./components/home/index"
import About from "./components/about/index"

import {connect} from "react-redux"
import {fetchLogin} from "./actions/actions"
import {TextField,Button} from "@material-ui/core"
import axios from 'axios';
import api from "./api/client"


class App extends Component {

  constructor(props){
super(props)
this.state={output:"not connected to backend"}
this.Root=this.Root.bind(this)
this.About=this.About.bind(this)
this.Certification=this.Certification.bind(this)
this.MyApp=this.MyApp.bind(this)
this.handleFormSubmit=this.handleFormSubmit.bind(this)
  }
  


   Root() {
    return <Home/>
  }
  
   About() {
    return <About/>
  }
  
  // function Resume() {
  //   return <h2>Resume</h2>;
  // }
  
  
   Certification(){
    return <h2>Certification</h2>
  }

  async handleFormSubmit(event){
    event.preventDefault()
    // const p=await axios.post("http://34.66.170.124:80","test")
    let formdata=document.getElementById("submission")
    const form=new FormData(formdata)
    let json=null
    form.forEach((value,key)=>{
      json={data:value}
    })
    // const p=await axios.post(process.env.REACT_APP_API_URL+"/send",json)
    // if(p.status===200){
      
    //   this.setState({output:p.data})
    // }

    const p=await api.post("/send",json)
    console.log(p)
    
    if(p.status===200){
      
      this.setState({output:p.data})
    }



    // //GET request
    // const p=await api.get()
    // console.log(p.data)
    // if(p.status===200){
      
    //   this.setState({output:p.data})
    // }
  }
  
   MyApp() {
  return this.props.auth?
  <div style={{marginLeft:"10%"}}>
  <h1>DemoApp - Backend Implementation in progress</h1>
  <h3>Coming Soon!</h3>
  <form name="submission" id="submission" onSubmit={this.handleFormSubmit}>
 <TextField
 name="searchbox"
 value={this.state.value}
 ></TextField>
 <Button name="submit" type="submit" color="primary" variant="contained" style={{marginLeft:"5%"}}>
   submit
 </Button>
 </form>
 <pre>
   {"You submitted : " + JSON.stringify(this.state.output,2,null)}
 </pre>
  </div>
  :<h2>Login failed</h2>
 
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

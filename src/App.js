import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import { HashRouter as Router, Route } from "react-router-dom";
import Projects from "./components/projects/index";
import Resume from "./components/resume/";
import googlelogin from "./components/social/index";
import Home from "./components/home/index";
import About from "./components/about/index";
import { connect } from "react-redux";
import { fetchLogin } from "./actions/actions";
import MyApp from "./demoApp/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { output: "not connected to backend" };
    this.Root = this.Root.bind(this);
    this.About = this.About.bind(this);
    this.Certification = this.Certification.bind(this);
  }

  Root() {
    return <Home />;
  }

  About() {
    return <About />;
  }

  // function Resume() {
  //   return <h2>Resume</h2>;
  // }

  Certification() {
    return <h2>Certification</h2>;
  }

  Dashboard(props) {
    return <h2>{props.match.params.id}</h2>;
  }

  render() {
    return (
      <div>
        <Router
        //history={history}
        >
          <Navbar />

          <Route exact path="/" component={this.Root} />
          <Route path="/about" component={this.About} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/certification" component={this.Certification} />
          <Route path="/others" component={googlelogin} />
          <Route path="/app" component={MyApp} />
          <Route path="/dashboard/:id" component={this.Dashboard} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.signSuccess
});

export default connect(
  mapStateToProps,
  { fetchLogin }
)(App);

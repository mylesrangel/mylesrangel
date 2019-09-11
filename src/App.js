import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header/header.js";
import Homepage from "./Components/Homepage/homePage.js";
import Page404 from "./Components/Page404/page404.js";
import Contact from "./Components/Contact/contact.js";
import Emailsent from"./Components/Emailsent/emailSent.js";
import About from "./Components/About/about.js";
import MyProjects from "./Components/MyProjects/myProjects.js";
import Template from "./Components/Template/template.js";
import './App.css';

class App extends Component {

	componentDidMount(){
		
	}


  render() {
    return (
        <Router>
          <div className="App">
            {/* <About /> */}
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/myprojects" component={MyProjects} />
              <Route exact path="/contact" component={Contact} />
              <Route path='*' exact={true} component={Page404} />
            </Switch>
           </div>  
        </Router>
     
    );
  }
}

export default App;

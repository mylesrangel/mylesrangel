import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Components/Header/header.js";
import Homepage from "./Components/Homepage/homePage.js";
import Contact from "./Components/Contact/contact.js";
import About from "./Components/About/about.js";
import MyWork from "./Components/MyWork/myWork.js";
import './App.css';

class App extends Component {

	componentDidMount(){
		
	}


  render() {
    return (
        <Router>
          <div className="App">
            <Header />

            <Route exact path="/" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/mywork" component={MyWork} />
           </div>
        </Router>
     
    );
  }
}

export default App;

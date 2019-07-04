import React, { Component } from 'react';
import Header from "./Components/Header/header.js";
import Homepage from "./Components/Homepage/homePage.js";
import Emailsent from "./Components/Emailsent/emailSent.js";
import Contact from "./Components/Contact/contact.js";
import './App.css';

class App extends Component {

	componentDidMount(){
		
	}


  render() {
    return (
      <div className="App">
       <Header />
       <Homepage />
      </div>
    );
  }
}

export default App;

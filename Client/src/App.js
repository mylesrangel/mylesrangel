import React, { Component } from 'react';
import Header from "./Components/Header/header.js";
import Homepage from "./Components/Homepage/homePage.js";
import Contact from "./Components/Contact/contact.js";
import MyWork from "./Components/MyWork/myWork.js";
import './App.css';

class App extends Component {

	componentDidMount(){
		
	}


  render() {
    return (
      <div className="App">
       <Header />
       <MyWork />
       {/* <Homepage /> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import Myles from "../../Media/Myles.jpg";
import Contact from "../Contact/contact.js";

import "./homePage.css"

class Homepage extends Component{	

	constructor(props){
		super(props);
	
	}

	state = {

		// TypeWriter Variables
		i: 0,
		statement: 'Let\'s Create! The sky\'s the limit!',
		typewriterSpeed: 80,

		imgStyle: {
			width: window.innerWidth,
			height: 'auto'
		},

		contactForm: false,

	}
	

	toggleContactForm = () =>{
		this.setState({
			contactForm: !this.state.contactForm
		});
	}

	//Type out the text and show the button afterwards
	typeWriter(){
		setTimeout(() =>{
		  if (this.state.i < this.state.statement.length) {
		    document.getElementById("statement").innerHTML += this.state.statement.charAt(this.state.i);
		    this.setState({
		    	i: this.state.i+1
		    });
		    this.typeWriter();
		    
		  }else{
		  	//After done typing show the Contact button
		 	document.getElementById("contactButton").style.display = 'inline';
		 	document.getElementById("contactButton").style.backgroundColor = 'grey';
		}
		}, this.state.typewriterSpeed);
	}


	updateDimensions = () =>{
		console.log("update dimensions...in Homepage.js");

		this.setState({
			imgStyle: {
				width: window.innerWidth,
				height: 'auto',
			}
		});


	}

	componentDidMount(){


		this.typeWriter();

		this.setState({
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		});

		console.log("window height: " + this.state.windowHeight + " Window Width: " + this.state.windowWidth);

		window.addEventListener("resize", this.updateDimensions);
	}

	render(){
		return(
			<div id="homepageContainer">
				<p id="statement">  </p>
				<button id='contactButton' onClick={this.toggleContactForm}> Contact </button>
				{this.state.contactForm && <Contact contactForm={this.toggleContactForm}/>}
				<img 
				src={Myles} 
				style={this.state.imgStyle}
				/>
			</div>
		);
	}

	componentWillUnmount() {
		console.log("unmounting...");
	    window.removeEventListener("resize", this.updateDimensions);
    }
}

export default Homepage;
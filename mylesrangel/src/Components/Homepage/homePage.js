import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import Myles from "../../Media/Myles.jpg";
import Contact from "../Contact/contact.js";

import "./homePage.css"




class Homepage extends Component{	



	state = {
		// TypeWriter Variables
		i: 0,
		statement: 'Let\'s Create! The sky\'s the limit!',
		typewriterSpeed: 80,

		imgStyle: {
			width: window.innerWidth,
			height: 'auto',
			margin: '3,0,0,0'
		},

		contactForm: false,

	}

	//Using this format for this function allows me to not have to 'bind' the function to this.
	//if this.showContactForm = this.showContactForm(this)

	showContactForm = () => {
		console.log("You clicked that button!!! " + this.state.contactForm);
		this.setState({contactForm: true});
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


	componentDidMount(){
		this.typeWriter();
		this.setState({contactForm: false});
	}

	render(){
		return(
			<div id="homepageContainer">

				<p id="statement">  </p>
				<button id='contactButton' onClick={this.showContactForm}> Contact </button>
				{this.state.contactForm && <Contact />}
				<img 
				src={Myles} 
				style={this.state.imgStyle}
				/>
			</div>
		);
	}
}

export default Homepage;
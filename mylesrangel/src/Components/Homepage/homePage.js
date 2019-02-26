import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import Myles from "../../Media/Myles.jpg";

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


		}
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
	}

	render(){
		return(
			<div id="homepageContainer">

				<p id="statement">  </p>
				<button id='contactButton'> Contact </button>

				<img 
				src={Myles} 
				style={this.state.imgStyle}
				alt="Myles Rangel"
				/>
			</div>
		);
	}
}

export default Homepage;
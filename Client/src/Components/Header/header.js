import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import MediaQuery from 'react-responsive';

import "./header.css";

import Homepage from "../Homepage/homePage.js";
//import About from "./Components/About/about.js";
import MyWork from "../MyWork/myWork.js";

//TODO: this was Homepage extends

class Header extends Component{

	state = {
        menuActive: false
    }

	toggleMenu = () => {
		
		if(this.state.menuActive){
			//return the 'X' to hamburger icon
			document.getElementById('hamburgerBar1').classList.remove('togglebar1');
			document.getElementById('hamburgerBar2').classList.remove('togglebar2');
			document.getElementById('hamburgerBar3').classList.remove('togglebar3');
			document.getElementById("mobileNav").style.display = "none";
			this.setState({menuActive: false})

		}else{
			//Toggle the 'X' in the hamburger menu
			document.getElementById('hamburgerBar1').classList.add('togglebar1');
			document.getElementById('hamburgerBar2').classList.add('togglebar2');
			document.getElementById('hamburgerBar3').classList.add('togglebar3');
			//Show the mobileNav div
			document.getElementById("mobileNav").style.display = "block";
			this.setState({menuActive: true});
		}
		
	 }

	 //Create Overlay for nav-link mobile values.
	 //onClick have header height 100% (absolute?)
	 //lower opacity


	 //DELETE after about js is added TESTING ONLY
	 About = () => {
		return (
		  <div>
			<h2>About</h2>
		  </div>
		);
	  }

	render(){
		return(
			<Router >
				<div>
					<div id= "headerContainer">
						<MediaQuery query = "(max-width: 500px)">
							<div id= 'hamburgerSection'>
								<div id = 'hamburgerButtonContainer' onClick={this.toggleMenu}>
									<div id="hamburgerBar1" className="bars"></div>
									<div id="hamburgerBar2" className="bars"></div>
									<div id="hamburgerBar3" className="bars"></div>
								</div>
								
									<div id="mobileNav">
										<Link to="/homepage" className = 'nav-links-mobile' onClick={this.toggleMenu}> Homepage </Link>
										<Link to="/myWork" className = 'nav-links-mobile' onClick={this.toggleMenu}> My Work </Link>
									
										<Route path="/homepage" component={Homepage} />
										<Route path="/myWork" component={MyWork} />
									</div>
							</div>
						</MediaQuery>
					</div>
				</div>
			</Router>
		);
	}
}

export default Header;
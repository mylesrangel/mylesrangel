import React, { Component } from "react";
import MediaQuery from 'react-responsive';

import Link from "react-router-dom/Link";

import "./header.css";


class Homepage extends Component{

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

	render(){
		return(
			<div>
				<MediaQuery query = "(min-width: 501px)">
					<div id= "headerContainer">
						
						<p className = "nav-links"><Link to="/" > About </Link></p>
						<p className = "nav-links"><Link to="/contact" > Contact </Link></p>
						<p className = "nav-links"><Link to="/myprojects">Projects</Link></p>
						<hr className="seperationLine"></hr>
					</div>
					<hr className="seperationLine"></hr>
				</MediaQuery>
				<MediaQuery query = "(max-width: 500px)">
					<div id= "headerContainerMobile">
						<div id= 'hamburgerSection'>
							<div id = 'hamburgerButtonContainer' onClick={this.toggleMenu}>
								<div id="hamburgerBar1" className="bars"></div>
								<div id="hamburgerBar2" className="bars"></div>
								<div id="hamburgerBar3" className="bars"></div>
							</div>
							<div id="mobileNav">
								<p className = 'nav-links-mobile' onClick={this.toggleMenu}><Link to="/" > About </Link></p>
								<p className = 'nav-links-mobile' onClick={this.toggleMenu}><Link to="/contact" > Contact </Link></p>
								<p className = 'nav-links-mobile' onClick={this.toggleMenu}><Link to="/myprojects">Projects</Link></p>
							</div>
						</div>
					</div>
				</MediaQuery>
			</div>
		);
	}
}

export default Homepage;
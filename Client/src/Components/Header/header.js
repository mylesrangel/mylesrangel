import React, { Component } from "react";
import MediaQuery from 'react-responsive';

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

	 //Create Overlay for nav-link mobile values.
	 //onClick have header height 100% (absolute?)
	 //lower opacity

	render(){
		return(
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
								<p className = 'nav-links-mobile'> About </p>
								<p className = 'nav-links-mobile'> My Work </p>
							</div>
						</div>
					</MediaQuery>
				</div>
			</div>
		);
	}
}

export default Homepage;
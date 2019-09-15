import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import { Button } from 'semantic-ui-react'

import Logo from '../../Media/logo.png';
import myResume from "../../Media/MylesRangel.pdf";

import {Link} from "react-router-dom";

import "./template.css"

class Template extends Component{	

	state = {

		mylesrangelHover: false,
		
		// Tech buttons on left of screen
		reactTech: true,
		jsTech: true,
		awsTech: true,
		html5Tech: true,
		css3Tech: true,
		phpTech: true,
		npmTech: true,
		githubTech: true,
		nodeTech: true,
		trelloTech: true,
		androidTech: true,

		backgroundImageWindowStyles:{
			width: 0,
			height: 0
		},
		homepageButtonSizes:{
			fontSize: 0
		},
		homepageLogoImageWindowStyles:{
			width: 0,
			height: 0
		},
		homepageTechIconsImageWindowStyles:{
			width: 0,
			height: 0,
			top: 0
		},
		homepageHomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		homepageComputerScreenTopWindowStyles:{
			width: 0,
			height: 0,
			top: 0,
			left: 0
		},
		homepageProjectSeperationWindowStyles:{
			width: 0,
			top: 0,
			left: 0
		},
		homepageProjectLinksWindowStyles:{
			minWidth: 0,
			top: 0,
			left: 0
		},

		// -----------Tablet Responsiveness -------------------

		tabletHomepageTechIconsImageWindowStyles:{
			width: 0,
			height: 0,
			top: 0
		},
		tabletHomepageComputerScreenTopWindowStyles:{
			width: 0,
			height: 0,
			top: 0,
			left: 0
		},
		tabletHomepageHomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		tabletHomepageProjectSeperationWindowStyles: {
			top: 0,
			left: 0
		},
		tabletHomepageProjectLinksWindowStyles: {
			top: 0,
			left: 0
		},

		//------------------Mobile styles --------------------------------


		MobileHomepageHomeIconStyles:{
			top: 0,
			left: 0,
		}

		//--------------Phone Styles----------------------------------

	}

showMylesrangelTechStack = () => {
	this.setState({
		phpTech: false,
		npmTech: false,
		androidTech: false

	});
	
}
hideMylesrangelTechStack = () => {
	this.setState({
		phpTech: true,
		npmTech: true,
		androidTech: true
	});
}

showclockSpecialtyTechStack = () => {
	this.setState({
		reactTech: false,
		phpTech: false,
		npmTech: false,
		androidTech: false,
		trelloTech: false,
		awsTech: false

	});
	
}
hideclockSpecialtyTechStack = () => {
	this.setState({
		reactTech: true,
		phpTech: true,
		npmTech: true,
		androidTech: true,
		trelloTech: true,
		awsTech: true
	});
}


// Dynamically adjust based on window height / width

updateWindowDimensions = () => {

	this.setState({ backgroundImageWindowStyles:{
		width: window.innerWidth, 
		height: window.innerHeight,
		},
	 });
	 this.setState({ homepageButtonSizes: {
		fontSize: window.innerWidth * .0080
	 },
	});
	 this.setState({ homepageLogoImageWindowStyles:{
		top: window.innerHeight / 80,
		left: window.innerWidth / 2.13,
		width: window.innerWidth /12, 
		height: window.innerHeight /15
		},
	 });
	 this.setState({ homepageTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /11,
		top: window.innerHeight /8,
		left: window.innerWidth /4,

		},
	 });
	 this.setState({ homepageHomeIconWindowStyles:{
		top: window.innerHeight /1.25,
		left: window.innerWidth /2.05
		},
	 });
	 this.setState({ homepageComputerScreenTopWindowStyles:{	
		width: window.innerWidth /2,
		top: window.innerHeight /2.75,
		left: window.innerWidth /4.2
		},
	 });
	 this.setState({ homepageProjectSeperationWindowStyles:{	
		width: window.innerWidth /2,
		top: window.innerHeight /2,
		left: window.innerWidth /3.85
		},
	 });
	 this.setState({ homepageProjectLinksWindowStyles:{	
		width: window.innerWidth /2,
		top: window.innerHeight /1.85,
		left: window.innerWidth /3.3
		},
	 });


 //-----------------------Tablet Responsive ----------------------



	this.setState({ tabletHomepageTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /10,
		top: window.innerHeight /13.5,
		left: window.innerWidth /18
		},
	 });
	this.setState({tabletHomepageComputerScreenTopWindowStyles:{
		
		top: window.innerHeight /3.7,
		left: window.innerWidth /3.4
	
		},
	});
	this.setState({tabletHomepageHomeIconWindowStyles:{

		top: window.innerHeight / 1.3,
		left: window.innerWidth / 2.13

		},
	});
	this.setState({tabletHomepageProjectSeperationWindowStyles:{
		top: window.innerHeight / 2.6,
		left: window.innerWidth / 3.4
		},	
	});
	this.setState({tabletHomepageProjectLinksWindowStyles:{
		top: window.innerHeight / 2.4,
		left: window.innerWidth /3.3
		},

	});



//---------Mobile size responsive --------------------------------------------------


	this.setState({mobileHomepageHomeIconStyles:{
			top: window.innerHeight / 1.31,
			left: window.innerWidth / 2.15
		},
	});

// ------------Phone size responsive---------------------------------------------------

	this.setState({phoneTechIconSizesStyles: {
			fontSize: window.innerWidth / 38,
		},
	});

  }

componentDidMount() {
	this.updateWindowDimensions();
	window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
	window.removeEventListener('resize', this.updateWindowDimensions);
}


	render(){
		return(
			<div>
				<MediaQuery minWidth = {1000}>
					<div id="homepageContainer" style={this.state.backgroundImageWindowStyles}>
											</div>
				</MediaQuery>

				{/* -----------------Under 900px--------------------------------------- -------------------------------------------------------------------------------------------------------------------------------*/}

				<MediaQuery minWidth ={700} maxWidth = {999} >
					<div id="homepageContainerTablet" style={this.state.backgroundImageWindowStyles}>
						
					</div>
				</MediaQuery>
			
		{/* ---------------------Small Tablet 700px -------------------------------------------------------------*/}
		<MediaQuery minWidth = {600} maxWidth = {699} >
					<div id="homepageContainerMobile" style={this.state.backgroundImageWindowStyles}>
					
					</div>
				</MediaQuery>

				{/* -----------Phone-------------------- */}

				<MediaQuery maxWidth = {599} >
					<div id="homepageContainerPhone" style={this.state.backgroundImageWindowStyles}>
						
					</div>
				</MediaQuery>
				
			</div>
		);
	}
}

export default Template;
import React, { Component } from "react"
import {Link} from "react-router-dom"
import MediaQuery from 'react-responsive'
import { Button } from 'semantic-ui-react'

import ReactPlayer from 'react-player'

import "./clockSpecialty.css"

class ClockSpecialty extends Component{	

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
		clockSpecialtyButtonSizes:{
			fontSize: 0
		},
		clockSpecialtyLogoImageWindowStyles:{
			width: 0,
			height: 0
		},
		clockSpecialtyHomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		clockSpecialtyVideoContainer:{
			width: 0,
			height: 0,
			top: 0,
			left:0
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

// Dynamically adjust based on window height / width

updateWindowDimensions = () => {

	this.setState({ backgroundImageWindowStyles:{
		width: window.innerWidth, 
		height: window.innerHeight,
		},
	 });
	 this.setState({ clockSpecialtyLogoImageWindowStyles:{
		top: window.innerHeight / 80,
		left: window.innerWidth / 2.13,
		width: window.innerWidth /12, 
		height: window.innerHeight /15
		},
	 });

	 this.setState({ clockSpecialtyHomeIconWindowStyles:{
		top: window.innerHeight /1.25,
		left: window.innerWidth /2.05
		},
	 });
	 this.setState({ clockSpecialtyVideoContainer: {
		width: window.innerWidth / 2.2,
		height: window.innerHeight / 2,
		top: window.innerHeight / 3.4,
		left: window.innerWidth /3.6
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
					<div id="clockSpecialtyContainer" style={this.state.backgroundImageWindowStyles}>
					<Link to="/">
						<Button circular id='clockSpecialtyHomeIcon' icon= "home" style = {this.state.clockSpecialtyHomeIconWindowStyles} />
					</Link>
					<video id="clockSpecialtyVideoContainer" autoPlay controls loop muted style= {this.state.clockSpecialtyVideoContainer} >
						<source src="/Videos/ClockSpecialtyDemo.mp4" type="video/mp4" />
					</video>



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

export default ClockSpecialty;
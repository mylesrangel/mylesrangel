import React, { Component } from "react"
import {Link} from "react-router-dom"
import MediaQuery from 'react-responsive'
import { Button } from 'semantic-ui-react'

import Logo from '../../Media/logo.png';

import ReactPlayer from 'react-player'

import "./clockSpecialty.css"

class ClockSpecialty extends Component{	

	state = {

		backgroundImageWindowStyles:{
			width: 0,
			height: 0
		},
		clockSpecialtyTechIconsImageWindowStyles:{
			width: 0,
			height: 0,
			top: 0,
			left: 0,			
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
		clockSpecialtyGithubButton:{
			top: 0,
			left: 0
		},
		clockSpecialtyLiveDemoButton:{
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
	 this.setState({ clockSpecialtyTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /11,
		top: window.innerHeight /6,
		left: window.innerWidth /4,
		},
	 });

	 this.setState({ clockSpecialtyHomeIconWindowStyles:{
		top: window.innerHeight /1.25,
		left: window.innerWidth /2.05
		},
	 });
	 this.setState({ clockSpecialtyVideoContainer: {
		width: window.innerWidth / 2.2,
		height: window.innerHeight / 2.2,
		top: window.innerHeight / 3,
		left: window.innerWidth /3.6
	   },
	});
	this.setState({ clockSpecialtyGithubButton: {
		top: window.innerHeight / 1.246,
		left: window.innerWidth / 2.5,
	   },
	});
	this.setState({clockSpecialtyLiveDemoButton: {
		top: window.innerHeight / 1.246,
		left: window.innerWidth / 1.8
	   },
	});

 //-----------------------Tablet Responsive ----------------------

	this.setState({ tabletClockSpecialtyTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /10,
		top: window.innerHeight /12,
		left: window.innerWidth /18
		},
	 });
	 
	this.setState({tabletClockSpecialtyHomeIconWindowStyles:{
		top: window.innerHeight / 1.35,
		left: window.innerWidth / 2.13

		},
	});
	this.setState({tabletClockSpecialtyVideoContainer:{
		width: window.innerWidth / 2.2,
		height: window.innerHeight / 1.8,
		top: window.innerHeight / 1.5,
		left: window.innerWidth /3.6
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
						<img id = "homepageLogoImage" src = {Logo} style={this.state.clockSpecialtyLogoImageWindowStyles} alt = "logo" />
						<div id="clockSpecialtyTechStack" style={this.state.clockSpecialtyTechIconsImageWindowStyles}>
							<h5>Technologies used: </h5>
							<Button circular color='orange' id='html5' icon = "html5" size = "mini">HTML5 </Button>
							<Button circular color='blue' id='css3' icon = "css3" size = "mini">CSS3 </Button>
							<Button circular color='green' id='js' icon = "js" size = "mini" > JavaScript </Button>
							<Button circular color='purple' id='php' icon = "php" size = "mini">PHP </Button>
							<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>
						</div>
						<Link to="/">
							<Button circular id='clockSpecialtyHomeIcon' icon= "home" style = {this.state.clockSpecialtyHomeIconWindowStyles} />
						</Link>
						<video id="clockSpecialtyVideoContainer" autoPlay controls loop muted style= {this.state.clockSpecialtyVideoContainer} >
							<source src="/Videos/ClockSpecialtyDemo.mp4" type="video/mp4" />
						</video>

						<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/ClockSpecialty">
							<Button circular inverted basic color="white" icon = "file code"  size='small' id="clockSpecialtyGithubButton" style = {this.state.clockSpecialtyGithubButton}>Github</Button>								
						</a>
						<a target="_blank" rel="noopener noreferrer" href="https://clockspecialty.now.sh">
							<Button circular basic color="green" icon = "file code"  size='small' id="clockSpecialtyLiveDemoButton" style = {this.state.clockSpecialtyLiveDemoButton}>Live Demo</Button>								
						</a>

					</div>
				</MediaQuery>

				{/* -----------------Under 900px--------------------------------------- -------------------------------------------------------------------------------------------------------------------------------*/}

				<MediaQuery minWidth ={700} maxWidth = {999} >
					<div id="clockSpecialtyContainerTablet" style={this.state.backgroundImageWindowStyles}>
						<img id = "clockSpecialtyLogoImageTablet" src = {Logo} alt = "logo"  />
						<div id="clockSpecialtyTechIconsTablet" style={this.state.tabletClockSpecialtyTechIconsImageWindowStyles}>
							<h5>Technologies used: </h5>
							<Button circular color='orange' id='html5' icon = "html5" size = "mini">HTML5 </Button>
							<Button circular color='blue' id='css3' icon = "css3" size = "mini">CSS3 </Button>
							<Button circular color='green' id='js' icon = "js" size = "mini" > JavaScript </Button>
							<Button circular color='purple' id='php' icon = "php" size = "mini">PHP </Button>
							<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>
						</div>
						<Link to="/">
							<Button circular id='clockSpecialtyHomeIconTablet' icon= "home" size='large' style = {this.state.tabletClockSpecialtyHomeIconWindowStyles}/>
						</Link>
						<video id="clockSpecialtyVideoContainer" autoPlay controls loop muted style= {this.state.tabletClockSpecialtyVideoContainer} >
							<source src="/Videos/ClockSpecialtyDemoMobile.mp4" type="video/mp4" />
						</video>
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
import React, { Component } from "react"
import {Link} from "react-router-dom"
import MediaQuery from 'react-responsive'

import { Button } from 'semantic-ui-react'

import Logo from '../../Media/logo.png';

import "./battleTank.css"

class BattleTank extends Component{	

	state = {

		backgroundImageWindowStyles:{
			width: 0,
			height: 0
		},
		battleTankTechIconsImageWindowStyles:{
			width: 0,
			height: 0,
			top: 0,
			left: 0,			
		},
		battleTankLogoImageWindowStyles:{
			width: 0,
			height: 0
		},
		battleTankHomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		battleTankVideoContainer:{
			width: 0,
			height: 0,
			top: 0,
			left:0
		},
		battleTankGithubButton:{
			top: 0,
			left: 0
		},
		battleTankLiveDemoButton:{
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
	 this.setState({ battleTankLogoImageWindowStyles:{
		top: window.innerHeight / 80,
		left: window.innerWidth / 2.13,
		width: window.innerWidth /12, 
		height: window.innerHeight /15
		},
	 });
	 this.setState({ battleTankTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /11,
		top: window.innerHeight /6,
		left: window.innerWidth /4,
		},
	 });

	 this.setState({ battleTankHomeIconWindowStyles:{
		top: window.innerHeight /1.25,
		left: window.innerWidth /2.05
		},
	 });
	 this.setState({ battleTankVideoContainer: {
		width: window.innerWidth / 2.2,
		height: window.innerHeight / 2.2,
		top: window.innerHeight / 3,
		left: window.innerWidth /3.6
	   },
	});
	this.setState({ battleTankGithubButton: {
		top: window.innerHeight / 1.246,
		left: window.innerWidth / 2.5,
	   },
	});
	this.setState({battleTankLiveDemoButton: {
		top: window.innerHeight / 1.246,
		left: window.innerWidth / 1.8
	   },
	});

 //-----------------------Tablet Responsive ----------------------

	this.setState({ tabletBattleTankTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /10,
		top: window.innerHeight /12,
		left: window.innerWidth /18
		},
	 });
	 
	this.setState({tabletBattleTankHomeIconWindowStyles:{
		top: window.innerHeight / 1.35,
		left: window.innerWidth / 2.13

		},
	});
	this.setState({tabletBattleTankVideoContainer:{
		width: window.innerWidth / 2.5,
		height: window.innerHeight / 2.1,
		top: window.innerHeight / 4.3,
		left: window.innerWidth /3.3
	   },
	});
	this.setState({tabletBattleTankGithubButton: {
		top: window.innerHeight / 1.34,
		left: window.innerWidth / 3,
	   },
	});
	this.setState({tabletBattleTankLiveDemoButton: {
		top: window.innerHeight / 1.34,
		left: window.innerWidth / 1.8
	   },
	});

//---------Mobile size responsive --------------------------------------------------

	this.setState({ mobileBattleTankTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /10,
		top: window.innerHeight /12,
		left: window.innerWidth /18
		},
	 });

	 this.setState({mobileBattleTankHomeIconWindowStyles:{
		top: window.innerHeight / 1.32,
		left: window.innerWidth / 2.15

		},
	});
	this.setState({mobileBattleTankVideoContainer:{
		width: window.innerWidth / 2.5,
		height: window.innerHeight / 2,
		top: window.innerHeight / 4.3,
		left: window.innerWidth /3.3
	   },
	});
	this.setState({mobileBattleTankGithubButton: {
		top: window.innerHeight / 1.316,
		left: window.innerWidth / 3,
	   },
	});
	this.setState({mobileBattleTankLiveDemoButton: {
		top: window.innerHeight / 1.316,
		left: window.innerWidth / 1.8
	   },
	});
	

// ------------Phone size responsive---------------------------------------------------

	this.setState({ phoneBattleTankTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /10,
		top: window.innerHeight /12,
		left: window.innerWidth /18
		},
	});
	this.setState({phoneBattleTankHomeIconWindowStyles:{
		top: window.innerHeight / 1.13,
		left: window.innerWidth / 2.3
		},
	});
	this.setState({phoneBattleTankVideoContainer:{
		width: window.innerWidth / 1.4,
		height: window.innerHeight / 1.7,
		top: window.innerHeight / 3.7,
		left: window.innerWidth / 7
	   },
	});
	this.setState({phoneBattleTankGithubButton: {
		top: window.innerHeight / 1.127,
		left: window.innerWidth / 4,
	   },
	});
	this.setState({phoneBattleTankLiveDemoButton: {
		top: window.innerHeight / 1.127,
		left: window.innerWidth / 1.8
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
					<div id="battleTankContainer" style={this.state.backgroundImageWindowStyles}>
						<img id = "homepageLogoImage" src = {Logo} style={this.state.battleTankLogoImageWindowStyles} alt = "logo" />
						<div id="battleTankTechStack" style={this.state.battleTankTechIconsImageWindowStyles}>
							<h5>Technologies used: </h5>
							<Button circular color='orange' id='html5' icon = "html5" size = "mini">HTML5 </Button>
							<Button circular color='blue' id='css3' icon = "css3" size = "mini">CSS3 </Button>
							<Button circular color='green' id='js' icon = "js" size = "mini" > JavaScript </Button>
							<Button circular color='purple' id='php' icon = "php" size = "mini">PHP </Button>
							<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>
						</div>
						<Link to="/">
							<Button circular id='battleTankHomeIcon' icon= "home" style = {this.state.battleTankHomeIconWindowStyles} />
						</Link>
						<video id="battleTankVideoContainer" autoPlay controls loop muted style= {this.state.battleTankVideoContainer} >
							<source src="/Videos/BattleTankDemo.mp4" type="video/mp4" />
						</video>

						<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/BattleTank">
							<Button circular inverted basic color="white" icon = "file code"  size='small' id="battleTankGithubButton" style = {this.state.battleTankGithubButton}>Github</Button>								
						</a>

					</div>
				</MediaQuery>

				{/* -----------------Under 900px--------------------------------------- -------------------------------------------------------------------------------------------------------------------------------*/}

				<MediaQuery minWidth ={700} maxWidth = {999} >
					<div id="battleTankContainerTablet" style={this.state.backgroundImageWindowStyles}>
						<img id = "battleTankLogoImageTablet" src = {Logo} alt = "logo"  />
						<div id="battleTankTechIconsTablet" style={this.state.tabletBattleTankTechIconsImageWindowStyles}>
							<h5>Technologies used: </h5>
							<Button circular color='orange' id='html5' icon = "html5" size = "mini">HTML5 </Button>
							<Button circular color='blue' id='css3' icon = "css3" size = "mini">CSS3 </Button>
							<Button circular color='green' id='js' icon = "js" size = "mini" > JavaScript </Button>
							<Button circular color='purple' id='php' icon = "php" size = "mini">PHP </Button>
							<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>
						</div>
						<Link to="/">
							<Button circular id='battleTankHomeIconTablet' icon= "home" size='large' style = {this.state.tabletBattleTankHomeIconWindowStyles}/>
						</Link>
						<video id="battleTankVideoContainerTablet" autoPlay controls loop muted style= {this.state.tabletBattleTankVideoContainer} >
							<source src="/Videos/BattleTankDemo.mp4" type="video/mp4" />
						</video>

						<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/BattleTank">
							<Button circular inverted basic color="white" icon = "file code"  size='small' id="battleTankGithubButtonTablet" style = {this.state.tabletBattleTankGithubButton}>Github</Button>								
						</a>

					</div>
				</MediaQuery>
			
				{/* ---------------------Small Tablet 700px -------------------------------------------------------------*/}
				<MediaQuery minWidth = {600} maxWidth = {699} >
					<div id="battleTankContainerMobile" style={this.state.backgroundImageWindowStyles}>
						<img id = "battleTankLogoImageMobile" src = {Logo} alt = "logo"  />
						<div id="battleTankTechIconsMobile" style={this.state.mobileBattleTankTechIconsImageWindowStyles}>
							<h5>Technologies used: </h5>
							<Button circular color='orange' id='html5' icon = "html5" size = "mini">HTML5 </Button>
							<Button circular color='blue' id='css3' icon = "css3" size = "mini">CSS3 </Button>
							<Button circular color='green' id='js' icon = "js" size = "mini" > JavaScript </Button>
							<Button circular color='purple' id='php' icon = "php" size = "mini">PHP </Button>
							<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>
						</div>
						<Link to="/">
							<Button circular id='battleTankHomeIconMobile' icon= "home" style = {this.state.mobileBattleTankHomeIconWindowStyles}/>
						</Link>
						<video id="battleTankVideoContainerMobile" autoPlay controls loop muted style= {this.state.mobileBattleTankVideoContainer} >
							<source src="/Videos/BattleTankDemo.mp4" type="video/mp4" />
						</video>

						<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/BattleTank">
							<Button circular inverted basic color="white" icon = "file code"  size='mini' id="battleTankGithubButtonMobile" style = {this.state.mobileBattleTankGithubButton}>Github</Button>								
						</a>
					
					</div>
				</MediaQuery>

				{/* -----------Phone-------------------- */}

				<MediaQuery maxWidth = {599} >
					<div id="battleTankContainerPhone" style={this.state.backgroundImageWindowStyles}>
						<img id = "battleTankLogoImagePhone" src = {Logo} alt = "logo"  />
						<div id="battleTankTechIconsPhone" style={this.state.phoneBattleTankTechIconsImageWindowStyles}>
							<h5>Technologies used: </h5>
							<Button circular color='orange' id='html5' icon = "html5" size = "mini">HTML5 </Button>
							<Button circular color='blue' id='css3' icon = "css3" size = "mini">CSS3 </Button>
							<Button circular color='green' id='js' icon = "js" size = "mini" > JavaScript </Button>
							<Button circular color='purple' id='php' icon = "php" size = "mini">PHP </Button>
							<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>
						</div>

						<Link to="/">
							<Button circular id='battleTankHomeIconPhone' icon= "home"  style = {this.state.phoneBattleTankHomeIconWindowStyles}/>
						</Link>

						<video id="battleTankVideoContainerPhone" autoPlay controls loop muted style= {this.state.phoneBattleTankVideoContainer} >
							<source src="/Videos/BattleTankDemo.mp4" type="video/mp4" />
						</video>

						<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/BattleTank">
							<Button circular inverted basic color="white" icon = "file code"  size='tiny' id="battleTankGithubButtonPhone" style = {this.state.phoneBattleTankGithubButton}>Github</Button>								
						</a>

					</div>
				</MediaQuery>
				
			</div>
		);
	}
}

export default BattleTank;
import React, { Component } from "react"
import {Link} from "react-router-dom"
import MediaQuery from 'react-responsive'

import { Button } from 'semantic-ui-react'

import Logo from '../../Media/logo.png';

import "./flappyBird.css"

class FlappyBird extends Component{	

	state = {

		backgroundImageWindowStyles:{
			width: 0,
			height: 0
		},
		flappyBirdTechIconsImageWindowStyles:{
			width: 0,
			height: 0,
			top: 0,
			left: 0,			
		},
		flappyBirdLogoImageWindowStyles:{
			width: 0,
			height: 0
		},
		flappyBirdHomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		flappyBirdVideoContainer:{
			width: 0,
			height: 0,
			top: 0,
			left:0
		},
		flappyBirdGithubButton:{
			top: 0,
			left: 0
		},
		flappyBirdLiveDemoButton:{
			top: 0,
			left: 0
		},

		// -----------Tablet Responsiveness -------------------

		tabletFlappyBirdTechIconsImageWindowStyles:{
			width: 0,
			height: 0,
			top: 0
		},
		tabletFlappyBirdComputerScreenTopWindowStyles:{
			width: 0,
			height: 0,
			top: 0,
			left: 0
		},
		tabletFlappyBirdHomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		tabletFlappyBirdProjectSeperationWindowStyles: {
			top: 0,
			left: 0
		},
		tabletFlappyBirdProjectLinksWindowStyles: {
			top: 0,
			left: 0
		},

		//------------------Mobile styles --------------------------------


		MobileFlappyBirdHomeIconStyles:{
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
	 this.setState({ flappyBirdLogoImageWindowStyles:{
		top: window.innerHeight / 80,
		left: window.innerWidth / 2.13,
		width: window.innerWidth /12, 
		height: window.innerHeight /15
		},
	 });
	 this.setState({ flappyBirdTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /11,
		top: window.innerHeight /6,
		left: window.innerWidth /4,
		},
	 });

	 this.setState({ flappyBirdHomeIconWindowStyles:{
		top: window.innerHeight /1.25,
		left: window.innerWidth /2.05
		},
	 });
	 this.setState({ flappyBirdVideoContainer: {
		width: window.innerWidth / 2.2,
		height: window.innerHeight / 2.2,
		top: window.innerHeight / 3,
		left: window.innerWidth /3.6
	   },
	});
	this.setState({ flappyBirdGithubButton: {
		top: window.innerHeight / 1.246,
		left: window.innerWidth / 2.5,
	   },
	});
	this.setState({flappyBirdLiveDemoButton: {
		top: window.innerHeight / 1.246,
		left: window.innerWidth / 1.8
	   },
	});

 //-----------------------Tablet Responsive ----------------------

	this.setState({ tabletFlappyBirdTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /10,
		top: window.innerHeight /12,
		left: window.innerWidth /18
		},
	 });
	 
	this.setState({tabletFlappyBirdHomeIconWindowStyles:{
		top: window.innerHeight / 1.35,
		left: window.innerWidth / 2.13

		},
	});
	this.setState({tabletFlappyBirdVideoContainer:{
		width: window.innerWidth / 2.5,
		height: window.innerHeight / 2.1,
		top: window.innerHeight / 4.3,
		left: window.innerWidth /3.3
	   },
	});
	this.setState({tabletFlappyBirdGithubButton: {
		top: window.innerHeight / 1.34,
		left: window.innerWidth / 3,
	   },
	});
	this.setState({tabletFlappyBirdLiveDemoButton: {
		top: window.innerHeight / 1.34,
		left: window.innerWidth / 1.8
	   },
	});

//---------Mobile size responsive --------------------------------------------------

	this.setState({ mobileFlappyBirdTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /10,
		top: window.innerHeight /12,
		left: window.innerWidth /18
		},
	 });

	 this.setState({mobileFlappyBirdHomeIconWindowStyles:{
		top: window.innerHeight / 1.32,
		left: window.innerWidth / 2.15

		},
	});
	this.setState({mobileFlappyBirdVideoContainer:{
		width: window.innerWidth / 2.5,
		height: window.innerHeight / 2,
		top: window.innerHeight / 4.3,
		left: window.innerWidth /3.3
	   },
	});
	this.setState({mobileFlappyBirdGithubButton: {
		top: window.innerHeight / 1.316,
		left: window.innerWidth / 3,
	   },
	});
	this.setState({mobileFlappyBirdLiveDemoButton: {
		top: window.innerHeight / 1.316,
		left: window.innerWidth / 1.8
	   },
	});
	

// ------------Phone size responsive---------------------------------------------------

	this.setState({ phoneFlappyBirdTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /10,
		top: window.innerHeight /12,
		left: window.innerWidth /18
		},
	});
	this.setState({phoneFlappyBirdHomeIconWindowStyles:{
		top: window.innerHeight / 1.13,
		left: window.innerWidth / 2.3
		},
	});
	this.setState({phoneFlappyBirdVideoContainer:{
		width: window.innerWidth / 1.4,
		height: window.innerHeight / 1.7,
		top: window.innerHeight / 3.7,
		left: window.innerWidth / 7
	   },
	});
	this.setState({phoneFlappyBirdGithubButton: {
		top: window.innerHeight / 1.127,
		left: window.innerWidth / 4,
	   },
	});
	this.setState({phoneFlappyBirdLiveDemoButton: {
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
					<div id="flappyBirdContainer" style={this.state.backgroundImageWindowStyles}>
						<img id = "homepageLogoImage" src = {Logo} style={this.state.flappyBirdLogoImageWindowStyles} alt = "logo" />
						<div id="flappyBirdTechStack" style={this.state.flappyBirdTechIconsImageWindowStyles}>
							<h5>Technologies used: </h5>
							<Button circular color='green' id='android' icon = "android" size = "mini">Android </Button>
							<Button circular color='red' id='java' size = "mini">Java </Button>
							<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>
						</div>
						<Link to="/">
							<Button circular id='flappyBirdHomeIcon' icon= "home" style = {this.state.flappyBirdHomeIconWindowStyles} />
						</Link>
						<video id="flappyBirdVideoContainer" autoPlay controls loop muted style= {this.state.flappyBirdVideoContainer} >
							<source src="/Videos/FlappyBirdClone.mp4" type="video/mp4" />
						</video>

						<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/FlappyBirdClone">
							<Button circular inverted basic color="white" icon = "file code"  size='small' id="flappyBirdGithubButton" style = {this.state.flappyBirdGithubButton}>Github</Button>								
						</a>

					</div>
				</MediaQuery>

				{/* -----------------Under 900px--------------------------------------- -------------------------------------------------------------------------------------------------------------------------------*/}

				<MediaQuery minWidth ={700} maxWidth = {999} >
					<div id="flappyBirdContainerTablet" style={this.state.backgroundImageWindowStyles}>
						<img id = "flappyBirdLogoImageTablet" src = {Logo} alt = "logo"  />
						<div id="flappyBirdTechIconsTablet" style={this.state.tabletFlappyBirdTechIconsImageWindowStyles}>
							<h5>Technologies used: </h5>
							<Button circular color='green' id='android' icon = "android" size = "mini">Android </Button>
							<Button circular color='red' id='java' size = "mini">Java </Button>
							<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>
						</div>
						<Link to="/">
							<Button circular id='flappyBirdHomeIconTablet' icon= "home" size='large' style = {this.state.tabletFlappyBirdHomeIconWindowStyles}/>
						</Link>
						<video id="flappyBirdVideoContainerTablet" autoPlay controls loop muted style= {this.state.tabletFlappyBirdVideoContainer} >
							<source src="/Videos/FlappyBirdClone.mp4" type="video/mp4" />
						</video>

						<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/FlappyBirdClone">
							<Button circular inverted basic color="white" icon = "file code"  size='small' id="flappyBirdGithubButtonTablet" style = {this.state.tabletFlappyBirdGithubButton}>Github</Button>								
						</a>

					</div>
				</MediaQuery>
			
				{/* ---------------------Small Tablet 700px -------------------------------------------------------------*/}
				<MediaQuery minWidth = {600} maxWidth = {699} >
					<div id="flappyBirdContainerMobile" style={this.state.backgroundImageWindowStyles}>
						<img id = "flappyBirdLogoImageMobile" src = {Logo} alt = "logo"  />
						<div id="flappyBirdTechIconsMobile" style={this.state.mobileFlappyBirdTechIconsImageWindowStyles}>
							<h5>Technologies used: </h5>
							<Button circular color='green' id='android' icon = "android" size = "mini">Android </Button>
							<Button circular color='red' id='java' size = "mini">Java </Button>
							<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>
						</div>
						<Link to="/">
							<Button circular id='flappyBirdHomeIconMobile' icon= "home" style = {this.state.mobileFlappyBirdHomeIconWindowStyles}/>
						</Link>
						<video id="flappyBirdVideoContainerMobile" autoPlay controls loop muted style= {this.state.mobileFlappyBirdVideoContainer} >
							<source src="/Videos/FlappyBirdClone.mp4" type="video/mp4" />
						</video>

						<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/FlappyBirdClone">
							<Button circular inverted basic color="white" icon = "file code"  size='mini' id="flappyBirdGithubButtonMobile" style = {this.state.mobileFlappyBirdGithubButton}>Github</Button>								
						</a>
					
					</div>
				</MediaQuery>

				{/* -----------Phone-------------------- */}

				<MediaQuery maxWidth = {599} >
					<div id="flappyBirdContainerPhone" style={this.state.backgroundImageWindowStyles}>
						<img id = "flappyBirdLogoImagePhone" src = {Logo} alt = "logo"  />
						<div id="flappyBirdTechIconsPhone" style={this.state.phoneFlappyBirdTechIconsImageWindowStyles}>
							<h5>Technologies used: </h5>
							<Button circular color='green' id='android' icon = "android" size = "mini">Android </Button>
							<Button circular color='red' id='java' size = "mini">Java </Button>
							<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>
						</div>

						<Link to="/">
							<Button circular id='flappyBirdHomeIconPhone' icon="home" style = {this.state.phoneFlappyBirdHomeIconWindowStyles} />
						</Link>

						<video id="flappyBirdVideoContainerPhone" autoPlay controls loop muted style= {this.state.phoneFlappyBirdVideoContainer} >
							<source src="/Videos/FlappyBirdClone.mp4" type="video/mp4" />
						</video>

						<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/FlappyBirdClone">
							<Button circular inverted basic color="white" icon = "file code"  size='tiny' id="flappyBirdGithubButtonPhone" style = {this.state.phoneFlappyBirdGithubButton}>Github</Button>								
						</a>

					</div>
				</MediaQuery>
				
			</div>
		);
	}
}

export default FlappyBird;
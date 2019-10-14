

//Instagram Clone page is not up and running yet
//need to set up ec2 instance for backend
//scroll down to see the page setup




























import React, { Component } from "react"
import {Link} from "react-router-dom"
import MediaQuery from 'react-responsive'

import { Button } from 'semantic-ui-react'

import Logo from '../../Media/logo.png';

import "./instagramClone.css"

class InstagramClone extends Component{	

	state = {

		backgroundImageWindowStyles:{
			width: 0,
			height: 0
		},
		instagramCloneTechIconsImageWindowStyles:{
			width: 0,
			height: 0,
			top: 0,
			left: 0,			
		},
		instagramCloneLogoImageWindowStyles:{
			width: 0,
			height: 0
		},
		instagramCloneHomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		instagramCloneVideoContainer:{
			width: 0,
			height: 0,
			top: 0,
			left:0
		},
		instagramCloneGithubButton:{
			top: 0,
			left: 0
		},
		instagramCloneLiveDemoButton:{
			top: 0,
			left: 0
		},

		// -----------Tablet Responsiveness -------------------

		tabletInstagramCloneTechIconsImageWindowStyles:{
			width: 0,
			height: 0,
			top: 0
		},
		tabletInstagramCloneComputerScreenTopWindowStyles:{
			width: 0,
			height: 0,
			top: 0,
			left: 0
		},
		tabletInstagramCloneHomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		tabletInstagramCloneProjectSeperationWindowStyles: {
			top: 0,
			left: 0
		},
		tabletInstagramCloneProjectLinksWindowStyles: {
			top: 0,
			left: 0
		},

		//------------------Mobile styles --------------------------------


		MobileInstagramCloneHomeIconStyles:{
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
	 this.setState({ instagramCloneLogoImageWindowStyles:{
		top: window.innerHeight / 80,
		left: window.innerWidth / 2.13,
		width: window.innerWidth /12, 
		height: window.innerHeight /15
		},
	 });
	 this.setState({ instagramCloneTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /11,
		top: window.innerHeight /6,
		left: window.innerWidth /4,
		},
	 });

	 this.setState({ instagramCloneHomeIconWindowStyles:{
		top: window.innerHeight /1.25,
		left: window.innerWidth /2.05
		},
	 });
	 this.setState({ instagramCloneVideoContainer: {
		width: window.innerWidth / 2.2,
		height: window.innerHeight / 2.2,
		top: window.innerHeight / 3,
		left: window.innerWidth /3.6
	   },
	});
	this.setState({ instagramCloneGithubButton: {
		top: window.innerHeight / 1.246,
		left: window.innerWidth / 2.5,
	   },
	});
	this.setState({instagramCloneLiveDemoButton: {
		top: window.innerHeight / 1.246,
		left: window.innerWidth / 1.8
	   },
	});

 //-----------------------Tablet Responsive ----------------------

	this.setState({ tabletInstagramCloneTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /10,
		top: window.innerHeight /12,
		left: window.innerWidth /18
		},
	 });
	 
	this.setState({tabletInstagramCloneHomeIconWindowStyles:{
		top: window.innerHeight / 1.35,
		left: window.innerWidth / 2.13

		},
	});
	this.setState({tabletInstagramCloneVideoContainer:{
		width: window.innerWidth / 2.5,
		height: window.innerHeight / 2.1,
		top: window.innerHeight / 4.3,
		left: window.innerWidth /3.3
	   },
	});
	this.setState({tabletInstagramCloneGithubButton: {
		top: window.innerHeight / 1.34,
		left: window.innerWidth / 3,
	   },
	});
	this.setState({tabletInstagramCloneLiveDemoButton: {
		top: window.innerHeight / 1.34,
		left: window.innerWidth / 1.8
	   },
	});

//---------Mobile size responsive --------------------------------------------------

	this.setState({ mobileInstagramCloneTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /10,
		top: window.innerHeight /12,
		left: window.innerWidth /18
		},
	 });

	 this.setState({mobileInstagramCloneHomeIconWindowStyles:{
		top: window.innerHeight / 1.32,
		left: window.innerWidth / 2.15

		},
	});
	this.setState({mobileInstagramCloneVideoContainer:{
		width: window.innerWidth / 2.5,
		height: window.innerHeight / 2,
		top: window.innerHeight / 4.3,
		left: window.innerWidth /3.3
	   },
	});
	this.setState({mobileInstagramCloneGithubButton: {
		top: window.innerHeight / 1.316,
		left: window.innerWidth / 3,
	   },
	});
	this.setState({mobileInstagramCloneLiveDemoButton: {
		top: window.innerHeight / 1.316,
		left: window.innerWidth / 1.8
	   },
	});
	

// ------------Phone size responsive---------------------------------------------------

	this.setState({ phoneInstagramCloneTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /10,
		top: window.innerHeight /12,
		left: window.innerWidth /18
		},
	});
	this.setState({phoneInstagramCloneHomeIconWindowStyles:{
		top: window.innerHeight / 1.13,
		left: window.innerWidth / 2.3
		},
	});
	this.setState({phoneInstagramCloneVideoContainer:{
		width: window.innerWidth / 1.4,
		height: window.innerHeight / 1.7,
		top: window.innerHeight / 3.7,
		left: window.innerWidth / 7
	   },
	});
	this.setState({phoneInstagramCloneGithubButton: {
		top: window.innerHeight / 1.127,
		left: window.innerWidth / 4,
	   },
	});
	this.setState({phoneInstagramCloneLiveDemoButton: {
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
					<div id="instagramCloneContainer" style={this.state.backgroundImageWindowStyles}>
						<img id = "homepageLogoImage" src = {Logo} style={this.state.instagramCloneLogoImageWindowStyles} alt = "logo" />
						<div id="instagramCloneTechStack" style={this.state.instagramCloneTechIconsImageWindowStyles}>
							<h5>Technologies used: </h5>
							<Button circular color='orange' id='html5' icon = "html5" size = "mini">HTML5 </Button>
							<Button circular color='blue' id='css3' icon = "css3" size = "mini">CSS3 </Button>
							<Button circular color='green' id='js' icon = "js" size = "mini" > JavaScript </Button>
							<Button circular color='purple' id='php' icon = "php" size = "mini">PHP </Button>
							<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>
						</div>
						<Link to="/">
							<Button circular id='instagramCloneHomeIcon' icon= "home" style = {this.state.instagramCloneHomeIconWindowStyles} />
						</Link>
						<video id="instagramCloneVideoContainer" autoPlay controls loop muted style= {this.state.instagramCloneVideoContainer} >
							<source src="/Videos/InstagramCloneClone.mp4" type="video/mp4" />
						</video>

						<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/InstagramCloneClone">
							<Button circular inverted basic color="white" icon = "file code"  size='small' id="instagramCloneGithubButton" style = {this.state.instagramCloneGithubButton}>Github</Button>								
						</a>

					</div>
				</MediaQuery>

				{/* -----------------Under 900px--------------------------------------- -------------------------------------------------------------------------------------------------------------------------------*/}

				<MediaQuery minWidth ={700} maxWidth = {999} >
					<div id="instagramCloneContainerTablet" style={this.state.backgroundImageWindowStyles}>
						<img id = "instagramCloneLogoImageTablet" src = {Logo} alt = "logo"  />
						<div id="instagramCloneTechIconsTablet" style={this.state.tabletInstagramCloneTechIconsImageWindowStyles}>
							<h5>Technologies used: </h5>
							<Button circular color='orange' id='html5' icon = "html5" size = "mini">HTML5 </Button>
							<Button circular color='blue' id='css3' icon = "css3" size = "mini">CSS3 </Button>
							<Button circular color='green' id='js' icon = "js" size = "mini" > JavaScript </Button>
							<Button circular color='purple' id='php' icon = "php" size = "mini">PHP </Button>
							<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>
						</div>
						<Link to="/">
							<Button circular id='instagramCloneHomeIconTablet' icon= "home" size='large' style = {this.state.tabletInstagramCloneHomeIconWindowStyles}/>
						</Link>
						<video id="instagramCloneVideoContainerTablet" autoPlay controls loop muted style= {this.state.tabletInstagramCloneVideoContainer} >
							<source src="/Videos/InstagramCloneClone.mp4" type="video/mp4" />
						</video>

						<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/InstagramCloneClone">
							<Button circular inverted basic color="white" icon = "file code"  size='small' id="instagramCloneGithubButtonTablet" style = {this.state.tabletInstagramCloneGithubButton}>Github</Button>								
						</a>

					</div>
				</MediaQuery>
			
				{/* ---------------------Small Tablet 700px -------------------------------------------------------------*/}
				<MediaQuery minWidth = {600} maxWidth = {699} >
					<div id="instagramCloneContainerMobile" style={this.state.backgroundImageWindowStyles}>
						<img id = "instagramCloneLogoImageMobile" src = {Logo} alt = "logo"  />
						<div id="instagramCloneTechIconsMobile" style={this.state.mobileInstagramCloneTechIconsImageWindowStyles}>
							<h5>Technologies used: </h5>
							<Button circular color='orange' id='html5' icon = "html5" size = "mini">HTML5 </Button>
							<Button circular color='blue' id='css3' icon = "css3" size = "mini">CSS3 </Button>
							<Button circular color='green' id='js' icon = "js" size = "mini" > JavaScript </Button>
							<Button circular color='purple' id='php' icon = "php" size = "mini">PHP </Button>
							<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>
						</div>
						<Link to="/">
							<Button circular id='instagramCloneHomeIconMobile' icon= "home" style = {this.state.mobileInstagramCloneHomeIconWindowStyles}/>
						</Link>
						<video id="instagramCloneVideoContainerMobile" autoPlay controls loop muted style= {this.state.mobileInstagramCloneVideoContainer} >
							<source src="/Videos/InstagramCloneClone.mp4" type="video/mp4" />
						</video>

						<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/InstagramCloneClone">
							<Button circular inverted basic color="white" icon = "file code"  size='mini' id="instagramCloneGithubButtonMobile" style = {this.state.mobileInstagramCloneGithubButton}>Github</Button>								
						</a>
					
					</div>
				</MediaQuery>

				{/* -----------Phone-------------------- */}

				<MediaQuery maxWidth = {599} >
					<div id="instagramCloneContainerPhone" style={this.state.backgroundImageWindowStyles}>
						<img id = "instagramCloneLogoImagePhone" src = {Logo} alt = "logo"  />
						<div id="instagramCloneTechIconsPhone" style={this.state.phoneInstagramCloneTechIconsImageWindowStyles}>
							<h5>Technologies used: </h5>
							<Button circular color='orange' id='html5' icon = "html5" size = "mini">HTML5 </Button>
							<Button circular color='blue' id='css3' icon = "css3" size = "mini">CSS3 </Button>
							<Button circular color='green' id='js' icon = "js" size = "mini" > JavaScript </Button>
							<Button circular color='purple' id='php' icon = "php" size = "mini">PHP </Button>
							<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>
						</div>

						<Link to="/">
							<Button circular id='instagramCloneHomeIconPhone' icon="home" style = {this.state.phoneInstagramCloneHomeIconWindowStyles} />
						</Link>

						<video id="instagramCloneVideoContainerPhone" autoPlay controls loop muted style= {this.state.phoneInstagramCloneVideoContainer} >
							<source src="/Videos/InstagramCloneClone.mp4" type="video/mp4" />
						</video>

						<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/InstagramCloneClone">
							<Button circular inverted basic color="white" icon = "file code"  size='tiny' id="instagramCloneGithubButtonPhone" style = {this.state.phoneInstagramCloneGithubButton}>Github</Button>								
						</a>

					</div>
				</MediaQuery>
				
			</div>
		);
	}
}

export default InstagramClone;
import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import { Button } from 'semantic-ui-react'

import Logo from '../../Media/logo.png';
import BackgroundImagePhone from '../../Media/phone-image-full-edited-cropped.png';
import myResume from "../../Media/MylesRangel.pdf";

import {Link} from "react-router-dom";

import "./homePage.css"

class Homepage extends Component{	

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
		}
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

updateWindowDimensions = () => {

	this.setState({ backgroundImageWindowStyles:{
		width: window.innerWidth, 
		height: window.innerHeight
		},
	 });
	 this.setState({ homepageLogoImageWindowStyles:{
		width: window.innerWidth /8, 
		height: window.innerHeight /10
		},
	 });
	 this.setState({ homepageTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /10,
		top: window.innerHeight /7,
		left: window.innerWidth /4
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
				<MediaQuery minWidth = {1000} >
					<div id="homepageContainer" style={this.state.backgroundImageWindowStyles}>
						<img id = "homepageLogoImage" src = {Logo} style={this.state.homepageLogoImageWindowStyles} alt = "logo" />
						<Button circular id='homepageHomeIcon' icon= "home" size='big' style = {this.state.homepageHomeIconWindowStyles} />
						<div id = "homepageTechIcons" style = {this.state.homepageTechIconsImageWindowStyles}>
							{this.state.reactTech && <Button circular color = 'blue' id='react' icon = "react" size = "mini">React </Button> }
							{this.state.jsTech &&<Button circular color='green' id='js' icon = "js" size = "mini" > JavaScript </Button>}
							{this.state.awsTech &&<Button circular color='orange' id='aws' icon = "aws" size = "mini">AWS </Button>}
							{this.state.html5Tech &&<Button circular color='orange' id='html5' icon = "html5" size = "mini">HTML5 </Button>}
							{this.state.css3Tech &&<Button circular color='blue' id='css3' icon = "css3" size = "mini">CSS3 </Button>}
							{this.state.phpTech &&<Button circular color='purple' id='php' icon = "php" size = "mini">PHP </Button>}
							{this.state.npmTech &&<Button circular color='blue' id='npm' icon = "npm"  size = "mini">NPM </Button>}
							{this.state.githubTech &&<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>}
							{this.state.nodeTech &&<Button circular color='green' id='node' icon = "node" size = "mini">NodeJS </Button>}
							{this.state.trelloTech &&<Button circular color='blue' id='trello' icon = "trello" size = "mini">Trello </Button>}
							{this.state.androidTech &&<Button circular color='green' id='android' icon = "android" size = "mini">Android </Button>}
						</div>
						<div id = "homepageComputerScreenContainerTop" style = {this.state.homepageComputerScreenTopWindowStyles}>
							<Link to="/about" >
								<Button circular basic color="red"id='addressCard' icon = "address card"  size='small' >About</Button>
							</Link>
							<a href = {myResume} target="_blank" rel="noopener noreferrer">
								<Button circular basic color="blue" id='file outline' icon = "file outline" size='small' >Resume(pdf)</Button>
							</a>
							<Link to="/contact" >
								<Button circular basic color= "green" id='idCard' icon = "envelope"  size='small' >Contact</Button>
							</Link>					
						</div>
						<div id = "homepageProjectSeperating" style = {this.state.homepageProjectSeperationWindowStyles}>
							<hr id="homepageLeftHorizontal" />
							Experience
							<hr id="homepageRightHorizontal"/>
						</div>
						<div id = "homepageProjectLinks" style = {this.state.homepageProjectLinksWindowStyles}>
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/mylesrangel">
								<div onMouseEnter = {this.showMylesrangelTechStack}  onMouseLeave = {this.hideMylesrangelTechStack} ref = 'mylesrangel' className = "computerScreenIcon" >
									<Button circular basic color="green"id='addressCard' icon = "file code"  size='small' >mylesrangel.com</Button>								</div>
							</a>
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/ClockSpecialty">
								<div onMouseEnter = {this.showclockSpecialtyTechStack}  onMouseLeave = {this.hideclockSpecialtyTechStack} className = "computerScreenIcon" >
									<Button circular basic color="teal" id='addressCard' icon = "file code"  size='small'>Clock Specialty</Button>
								</div>
							</a>	
											
						</div>
					</div>
				</MediaQuery>

				{/* -----------------Under 800px--------------------------------------- -------------------------------------------------------------------------------------------------------------------------------*/}

				<MediaQuery minWidth ={601} maxWidth = {999} >
					<div id="homepageContainerTablet">
						<img id = "homepageLogoImageTablet" src = {Logo} alt = "logo" />
						<Button circular id='homepageHomeIconTablet' icon= "home" size='large' />
						<div id = "homepageTechIconsTablet" >
						{this.state.reactTech && <Button circular color = 'blue' id='react' icon = "react" size = "tiny">React </Button> }
							{this.state.jsTech &&<Button circular color='green' id='js' icon = "js" size = "tiny"> JavaScript </Button>}
							{this.state.awsTech &&<Button circular color='orange' id='aws' icon = "aws" size = "tiny">AWS </Button>}
							{this.state.html5Tech &&<Button circular color='orange' id='html5' icon = "html5" size = "tiny">HTML5 </Button>}
							{this.state.css3Tech &&<Button circular color='blue' id='css3' icon = "css3" size = "tiny">CSS3 </Button>}
							{this.state.phpTech &&<Button circular color='purple' id='php' icon = "php" size = "tiny">PHP </Button>}
							{this.state.npmTech &&<Button circular color='blue' id='npm' icon = "npm"  size = "tiny">NPM </Button>}
							{this.state.githubTech &&<Button circular color='black' id='github' icon = "github" size = "tiny">Git </Button>}
							{this.state.nodeTech &&<Button circular color='green' id='node' icon = "node" size = "tiny">NodeJS </Button>}
							{this.state.trelloTech &&<Button circular color='blue' id='trello' icon = "trello" size = "tiny">Trello </Button>}
							{this.state.androidTech &&<Button circular color='green' id='android' icon = "android" size = "tiny">Android </Button>}
						</div>
						<div id = "homepageComputerScreenContainerTopTablet">
							<Link to="/about" >
								<Button circular basic color="red" id='addressCard' icon = "address card"> About </Button>
							</Link>					
							<a href = {myResume} target="_blank" rel="noopener noreferrer">
								<Button circular basic color="blue" id='file outline' icon = "file outline"> Resume(pdf) </Button>
							</a>
							<Link to="/contact" >
								<Button circular basic color= "green" id='idCard' icon = "envelope">Contact </Button>
							</Link>
						</div>
						<div id = "homepageProjectSeperatingTablet">
							<hr id="homepageLeftHorizontalTablet" />
							Experience
							<hr id="homepageRightHorizontalTablet"/>
						</div>
						<div id = "homepageProjectLinksTablet">
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/mylesrangel">
									<Button onMouseEnter = {this.showMylesrangelTechStack}  onMouseLeave = {this.hideMylesrangelTechStack} circular basic color="green"id='addressCard' icon = "file code" size="tiny"> mylesrangel.com </Button>
							</a>
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/ClockSpecialty">
									<Button onMouseEnter = {this.showclockSpecialtyTechStack}  onMouseLeave = {this.hideclockSpecialtyTechStack}circular basic color="teal" id='addressCard' icon = "file code" size="tiny">Clock Specialty </Button>
							</a>					
						</div>
					</div>
				</MediaQuery>
			
		{/* ---------------------Mobile 500px -------------------------------------------------------------*/}

				<MediaQuery maxWidth = {600} >
					<div id="homepageContainerMobile">
						<img id = "homepageBackgroundImageMobile" src = {BackgroundImagePhone} alt = "laptop" />
						<img id = "homepageLogoImageMobile" src = {Logo} alt = "logo" />
						<Button circular id='homepageHomeIconMobile' icon= "home" size='big' />
						<div id = "homepageTechIconsMobile" >
							{this.state.reactTech && <Button circular color = 'blue' id='react' icon = "react" size = "mini">React </Button> }
							{this.state.jsTech &&<Button circular color='green' id='js' icon = "js" size = "mini" > JavaScript </Button>}
							{this.state.awsTech &&<Button circular color='orange' id='aws' icon = "aws" size = "mini">AWS </Button>}
							{this.state.html5Tech &&<Button circular color='orange' id='html5' icon = "html5" size = "mini">HTML5 </Button>}
							{this.state.css3Tech &&<Button circular color='blue' id='css3' icon = "css3" size = "mini">CSS3 </Button>}
							{this.state.phpTech &&<Button circular color='purple' id='php' icon = "php" size = "mini">PHP </Button>}
							{this.state.npmTech &&<Button circular color='blue' id='npm' icon = "npm"  size = "mini">NPM </Button>}
							{this.state.githubTech &&<Button circular color='black' id='github' icon = "github" size = "mini">Git </Button>}
							{this.state.nodeTech &&<Button circular color='green' id='node' icon = "node" size = "mini">NodeJS </Button>}
							{this.state.trelloTech &&<Button circular color='blue' id='trello' icon = "trello" size = "mini">Trello </Button>}
							{this.state.androidTech &&<Button circular color='green' id='android' icon = "android" size = "mini">Android </Button>}
						</div>
						<div id = "homepageComputerScreenContainerTopMobile">
							<Link to="/about" >
								<Button circular basic color="red" id='addressCard' icon = "address card" size = 'small'>About </Button>
							</Link>					
							<a href = {myResume} target="_blank" rel="noopener noreferrer">
								<Button circular basic color="blue" id='file outline' icon = "file outline" size = 'small'> Resume(pdf) </Button>
							</a>
							<Link to="/contact" >
								<Button circular basic color= "green" id='idCard' icon = "envelope" size = 'small'> Contact </Button>
							</Link>
						</div>
						<div id = "homepageProjectSeperatingMobile">
							<hr id="homepageLeftHorizontalMobile" />
							Experience
							<hr id="homepageRightHorizontalMobile"/>
						</div>
						<div id = "homepageProjectLinksMobile">
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/mylesrangel">
									<Button onMouseEnter = {this.showMylesrangelTechStack}  onMouseLeave = {this.hideMylesrangelTechStack} circular basic color="green"id='addressCard' icon = "file code" size = 'small' > mylesrangel.com </Button>
							</a>
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/ClockSpecialty">
									<Button onMouseEnter = {this.showclockSpecialtyTechStack}  onMouseLeave = {this.hideclockSpecialtyTechStack}circular basic color="teal" id='addressCard' icon = "file code" size = 'small'> Clock Specialty </Button>
							</a>					
						</div>
					</div>
				</MediaQuery>
				
			</div>
		);
	}
}

export default Homepage;
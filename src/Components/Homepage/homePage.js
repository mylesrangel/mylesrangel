import React, { Component } from "react";
import MediaQuery from 'react-responsive';

import { Button } from 'semantic-ui-react'

import Logo from '../../Media/logo.png';
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
		},

		//--------------Phone Styles----------------------------------
		phoneTechIconSizesStyles:{
			top: 0,
			left: 0
		},

		phoneHomepageHomeIconStyles:{
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

		top: window.innerHeight / 1.35,
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
			top: window.innerHeight / 1.32,
			left: window.innerWidth / 2.15
		},
	});



// ------------Phone size responsive---------------------------------------------------

	this.setState({phoneTechIconSizesStyles:{
			fontSize: window.innerWidth / 38,
		},
	});
	this.setState({phoneHomepageHomeIconStyles:{
		top: window.innerHeight / 1.13,
		left: window.innerWidth / 2.3
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
						<img id = "homepageLogoImage" src = {Logo} style={this.state.homepageLogoImageWindowStyles} alt = "logo" />
						<Button circular id='homepageHomeIcon' icon= "home" style = {this.state.homepageHomeIconWindowStyles} />
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
								<Button circular basic color="red" id='addressCard' icon = "address card" size="large"> About </Button>
							</Link>
							<a href = {myResume} target="_blank" rel="noopener noreferrer">
								<Button circular basic color="blue" id='file outline' icon = "file outline" size="large">Resume(pdf)</Button>
							</a>
							<Link to="/contact" >
								<Button circular basic color= "green" id='idCard' icon = "envelope" size="large">Contact</Button>
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
									<Button circular basic color="green"id='addressCard' icon = "file code"  size='small' >mylesrangel.com</Button>								
								</div>
							</a>
							<Link to="/clockSpecialty">
								<div onMouseEnter = {this.showclockSpecialtyTechStack}  onMouseLeave = {this.hideclockSpecialtyTechStack} className = "computerScreenIcon" >
									<Button circular basic color="teal" id='addressCard' icon = "file code"  size='small'>Clock Specialty</Button>
								</div>
							</Link>
											
						</div>
					</div>
				</MediaQuery>

				{/* -----------------Under 900px--------------------------------------- -------------------------------------------------------------------------------------------------------------------------------*/}

				<MediaQuery minWidth ={700} maxWidth = {999} >
					<div id="homepageContainerTablet" style={this.state.backgroundImageWindowStyles}>
						<img id = "homepageLogoImageTablet" src = {Logo} alt = "logo"  />
						<Button circular id='homepageHomeIconTablet' icon= "home" size='large' style = {this.state.tabletHomepageHomeIconWindowStyles}/>
						<div id = "homepageTechIconsTablet" style = {this.state.tabletHomepageTechIconsImageWindowStyles} >
						{this.state.reactTech && <Button circular color = 'blue' id='react' icon = "react" size = "mini">React </Button> }
							{this.state.jsTech &&<Button circular color='green' id='js' icon = "js" size = "mini"> JavaScript </Button>}
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
						<div id = "homepageComputerScreenContainerTopTablet" style = {this.state.tabletHomepageComputerScreenTopWindowStyles}>
							<Link to="/about" >
								<Button circular basic color="red" id='addressCard' icon = "address card" size = "mini"> About </Button>
							</Link>					
							<a href = {myResume} target="_blank" rel="noopener noreferrer">
								<Button circular basic color="blue" id='file outline' icon = "file outline" size = "mini"> Resume(pdf) </Button>
							</a>
							<Link to="/contact" >
								<Button circular basic color= "green" id='idCard' icon = "envelope" size = "mini">Contact </Button>
							</Link>
						</div>
						<div id = "homepageProjectSeperatingTablet" style = {this.state.tabletHomepageProjectSeperationWindowStyles}>
							<hr id="homepageLeftHorizontalTablet" />
							Experience
							<hr id="homepageRightHorizontalTablet"/>
						</div>
						<div id = "homepageProjectLinksTablet" style = {this.state.tabletHomepageProjectLinksWindowStyles}>
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/mylesrangel">
								<Button onMouseEnter = {this.showMylesrangelTechStack}  onMouseLeave = {this.hideMylesrangelTechStack} circular basic color="green"id='addressCard' icon = "file code" size="mini"> mylesrangel.com </Button>
							</a>
							<Link to="/clockSpecialty">
								<Button onMouseEnter = {this.showclockSpecialtyTechStack}  onMouseLeave = {this.hideclockSpecialtyTechStack}circular basic color="teal" id='addressCard' icon = "file code" size="mini">Clock Specialty </Button>
							</Link>					
						</div>
					</div>
				</MediaQuery>
			
		{/* ---------------------Mobile 700px -------------------------------------------------------------*/}
				<MediaQuery minWidth = {600} maxWidth = {699} >
					<div id="homepageContainerMobile" style={this.state.backgroundImageWindowStyles}>
						<img id = "homepageLogoImageMobile" src = {Logo} alt = "logo" />
						<Button circular id='homepageHomeIconMobile' icon= "home" style = {this.state.mobileHomepageHomeIconStyles}/>
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
							<Link to="/clockSpecialty">
									<Button onMouseEnter = {this.showclockSpecialtyTechStack}  onMouseLeave = {this.hideclockSpecialtyTechStack}circular basic color="teal" id='addressCard' icon = "file code" size = 'small'> Clock Specialty </Button>
							</Link>					
						</div>
					</div>
				</MediaQuery>

				{/* -----------Phone-------------------- */}

				<MediaQuery maxWidth = {599} >
					<div id="homepageContainerPhone" style={this.state.backgroundImageWindowStyles}>
						<img id = "homepageLogoImagePhone" src = {Logo} alt = "logo" />
						<Button circular id='homepageHomeIconPhone' icon= "home" style = {this.state.phoneHomepageHomeIconStyles}/>
						<div id = "homepageTechIconsPhone" >
							{this.state.reactTech && <Button circular color = 'blue' id='react' icon = "react" style = {this.state.phoneTechIconSizesStyles}> React </Button> }
							{this.state.jsTech &&<Button circular color='green' id='js' icon = "js" style = {this.state.phoneTechIconSizesStyles} > JavaScript </Button>}
							{this.state.awsTech &&<Button circular color='orange' id='aws' icon = "aws" style = {this.state.phoneTechIconSizesStyles}>AWS </Button>}
							{this.state.html5Tech &&<Button circular color='orange' id='html5' icon = "html5" style = {this.state.phoneTechIconSizesStyles}>HTML5 </Button>}
							{this.state.css3Tech &&<Button circular color='blue' id='css3' icon = "css3" style = {this.state.phoneTechIconSizesStyles}>CSS3 </Button>}
							{this.state.phpTech &&<Button circular color='purple' id='php' icon = "php" style = {this.state.phoneTechIconSizesStyles}>PHP </Button>}
							{this.state.npmTech &&<Button circular color='blue' id='npm' icon = "npm"  style = {this.state.phoneTechIconSizesStyles}>NPM </Button>}
							{this.state.githubTech &&<Button circular color='black' id='github' icon = "github" style = {this.state.phoneTechIconSizesStyles}>Git </Button>}
							{this.state.nodeTech &&<Button circular color='green' id='node' icon = "node" style = {this.state.phoneTechIconSizesStyles}>NodeJS </Button>}
							{this.state.trelloTech &&<Button circular color='blue' id='trello' icon = "trello" style = {this.state.phoneTechIconSizesStyles}>Trello </Button>}
							{this.state.androidTech &&<Button circular color='green' id='android' icon = "android" style = {this.state.phoneTechIconSizesStyles}>Android </Button>}
						</div>
						<div id = "homepageComputerScreenContainerTopPhone">
							<Link to="/about" >
								<Button circular basic color="red" id='addressCard' icon = "address card" style = {this.state.phoneTechIconSizesStyles}>About </Button>
							</Link>					
							<a href = {myResume} target="_blank" rel="noopener noreferrer">
								<Button circular basic color="blue" id='file outline' icon = "file outline" style = {this.state.phoneTechIconSizesStyles}> Resume(pdf) </Button>
							</a>
							<Link to="/contact" >
								<Button circular basic color= "green" id='idCard' icon = "envelope" style = {this.state.phoneTechIconSizesStyles}> Contact </Button>
							</Link>
						</div>
						<div id = "homepageProjectSeperatingPhone">
							<hr id="homepageLeftHorizontalPhone" />
							Experience
							<hr id="homepageRightHorizontalPhone"/>
						</div>
						<div id = "homepageProjectLinksPhone">
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/mylesrangel">
									<Button onMouseEnter = {this.showMylesrangelTechStack}  onMouseLeave = {this.hideMylesrangelTechStack} circular basic color="green"id='addressCard' icon = "file code" style = {this.state.phoneTechIconSizesStyles} > mylesrangel.com </Button>
							</a>
							<Link to="/clockSpecialty">
									<Button onMouseEnter = {this.showclockSpecialtyTechStack}  onMouseLeave = {this.hideclockSpecialtyTechStack}circular basic color="teal" id='addressCard' icon = "file code" style = {this.state.phoneTechIconSizesStyles}> Clock Specialty </Button>
							</Link>					
						</div>
					</div>
				</MediaQuery>
				
			</div>
		);
	}
}

export default Homepage;
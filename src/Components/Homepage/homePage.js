import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import { Button } from 'semantic-ui-react'

import Logo from '../../Media/logo.png';
import BackgroundImage from '../../Media/laptop-image-full-1900.png';
import BackgroundImageTablet from '../../Media/phone-image-full-edited.png';
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

	render(){
		return(
			<div>
				<MediaQuery minWidth = {1000} maxWidth = {2800} >
					<div id="homepageContainer" >
						<img id = "homepageLogoImage" src = {Logo} alt = "logo" />
						<Button circular id='homepageHomeIcon' icon= "home" size='big' />
						<div id = "homepageTechIcons" >
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
						<div id = "homepageComputerScreenContainerTop">
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
						<div id = "homepageProjectSeperating">
							<hr id="homepageLeftHorizontal" />
							Experience
							<hr id="homepageRightHorizontal"/>
						</div>
						<div id = "homepageProjectLinks">
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
						<img id = "homepageBackgroundImageTablet" src = {BackgroundImageTablet} alt = "laptop" />
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
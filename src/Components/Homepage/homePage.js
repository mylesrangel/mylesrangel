import React, { Component } from "react";
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import { Icon , Button } from 'semantic-ui-react'

import Logo from '../../Media/logo.png';
import BackgroundImage from '../../Media/laptop-image-full-1900.png';
import BackgroundImageTablet from '../../Media/phone-image-full-edited.png';
import BackgroundImagePhone from '../../Media/phone-image-full-edited-cropped.png';
import myResume from "../../Media/MylesRangel.pdf";

import {Link} from "react-router-dom";

import "./homepage.css"

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
		androidTech: true
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
				<MediaQuery minWidth = {800} maxWidth = {2800} >
					<div id="homepageContainer">
						<img id = "backgroundImage" src = {BackgroundImage} alt = "laptop" />
						<img id = "logoImage" src = {Logo} alt = "logo" />
						<Button circular id='homeIcon' icon= "home" size='big' />
						<div id = "techIcons" >
							{this.state.reactTech && <Button circular basic color='blue' id='react' icon = "react"  size='massive' /> }
							{this.state.jsTech &&<Button circular basic color='green' id='js' icon = "js"  size='massive' />}
							{this.state.awsTech &&<Button circular basic color='orange' id='aws' icon = "aws"  size='massive' />}
							{this.state.html5Tech &&<Button circular basic color='orange' id='html5' icon = "html5"  size='massive' />}
							{this.state.css3Tech &&<Button circular basic color='blue' id='css3' icon = "css3"  size='massive' />}
							{this.state.phpTech &&<Button circular basic color='purple' id='php' icon = "php"  size='massive' />}
							{this.state.npmTech &&<Button circular basic color='blue' id='npm' icon = "npm"  size='massive' />}
							{this.state.githubTech &&<Button circular basic color='black' id='github' icon = "github"  size='massive' />}
							{this.state.nodeTech &&<Button circular basic color='green' id='node' icon = "node"  size='massive' />}
							{this.state.trelloTech &&<Button circular basic color='blue' id='trello' icon = "trello"  size='massive' />}
							{this.state.androidTech &&<Button circular basic color='green' id='android' icon = "android"  size='massive' />}
						</div>
						<div id = "computerScreenContainerTop">
							<div className = "computerScreenIcon" >
								<Link to="/about" >
									<Button circular basic color="red"id='addressCard' icon = "address card"  size='massive' />
									<p>About</p>
								</Link>
							</div>
							
								<div id = 'resume' className = "computerScreenIcon" >
									<a href = {myResume} target="_blank" rel="noopener noreferrer">
										<Button circular basic color="blue" id='file outline' icon = "file outline" size='massive' />
										<p>Resume</p>
									</a>
								</div>
							
							<div className = "computerScreenIcon" >
								<Link to="/contact" >
									<Button circular basic color= "green" id='idCard' icon = "envelope"  size='massive' />
									<p>Contact</p>
								</Link>
							</div>
							
						</div>
						<div id = "projectSeperating">
							<hr id="leftHorizontal" />
							Projects
							<hr id="rightHorizontal"/>
						</div>
						<div id = "projectLinks">
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/mylesrangel">
								<div onMouseEnter = {this.showMylesrangelTechStack}  onMouseLeave = {this.hideMylesrangelTechStack} ref = 'mylesrangel' className = "computerScreenIcon" >
									<Button circular basic color="green"id='addressCard' icon = "file code"  size='massive' />
									<p>mylesrangel.com</p>
								</div>
							</a>
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/ClockSpecialty">
								<div onMouseEnter = {this.showclockSpecialtyTechStack}  onMouseLeave = {this.hideclockSpecialtyTechStack} className = "computerScreenIcon" >
									<Button circular basic color="teal" id='addressCard' icon = "file code"  size='massive' />
									<p>Clock Specialty</p>
								</div>
							</a>					
						</div>
					</div>
				</MediaQuery>

				{/* -----------------Under 800px--------------------------------------- -------------------------------------------------------------------------------------------------------------------------------*/}

				<MediaQuery minWidth ={501} maxWidth = {799} >
					<div id="homepageContainerTablet">
						<img id = "backgroundImageTablet" src = {BackgroundImageTablet} alt = "laptop" />
						<img id = "logoImageTablet" src = {Logo} alt = "logo" />
						<Button circular id='homeIconTablet' icon= "home" size='large' />
						<div id = "techIconsTablet" >
							{this.state.reactTech && <Button circular basic color='blue' id='react' icon = "react" /> }
							{this.state.jsTech &&<Button circular basic color='green' id='js' icon = "js" />}
							{this.state.awsTech &&<Button circular basic color='orange' id='aws' icon = "aws" />}
							{this.state.html5Tech &&<Button circular basic color='orange' id='html5' icon = "html5" />}
							{this.state.css3Tech &&<Button circular basic color='blue' id='css3' icon = "css3" />}
							{this.state.phpTech &&<Button circular basic color='purple' id='php' icon = "php"  />}
							{this.state.npmTech &&<Button circular basic color='blue' id='npm' icon = "npm" />}
							{this.state.githubTech &&<Button circular basic color='black' id='github' icon = "github" />}
							{this.state.nodeTech &&<Button circular basic color='green' id='node' icon = "node" />}
							{this.state.trelloTech &&<Button circular basic color='blue' id='trello' icon = "trello" />}
							{this.state.androidTech &&<Button circular basic color='green' id='android' icon = "android" />}
						</div>
						<div id = "computerScreenContainerTopTablet">
							<Link to="/about" >
								<Button circular basic color="red" id='addressCard' icon = "address card"/>
								<p>About</p>
							</Link>					
							<a href = {myResume} target="_blank" rel="noopener noreferrer">
								<Button circular basic color="blue" id='file outline' icon = "file outline" />
								<p>Resume</p>
							</a>
							<Link to="/contact" >
								<Button circular basic color= "green" id='idCard' icon = "envelope" />
								<p>Contact</p>
							</Link>
						</div>
						<div id = "projectSeperatingTablet">
							<hr id="leftHorizontalTablet" />
							Projects
							<hr id="rightHorizontalTablet"/>
						</div>
						<div id = "projectLinksTablet">
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/mylesrangel">
									<Button onMouseEnter = {this.showMylesrangelTechStack}  onMouseLeave = {this.hideMylesrangelTechStack} circular basic color="green"id='addressCard' icon = "file code" />
									<p>mylesrangel.com</p>
							</a>
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/ClockSpecialty">
									<Button onMouseEnter = {this.showclockSpecialtyTechStack}  onMouseLeave = {this.hideclockSpecialtyTechStack}circular basic color="teal" id='addressCard' icon = "file code" />
									<p>Clock Specialty</p>
							</a>					
						</div>
					</div>
				</MediaQuery>



{/* ---------------------Mobile 500px -------------------------------------------------------------*/}

				<MediaQuery maxWidth = {500} >
					<div id="homepageContainerMobile">
						<img id = "backgroundImageMobile" src = {BackgroundImagePhone} alt = "laptop" />
						<img id = "logoImageMobile" src = {Logo} alt = "logo" />
						<Button circular id='homeIconMobile' icon= "home" size='big' />
						<div id = "techIconsMobile" >
							{this.state.reactTech && <Button circular basic color='blue' id='react' icon = "react" /> }
							{this.state.jsTech &&<Button circular basic color='green' id='js' icon = "js" />}
							{this.state.awsTech &&<Button circular basic color='orange' id='aws' icon = "aws" />}
							{this.state.html5Tech &&<Button circular basic color='orange' id='html5' icon = "html5" />}
							{this.state.css3Tech &&<Button circular basic color='blue' id='css3' icon = "css3" />}
							{this.state.phpTech &&<Button circular basic color='purple' id='php' icon = "php"  />}
							{this.state.npmTech &&<Button circular basic color='blue' id='npm' icon = "npm" />}
							{this.state.githubTech &&<Button circular basic color='black' id='github' icon = "github" />}
							{this.state.nodeTech &&<Button circular basic color='green' id='node' icon = "node" />}
							{this.state.trelloTech &&<Button circular basic color='blue' id='trello' icon = "trello" />}
							{this.state.androidTech &&<Button circular basic color='green' id='android' icon = "android" />}
						</div>
						<div id = "computerScreenContainerTopMobile">
							<Link to="/about" >
								<Button circular basic color="red" id='addressCard' icon = "address card" size = "huge"/>
								<p>About</p>
							</Link>					
							<a href = {myResume} target="_blank" rel="noopener noreferrer">
								<Button circular basic color="blue" id='file outline' icon = "file outline" size = "huge"/>
								<p>Resume</p>
							</a>
							<Link to="/contact" >
								<Button circular basic color= "green" id='idCard' icon = "envelope" size = "huge"/>
								<p>Contact</p>
							</Link>
						</div>
						<div id = "projectSeperatingMobile">
							<hr id="leftHorizontalMobile" />
							Projects
							<hr id="rightHorizontalMobile"/>
						</div>
						<div id = "projectLinksMobile">
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/mylesrangel">
									<Button onMouseEnter = {this.showMylesrangelTechStack}  onMouseLeave = {this.hideMylesrangelTechStack} circular basic color="green"id='addressCard' icon = "file code"  size = "big"/>
									<p>mylesrangel.com</p>
							</a>
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/ClockSpecialty">
									<Button onMouseEnter = {this.showclockSpecialtyTechStack}  onMouseLeave = {this.hideclockSpecialtyTechStack}circular basic color="teal" id='addressCard' icon = "file code"  size = "big"/>
									<p>Clock Specialty</p>
							</a>					
						</div>
					</div>
				</MediaQuery>
				
			</div>
		);
	}
}

export default Homepage;
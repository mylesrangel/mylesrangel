import React, { Component } from "react";
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import { Icon , Button } from 'semantic-ui-react'

import Logo from '../../Media/logo.png';
import BackgroundImage from '../../Media/laptop-image-full-1900.png';
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
			</div>
		);
	}

	componentWillUnmount() {

    }
}

export default Homepage;
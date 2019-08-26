import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import { Icon , Button } from 'semantic-ui-react'


import BackgroundImage from '../../Media/laptop-image-full-1900.png';

import "./homepage.css"

class Homepage extends Component{	


	render(){
		return(
			<div id="homepageContainer">
				<img src = {BackgroundImage} alt = "laptop" />
				<Button circular id='homeIcon' icon= "home" size='big' />
				<div id = "techIcons" >
					<Button circular basic color='blue' id='react' icon = "react"  size='massive' />
					<Button circular basic color='green' id='js' icon = "js"  size='massive' />
					<Button circular basic color='orange' id='aws' icon = "aws"  size='massive' />
					<Button circular basic color='orange' id='html5' icon = "html5"  size='massive' />
					<Button circular basic color='blue' id='css3' icon = "css3"  size='massive' />
					<Button circular basic color='purple' id='php' icon = "php"  size='massive' />
					<Button circular basic color='blue' id='npm' icon = "npm"  size='massive' />
					<Button circular basic color='black' id='github' icon = "github"  size='massive' />
					<Button circular basic color='green' id='node' icon = "node"  size='massive' />
					<Button circular basic color='blue' id='trello' icon = "trello"  size='massive' />

				</div>
			</div>
		);
	}

	componentWillUnmount() {

    }
}

export default Homepage;
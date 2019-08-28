import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import { Icon , Button } from 'semantic-ui-react'

import {Link} from "react-router-dom";

import BackgroundImage from '../../Media/laptop-image-full-1900.png';

import "./template.css"

class Template extends Component{	


	render(){
		return(
			<div id="homepageContainer">
				<img id= "backgroundImage" src = {BackgroundImage} alt = "laptop" />
				<Link to="/">
                    <Button circular id='homeIcon' icon= "home" size='big' />
				</Link>
				<div id = "techIcons" >
					
				</div>
			</div>
		);
	}

	componentWillUnmount() {

    }
}

export default Template;
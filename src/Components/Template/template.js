import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import { Icon , Button } from 'semantic-ui-react'

import {Link} from "react-router-dom";

import "./template.css"

class Template extends Component{	


	render(){
		return(
			<div id="templatepageContainer">
				{/* <img id= "templateBackgroundImage" alt = "laptop" /> */}
				<Link to="/">
                    <Button circular id='templateHomeIcon' icon= "home" size='big' />
				</Link>
				<div id = "templateTechIcons" >
					
				</div>
			</div>
		);
	}

	componentWillUnmount() {

    }
}

export default Template;
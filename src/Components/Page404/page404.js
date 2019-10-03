import React, { Component } from "react";

import { Icon , Button } from 'semantic-ui-react'

import {Link} from "react-router-dom";


import "./page404.css";



class Page404 extends Component{



    render(){
		return(
			<div id="homepageContainer">
				{/* <img id= "backgroundImage" alt = "laptop" /> */}
				<Link to="/">
                    <Button circular id='homeIcon' icon= "home" size='big' />
				</Link>
				<div id = "message404" >
					<h4>That page does not exist or has moved to another location</h4>
				</div>
			</div>
		);
	}   
}


export default Page404;
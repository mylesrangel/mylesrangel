import React, {Component} from "react";

import { Icon , Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import BackgroundImage from '../../Media/laptop-image-full-1900.png';

import "./emailSent.css";
class Emailsent extends Component{




	render(){
		return(
			<div id="homepageContainer">
				<img id= "backgroundImage" src = {BackgroundImage} alt = "laptop" />
				<Link to="/">
                    <Button circular id='homeIcon' icon= "home" size='big' />
				</Link>
                <div id="replyMessage">
                    <p>Message Sent!</p>
                    <p>Thank you for reaching out!</p>
                    <p>I will reply as soon as I can</p>
                </div>
			</div>
		);
	}

}
export default Emailsent;
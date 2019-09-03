import React, {Component} from "react";
import MediaQuery from 'react-responsive';

import { Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import BackgroundImage from '../../Media/laptop-image-full-1900.png';
import BackgroundImageTablet from '../../Media/phone-image-full-edited.png';
import BackgroundImagePhone from '../../Media/phone-image-full-edited-cropped.png';

import "./emailSent.css";
class Emailsent extends Component{




	render(){
		return(
			<div>
				<MediaQuery minWidth = {801} maxWidth = {2800} >
				<div id="emailSentContainer">
					<img id= "emailSentBackgroundImage" src = {BackgroundImage} alt = "laptop" />
					<Link to="/">
						<Button circular id='emailSentHomeIcon' icon= "home" size='big' />
					</Link>
					<div id="emailSentReplyMessage">
						<h4>Message Sent!</h4>
						<p>Thank you for reaching out!</p>
						<p>I will reply as soon as I can</p>
					</div>
				</div>
				</MediaQuery>

		{/* ---------------Tablet------------------------------------------------------------------- */}
				<MediaQuery minWidth = {601} maxWidth = {800} >
				<div id="emailSentContainerTablet">
					<img id= "emailSentBackgroundImageTablet" src = {BackgroundImageTablet} alt = "laptop" />
					<Link to="/">
						<Button circular id='emailSentHomeIconTablet' icon= "home" size='big' />
					</Link>
					<div id="emailSentReplyMessageTablet">
						<h4>Message Sent!</h4>
						<p>Thank you for reaching out!</p>
						<p>I will reply as soon as I can</p>
					</div>
				</div>
				</MediaQuery>


		{/* -------Mobile------------------------------------------------------------------------------ */}
				
				
				<MediaQuery maxWidth = {600} >
				<div id="emailSentContainer">
					<img id= "emailSentBackgroundImagePhone" src = {BackgroundImagePhone} alt = "laptop" />
					<Link to="/">
						<Button circular id='emailSentHomeIconPhone' icon= "home" size='big' />
					</Link>
					<div id="emailSentReplyMessagePhone">
						<h6>Message Sent!</h6>
						<p>Thank you for reaching out!</p>
						<p>I will reply as soon as I can</p>
					</div>
				</div>
				</MediaQuery>
			</div>
		);
	}

}
export default Emailsent;
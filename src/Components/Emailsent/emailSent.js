import React, {Component} from "react";
import MediaQuery from 'react-responsive';

import { Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";

import Logo from '../../Media/logo.png';

import "./emailSent.css";
class Emailsent extends Component{


	state = {
		
		backgroundImageWindowStyles:{
			width: 0,
			height: 0
		},
		emailsentLogoImageWindowStyles:{
			width: 0,
			height: 0
		},
		emailsentHomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		emailReplyMessage: {
			top: 0,
			left: 0
		},
		
		
		

		// -----------Tablet Responsiveness -------------------
		tabletEmailsentLogoImage:{
			width: 0 ,
			height: 0
		},

		tabletEmailsentReplyMessage:{
			top: 0,
			left: 0
		},
		
		tabletEmailsentHomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		

		//------------------Mobile styles --------------------------------


		mobileEmailsentHomeIconStyles:{
			top: 0,
			left: 0,
		},

		mobileEmailsentReplyMessage:{
			top: 0,
			left: 0
		},

		//--------------Phone Styles----------------------------------
		phoneTechIconSizesStyles:{
			top: 0,
			left: 0
		},

		phoneEmailsentHomeIconStyles:{
			top: 0,
			left: 0
		}

	}


// Dynamically adjust based on window height / width

updateWindowDimensions = () => {

	this.setState({ backgroundImageWindowStyles:{
		width: window.innerWidth, 
		height: window.innerHeight,
		},
	 });

	 this.setState({ emailsentLogoImageWindowStyles:{
		top: window.innerHeight / 80,
		left: window.innerWidth / 2.13,
		width: window.innerWidth /12, 
		height: window.innerHeight /15
		},
	 });

	 this.setState({ emailsentHomeIconWindowStyles:{
		top: window.innerHeight /1.25,
		left: window.innerWidth /2.05
		},
	 });
	 this.setState({emailReplyMessage:{
		top: window.innerHeight /2.25,
		left: window.innerWidth /3.3
		},
	});


 //-----------------------Tablet Responsive ----------------------

	this.setState({tabletEmailsentReplyMessage: {
		top: window.innerHeight /3,
		left: window.innerWidth /3.6
		},
	});

	this.setState({tabletEmailsentHomeIconWindowStyles:{

		top: window.innerHeight / 1.3,
		left: window.innerWidth / 2.13

		},
	});




//---------Mobile size responsive --------------------------------------------------

	this.setState({mobileEmailsentHomeIconStyles:{
		top: window.innerHeight / 1.32,
		left: window.innerWidth / 2.15
		},
	});
	this.setState({mobileEmailsentReplyMessage:{
		top: window.innerHeight /3,
		left: window.innerWidth /3.6
		},
	});

// ------------Phone size responsive---------------------------------------------------

	this.setState({phoneTechIconSizesStyles:{
			fontSize: window.innerWidth / 38,
		},
	});
	this.setState({phoneEmailsentHomeIconStyles:{
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
				<MediaQuery minWidth = {1000} >
				<div id="emailSentContainer" style={this.state.backgroundImageWindowStyles}>
				<img id = "emailSentLogoImage" src = {Logo} alt = "logo" />
					<Link to="/">
						<Button circular id='emailSentHomeIcon' icon= "home" style = {this.state.emailsentHomeIconWindowStyles}/>
					</Link>
					<div id="emailReplyMessage" style = {this.state.emailReplyMessage}>
						<h4>Message Sent!</h4>
						<p>Thank you for reaching out!</p>
						<p>I will reply as soon as I can</p>
					</div>
				</div>
				</MediaQuery>

		{/* ---------------Tablet------------------------------------------------------------------- */}
				<MediaQuery minWidth ={700} maxWidth = {999} >
				<div id="emailSentContainerTablet" style={this.state.backgroundImageWindowStyles}>
				<img id = "homepageLogoImageTablet" src = {Logo} alt = "logo"  />
					<Link to="/">
						<Button circular id='emailSentHomeIconTablet' icon= "home"  size= "large" style = {this.state.mobileEmailsentHomeIconStyles}/>
					</Link>
					<div id="emailSentReplyMessageTablet" style = {this.state.tabletEmailsentReplyMessage}>
						<h4>Message Sent!</h4>
						<p>Thank you for reaching out!</p>
						<p>I will reply as soon as I can</p>
					</div>
				</div>
				</MediaQuery>


		{/* -------Mobile------------------------------------------------------------------------------ */}
				
				
				<MediaQuery minWidth = {600} maxWidth = {699} >
				<div id="emailSentContainerMobile" style={this.state.backgroundImageWindowStyles}>
					
				<img id = "homepageLogoImageMobile" src = {Logo} alt = "logo" />
					<Link to="/">
						<Button circular id='emailSentHomeIconMobile' icon= "home" style = {this.state.mobileEmailsentHomeIconStyles}/>
					</Link>
					<div id="emailSentReplyMessageMobile" style = {this.state.mobileEmailsentReplyMessage} >
						<h5>Message Sent!</h5>
						<p>Thank you for reaching out!</p>
						<p>I will reply as soon as I can</p>
					</div>
				</div>
				</MediaQuery>


		{/* ----------Phone----------------------------------- */}

				<MediaQuery maxWidth = {599} >
				<div id="emailSentContainerPhone" style = {this.state.backgroundImageWindowStyles}>
				<img id = "homepageLogoImagePhone" src = {Logo} alt = "logo" />
					<Link to="/">
						<Button circular id='emailSentHomeIconPhone' icon= "home" style = {this.state.phoneEmailsentHomeIconStyles}/>
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
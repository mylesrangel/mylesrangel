import React, {Component} from "react";
import MediaQuery from 'react-responsive';

import Emailsent from "../Emailsent/emailSent.js";

import { Button } from 'semantic-ui-react'

import {Link} from "react-router-dom";

import Logo from '../../Media/logo.png';


import "./contact.css";



class Contact extends Component{

	state = {

		emailSent: false,

		formStyle: {
			
		},

		emailInfo: {
			firstName: '',
			lastName: '',
			email: '',
			subject: '',
			message: ''
		},

		backgroundImageWindowStyles:{
			width: 0,
			height: 0
		},
		contactpageButtonSizes:{
			fontSize: 0
		},
		contactpageLogoImageWindowStyles:{
			width: 0,
			height: 0
		},
		contactpageTechIconsImageWindowStyles:{
			width: 0,
			height: 0,
			top: 0
		},
		contactpageHomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		contactpageComputerScreenTopWindowStyles:{
			width: 0,
			height: 0,
			top: 0,
			left: 0
		},
		contactpageProjectSeperationWindowStyles:{
			width: 0,
			top: 0,
			left: 0
		},
		contactpageProjectLinksWindowStyles:{
			minWidth: 0,
			top: 0,
			left: 0
		},
		contactTextAreaStyle:{
			height: 0
		},
		contactSubmitButtonStyle:{
			height:  0
		},

		// -----------Tablet Responsiveness -------------------

		tabletContactpageTechIconsImageWindowStyles:{
			width: 0,
			height: 0,
			top: 0
		},
		tabletContactpageComputerScreenTopWindowStyles:{
			width: 0,
			height: 0,
			top: 0,
			left: 0
		},
		tabletContactpageHomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		tabletContactpageProjectSeperationWindowStyles: {
			top: 0,
			left: 0
		},
		tabletContactpageProjectLinksWindowStyles: {
			top: 0,
			left: 0
		},


		//------------------Mobile styles --------------------------------


		MobileContactpageHomeIconStyles:{
			top: 0,
			left: 0
		},

		//--------------Phone Styles----------------------------------
		phoneTechIconSizesStyles:{
			top: 0,
			left: 0
		},

		phoneContactpageHomeIconStyles:{
			top: 0,
			left: 0
		}

	}


	updateWindowDimensions = () => {

		this.setState({ backgroundImageWindowStyles:{
			width: window.innerWidth, 
			height: window.innerHeight,
			},
		 });
		 this.setState({ contactpageButtonSizes: {
			fontSize: window.innerWidth * .0080
		 },
		});
		 this.setState({ contactpageLogoImageWindowStyles:{
			top: window.innerHeight / 80,
			left: window.innerWidth / 2.13,

			},
		 });

		 this.setState({ contactpageHomeIconWindowStyles:{
			top: window.innerHeight /1.25,
			left: window.innerWidth /2.05
			},
		 });
		 this.setState({contactTextAreaStyle: {
			height: window.innerHeight / 5.33
		   },
		});
		this.setState({contactSubmitButtonStyle: {
			height: window.innerHeight / 15
		   },
		});


	
	
	 //-----------------------Tablet Responsive ----------------------
	
	
	
		this.setState({ tabletContactpageTechIconsImageWindowStyles:{
			width: window.innerWidth /2,
			height: window.innerHeight /10,
			top: window.innerHeight /13.5,
			left: window.innerWidth /18
			},
		 });

		this.setState({tabletContactpageHomeIconWindowStyles:{
	
			top: window.innerHeight / 1.3,
			left: window.innerWidth / 2.13
	
			},
		});

	
	
	
	//---------Mobile size responsive --------------------------------------------------
	
		this.setState({mobileContactpageHomeIconStyles:{
			top: window.innerHeight / 1.32,
			left: window.innerWidth / 2.15
			},
		});
	
	// ------------Phone size responsive---------------------------------------------------
	
		this.setState({phoneTechIconSizesStyles:{
				fontSize: window.innerWidth / 38,
			},
		});
		this.setState({phoneContactpageHomeIconStyles:{
			top: window.innerHeight / 1.13,
			left: window.innerWidth / 2.3
			},
		});
	
	}


	//old submit button event handler
	handleSubmit = (event) => {
		event.preventDefault();

		//hide Form
		this.setState({
			formStyle:{
				display: 'none',
			}
		})
		

		//confirm send before sending email
		if(window.confirm('Click ok to send this email')){

			//close contact form after send
			//this.props.contactForm();

			//grabs the form data for this component
			const body = new FormData(this.form);

			//grab the data from form and put it in variables
			this.setState({
				emailInfo:{
					firstname: body.get('firstName'),
					lastName: body.get('lastName'),
					email: body.get('email'),
 					subject: body.get('subject'),
					message: body.get('message')
				}
			});

			fetch("https://server.mylesrangel.com/sendemail", {
				method: 'POST',
				body: JSON.stringify(this.state.emailInfo),
				headers: {
					'content-type': 'application/json'
				}			
			}).then(res => {
				console.log(res.status);
				if(res.status === 200){
					console.log("Email has been sent!");
					this.setState({emailSent: true});
				}else{
					console.log("An error occured!!");
				}
			}).catch(err => console.error(err));
		}


	}

	//Handles change in the form (input won't accept typing without this function)
	handleChange = (event) =>{
		this.setState({
				emailInfo:{
					...this.state.emailInfo,
					[event.target.name]: event.target.value
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
					<form onSubmit={this.handleSubmit} id="contactForm" style = {this.state.formStyle }>
						<div id="contactpageContainer" style = {this.state.backgroundImageWindowStyles}>
							<img id = "contactLogoImage" src = {Logo} alt = "logo" style = {this.state.contactpageLogoImageWindowStyles}/>
							<Link to="/">
								<Button circular id='contactHomeIcon' icon= "home" style = {this.state.contactpageHomeIconWindowStyles}/>
							</Link>
							<div id="contactFirstname">
								<p className = "contactExpected">First Name:</p>
								<input required name="firstName" value={this.state.emailInfo.firstName || ''} onChange={this.handleChange} placeholder="Your first name"/>
							</div>
							<div id="contactLastname">
								<p className = "contactExpected">Last Name:</p>
								<input required name="lastName" value={this.state.emailInfo.lastName || ''} onChange={this.handleChange} placeholder="Your last name" />
							</div>
							<div id="contactEmail">
								<p className = "contactExpected">Email:</p>
								<input required name="email" value={this.state.emailInfo.email || ''} onChange={this.handleChange} placeholder="yourName@gmail.com" />
							</div>
							<div id="contactMessage">
								<p className = "contactExpected"> Message </p>
							</div>
							<textarea required id="contactTextarea" name="message" style={this.state.contactTextAreaStyle} value={this.state.emailInfo.message || ''} onChange={this.handleChange} />
							<Button id="contactSubmitButton" type="submit" value="Send" style = {this.setState.contactSubmitButtonStyle} positive>Submit</Button>
						</div>
					</form>
					<div id= "contactEmailSentContainer">
						{this.state.emailSent && <Emailsent />}
					</div>
				</MediaQuery>
				{/* ---------------Tablet------------------------------------------------------------------- */}
				<MediaQuery minWidth ={700} maxWidth = {999} >
					<form onSubmit={this.handleSubmit} id="contactFormTablet" style = {this.state.formStyle }>
					<img id = "contactLogoImageTablet" src = {Logo} style={this.state.homepageLogoImageWindowStyles} alt = "logo" />
						<div id="contactpageContainerTablet" style={this.state.backgroundImageWindowStyles}>
							<Link to="/">
								<Button circular id='contactHomeIconTablet' icon= "home" size = "large" style = {this.state.tabletContactpageHomeIconWindowStyles}/>
							</Link>
							<div id="contactFirstnameTablet">
								<p className = "contactExpectedTablet">First Name:</p>
								<input required name="firstName" value={this.state.emailInfo.firstName || ''} onChange={this.handleChange} placeholder="Your first name"/>
							</div>
							<div id="contactLastnameTablet">
								<p className = "contactExpectedTablet">Last Name:</p>
								<input required name="lastName" value={this.state.emailInfo.lastName || ''} onChange={this.handleChange} placeholder="Your last name" />
							</div>
							<div id="contactEmailTablet">
								<p className = "contactExpectedTablet">Email:</p>
								<input required name="email" value={this.state.emailInfo.email || ''} onChange={this.handleChange} placeholder="yourName@gmail.com" />
							</div>
							<div id="contactMessageTablet">
								<p className = "contactExpectedTablet"> Message </p>
							</div>
							<textarea  required id="contactTextareaTablet" name="message" value={this.state.emailInfo.message || ''} onChange={this.handleChange} />
							<Button id="contactSubmitButtonTablet" type="submit" value="Send" positive>Submit</Button>
						</div>
					</form>
						<div id= "contactEmailSentContainerTablet">
							{this.state.emailSent && <Emailsent />}
						</div>
				</MediaQuery>


				{/* -------Mobile------------------------------------------------------------------------------ */}
				
				<MediaQuery minWidth ={600} maxWidth = {699} >
					<form onSubmit={this.handleSubmit} id="contactFormMobile" style = {this.state.formStyle }>
					<img id = "contactLogoImageMobile" src = {Logo} alt = "logo" />
						<div id="contactpageContainerMobile" style={this.state.backgroundImageWindowStyles}>
							<Link to="/">
								<Button circular id='contactHomeIconMobile' icon= "home" style = {this.state.mobileContactpageHomeIconStyles} />
							</Link>
							<div id="contactFirstnameMobile">
								<p className = "contactExpectedMobile">First Name:</p>
								<input required name="firstName" value={this.state.emailInfo.firstName || ''} onChange={this.handleChange} placeholder="Your first name"/>
							</div>
							<div id="contactLastnameMobile">
								<p className = "contactExpectedMobile">Last Name:</p>
								<input required name="lastName" value={this.state.emailInfo.lastName || ''} onChange={this.handleChange} placeholder="Your last name" />
							</div>
							<div id="contactEmailMobile">
								<p className = "contactExpectedMobile">Email:</p>
								<input required name="email" value={this.state.emailInfo.email || ''} onChange={this.handleChange} placeholder="yourName@gmail.com" />
							</div>
							<div id="contactMessageMobile">
								<p className = "contactExpectedMobile"> Message </p>
							</div>
							<textarea  required id="contactTextareaMobile" name="message" value={this.state.emailInfo.message || ''} onChange={this.handleChange} />
							<Button id="contactSubmitButtonMobile" type="submit" value="Send" positive>Submit</Button>
						</div>
					</form>
						<div id= "contactEmailSentContainerMobile">
							{this.state.emailSent && <Emailsent />}
						</div>
				</MediaQuery>




				{/* ---------------Phone------------------------ */}
				
				<MediaQuery maxWidth = {599} >
						<form onSubmit={this.handleSubmit} id="contactFormPhone" style = {this.state.formStyle }>
							<div id="contactpageContainerPhone" style={this.state.backgroundImageWindowStyles}>
							<img id = "contactLogoImagePhone" src = {Logo} alt = "logo" />
								<Link to="/">
									<Button circular id='contactHomeIconPhone' icon= "home" style = {this.state.phoneContactpageHomeIconStyles}/>
								</Link>
								<div id="contactFirstnamePhone">
									<p className = "contactExpectedPhone">First Name:</p>
									<input required name="firstName" value={this.state.emailInfo.firstName || ''} onChange={this.handleChange} placeholder="Your first name"/>
								</div>
								<div id="contactLastnamePhone">
									<p className = "contactExpectedPhone">Last Name:</p>
									<input required name="lastName" value={this.state.emailInfo.lastName || ''} onChange={this.handleChange} placeholder="Your last name" />
								</div>
								<div id="contactEmailPhone">
									<p className = "contactExpectedPhone">Email:</p>
									<input required name="email" value={this.state.emailInfo.email || ''} onChange={this.handleChange} placeholder="yourName@gmail.com" />
								</div>
								<div id="contactMessagePhone">
									<p className = "contactExpectedPhone"> Message </p>
								</div>
								<textarea  required id="contactTextareaPhone" name="message" value={this.state.emailInfo.message || ''} onChange={this.handleChange} />
								<Button id="contactSubmitButtonPhone" type="submit" value="Send" positive>Submit</Button>
							</div>
						</form>

						<div id= "contactEmailSentContainerPhone">
							{this.state.emailSent && <Emailsent />}
						</div>
				</MediaQuery>
			</div>
		);

	}
}

export default Contact;
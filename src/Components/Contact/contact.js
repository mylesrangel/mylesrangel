import React, {Component} from "react";
import MediaQuery from 'react-responsive';

import Emailsent from "../Emailsent/emailSent.js";

import { Button } from 'semantic-ui-react'

import {Link} from "react-router-dom";

import BackgroundImage from '../../Media/laptop-image-full-1900.png';
import BackgroundImageTablet from '../../Media/phone-image-full-edited.png';
import BackgroundImagePhone from '../../Media/phone-image-full-edited-cropped.png';

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
		}

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

	render(){
		return(
			<div>
				<MediaQuery minWidth = {1000} maxWidth = {2800} >
					<form onSubmit={this.handleSubmit} id="contactForm" style = {this.state.formStyle }>
						<div id="contactpageContainer">
							<Link to="/">
								<Button circular id='contactHomeIcon' icon= "home" size='big' />
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
							<textarea  required id="contactTextarea" name="message" value={this.state.emailInfo.message || ''} onChange={this.handleChange} />
							<Button id="contactSubmitButton" type="submit" value="Send" positive>Submit</Button>
						</div>
					</form>
						<div id= "contactEmailSentContainer">
							{this.state.emailSent && <Emailsent />}
						</div>
				</MediaQuery>
				{/* ---------------Tablet------------------------------------------------------------------- */}
				<MediaQuery minWidth = {601} maxWidth = {999} >
				<form onSubmit={this.handleSubmit} id="contactFormTablet" style = {this.state.formStyle }>
						<div id="contactpageContainerTablet">
							<img id= "contactBackgroundImageTablet" src = {BackgroundImageTablet} alt = "laptop" />
							<Link to="/">
								<Button circular id='contactHomeIconTablet' icon= "home" size='big' />
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
				
				
				<MediaQuery maxWidth = {600} >
				<form onSubmit={this.handleSubmit} id="contactFormPhone" style = {this.state.formStyle }>
						<div id="contactpageContainerPhone">
							<img id= "contactBackgroundImagePhone" src = {BackgroundImagePhone} alt = "laptop" />
							<Link to="/">
								<Button circular id='contactHomeIconPhone' icon= "home" size='big' />
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
import React, {Component} from "react";
import MediaQuery from 'react-responsive';

import Emailsent from "../Emailsent/emailSent.js";

import "./contact.css";



class Contact extends Component{

	constructor(props){
		super(props);

	}

	state = {

		emailSent: false,

		formStyle: {
			width: window.innerWidth,
			height: window.innerHeight
		},
		
		API_URL: "http://localhost:4000/sendemail",


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

			fetch(this.state.API_URL, {
				method: 'POST',
				body: JSON.stringify(this.state.emailInfo),
				headers: {
					'content-type': 'application/json'
				}			
			}).then(res => {
				console.log(res.status);
				if(res.status == 200){
					console.log("Email has been sent!");
					this.setState({emailSent: true});
				}else{
					console.log("An error occured!!");
				}
			}).catch(err => console.error(err));

		}


	}

	//Handles change in the form (typing in input)
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
					<MediaQuery query = "(min-width: 501px)">
						<div id = "contactContainer">
							<form onSubmit={this.handleSubmit} id="contactForm"  >
								<p className="formElements">
									<label> First Name: </label>
									<input required name="firstName" value={this.state.emailInfo.firstName} onChange={this.handleChange} id="firstName" placeholder="Your first name" />
								</p>
								<p className="formElements">
									<label> Last Name: </label>
									<input required name="lastName" value={this.state.emailInfo.lastName} onChange={this.handleChange} id="lastName" placeholder="Your last name" />
								</p>
								<p className="formElements">
									<label> Email: </label>
									<input required name="email" value={this.state.emailInfo.email} onChange={this.handleChange} id="email" placeholder="yourName@gmail.com"/>
								</p>
								<p className="formElements">
									<label> Email Subject: </label>
									<input name="subject" value={this.state.emailInfo.subject} onChange={this.handleChange} id="subject" placeholder="Subject" />
								</p>

								<p className="formElements">
									<label> Message </label>
									<br />
									<textarea required name="message" value={this.state.emailInfo.message} onChange={this.handleChange} > </textarea>
								</p>

									<input id='submitButton' type="submit" value="Send" />  
							</form>

							<div id= "emailSentContainer">
								{this.state.emailSent && <Emailsent />}
							</div>
							
						</div>
					</MediaQuery>
					<MediaQuery query = "(max-width: 500px)">
						<div id = "contactContainerMobile">
							<form onSubmit={this.handleSubmit} id="contactFormMobile"  >
								{/* <div id = 'hamburgerButtonContact' onClick={this.props.contactForm}>

							{!this.state.emailSent && <form onSubmit={this.handleSubmit} id="contactForm" style={this.state.formStyle} >
								<div id = 'hamburgerButtonContact' onClick={this.props.contactForm}>

									<div className="bars togglebar1"></div>
									<div className="bars togglebar3"></div>
								</div> */}
								<p className="formElements">
									<label> First Name: </label>
									<input required name="firstName" value={this.state.emailInfo.firstName} onChange={this.handleChange} id="firstName" placeholder="Your first name" />
								</p>
								<p className="formElements">
									<label> Last Name: </label>
									<input required name="lastName" value={this.state.emailInfo.lastName} onChange={this.handleChange} id="lastName" placeholder="Your last name" />
								</p>
								<p className="formElements">
									<label> Email: </label>
									<input required name="email" value={this.state.emailInfo.email} onChange={this.handleChange} id="email" placeholder="yourName@gmail.com"/>
								</p>
								<p className="formElements">
									<label> Email Subject: </label>
									<input name="subject" value={this.state.emailInfo.subject} onChange={this.handleChange} id="subject" placeholder="Subject" />
								</p>

								<p className="formElements">
									<label> Message </label>
									<br />
									<textarea required name="message" value={this.state.emailInfo.message} onChange={this.handleChange} > </textarea>
								</p>

									<input id='submitButton' type="submit" value="Send" />  
							</form>

							<div id= "emailSentContainer">
								{this.state.emailSent && <Emailsent />}
							</div>
							

						</div>
					</MediaQuery>
				</div>
			)
	}

	componentWillUnmount() {
		console.log("unmounting...");
	    window.removeEventListener("resize", this.updateDimensions);
  }
	
}

export default Contact;
import React, {Component} from "react";

import "./contact.css";



class Contact extends Component{

	constructor(props){
		super(props);

			//this.handleChange = this.handleChange.bind(this);
	}

	state = {

		formStyle: {
			width: window.innerWidth,
			height: window.innerHeight
		},
		
		API_URL: "http://localhost:4000/sendemail",

		firstName: '',
		lastName: '',
		email: '',
		subject: '',
		message: '',

		emailInfo: {
			firstName: 'noneya',
			lastName: '',
			email: '',
			subject: '',
			message: ''
		}

	}

	//old submit button event handler
	handleSubmit = (event) => {
		event.preventDefault();
		console.log("form has been Submitted with firstName: " + this.state.firstName);

		const body = new FormData(this.form);
		var firstName = body.get('firstName');


		console.log("Body value: " + body.get('firstName'));

		//grab the data from form and put it in variables
		this.setState({
			emailInfo:{
				//TODO: VALUE IS NULL *************
				firstname: body.get('firstName')
			}
		});

		fetch(this.state.API_URL, {
			method: 'POST',
			body: JSON.stringify(this.state.emailInfo),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	//Handles change in the form
	handleChange = (event) =>{
		console.log("event value: " + event.target.value);
		console.log("target value: " + this.state.emailInfo.firstName);
		this.setState({
				emailInfo:{
					...this.state.emailInfo,
					firstName: event.target.value
				},
			});
		console.log("First Name after: " + this.state.firstName);
	}

	componentDidMount(){

	}

	render(){
		return(
				<div>
					<form onSubmit={this.handleSubmit} id="contactForm" style={this.state.formStyle} >
						<div id = 'hamburgerButtonContact' onClick={this.props.contactForm}>
							<div className="bars togglebar1"></div>
							<div className="bars togglebar3"></div>
						</div>
						<p className="formElements">
							<label> First Name: </label>
							<input required name="firstName" value={this.state.emailInfo.firstName} onChange={this.handleChange} id="firstName" placeholder="Your first name" />
						</p>
						<p className="formElements">
							<label> Last Name: </label>
							<input required id="lastName" placeholder="Your last name" />
						</p>
						<p className="formElements">
							<label> Email: </label>
							<input required id="email" placeholder="yourName@gmail.com"/>
						</p>
						<p className="formElements">
							<label> Email Subject: </label>
							<input id="subject" placeholder="Subject" />
						</p>

						<p className="formElements">
							<label> Message </label>
							<br />
							<textarea required name="Message" > </textarea>
						</p>
							<input type="submit" value="Send" />  
					</form>
				</div>
			)
	}

	componentWillUnmount() {
		console.log("unmounting...");
	    window.removeEventListener("resize", this.updateDimensions);
  }
	
}


export default Contact;
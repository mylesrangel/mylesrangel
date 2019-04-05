import React, {Component} from "react";

import "./contact.css";



class Contact extends Component{

	constructor(props){
		super(props);

	}


	state = {

		formStyle: {
			width: window.innerWidth,
			height: window.innerHeight
		}
	}

	handleSubmit(event){
		event.preventDefault();
		console.log("form has been Submitted");
	}


	componentDidMount(){

	}

	render(){
		return(
				<div>
					<form onSubmit={this.handleSubmit}id="contactForm" style={this.state.formStyle} >
						<div id = 'hamburgerButtonContact' onClick={this.props.contactForm}>
							<div className="bars togglebar1"></div>
							<div className="bars togglebar3"></div>
						</div>
						<p className="formElements">
							<label> First Name: </label>
							<input required id="firstName" placeholder="Your first name" />
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
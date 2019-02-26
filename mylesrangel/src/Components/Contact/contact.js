import React, {Component} from "react";


import "./contact.css";




const Contact = () => {


	return(
			<div >
				<form id="contactForm" >
					<p className="formElements">
						<label> First Name: </label>
						<input id="firstName" placeholder="Your first name" />
					</p>
					<p className="formElements">
						<label> Last Name: </label>
						<input id="lastName" placeholder="Your last name" />
					</p>
					<p className="formElements">
						<label> Email: </label>
						<input id="email" placeholder="What is your email?" />
					</p>
					<p className="formElements">
						<label> Message </label>
						<br />
						<textarea id="message" placeholder="What would you like to tell me?"> </textarea>
					</p>
						<input type="submit" value="submit" />  
				</form>
			</div>
		)

}


export default Contact;
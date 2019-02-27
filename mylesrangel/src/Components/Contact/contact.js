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
						<input id="email" />
					</p>
					<p className="formElements">
						<label> Email Subject: </label>
						<input id="subject" placeholder="Subject" />
					</p>

					<p className="formElements">
						<label> Message </label>
						<br />
						<textarea name="Message" > </textarea>
					</p>
						<input type="submit" value="Submit" />  
				</form>
			</div>
		)

}


export default Contact;
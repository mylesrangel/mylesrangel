import React, {Component} from "react";
import {Link} from "react-router-dom";
import MediaQuery from 'react-responsive';

import { Icon , Button } from 'semantic-ui-react'


import Logo from '../../Media/logo.png';
import BackgroundImage from '../../Media/laptop-image-full-1900.png';
import BackgroundImageTablet from '../../Media/phone-image-full-edited.png';
import BackgroundImagePhone from '../../Media/phone-image-full-edited-cropped.png';
import myResume from "../../Media/MylesRangel.pdf";

import "./about.css";

class About extends Component{
	render(){
		return(
            <div>
                <MediaQuery maxWidth = {2800}>
                    <div id="homepageContainer">
                        <img id = "logoImage" src = {Logo} alt = "laptop" />
                        <img id= "backgroundImage" src = {BackgroundImage} alt = "laptop" />
                        <p id = "myStatement">Hello, I'm Myles, I am a full Stack Developer! I have been developing full time since 2017. Feel free to have a look around. </p>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/">
                            <Button circular basic inverted id='githubAbout' icon = "github" size='massive' />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mylesrangel/">
                            <Button circular basic color="blue" id='linkedinAbout' icon = "linkedin" size='massive' />
                        </a>
                        <Link to="/">
                            <Button circular id='homeIcon' icon= "home" size='big' />
                        </Link>
                    </div>
                </MediaQuery>
                
                {/* ----------------------------Tablet 501 < 799 -------------------------------------------- */}

                <MediaQuery minWidth ={501} maxWidth = {799} >
                    <div id="homepageContainerTablet">
                        <img id = "logoImageTablet" src = {Logo} alt = "laptop" />
                        <img id= "backgroundImageTablet" src = {BackgroundImageTablet} alt = "laptop" />
                        <p id = "myStatementTablet">Hello, I'm Myles, I am a full Stack Developer! I have been developing full time since 2017. Feel free to have a look around. </p>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/">
                            <Button circular basic inverted id='githubAbout' icon = "github" size='massive' />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mylesrangel/">
                            <Button circular basic color="blue" id='linkedinAbout' icon = "linkedin" size='massive' />
                        </a>
                        <Link to="/">
                            <Button circular id='homeIcon' icon= "home" size='big' />
                        </Link>
                    </div>                
                </MediaQuery>



    {/* ---------------------Mobile 500px -------------------------------------------------------------*/}

                <MediaQuery maxWidth = {500} >
                <div id="homepageContainerPhone">
                        <img id = "logoImagePhone" src = {Logo} alt = "laptop" />
                        <img id= "backgroundImagePhone" src = {BackgroundImagePhone} alt = "laptop" />
                        <p id = "myStatementPhone">Hello, I'm Myles, I am a full Stack Developer! I have been developing full time since 2017. Feel free to have a look around. </p>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/">
                            <Button circular basic inverted id='githubAbout' icon = "github" size='massive' />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mylesrangel/">
                            <Button circular basic color="blue" id='linkedinAbout' icon = "linkedin" size='massive' />
                        </a>
                        <Link to="/">
                            <Button circular id='homeIcon' icon= "home" size='big' />
                        </Link>
                    </div>
                </MediaQuery>
            </div>
		);
	}

}

export default About;
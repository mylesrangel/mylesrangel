import React, {Component} from "react";
import {Link} from "react-router-dom";
import MediaQuery from 'react-responsive';

import { Button } from 'semantic-ui-react'


import Logo from '../../Media/logo.png';
import BackgroundImage from '../../Media/laptop-image-full-1900.png';
import BackgroundImageTablet from '../../Media/phone-image-full-edited.png';
import BackgroundImagePhone from '../../Media/phone-image-full-edited-cropped.png';
import "./about.css";

class About extends Component{
	render(){
		return(
            <div>
                <MediaQuery minWidth = {801} maxWidth = {2800} >
                    <div id="aboutpageContainer">
                        <img id = "aboutLogoImage" src = {Logo} alt = "laptop" />
                        <img id= "aboutBackgroundImage" src = {BackgroundImage} alt = "laptop" />
                        <p id = "aboutMyStatement">Hello, I'm Myles, I am a Full Stack Developer! I have been developing full time since 2017. Feel free to have a look around. </p>
                        <div id="aboutSocialMedia">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/">
                                <Button circular basic inverted id='githubAbout' icon = "github" size='small'>Github </Button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mylesrangel/">
                                <Button circular basic color="blue" id='linkedinAbout' icon = "linkedin" size='small'> LinkedIn </Button>
                            </a>
                        </div>
                        <Link to="/">
                            <Button circular id='aboutHomeIcon' icon= "home" size='big' />
                        </Link>
                    </div>
                </MediaQuery>
                
        {/* ----------------------------Tablet 501 < 799 ----------------------------------------------------------------- */}

                <MediaQuery minWidth ={601} maxWidth = {800} >
                    <div id="aboutpageContainerTablet">
                        <img id = "aboutLogoImageTablet" src = {Logo} alt = "laptop" />
                        <img id= "aboutBackgroundImageTablet" src = {BackgroundImageTablet} alt = "laptop" />
                        <p id = "aboutMyStatementTablet">Hello, I'm Myles, I am a Full Stack Developer! I have been developing full time since 2017. Feel free to have a look around. </p>
                        <div id="aboutSocialMediaTablet">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/">
                                <Button circular basic inverted id='githubAbout' icon = "github" size='small'>Github </Button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mylesrangel/">
                                <Button circular basic color="blue" id='linkedinAbout' icon = "linkedin" size='small'> LinkedIn </Button>
                            </a>
                        </div>
                        <Link to="/">
                            <Button circular id='aboutHomeIconTablet' icon= "home" size='big' />
                        </Link>
                    </div>                
                </MediaQuery>



    {/* ---------------------Mobile 500px -------------------------------------------------------------*/}

                <MediaQuery maxWidth = {600} >
                <   div id="aboutpageContainerPhone">
                        <img id = "aboutLogoImagePhone" src = {Logo} alt = "laptop" />
                        <img id= "aboutBackgroundImagePhone" src = {BackgroundImagePhone} alt = "laptop" />
                        <p id = "aboutMyStatementPhone">Hello, I'm Myles, I am a Full Stack Developer! I have been developing full time since 2017. Feel free to have a look around. </p>
                        <div id="aboutSocialMediaMobile">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/">
                                <Button circular basic inverted id='githubAbout' icon = "github" size='small'>Github </Button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mylesrangel/">
                                <Button circular basic color="blue" id='linkedinAbout' icon = "linkedin" size='small'> LinkedIn </Button>
                            </a>
                        </div>
                        <Link to="/">
                            <Button circular id='aboutHomeIconPhone' icon= "home" size='big' />
                        </Link>
                    </div>
                </MediaQuery>
            </div>
		);
	}

}

export default About;
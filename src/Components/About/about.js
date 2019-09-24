import React, {Component} from "react";
import {Link} from "react-router-dom";
import MediaQuery from 'react-responsive';

import { Button } from 'semantic-ui-react'


import Logo from '../../Media/logo.png';
import BackgroundImageTablet from '../../Media/phone-image-full-edited.png';
import BackgroundImagePhone from '../../Media/phone-image-full-edited-cropped.png';
import "./about.css";

class About extends Component{

    state = {


		backgroundImageWindowStyles:{
			width: 0,
			height: 0
		},
		aboutpageButtonSizes:{
			fontSize: 0
		},
		aboutpageLogoImageWindowStyles:{
			width: 0,
			height: 0
		},
		aboutpageTechIconsImageWindowStyles:{
			width: 0,
			height: 0,
			top: 0
		},
		aboutpageHomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		aboutpageComputerScreenTopWindowStyles:{
			width: 0,
			height: 0,
			top: 0,
			left: 0
		},
		aboutpageProjectSeperationWindowStyles:{
			width: 0,
			top: 0,
			left: 0
		},
		aboutpageProjectLinksWindowStyles:{
			minWidth: 0,
			top: 0,
			left: 0
		},

		// -----------Tablet Responsiveness -------------------

		tabletAboutpageTechIconsImageWindowStyles:{
			width: 0,
			height: 0,
			top: 0
		},
		tabletAboutpageComputerScreenTopWindowStyles:{
			width: 0,
			height: 0,
			top: 0,
			left: 0
		},
		tabletAboutpageHomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		tabletAboutpageProjectSeperationWindowStyles: {
			top: 0,
			left: 0
		},
		tabletAboutpageProjectLinksWindowStyles: {
			top: 0,
			left: 0
		},

		//------------------Mobile styles --------------------------------


		mobileAboutpageHomeIconStyles:{
			top: 0,
			left: 0,
		},

		//--------------Phone Styles----------------------------------

        phoneAboutpageHomeIconStyles:{
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
	 this.setState({ aboutpageButtonSizes: {
		fontSize: window.innerWidth * .0080
	 },
	});
	 this.setState({ aboutpageLogoImageWindowStyles:{
		top: window.innerHeight / 80,
		left: window.innerWidth / 2.13,
		width: window.innerWidth /12, 
		height: window.innerHeight /15
		},
	 });
	 this.setState({ aboutpageTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /11,
		top: window.innerHeight /8,
		left: window.innerWidth /4,

		},
	 });
	 this.setState({ aboutpageHomeIconWindowStyles:{
		top: window.innerHeight /1.25,
		left: window.innerWidth /2.05
		},
	 });
	 this.setState({ aboutpageComputerScreenTopWindowStyles:{	
		width: window.innerWidth /2,
		top: window.innerHeight /2.75,
		left: window.innerWidth /4.2
		},
	 });
	 this.setState({ aboutpageProjectSeperationWindowStyles:{	
		width: window.innerWidth /2,
		top: window.innerHeight /2,
		left: window.innerWidth /3.85
		},
	 });
	 this.setState({ aboutpageProjectLinksWindowStyles:{	
		width: window.innerWidth /2,
		top: window.innerHeight /1.85,
		left: window.innerWidth /3.3
		},
	 });


 //-----------------------Tablet Responsive ----------------------



	this.setState({ tabletAboutpageTechIconsImageWindowStyles:{
		width: window.innerWidth /2,
		height: window.innerHeight /10,
		top: window.innerHeight /13.5,
		left: window.innerWidth /18
		},
	 });
	this.setState({tabletAboutpageComputerScreenTopWindowStyles:{
		
		top: window.innerHeight /3.7,
		left: window.innerWidth /3.4
	
		},
	});
	this.setState({tabletAboutpageHomeIconWindowStyles:{

		top: window.innerHeight / 1.35,
		left: window.innerWidth / 2.13

		},
	});
	this.setState({tabletAboutpageProjectSeperationWindowStyles:{
		top: window.innerHeight / 2.6,
		left: window.innerWidth / 3.4
		},	
	});
	this.setState({tabletAboutpageProjectLinksWindowStyles:{
		top: window.innerHeight / 2.4,
		left: window.innerWidth /3.3
		},

	});



//---------Mobile size responsive --------------------------------------------------


	this.setState({mobileAboutpageHomeIconStyles:{
			top: window.innerHeight / 1.32,
			left: window.innerWidth / 2.15
		},
    });
    


//--------------Phone Size-------------------------------------
    this.setState({phoneAboutpageHomeIconStyles: {
        fontSize: window.innerWidth / 38,
        },
    });

    this.setState({phoneAboutpageHomeIconStyles:{
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
                <MediaQuery minWidth = {1000}>
                    <div id="aboutpageContainer" style={this.state.backgroundImageWindowStyles}>
                        <img id = "aboutLogoImage" src = {Logo} alt = "laptop" style={this.state.aboutpageLogoImageWindowStyles}/>
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
                            <Button circular id='aboutHomeIcon' icon= "home" style = {this.state.aboutpageHomeIconWindowStyles}/>
                        </Link>
                    </div>
                </MediaQuery>
                
        {/* ----------------------------Tablet 501 < 799 ----------------------------------------------------------------- */}

                <MediaQuery minWidth = {700} maxWidth = {999} >  
                    <div id="aboutpageContainerTablet" style={this.state.backgroundImageWindowStyles}>
                        <img id = "aboutLogoImageTablet" src = {Logo} alt = "laptop" />
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
                            <Button circular id='aboutHomeIconTablet' icon= "home" size='large' style = {this.state.tabletAboutpageHomeIconWindowStyles}/>
                        </Link>
                    </div>                
                </MediaQuery>



        {/* -------------------------Mobile ----------------------------------------------- */}

                <MediaQuery minWidth = {600} maxWidth = {699} >
                    <div id="aboutpageContainerMobile" style={this.state.backgroundImageWindowStyles}>
                        <img id = "aboutLogoImageMobile" src = {Logo} alt = "laptop" />
                        <p id = "aboutMyStatementMobile">Hello, I'm Myles, I am a Full Stack Developer! I have been developing full time since 2017. Feel free to have a look around. </p>
                        <div id="aboutSocialMediaMobile">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/">
                                <Button circular basic inverted id='githubAbout' icon = "github" size='small'>Github </Button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mylesrangel/">
                                <Button circular basic color="blue" id='linkedinAbout' icon = "linkedin" size='small'> LinkedIn </Button>
                            </a>
                        </div>
                        <Link to="/">
                            <Button circular id='aboutHomeIconMobile' icon= "home" style = {this.state.mobileAboutpageHomeIconStyles}/>
                        </Link>
                    </div>
                </MediaQuery>

    {/* ---------------------Phone 600px -------------------------------------------------------------*/}

                <MediaQuery maxWidth = {599} >
                    <div id="aboutpageContainerPhone" style={this.state.backgroundImageWindowStyles}>
                        <img id = "aboutLogoImagePhone" src = {Logo} alt = "laptop" />
                        <p id = "aboutMyStatementPhone">Hello, I'm Myles, I am a Full Stack Developer! I have been developing full time since 2017. Feel free to have a look around. </p>
                        <div id="aboutSocialMediaPhone">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mylesrangel/">
                                <Button circular basic inverted id='githubAbout' icon = "github" size='small'>Github </Button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mylesrangel/">
                                <Button circular basic color="blue" id='linkedinAbout' icon = "linkedin" size='small'> LinkedIn </Button>
                            </a>
                        </div>
                        <Link to="/">
                            <Button circular id='aboutHomeIconPhone' icon= "home"  style = {this.state.phoneAboutpageHomeIconStyles} />
                        </Link>
                    </div>
                </MediaQuery>
            </div>
		);
	}

}

export default About;
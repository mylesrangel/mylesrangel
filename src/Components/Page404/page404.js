import React, {Component} from "react";
import {Link} from "react-router-dom";
import MediaQuery from 'react-responsive';

import { Button } from 'semantic-ui-react'


import Logo from '../../Media/logo.png';
import "./page404.css";

class Page404 extends Component{

    state = {


		backgroundImageWindowStyles:{
			width: 0,
			height: 0
		},
		page404ButtonSizes:{
			fontSize: 0
		},
		page404LogoImageWindowStyles:{
			width: 0,
			height: 0
		},
		page404HomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		page404MessageWindowStyles:{
			top: 0,
			left: 0
		},


		// -----------Tablet Responsiveness -------------------

		tabletPage404TechIconsImageWindowStyles:{
			width: 0,
			height: 0,
			top: 0
		},
		tabletPage404ComputerScreenTopWindowStyles:{
			width: 0,
			height: 0,
			top: 0,
			left: 0
		},
		tabletPage404HomeIconWindowStyles:{
			top: 0,
			left: 0
		},
		tabletPage404ProjectSeperationWindowStyles: {
			top: 0,
			left: 0
		},
		tabletPage404ProjectLinksWindowStyles: {
			top: 0,
			left: 0
		},

		//------------------Mobile styles --------------------------------


		mobilePage404HomeIconStyles:{
			top: 0,
			left: 0,
		},

		//--------------Phone Styles----------------------------------

        phonePage404HomeIconStyles:{
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

	 this.setState({ page404LogoImageWindowStyles:{
		top: window.innerHeight / 80,
		left: window.innerWidth / 2.13,
		width: window.innerWidth /12, 
		height: window.innerHeight /15
		},
	 });

	 this.setState({ page404HomeIconWindowStyles:{
		top: window.innerHeight /1.25,
		left: window.innerWidth /2.05
		},
	 });
	 this.setState({ page404MessageWindowStyles:{
		top: window.innerHeight / 2.4,
		left: window.innerWidth / 2.28
	   },
	});



 //-----------------------Tablet Responsive ----------------------


 this.setState({ tabletPage404LogoImageWindowStyles:{
	top: window.innerHeight / 80,
	left: window.innerWidth / 2.13,
	width: window.innerWidth /12, 
	height: window.innerHeight /15
	},
 });

 this.setState({ tabletPage404HomeIconWindowStyles:{
		top: window.innerHeight / 1.35,
		left: window.innerWidth / 2.13
	},
 });
 this.setState({ tabletPage404MessageWindowStyles:{
	top: window.innerHeight / 2.5,
	left: window.innerWidth / 2.6
   },
});



//---------Mobile size responsive --------------------------------------------------


	this.setState({mobilePage404HomeIconStyles:{
		top: window.innerHeight / 1.32,
		left: window.innerWidth / 2.15
		},
    });
	this.setState({ mobilePage404MessageWindowStyles:{
		top: window.innerHeight / 2.7,
		left: window.innerWidth / 2.55
	   },
	});


//--------------Phone Size-------------------------------------
    this.setState({phonePage404HomeIconStyles:{
		top: window.innerHeight / 1.13,
		left: window.innerWidth / 2.3,
		},
	});
	this.setState({ phonePage404MessageWindowStyles:{
		top: window.innerHeight / 2.9,
		left: window.innerWidth / 3.2
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
                    <div id="page404Container" style={this.state.backgroundImageWindowStyles}>
                        <img id = "page404LogoImage" src = {Logo} alt = "laptop" style={this.state.page404LogoImageWindowStyles}/>
                        <div id = "page404Message" style={this.state.page404MessageWindowStyles}>
							<h3> Oh no! </h3>
							<p>You ventured to an area that doesn't exist</p>
						</div>
                        <Link to="/">
                            <Button circular id='page404HomeIcon' icon= "home" style = {this.state.page404HomeIconWindowStyles}/>
                        </Link>
                    </div>
                </MediaQuery>
                
        {/* ----------------------------Tablet 501 < 799 ----------------------------------------------------------------- */}

                <MediaQuery minWidth = {700} maxWidth = {999} >  
                    <div id="page404ContainerTablet" style={this.state.backgroundImageWindowStyles}>
                        <img id = "page404LogoImageTablet" src = {Logo} alt = "laptop" style={this.state.tabletPage404LogoImageWindowStyles}/>
                        <div id = "page404MessageTablet" style={this.state.tabletPage404MessageWindowStyles}>
							<h3> Oh no! </h3>
							<p>You ventured to an area that doesn't exist</p>
						</div>
                        <Link to="/">
                            <Button circular id='page404HomeIconTablet' icon= "home" size='large' style = {this.state.tabletPage404HomeIconWindowStyles}/>
                        </Link>
                    </div>                
                </MediaQuery>



        {/* -------------------------Mobile ----------------------------------------------- */}

                <MediaQuery minWidth = {600} maxWidth = {699} >
                    <div id="aboutpageContainerMobile" style={this.state.backgroundImageWindowStyles}>
                        <img id = "aboutLogoImageMobile" src = {Logo} alt = "laptop" />
						<div id = "page404MessageMobile" style={this.state.mobilePage404MessageWindowStyles}>
							<h3> Oh no! </h3>
							<p>You ventured to an area that doesn't exist</p>
						</div>                        
                        <Link to="/">
                            <Button circular id='aboutHomeIconMobile' icon= "home" style = {this.state.mobilePage404HomeIconStyles}/>
                        </Link>
                    </div>
                </MediaQuery>

    {/* ---------------------Phone 600px -------------------------------------------------------------*/}

                <MediaQuery maxWidth = {599} >
                    <div id="page404ContainerPhone" style={this.state.backgroundImageWindowStyles}>
                        <img id = "page404LogoImagePhone" src = {Logo} alt = "laptop" />
						<div id = "page404MessagePhone" style={this.state.phonePage404MessageWindowStyles}>
							<h3> Oh no! </h3>
							<p>You ventured to an area that doesn't exist</p>
						</div>                            
                        <Link to="/">
                            <Button circular id='page404HomeIconPhone' icon= "home"  style = {this.state.phonePage404HomeIconStyles} />
                        </Link>
                    </div>
                </MediaQuery>
            </div>
		);
	}

}

export default Page404;
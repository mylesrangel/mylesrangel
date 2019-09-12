import React, {Component} from "react";

import MediaQuery from 'react-responsive';


//Carousel import with it's required CSS
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Materialize import
import 'materialize-css/dist/css/materialize.min.css';

import ClockSpecialty from "../../Media/clockspecialtyHomepage.jpg";
import ClockSpecialtyMobile from "../../Media/clockspecialty500.jpg";

import "./myProjects.css";
import Github from "../../Media/GitHub-Mark-Light-32px.png";
import Trello from "../../Media/trello-logo-blue.png";

class MyWork extends Component{

    render(){
        return(
            <div> 
                <MediaQuery query = "(min-width: 501px">
                    <div id = "myProjectContainer">
                        <div className="card">
                            {/* <img className = "backgroundImage" src = {Laptop} alt = "Laptop"></img> */}
                            <div className="card-image waves-effect waves-block waves-light">
                                <p>I enjoy creating projects during some of my free time. It gives me opportunity to create and grow relationships.</p>
                                <p> Use the up arrow to learn a little more about how it's built</p>
                            </div>
                            <div className="card-content card-title activator white-text text-light">
                                <span>
                                    <a className = "customButton" href = "https://www.mylesrangel.com">Live Demo </a>
                                    <i className="material-icons right"> arrow_upward </i>
                                </span>
                                <span id = "clickableLinks">
                                    <p><a id="githubImage"href="https://github.com/mylesrangel/mylesrangel"><img src={Github} alt="Github Icon"/></a></p>
                                    <a id="trelloImage" href="https://trello.com/b/9IhFQaFZ/personal-webpage"><img src={Trello} alt="Trello Icon"/></a>
                                </span>
                            </div>
                            <div className="card-reveal">
                                <span id="card-reveal-title" className="card-title black-text text-light-4">mylesrangel.com<i className="material-icons right"> arrow_downward </i></span>
                                <p>My personal website (where you are now)</p>
                                <p>This website is using:</p>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JavaScript</p>
                                <p>React</p>
                                <p><a href="https://materializecss.com/cards.html">Materialize-CSS</a>(Card Reveal)</p>
                                <p><a href="https://www.npmjs.com/package/react-responsive-carousel"> React-responsive-carousel</a></p>
                                <p>Express</p>
                            </div>
                        </div>
                    </div>
                    <hr className="seperationLine"></hr>
                    <div id = "myProjectContainer">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img id="clockSpecialty"className="activator" src={ClockSpecialty} alt="ClockSpecialty Website"/>
                            </div>
                            <div className="card-content card-title activator white-text text-light">
                                <span>
                                    <a className="customButton" href="https://clockspecialty.now.sh">Live Demo</a>
                                    <i className="material-icons right"> arrow_upward </i>
                                </span>
                                <span id = "clickableLinks">
                                <p><a id="githubImage" href="https://github.com/mylesrangel/ClockSpecialty"><img src={Github} alt="Github Icon"/></a></p>
                                </span>
                            </div>
                
                            <div className="card-reveal">
                                <span id="card-reveal-title" className="card-title black-text text-light-4"><a href="https://clockspecialty.now.sh">https://clockspecialty.now.sh/</a><i className="material-icons right"> arrow_downward </i></span>
                                <p>This website is using:</p>
                                <p>This is a 90's themed clock shop</p>
                                <p>NOTE: 'Find your perfect clock today!' does work correctly. The backend is hosted on Now as well, it is just a little slow. However there is a cache(an object array).</p>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JavaScript</p>
                                <p>Bootstrap</p>
                                <p>NodeJS</p>
                                <p>Express</p>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery query = "(max-width: 500px)">         
                    <Carousel showThumbs = {false} showStatus={false}>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <p>I enjoy creating projects during some of my free time. It gives me opportunity to create and grow relationships.</p>
                                <p> Use the up arrow to learn a little more about how it's built</p>
                                <p>Swipe to see more projects I have worked on. </p> 
                            </div>
                            <div className="card-content card-title activator white-text text-light">
                                    <a className = "customButton" href = "https://www.mylesrangel.com">Live Demo </a>
                                    <i className="material-icons right"> arrow_upward </i>
                                <p><a href="https://github.com/mylesrangel/mylesrangel"><img src={Github} alt="Github Icon"/></a></p>
                                <a id="trelloImage" href="https://trello.com/b/9IhFQaFZ/personal-webpage"><img src={Trello} alt="Trello Icon"/></a>
                            </div>
                
                            <div className="card-reveal">
                                <span className="card-title black-text text-light-4">mylesrangel.com<i className="material-icons right"> arrow_downward </i></span>
                                <p>My personal website (where you are now)</p>
                                <p>This website is using:</p>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JavaScript</p>
                                <p>React</p>
                                <p><a href="https://materializecss.com/cards.html">Materialize-CSS</a>(Card Reveal)</p>
                                <p><a href="https://www.npmjs.com/package/react-responsive-carousel"> React-responsive-carousel</a></p>
                                <p>Express</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img id="clockSpecialty"className="activator" src={ClockSpecialtyMobile} alt="Clock Specialty website"/> 
                            </div>
                            <div className="card-content card-title activator white-text text-light-4">
                                <a className="customButton" href="https://clockspecialty.now.sh">Live Demo</a><i className="material-icons right"> arrow_upward </i>
                                <p><a href="https://github.com/mylesrangel/ClockSpecialty"><img src={Github} alt="Github Icon"/></a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title black-text text-light-4"><a href="https://clockspecialty.now.sh">https://clockspecialty.now.sh/</a><i className="material-icons right"> arrow_downward </i></span>
                                <p>This website is using:</p>
                                <p>This is a 90's themed clock shop</p>
                                <p>NOTE: 'Find your perfect clock today!' does work correctly. The backend is hosted on Now as well, it is just a little slow. However there is a cache(an object array).</p>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JavaScript</p>
                                <p>Bootstrap</p>
                                <p>NodeJS</p>
                                <p>Express</p>
                            </div>
                        </div>
                    </Carousel>
                </MediaQuery>
            </div>
        );
    }  
}

export default MyWork;
import React, {Component} from "react";

import MediaQuery from 'react-responsive';


//Carousel import with it's required CSS
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Materialize import
import 'materialize-css/dist/css/materialize.min.css';

import Myles from "../../Media/Myles.jpg";
import Mylesrangelcom500 from "../../Media/mylesrangel500.JPG";
import ClockSpecialty from "../../Media/clockspecialty500.jpg";

import "./myProjects.css";
import Github from "../../Media/GitHub-Mark-Light-32px.png";
import Trello from "../../Media/trello-logo-blue.png";

class MyWork extends Component{

    render(){
        return(
            <div> 
                <MediaQuery query = "(min-width: 501px">
                    <div id = "myProjectContainer">
                        <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <p>I enjoy creating projects during some of my free time. It gives me opportunity to create and grow relationships.</p>
                                <p> Use the up arrow to learn a little more about how it's built</p>
                            </div>
                            <div class="card-content card-title activator white-text text-light">
                                <span>
                                    <a class = "customButton" href = "https://www.mylesrangel.com">Live Demo </a>
                                    <i class="material-icons right"> arrow_upward </i>
                                </span>
                                <span id = "clickableLinks">
                                    <p><a id="githubImage"href="https://github.com/mylesrangel/mylesrangel"><img src={Github} /></a></p>
                                    <a id="trelloImage" href="https://trello.com/b/9IhFQaFZ/personal-webpage"><img src={Trello} /></a>
                                </span>
                            </div>
                
                            <div class="card-reveal">
                                <span class="card-title black-text text-light-4">mylesrangel.com<i class="material-icons right"> arrow_downward </i></span>
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
                </MediaQuery>
                <MediaQuery query = "(max-width: 500px)">         
                    <Carousel showThumbs = {false} showStatus={false}>
                        <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <p>I enjoy creating projects during some of my free time. It gives me opportunity to create and grow relationships.</p>
                                <p> Use the up arrow to learn a little more about how it's built</p>
                                <p>Swipe to see more projects I have worked on. </p> 
                            </div>
                            <div class="card-content card-title activator white-text text-light">
                                    <a class = "customButton" href = "https://www.mylesrangel.com">Live Demo </a>
                                    <i class="material-icons right"> arrow_upward </i>
                                <p><a href="https://github.com/mylesrangel/mylesrangel"><img src={Github} /></a></p>
                                <a id="trelloImage" href="https://trello.com/b/9IhFQaFZ/personal-webpage"><img src={Trello} /></a>
                            </div>
                
                            <div class="card-reveal">
                                <span class="card-title black-text text-light-4">mylesrangel.com<i class="material-icons right"> arrow_downward </i></span>
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
                        <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img id="clockSpecialty"class="activator" src={ClockSpecialty} /> 
                            </div>
                            <div class="card-content card-title activator white-text text-light-4">
                                <a class="customButton" href="https://clockspecialty.now.sh">Live Demo</a><i class="material-icons right"> arrow_upward </i>
                                <p><a href="https://github.com/mylesrangel/ClockSpecialty"><img src={Github} /></a></p>
                            </div>
                
                            <div class="card-reveal">
                                <span class="card-title black-text text-light-4"><a href="https://clockspecialty.now.sh">https://clockspecialty.now.sh/</a><i class="material-icons right"> arrow_downward </i></span>
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
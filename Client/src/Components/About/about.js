import React, {Component} from "react";

//Carousel import with it's required CSS
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Materialize import
import 'materialize-css/dist/css/materialize.min.css';

import Header from "../Header/header.js";
import Myles from "../../Media/Myles.jpg";

import "./about.css";

class About extends Component{

    render(){
        return( 
            <div>
                <Carousel showThumbs = {false} showStatus={false}>
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                            <div id="aboutMe">
                                <p>Hello, I'm Myles Rangel. I am full-stack web developer. Please take a look around. </p>
                                <p>When I am not developing, you can find me outdoors. I enjoy riding my motorcycle, hiking trails and even going off the grid in the Sierra National Forest.</p>
                                <p>Swipe right to learn a little more about my outdoors life.</p>
                            </div>
                        </div>
            
                        <div class="card-reveal">
                            <span class="card-title black-text text-light-4">mylesrangel.com<i class="material-icons right"> arrow_downward </i></span>
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
                    <div>
                        <img src="assets/2.jpeg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="assets/3.jpeg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        );
    }  
}

export default About;
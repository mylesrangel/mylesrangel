import React, {Component} from "react";

//Carousel import with it's required CSS
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Materialize import
import 'materialize-css/dist/css/materialize.min.css';

import Myles from "../../Media/Myles.jpg";
import Mylesrangelcom500 from "../../Media/mylesrangel500.JPG";
import ClockSpecialty from "../../Media/clockspecialty500.jpg";

import "./myWork.css";

class MyWork extends Component{

    render(){
        return(
            <div>           
                <Carousel showThumbs = {false} showStatus={false}>
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                            <p>Welcome to my works section! Here you can find some of the projects I have worked on. </p>
                            <p>Swipe to see more projects I have worked on and use the up arrow to learn a little more about how it's built</p>
                            <p>I use github for version control and trello to stay organized!</p>
                        </div>
                        <div class="card-content">
                            <span class="card-title activator white-text text-light-">mylesrangel.com<i class="material-icons right"> arrow_upward </i></span>
                            <p id="cardDescription"> My Personal Website</p>
                            <p><a href="https://github.com/mylesrangel/mylesrangel">Github</a></p>
                            <p><a href="https://trello.com/b/9IhFQaFZ/personal-webpage">Trello</a></p>
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
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img id="clockSpecialty"class="activator" src={ClockSpecialty} /> 
                        </div>
                        <div class="card-content">
                            <span class="card-title activator white-text text-light-">https://clockspecialty.now.sh/<i class="material-icons right"> arrow_upward </i></span>
                            <p id="cardDescription"> A 90's themed clockspecialty</p>
                            <p><a href="https://github.com/mylesrangel/ClockSpecialty">Github</a></p>
                        </div>
            
                        <div class="card-reveal">
                            <span class="card-title black-text text-light-4">https://clockspecialty.now.sh/<i class="material-icons right"> arrow_downward </i></span>
                            <p>This website is using:</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>Bootstrap</p>
                            <p>NodeJS</p>
                            <p>Express</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }  
}

export default MyWork;
import React, {Component} from "react";

import MediaQuery from 'react-responsive';

//Carousel import with it's required CSS
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Materialize import
import 'materialize-css/dist/css/materialize.min.css';


import "./about.css";

class About extends Component{

    render(){
        return( 
            <div>
                <Carousel showThumbs = {false} showStatus={false}>
                    <div class="workExperience">
                        <div class="card-image waves-effect waves-block waves-light">
                            <div id="aboutMe">
                                <p>Hello, I'm Myles. I am full-stack web developer. </p>
                                <p>I have been freelancing since 2017 and have worked with many technologies. I enjoy all aspects of web development and look forward to learning more! </p>
                                <MediaQuery query = "(max-width: 500px)">
                                    <p>Swipe right to see more about my work experience!</p>
                                </MediaQuery>
                            </div>
                        </div>
                    </div>
                    <div class="workExperience">
                        <h5> Freelance Web Developer</h5>
                        <h6> June-2018 - Present</h6>
                        <p class = "workDescription">Meet with prospective clients to review current website and discuss future design specifications. </p>
                        <p class = "workDescription">Created various mock ups using HTML, CSS and Javascript. Communicated with third-party developers on behalf of client to discuss UI/UX needs with back end development</p>

                    </div>
                    <div class="workExperience">
                        <h5> Clock Specialty - Web Developer</h5>
                        <h6> June-2017 - June-2018</h6>    
                        <p class = "workDescription"> Designed and maintained custom website with a check-in/checkout system.</p>
                        <p class = "workDescription">This system uses HTML, CSS, JavaScript, PHP and MySQL. The website provides a full stack experience created with agile development.</p>
                    </div>
                </Carousel>
            </div>
        );
    }  
}

export default About;
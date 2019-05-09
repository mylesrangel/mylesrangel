import React, {Component} from "react";

//Materialize import
import 'materialize-css/dist/css/materialize.min.css'
import Myles from "../../Media/Myles.jpg";

import "./myWork.css";



const MyWork = () => {

    return(
        <div>           
            <p id = "myWorkTitle">Here are some of the projects I have worked on.</p>
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src={Myles} /> 
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
                    <p>Materialize-CSS</p>
                    <p>Express</p>
                </div>
            </div>
        </div>


    );

    
}

export default MyWork;
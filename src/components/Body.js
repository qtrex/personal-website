import React from "react";
import Scripts from "./sections/Scripts";
import ContactMe from "./ContactMe";
import Portfolio from "./Portfolio";
import Banner from "./Banner";
import Intro from "./Intro";

function Body() {
    return (
        /* Returns the body of the webpage */
        <div className="container-fluid body-padding">
            <Banner />

            <div id="intro">
                <Intro />
            </div>

            <hr className="transitionRule"></hr>

            <div id="portfolio">
                <Portfolio />
            </div>

            <hr className="transitionRule"></hr>

            <div id="contactMe">
                <ContactMe />
            </div>

            <Scripts />
        </div>
    );
}

export default Body;
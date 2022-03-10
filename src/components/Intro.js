import React from "react";
import SiteData from "./SiteData";

function Intro() {
    return (
        /* Returns intro portion of webpage */
        <div className="container center-text intro">
            <div className="row justify-content-md-center">
                <div className="col">
                    <h3 className="blue">{SiteData.intro.title}</h3>
                    <p className="">{SiteData.intro.content}</p>
                </div>
            </div>
        </div>
    );
}

export default Intro;
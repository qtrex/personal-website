import React from "react";
import SiteData from "./SiteData";

function Portfolio() {
    return (
        <div className="container-fluid">
            <h1 className="center-text">{SiteData.portfolio.title}</h1>
        </div>
    );
}

export default Portfolio;
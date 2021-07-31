import React from "react";
import SiteData from "./SiteData";
import AntImg from "../images/ant.png";

function Portfolio() {
    return (
        <div className="container-fluid">
            <h3 className="center-text blue">{SiteData.portfolio.title}</h3>
            <div className="container center-text project-list-container">
                <div className="container row project-container">
                    <div className="col-9">
                        <img src={AntImg} alt="ant-image"></img>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
                <hr></hr>
                <div className="container row project-container">
                    <div className="col-9">
                    </div>
                    <div className="col-3">
                        <img className="ant-edit" src={AntImg} alt="ant-image"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
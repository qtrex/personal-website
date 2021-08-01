import React from "react";
import SiteData from "./SiteData";
import AntImg from "../images/ant.png";
import JavaImg from "../images/java.png";
import CodenameOneImg from "../images/codenameOne.png";

function Portfolio() {

    const 

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
                    <div className="col-9 info-container-left">
                        <h3 className="project-name">Ant Game</h3>
                        <p className="project-date">Date</p>
                        <p className="project-syn">{SiteData.portfolio.antGame.synopsis}</p>
                        <p>Technologies Used: 
                            <img className="project-ts-img" src={JavaImg}></img> 
                            <img className="project-ts-img" src={CodenameOneImg}></img>
                        </p>
                    </div>
                    <div className="col-3 project-img-col">
                        <a href="https://github.com/qtrex/AntGame">
                            <img className="ant-edit" src={AntImg} alt="ant-image"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
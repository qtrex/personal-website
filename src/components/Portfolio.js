import React, { useState } from "react";
import SiteData from "./SiteData";
import AntImg from "../images/ant.png";
import JavaImg from "../images/java.png";
import CodenameOneImg from "../images/codenameOne.png";

function Portfolio() {

    const [antProject, setAntProject] = useState(false);
    const [blogProject, setBlogProject] = useState(false);

    function setProjects(name) {
        switch (name){
            case "Ant":
                setAntProject(!antProject);
                setBlogProject(false);
                break;
            case "Blog":
                setAntProject(false);
                setBlogProject(!blogProject);
                break;
        }
    }

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
                        <h3 className="project-name">{SiteData.portfolio.antGame.title}</h3>
                        <p className="project-date">{SiteData.portfolio.antGame.date}</p>
                        <p className="project-syn">{SiteData.portfolio.antGame.synopsis}</p>

                        <p>
                            {antProject ? (<p>{SiteData.portfolio.antGame.description.partOne}</p>) : (<hr></hr>)}
                            <button className="btn btn-info btn-small btn-outline-primary" onClick={() => setProjects("Ant")}>
                                <p className="project-button">{antProject ? "See Less" : "See More"}</p>
                            </button>
                        </p>

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
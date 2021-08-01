import React, { useState } from "react";
import SiteData from "./SiteData";
import AntImg from "../images/ant.png";
import CinemaImg from "../images/cinema.png";
import JavaImg from "../images/java.png";
import CodenameOneImg from "../images/codenameOne.png";
import WordpressImg from "../images/wordpress.png";
import BluehostImg from "../images/bluehost.png";


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
                    <div className="col-9 info-container-left">
                        <h3 className="project-name">{SiteData.portfolio.uneducatedReviews.title}</h3>
                        <p className="project-date">{SiteData.portfolio.uneducatedReviews.date}</p>
                        <p className="project-syn">{SiteData.portfolio.uneducatedReviews.synopsis}</p>

                        <p>
                            {blogProject ? (<p>{SiteData.portfolio.uneducatedReviews.description}</p>) : (<hr></hr>)}
                            <button className="btn btn-info btn-small btn-outline-primary" onClick={() => setProjects("Blog")}>
                                <p className="project-button">{antProject ? "See Less" : "See More"}</p>
                            </button>
                        </p>

                        <p>Technologies Used:
                            <img className="project-ts-img" src={WordpressImg}></img>
                            <img className="project-ts-img" src={BluehostImg}></img>
                        </p>
                    </div>
                    <div className="col-3 project-img-col">
                        <a href={SiteData.portfolio.uneducatedReviews.lnk}>
                            <img className="ant-edit" src={CinemaImg} alt="ant-image"></img>
                        </a>
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
                        <a href={SiteData.portfolio.antGame.lnk}>
                            <img className="ant-edit" src={AntImg} alt="ant-image"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
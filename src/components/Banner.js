import React from "react";
import Universe from "../images/universe.png";
import Quote from "./Quote";
import SiteData from "./SiteData";
import Star from "../images/star-blink.gif";
import TextLoop from "react-text-loop";

export default function Banner() {
    //var time = new Date().getHours();

    return (
        <div className="container-fluid body-padding">
            <div className="container-fluid banner afternoon center-text banner-bg" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-light.png')" }}>
                <h1 className="center-text banner-title-edit">{SiteData.banner.title}</h1>
                    <h3 className="center-text definition-edit">
                        <TextLoop interval={3000}>
                            <div>
                                {SiteData.banner.content.a}
                                <span className="pro-grammer">{SiteData.banner.content.pro}</span>
                                {SiteData.banner.content.grammer}
                            </div>
                            <div>
                                {SiteData.banner.content.dev}
                            </div>
                            <div>{SiteData.banner.content.engine}</div>
                            <div>{SiteData.banner.content.create}</div>
                        </TextLoop>
                    </h3>
                    <img className="universe-edit" src={Universe} alt="universe-img"></img>
                    <img className="star-blink" src={Star} alt="star-blink-gif"></img>
                    <Quote />
            </div>
        </div>
    )
    {/* <iframe src="https://giphy.com/embed/57Y7JIqvH9okJCJYjp" width="480" height="450" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */ }
}
import React from "react";
import SiteData from "./SiteData";

function ContactMe() {
    return (
        /* Returns contact me portion of webpage */
        <div className="container center-text">

            <h3 className="contact-title blue">{SiteData.contact.title}</h3>
            <p className="">{SiteData.contact.content.questions}</p>
            <p className="">{SiteData.contact.content.cta}</p>

            <a className="btn btn-large btn-outline-primary" href="mailto:quixari.jones@gmail.com">CONTACT ME</a>
        </div>
    );
}

export default ContactMe;
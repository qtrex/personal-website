import React from "react";
import Body from "./components/Body";
import Footer from "./components/sections/Footer";
import "./css/styles.css";

export default function App(){
  return (
    <div className="container-fluid body-edit">
      <div className="row">
        <Body />
      </div>
      <div className="row">
        <div className="container-fluid footer-container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

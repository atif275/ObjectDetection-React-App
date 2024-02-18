import "./HomeStyles.css";

import { React } from "react";
import backgroundVideo from "../video/video4.mp4";
import img from "../video/img2.png";
import Widget from "./Widget";
const Home = () => {
  return (
    <div className="homepage">
      <video id="player" controls autoPlay loop muted>
        <source src={backgroundVideo} />
      </video>
      <picture id="picture">
        <source srcSet={img} />
        <img src={img} alt="Descriptive text for the image" />
      </picture>
      {/* <div id="widget">
        <Widget/>
      </div> */}
      <Widget/>

      {/* <div id="video-bar">

      <video id="playerr" controls autoPlay loop muted>
        <source src={backgroundVideo} />
      </video>

      <video id="playerrr" controls autoPlay loop muted>
        <source src={backgroundVideo} />
      </video>
       
      
      </div> */}
      
      

      {/* <div className="bg-overlay"></div>
        <div className="hometext">
            <h1>Echelon Object Detection</h1>
            <h3>Powered By Advance AI tools</h3>
        </div> */}
    </div>
  );
};

export default Home;

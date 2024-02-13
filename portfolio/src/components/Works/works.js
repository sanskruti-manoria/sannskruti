import React from "react";
import "./works.css";
import ecowell from "../../assets/Ecowell.png";
import radiance from "../../assets/Radiance.png";
import Calci from "../../assets/CanvasCalculator.png";
import addToCart from "../../assets/beyond_addtoCart.png";

export const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">Projects</h2>
      <span className="worksDesc">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project has link to code repositories. 
      </span>
      <div className="workImgContainer">
        <div className="workImg1">
          <div>
          <a href="https://github.com/sannskruti/EcoWell"  > 
            <img src={ecowell} alt="" className="worksImg" /> </a>
            <h4>
              <b>EcoWell, a healthy lifestyle initiative</b>
            </h4>
            <p>Mongo DB , EXpress, React , Node (MERN Stack) </p>
            
          </div>
          <div>
          <a href="https://github.com/sannskruti/Radiance"  > 
            <img src={radiance} alt="" className="worksImg" /> </a>
            <h4>
              <b>Radiance, the Resource tracker Tool</b>
            </h4>
            <p>Java Swing, SMS integration </p>
          </div>
        </div>

        <div className="workImg2">
          <div>
          <a href="https://github.com/sannskruti/CanvasCalculator"  > 
            <img src={Calci} alt="" className="worksImg" /> </a>
            <h4>
              <b>HTML Canvas Calculator App</b>
            </h4>
            <p> Javascript (DOM Manipulation), HTML Canvas and CSS </p>
          </div>
          <div>
          <a href="https://medium.com/@sanskrutimanoria/beyond-add-to-cart-e6f91d94d56b"  > 
            <img src={addToCart} alt="" className="worksImg" /> </a>
            <h4>
              <b>Beyond "Add to Cart", Re-designing Shopping Cart Experience</b>
            </h4>
            <p>Article on medium, Figma </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;

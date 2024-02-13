import React from "react";
import "./intro.css";
import bg from "../../assets/bg.jpg";
import { Link } from "react-scroll";
// import btnImg from "../../assets/hireMe.png";
import btnImg from "../../assets/linked.png";


export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Sanskruti</span> <br /> Full Stack
          Developer{" "}
        </span>
        <p className="introPara">
          I'm a passionate Software Engineer specializing in full-stack web
          development, committed to crafting exceptional, user-friendly web
          applications. I'm furthering my expertise through a Master's in
          Information Systems at Northeastern University.
        </p>

        <Link>
          <button className="btn">
            <img src={btnImg} alt="Resume" className="btnImg" /> LinkedIn
          </button>
        </Link>
      </div>
      

      <img src={bg} alt="" className="bg" />
    </section>
  );
};
export default Intro;

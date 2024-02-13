import React from 'react'
import capgemini from "../../assets/CapgeminiLogo.jpg";
import accenture from "../../assets/acc.jpg";
import infosys from "../../assets/info.webp";

export const WorkExperience = () => {
  return (
    <section id="clients">
    <h2 className="worksTitle">Projects</h2>
    <span className="worksDesc">
      Following projects showcases my skills and experience through real-world
      examples of my work. Each project is briefly described with links to
      code repositories. It reflects my ability to solve complex problems,
      work with different technologies, and manage projects effectively.{" "}
    </span>
    <div className="workImgContainer">
      <div className="workImg1">
        <div>
          <img src={capgemini} alt="" className="worksImg" /> 
          <h4>
            <b>EcoWell, a healthy lifestyle initiative</b>
          </h4>
          <p>Mongo DB , EXpress, React , Node (MERN Stack) </p>
        </div>
        <div>
          <img src={accenture} alt="" className="worksImg" /> 
          <h4>
            <b>Radiance, the Resource tracker Tool</b>
          </h4>
          <p>Java Swing, SMS integration </p>
        </div>
      </div>
      <div className="workImg2">
        <div>
          <img src={infosys} alt="" className="worksImg" /> 
          <h4>
            <b>HTML Canvas Calculator App</b>
          </h4>
          <p> Javascript (DOM Manipulation), HTML Canvas and CSS </p>
        </div>
        <div>
        
        </div>
      </div>
    </div>
  </section>
   
  )
}

export default WorkExperience ;


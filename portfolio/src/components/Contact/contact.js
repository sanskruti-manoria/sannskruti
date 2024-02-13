import React from "react";
import "./contact.css";
import capgemini from "../../assets/CapgeminiLogo.jpg";
import accenture from "../../assets/acc.jpg";
import infosys from "../../assets/info.webp";
import linkedin from "../../assets/linked.png";
import insta from "../../assets/insta.jpg";
import git from "../../assets/git.png";
import location from "../../assets/red-location-icon-map-png-4.png";
import connect from "../../assets/connect.gif";
import { useRef } from "react";
import emailjs, { send } from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    console.log("submitted!");
    await emailjs
      .sendForm(
        "service_dasy7qe",
        "template_awnpmxu",
        form.current,
        "A4j7Z6Zv86T5zx1QW2KHD"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle"> Work Experience</h1>
        <div className="clientImgs">
          <div className="company">
            <div className="group-image-location">
              <div>
                
                <img
                  src={capgemini}
                  alt="client"
                  className="company-item-list"
                />
              </div>
              <div>
                <img src={location} alt="location" className="location"></img>
                <b>Utrecht, Netherlands</b>
                <h4>Jul 2022 - Aug 2023</h4>
              </div>
            </div>
            <div className="group-image-location">
              <div className="position">Software Engineer</div>
              <div>
                <ul class="company-matter">
                <li>
                    Implemented business functionaliyties like versioning in
                    data forms and Object Locking (preventing simultaneous
                    edits) using MERN Stack, resulting in a 15% reduction in
                    data errors and a 25% increase in accuracy.
                  </li>
                  <li>
                    Collaborated and set effective communication with clients in
                    complex requirements analysis. Conducted agile scrum events,
                    and training sessions for internal teams, enhancing skills
                    for improved project execution.
                  </li>
                  <li>
                    Developed full-stack applications for financial services
                    managing 500+ concurrent users with a 1.4s average page load
                    time.
                  </li>
                  
                  <li>
                    Orchestrated CI/CD pipelines on Azure DevOps which increased
                    deployment frequency and reduced release cycle time.
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          {/* Company 2 */}
          <div className="company">
            <div className="group-image-location">
              <div>
                {/* image */}
                <img
                  src={accenture}
                  alt="client"
                  className="company-item-list"
                />
              </div>
              <div>
                <img src={location} alt="location" className="location"></img>
                <b>Pune, India</b>
                <h4>Jul 2022 - May 2023</h4>
              </div>
            </div>
            <div className="group-image-location">
              <div className="position">Product Engineering Senior Analyst</div>
              <div>
                <ul class="company-matter">
                <li>
                    Analyzed real-time streaming data received from GCP and
                    generated meaningful graphical analytics for performance
                    monitoring, improving container cleaning efficiency by 25%.
                  </li>
                  <li>
                    Crafted apps to oversee 500K-1M document-data queues,
                    decreasing load time from 35s to 7s and bundle size from 2Mb
                    to 300Kb.
                  </li>
                  
                  <li>
                    Revamped UI components by translating Figma designs into
                    HTML and CSS/SCSS and built interactive elements using
                    JavaScript.
                  </li>
                  <li>
                    Received recognition in the ‘People Making an Impact’ award
                    by completing an escalated fintech application within client
                    deadlines.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* company 3 */}
          <div className="company">
            <div className="group-image-location">
              <div>
                {/* image */}
                <img src={infosys} alt="client" className="company-item-list" />
              </div>
              <div>
                <img src={location} alt="location" className="location"></img>
                <b>Pune, India</b>
                <h4>Nov 2018 - Jul 2021</h4>
              </div>
            </div>
            <div className="group-image-location">
              <div className="position">Senior Systems Engineer</div>
              <div>
                <ul class="company-matter">
                 
                  <li>
                    Expedited the testing of REST APIs using Postman (Automation
                    Testing), minimizing the testing time by 80%, and worked on
                    troubleshooting production bugs, code reviews, and unit
                    tests with Mendix applications.
                  </li>
                  
                  <li>
                    Streamlined collaborative development projects by
                    implementing Git version control, resulting in a 45%
                    reduction in code conflicts.
                  </li>
                  <li>
                    Promoted to Senior Systems Engineer from Systems Engineer
                    and Trainee Engineer respectively.
                  </li>
                  <li>
                    Worked on .NET framework applications using C# and MS SQL
                    server for the backend and Angular 6 for the front end.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="company">
            <img
              src={testimonial}
              alt="testimonial"
              className="testimonial"
            ></img>
          </div> */}
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Lets get in touch!</h1>
        <span className="contactDesc">
          <div>
            <img
              src={connect}
              alt="Example GIF"
              width="300"
              height="150"
              className="coding-girl"
            />
            <h3> sanskrutimanoria@gmail.com</h3>
            <h4> or</h4>
            <h4> drop your message here!</h4>
          </div>
        </span>
        <form className="contactForm" ref={form}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="user_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="user_email"
          />
          <textarea
            className="msg"
            name="message"
            rows={5}
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            value="Send"
            className="submitBtn"
            onClick={(e) => {
              sendEmail(e);
            }}
          >
            Submit
          </button>
          <div className="links">
            <a href="https://www.linkedin.com/in/sanskruti-manoria/">
              <img src={linkedin} alt="linkedIn" className="link" />
            </a>
            <a href="https://github.com/sannskruti">
              <img src={git} alt="github" className="link" />
            </a>
            <a href="https://www.instagram.com/sanskrrutii/">
              <img src={insta} alt="insta" className="link" />
            </a>
          </div>
        </form>
        {/* <div className="links">
            <a href="https://www.linkedin.com/in/sanskruti-manoria/">
              <img src={linkedin} alt="linkedIn" className="link" />
            </a>
            <a href="https://github.com/sannskruti">
              <img src={git} alt="github" className="link" />
            </a>
            <a href="https://www.instagram.com/sanskrrutii/">
              <img src={insta} alt="insta" className="link" />
            </a>
          </div> */}
      </div>
    </section>
  );
};
export default Contact;

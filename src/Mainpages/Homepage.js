import React from "react";
import "../Styles/Homepage.css";
import Skills from "./Skills";
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { themeState } from "../Features/themeSlice";


const Homepage = () => {
  const theme = useSelector(themeState)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="homepage"
    >
      <div className="section-one">
        <div className="section-one-left" style={{ color: theme.fontColor }}>
        <div className="about">
          <div className="sideline"></div>

          <p className="hello">Hello...</p>

          <p className="intro">
            My name is Hemnath Balasubramanian and I am a fresher React Js
            developer from Chennai.
          </p>

          <div className="extra" style={{ color: theme.fontColor }}>
            <p>
              <i
                className="fa-solid fa-angles-right fa-beat"
                style={{ marginRight: "20px" }}
              ></i>
              Made using React Js, SASS, and Framer motion.
            </p>

            <p>
              <i
                className="fa-solid fa-angles-right fa-beat"
                style={{ marginRight: "20px" }}
              ></i>
              Please have a look at my Javascript and React Js projects under
              the projects tab.
            </p>

            <p>
              <i
                className="fa-solid fa-angles-right fa-beat"
                style={{ marginRight: "20px" }}
              ></i>
              This portfolio is also responsive.
            </p>
          </div>
        </div>
        </div>

        <div className="section-one-right">
          <Skills />
        </div>
      </div>

      <div className="section-two">
        <div className="aboutme" style={{ backgroundColor: theme.sectionColor, color: theme.fontColor }}>
          <h1>
            <i className="fa-solid fa-circle fa-beat"></i>Why front-end web
            development and React Js in specific?
          </h1>

          <p>
            I've always had a mouse and keyboard at the end of my hands. When my
            father was done with his work by the evening, he would let me use
            the computer. I grew up watching windows evolve from 95 to XP and
            was fascinated by the change in interface and look with every new
            windows. So a career in the IT field was always in mind.
          </p>

          <p>
            During my one year stint as a language editor at an E-publishing
            firm, I knew I needed a bigger challenge and decided to pursue the
            programming path. I've had a few goes at teaching myself Java and
            Python through youtube, upto creating functions and playing with
            string methods. Due to the lack of a CS degree and exposure to
            different programming fields I wasn't sure which career path would
            suit me until I discovered web development. Furthermore, the react
            ecosystem of making resuable components got me very much hooked up
            with front-end web development. Since then I've been learning HTML,
            CSS, Javascript and React Js through books, Udemy courses by Stephen
            Grider, Maximilian Schwarzmuller and Jonas Schmedtmann, thousands of
            youtube videos, plenty of googling and of course, Stack Overflow. I
            want to further learn web development by getting into the back-end
            and database sides of software engineering by becoming a <b>MERN</b>{" "}
            stack developer (<b>M</b>ongoDB, <b>E</b>xpressJs, <b>R</b>eactJs,{" "}
            <b>N</b>odeJs).
          </p>
        </div>

        <div className="personal-info">
          <h1 style={{ color: theme.fontColor }}>Resume</h1>

          <div className="personal-info-section" style={{ backgroundColor: theme.sectionColor, color: theme.fontColor }}>
            <div className="info-item">
              <p>Name</p>
              <p>Hemnath Balasubramanian</p>
            </div>

            <div className="info-item">
              <p>DOB</p>
              <p>30 Nov 1996</p>
            </div>

            <div className="info-item">
              <p>Place</p>
              <p>Chennai, India</p>
            </div>

            <div className="info-item">
              <p>Languages</p>
              <p>English, Tamil</p>
            </div>

            <div className="info-item">
              <p>Education</p>
              <p>
                B.E Electrical and Electronics <br />
                Engineering with 6.9 CGPA
              </p>
            </div>

            <div className="info-item">
              <p>Alma mater</p>
              <p>MNM Jain Engg. College</p>
            </div>

            <div className="info-item">
              <p>Employment history</p>
              <p>
                1 year(March 2020 - Apr 2021) as a Language Editor at
                <a href="https://www.tnq.co.in/" target="_blank">
                  TNQ Technologies
                </a>
                for the following clients: Karger and SAGE
              </p>
            </div>

            <div className="info-item">
              <p>Technical skills</p>
              <ul>
                <li>
                  <p>React Js</p>
                </li>
                <li>
                  <p>React Redux</p>
                </li>
                <li>
                  <p>Javascript</p>
                </li>
                <li>
                  <p>HTML</p>
                </li>
                <li>
                  <p>CSS</p>
                </li>
                <li>
                  <p>Sass</p>
                </li>
                <li>
                  <p>Bootstrap (familiar)</p>
                </li>
                <li>
                  <p>Java (light exposure)</p>
                </li>
              </ul>
            </div>

            <div className="info-item">
              <p>Non-technical skills</p>
              <ul>
                <li>
                  <p>
                    Good written and <br />
                    verbal communication <br />
                    skills
                  </p>
                </li>
                <li>
                  <p>Analytical skills</p>
                </li>
                <li>
                  <p>Problem solving skills</p>
                </li>
                <li>
                  <p>Attention to detail</p>
                </li>
              </ul>
            </div>

            <div className="info-item">
              <p>Currently learning</p>
              <ul>
                <li>
                  <p>React hooks in detail</p>
                </li>
                <li>
                  <p>Mastering Javascript</p>
                </li>
                <li>
                  <p>Thinking in react</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

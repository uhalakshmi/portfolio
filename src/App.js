import React from "react";
import { Container } from "@mui/material";
import { Element } from "react-scroll";

import MenuBar from "./components/menuBar.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Skill from "./components/skill.js";
import Experience from "./components/experience.js";
import Project from "./components/project.js";
import Contact from "./components/contact.js";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <MenuBar />
      <Container
        maxWidth="lg"
        sx={{ marginTop: "50px", paddingBottom: "40px" }}
      >
        <Element name="home" className="element">
          <Home />
        </Element>
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="skills" className="element">
          <Skill />
        </Element>
        <Element name="experience" className="element">
          <Experience />
        </Element>
        <Element name="projects" className="element">
          <Project />
        </Element>
        <Element name="contact" className="element">
          <Contact />
        </Element>
      </Container>
    </div>
  );
};

export default App;

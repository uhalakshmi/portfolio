import React from "react";
import { Typography, Container, Box } from "@mui/material";
import HTML from "./../assests/html.jpeg";
import CSS from "./../assests/css.png";
import JS from "./../assests/js.png";
import REACT from "./../assests/reactjs.jpeg";
import NODE from "./../assests/node1.jpg";
import EXPRESS from "./../assests/express1.png";
import MONGODB from "./../assests/mongodb.png";
import SQL from "./../assests/sql.png";
import GIT from "./../assests/git.jpeg";
import TS from './../assests/ts.png';
import redux from './../assests/redux.png'
import { Element } from "react-scroll";

const Skill = () => {
  const skills = [
    { name: "HTML", imgSrc: HTML },
    { name: "CSS", imgSrc: CSS },
    { name: "JavaScript", imgSrc: JS },
    {name :"TypeScript", imgSrc :TS},
    { name: "React.js", imgSrc: REACT },
    {name:"Redux", imgSrc:redux},
    { name: "Node.js", imgSrc: NODE },
    { name: "Express.js", imgSrc: EXPRESS },
    { name: "MongoDB", imgSrc: MONGODB },
    { name: "SQL", imgSrc: SQL },
    { name: "Git", imgSrc: GIT },
    
  ];

  return (
    <div>
      <Element name="skills">
        <Container maxWidth="lg">
          <Box sx={{ padding: "40px 10px" }} id="skills">
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationColor: "#444",
                fontFamily: "'Roboto Slab', serif",
              }}
              style={{paddingBottom:"20px"}}
            >
            Skills
            </Typography>

            {/* Skills Display */}
            <Box
              sx={{
                padding: 4,
                border: "1px solid #333",
                borderRadius: 2,
                backgroundColor: "#222",
                minHeight: "200px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                gap: 2,
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              {skills.map((skill, index) => (
                <Box key={index} sx={{ textAlign: "center" }}>
                  <img
                    src={skill.imgSrc}
                    alt={skill.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      marginBottom: "8px",
                    }}
                  />
                  <Typography variant="body2">{skill.name}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Element>
    </div>
  );
};

export default Skill;

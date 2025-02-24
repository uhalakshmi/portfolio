import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Box,
  Grid,
  Button,
  Card,
  CardContent,
  Modal,
} from "@mui/material";
import abbvie from "./../assests/abbvie.jpeg";
import ebay from "./../assests/ebay.png";
import ecommerce from "./../assests/eCommerce.png"

const Project = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = [
          {
            name: "AbbVie OUS Pricing Approval ",
            image: abbvie,
            details: {
              client: "Abbvie",
              category: "Pharma",
              duration: "Jan 2022 - Present",
              technologies:
                "HTML, CSS,JavaScript, TypeScript, React JS, AG-Grid, Unity Design, Redux, Palantir Foundry, Git, Jira",
              description:
                "Developed a responsive web-based platform using React.js, TypeScript and Ag-Grid to streamline pricing and proposal workflows. It allows users to create, manage, and track proposals seamlessly while leveraging dynamic data handling for enhanced efficiency. ",
              responsibilities: [
                "Developed a dynamic web-based application using React.js, AG Grid, and Unity Design components to streamline pricing and proposal workflows.",
                "Designed and implemented user interfaces for proposal creation, management, and tracking, ensuring an intuitive and seamless user experience.",
                "Integrated AG Grid for efficient data handling, enabling dynamic display and interaction with large datasets.",
                "Integrated Palantir Foundry Backend methods for efficient data retrieval, processing, and storage, ensuring seamless integration between frontend and backend.",
                "Collaborated with cross-functional teams to ensure accurate implementation of pricing strategies and business workflows.",
                "Enhanced application scalability and performance through modular design and reusable components.",
                "Implemented workflows for managing pricing inputs, ensuring consistency and accuracy across proposals.",
                "Conducted testing and debugging to maintain high-quality code and optimal performance.",
                "Provided support for UI/UX enhancements to align with user feedback and business requirements.",
                "Refactored and optimized code to improve application performance and maintainability.",

              ],
            },
          },
          {
            name: "eBay Ecommerce Application",
            image: ebay,
            details: {
              client: "eBay",
              category: "Ecommerce",
              duration: "Aug 2022 - Dec 2023",
              technologies:
                "HTML, JavaScript, CSS, React Js, Redux, Postman, Bootstrap, Jest, Git",
              description:
                "Developed a Web Application for eBay Using React JS. It is a global online marketplace, where Individuals and business can buy and sell a wide range of products and services. The platform operates as both an auction and fixed-price marketplace, allowing sellers to list items for sale, while buyers can bid on or purchase them directly. eBay connects millions of buyers and sellers worldwide, offering categories that include electronics, fashion, home goods, collectibles.",
              responsibilities: [
                "Designed and implemented new user interfaces to enhance user experience and accessibility.",
                "Integrated new features to enhance application capabilities, driven by business requirements and user feedback.",
                "Integrated Rest API’S ensuring a seamless transition of core functionalities and improved user experience.  ",
                "Implemented Unit Testing and Integration Testing to enhance the application performance.  ",
                "Refactored and optimized code to enhance application performance, reducing load times and boosting efficiency.",
                "Analyzed and resolved production issues to maintain application stability and ensure a seamless user experience. ",
                "Practiced in Agile ceremonies, such as sprint planning and retrospectives, to ensure smooth project progress. ",
                "Designed and implemented a new high-visibility responsive user interface screen, enhancing the project’s usability and visual appeal.",
                "Enhanced existing project functionality by integrating and deploying new features, aligning with project goals and client requirements. ",
                "Identified, tracked, and resolved bugs to ensure the application’s stability and performance.   ",
                "Integrated APIs to facilitate seamless data exchange and improve application functionality.   ",
                "Utilized Splunk for real-time monitoring and debugging of production incidents, ensuring rapid issue resolution and system stability.  ",
                "Created comprehensive technical documentation to support ongoing maintenance and future development.  ",

              ],
            },
          },
          {
            name: "LiveStock",
            image: ecommerce,
            details: {
              client: "Internal",
              category: "Ecommerce",
              duration: "Feb 2022 - July 2022",
              technologies:
                "HTML, JavaScript, CSS, React Js, Redux, Postman, Bootstrap, Jest, Git",
              description:
                "This platform connects farmers, breeders, and buyers in the livestock industry. Browse and purchase a wide range of livestock, including cattle, poultry, goats, and more. Explore detailed listings and view health records. Whether you are a farmer seeking quality animals or a buyer looking to invest, livestock platform simplifies the process.",
              responsibilities: [
                `Implemented responsive and user friendly React components, ensuring high-quality code and optimal performance.`,
                `Designed and implemented server-side logic using Node.js and Express.js, ensuring efficient and scalable code.`,
                `Created and managed RESTful APIs to enable seamless communication between the client and server.`,
                `Designed, developed and optimized MongoDB database, including schema design and indexing.`,
                `Implemented data models and performed CRUD operations to manage application data effectively.`,
                `Utilized Debugging tools and technologies to identify and resolve issues in both development and production environments.`,
                `Conducted code reviews, identified and fixed bugs, and optimized application performance.`,
                `Implemented continuous integration and development (CI/CD) practices to enhance development workflow and productivity.`,
                `Provided clear and concise technical documentation to facilitate knowledge sharing.`
              ],
            },
          },
        ];
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);
  const handleReadMore = (index) => {
    setActiveProject(index);
  };

  const handleClose = () => {
    setActiveProject(null);
  };
  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <Box sx={{ padding: "10px 10px" }} id="projects">
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              textDecorationColor: "#444",
              fontFamily: "'Roboto Slab', serif",
              paddingBottom: "30px",
            }}
          >
            Projects
          </Typography>
          <Grid container spacing={3}>
            {projects && projects.length > 0 ? (
              projects.map((project, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ backgroundColor: "#222", color: "#fff" }}>
                    <CardContent>
                      <img
                        src={project.image}
                        alt={project.name}
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          marginBottom: "16px",
                        }}
                      />
                      <Typography variant="h5">{project.name}</Typography>
                      <Button
                        onClick={() => handleReadMore(index)}
                        variant="contained"
                        sx={{
                          backgroundColor: "#444",
                          color: "#fff",
                          marginTop: "10px",
                        }}
                      >
                        Read More
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Modal for Project Details */}
                  <Modal
                    open={activeProject === index}
                    onClose={handleClose}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "80%",
                        maxHeight: "80%",
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "8px",
                        padding: "20px",
                        overflowY: "auto",
                      }}
                    >
                      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
                        {project.name}
                      </Typography>
                      <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                        <strong>Client:</strong> {project.details.client}
                      </Typography>
                      <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                        <strong>Category:</strong> {project.details.category}
                      </Typography>
                      <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                        <strong>Duration:</strong> {project.details.duration}
                      </Typography>
                      <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                        <strong>Technologies:</strong>{" "}
                        {project.details.technologies}
                      </Typography>
                      <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                        <strong>Description:</strong>{" "}
                        {project.details.description}
                      </Typography>
                      <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                        <strong>Responsibilities:</strong>
                        <ul>
                          {project.details.responsibilities.map(
                            (point, idx) => (
                              <li key={idx}>{point}</li>
                            )
                          )}
                        </ul>
                      </Typography>
                      <Button
                        onClick={handleClose}
                        variant="contained"
                        sx={{
                          backgroundColor: "#555",
                          color: "#fff",
                          marginTop: "10px",
                        }}
                      >
                        Close
                      </Button>
                    </Box>
                  </Modal>
                </Grid>
              ))
            ) : (
              <Typography variant="body1" color="textSecondary">
                No projects available.
              </Typography>
            )}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Project;

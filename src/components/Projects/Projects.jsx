import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./Projects.css";
import MobileApps from "./MobileApps";

function Projects() {
  return (
    <Grid
      container
      justify="center"
      className="projects-container"
      direction="column"
      spacing={2}
    >
      <MobileApps />
    </Grid>
  );
}

export default Projects;

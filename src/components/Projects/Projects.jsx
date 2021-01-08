import { Grid } from "@material-ui/core";
import React from "react";
import "./Projects.css";
import MobileApps from "./Mobile/MobileApps";
import NonMobileProjects from "./NonMobile/NonMobileProjects";

function Projects() {
  return (
    <div id="projects">
      <Grid
        container
        justify="center"
        className="projects-container"
        spacing={1}
      >
        <MobileApps />
        <NonMobileProjects />
      </Grid>
    </div>
  );
}

export default Projects;
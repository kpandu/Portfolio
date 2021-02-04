import { Grid } from "@material-ui/core";
import React from "react";
import "./Projects.css";
import MobileApps from "./Mobile/MobileApps";
import NonMobileProjects from "./NonMobile/NonMobileProjects";
import LargeHeader from "../Shared/LargeHeader";
import Paragraph from "../Shared/Paragraph";
import CenteredGridContainer from "../Shared/CenteredGridContainer";

function Projects() {
  return (
    <div id="projects" className="project">
      <CenteredGridContainer>
        <LargeHeader>
          <h1 className="large-header project-top-text">projects.</h1>
        </LargeHeader>
      </CenteredGridContainer>
      <p className="square-paragraph project-top-text">
        <Paragraph>mobile / vision / ml / full-stack</Paragraph>
      </p>
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

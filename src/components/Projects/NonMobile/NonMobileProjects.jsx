import React from "react";
import LargeProjectCard from "./LargeProjectCard";
import "./NonMobileProjects.css";
import SmallProjectCard from "./SmallProjectCard";
import { Grid } from "@material-ui/core";
import CenteredGridContainer from "../../Shared/CenteredGridContainer";
import CustomContainer from "../../Shared/CustomContainer";
import projects from "./projects";

const MOBILE_PROJECTS_LENGTH = 4;
function NonMobileProjects() {
  return (
    <>
      {projects.map((project, i) => (
        <LargeProjectCard
          {...project}
          index={i + 4}
          flip={i % 2 == 1}
          key={`Non-Mobile-Project-${i}`}
        />
      ))}
    </>
  );
}

export default NonMobileProjects;

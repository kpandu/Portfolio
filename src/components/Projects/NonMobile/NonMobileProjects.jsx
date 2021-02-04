import React from "react";
import LargeProjectCard from "./LargeProjectCard";
import "./NonMobileProjects.css";
import projects from "./projects";

const MOBILE_PROJECTS_LENGTH = 4;
function NonMobileProjects() {
  return (
    <>
      {projects.map((project, i) => (
        <LargeProjectCard
          {...project}
          index={i + MOBILE_PROJECTS_LENGTH}
          key={`Non-Mobile-Project-${i}`}
        />
      ))}
    </>
  );
}

export default NonMobileProjects;

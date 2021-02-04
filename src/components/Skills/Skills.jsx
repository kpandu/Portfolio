import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./Skills.css";
import RadialStats from "./RadialStats";
import LargeHeader from "../Shared/LargeHeader";
import Paragraph from "../Shared/Paragraph";

function Skills() {
  return (
    <div id="skills">
      <Grid container justify="center" alignItems="stretch">
        <Grid
          item
          container
          justify="center"
          alignContent="center"
          xs={12}
          md={6}
          className="skills-left-bg max-height"
        >
          <Container maxWidth="sm">
            <h1 className="large-header ">
              <LargeHeader>skills.</LargeHeader>
            </h1>
            <p className="square-paragraph ">
              <Paragraph>
                What kind of programer am I? Superficially, I am a full-stack
                developer, however, deep down I have a wide skillset. For
                example, after taking a machine learning class, I conducted
                undergraduate research using CNNs and YOLO object detection to
                detect distracted/drowsy driving. Then in computer vision I
                worked on implementing several algorithms such as content aware
                seam carving to reduce the size of an image without cropping.
                Furthermore, I took a cybersecurity course on "ethical" hacking
                which taught a bunch of the ways to invade and break into
                applications. These are a couple of examples of how I am a
                full-stack developer with a wide skillset.
              </Paragraph>
            </p>
          </Container>
        </Grid>

        <Grid
          container
          xs={12}
          md={6}
          justify="center"
          alignContent="center"
          className="light-light-grey-bg"
        >
          <RadialStats />
        </Grid>
      </Grid>
    </div>
  );
}

export default Skills;

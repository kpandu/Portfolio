import React from "react";
import { Grid } from "@material-ui/core";
import "./About.css";
import CustomContainer from "../Shared/CustomContainer";

function About() {
  return (
    <div id="about">
      <CustomContainer height="70vh" maxWidth="lg">
        <Grid container justify="space-evenly" spacing={4}>
          <Grid
            container
            item
            direction="column"
            xs={12}
            md={6}
            justify="center"
            alignContent="flex-start"
          >
            <p className="square-paragraph about-paragraph">
              Hi, I'm Krishan. I just graduated from the University of Maryland,
              College Park with a B.S. in Computer Science. After interning at
              Boeing I&A and then Amazon, I have learned a lot about the
              software development lifecycle and am excited to apply many skills
              at my job at Amazon as a SWE. A couple side interests include
              playing the piano and building computers (audiophile coming soon).
            </p>
          </Grid>
          <Grid item container xs={12} md={6} justify="flex-end">
            <h1 className="large-header">about me.</h1>
          </Grid>
          <Grid item container xs={12} container alignContent="center">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/33/266/521/nier-ultrawide-dark-hd-wallpaper-preview.jpg"
              className="about-avatar-portrait"
            />
          </Grid>
        </Grid>
      </CustomContainer>
    </div>
  );
}

export default About;

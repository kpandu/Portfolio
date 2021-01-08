import React from "react";
import { Grid } from "@material-ui/core";
import "./About.css";
import CustomContainer from "../Shared/CustomContainer";

function About() {
  return (
    <CustomContainer height="60vh">
      <Grid container justify="space-evenly" spacing={4}>
        <Grid item xs={12} md={6} className="flex-center">
          <img
            src={require("../../assets/me.png").default}
            className="portrait"
          />
        </Grid>
        <Grid
          container
          item
          direction="column"
          xs={12}
          md={6}
          justify="center"
          alignContent="flex-start"
        >
          <h1 className="large-header">About Me</h1>
          <p className="square-paragraph">
            Hi, I'm Krishan. I just graduated from the University of Maryland,
            College Park with a B.S. in Computer Science alongside an upper
            level concentration in mathematics. After interning at Boeing I&A
            and then Amazon, I have learned a lot about the software development
            lifecycle and am excited to apply many skills at my job at Amazon as
            a Software Development Engineer. A couple side interests include
            playing the piano and building computers (audiophile coming soon).
          </p>
        </Grid>
      </Grid>
    </CustomContainer>
  );
}

export default About;

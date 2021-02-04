import { Grid } from "@material-ui/core";
import { easePolyOut } from "d3-ease";
import React from "react";
import InView from "react-intersection-observer";
import { Spring } from "react-spring/renderprops";
import CustomContainer from "../Shared/CustomContainer";
import LargeHeader from "../Shared/LargeHeader";
import Paragraph from "../Shared/Paragraph";
import "./About.css";

function About() {
  return (
    <div id="about">
      <CustomContainer height="70vh" maxWidth="lg">
        <InView style={{ width: "100%" }}>
          {({ inView, ref, entry }) => (
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
                  <Paragraph>
                    Hi, I'm Krishan. I just graduated from the University of
                    Maryland, College Park with a B.S. in Computer Science.
                    After interning at Boeing I&A and then Amazon, I have
                    learned a lot about the software development lifecycle and
                    am excited to apply many skills at my job at Amazon as a
                    SWE. A couple side interests include playing the piano and
                    building computers (audiophile coming soon).
                  </Paragraph>
                </p>
              </Grid>
              <Grid item container xs={12} md={6} justify="flex-end">
                <LargeHeader>
                  <h1 className="large-header">about me.</h1>
                </LargeHeader>
              </Grid>
              <Grid item container xs={12} container alignContent="center">
                <Spring
                  config={{ duration: 1500, easing: easePolyOut }}
                  to={{
                    width: inView ? "100%" : "0%",
                    opacity: inView ? 1 : 0,
                    greyscaleVal: inView ? 0 : 1,
                  }}
                >
                  {(props) => (
                    <div
                      className="about-parallax"
                      style={{
                        ...props,
                        filter: `grayscale(${props.greyscaleVal})`,
                      }}
                      ref={ref}
                    />
                  )}
                </Spring>
              </Grid>
              <Grid item container xs={12} container alignContent="center">
                <p>2020 WFH Setup</p>
              </Grid>
            </Grid>
          )}
        </InView>
      </CustomContainer>
    </div>
  );
}

export default About;

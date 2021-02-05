import { Container, Grid } from "@material-ui/core";
import React from "react";
import { InView } from "react-intersection-observer";
import { Spring } from "react-spring/renderprops";
import LargeHeader from "../Shared/LargeHeader";
import "./Contact.css";
import CustomContainer from "../Shared/CustomContainer";

export default function Contact() {
  return (
    <CustomContainer className="contact" id="contact" height="100vh">
      <Grid
        container
        style={{
          position: "relative",
        }}
        alignItems="center"
      >
        <InView>
          {({ inView, ref, entry }) => (
            <Spring
              delay={1000}
              config={{ duration: 800 }}
              to={{ opacity: inView ? 1 : 0 }}
            >
              {({ opacity }) => (
                <div
                  ref={ref}
                  style={{
                    width: "120vw",
                    height: "100vh",
                    left: 0,
                    top: 0,
                    position: "absolute",
                    backgroundColor: "white",
                    opacity,
                  }}
                ></div>
              )}
            </Spring>
          )}
        </InView>

        <Container>
          <Grid
            container
            style={{ margin: "0" }}
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={8}>
              <h1 className="large-header contact-title">
                <LargeHeader>
                  <span>many more</span>
                  <span>changes to come...</span>
                </LargeHeader>
              </h1>
            </Grid>
          </Grid>

          <Grid
            container
            style={{ marginTop: "5%", marginLeft: "0%" }}
            justify="flex-end"
            alignItems="flex-end"
            direction="column"
          >
            <Grid item container direction="column" xs={4}>
              <InView>
                {({ inView, ref, entry }) => (
                  <Spring
                    delay={1000}
                    config={{ duration: 800 }}
                    to={{ opacity: inView ? 1 : 0 }}
                  >
                    {({ opacity }) => (
                      <>
                        <p className="contact-description">Email:</p>
                        <a
                          onClick={() =>
                            (window.location.href =
                              "mailto:krishan103@hotmail.com")
                          }
                          className="contact-link"
                        >
                          krishan103@hotmail.com
                        </a>
                        <p className="contact-description">Social:</p>
                        <a className="contact-link">Github</a>
                        <a className="contact-link">LinkedIn</a>
                      </>
                    )}
                  </Spring>
                )}
              </InView>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </CustomContainer>
  );
}

import { Container, Grid } from "@material-ui/core";
import React from "react";
import { InView } from "react-intersection-observer";
import { Spring } from "react-spring/renderprops";
import "./Contact.css";

export default function Contact() {
  return (
    <div style={{ background: "black" }} id="contact">
      <Grid
        container
        style={{
          minHeight: "100vh",
          position: "relative",
        }}
        alignItems="center"
      >
        <InView>
          {({ inView, ref, entry }) =>
            inView && (
              <Spring
                delay={1000}
                config={{ duration: 800 }}
                to={{ opacity: inView ? 1 : 0 }}
              >
                {({ opacity }) => (
                  <div
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
            )
          }
        </InView>

        <Container>
          <Grid
            container
            style={{ margin: "0" }}
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={6}>
              <h1 id="title">
                many more changes <br />
                to come...
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
            <Grid item container direction="column" xs={6}>
              <h1 id="contact-description">
                Made with ReactJS. <br />
                <br />
                Krishan Panduwawala
              </h1>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

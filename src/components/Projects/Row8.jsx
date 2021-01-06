import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import CustomContainer from "../Shared/CustomContainer";

export default class Row6 extends Component {
  render() {
    return (
      <CustomContainer maxWidth="xl" className="project-container">
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid
            item
            container
            justify="center"
            alignContent="center"
            md={4}
            xs={12}
          >
            <img
              src={require("../../assets/SOL1.PNG")}
              className="project-site"
            />
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignContent="center"
            md={4}
            xs={12}
          >
            <img
              src={require("../../assets/sol2-1.PNG")}
              className="project-site"
            />
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignContent="center"
            md={4}
            xs={12}
          >
            <img
              src={require("../../assets/sol2-4.PNG")}
              className="project-site"
            />
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignContent="center"
            md={4}
            xs={12}
          >
            <img
              src={require("../../assets/sol2-2.PNG")}
              className="project-site"
            />
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignContent="center"
            md={4}
            xs={12}
          >
            <img
              src={require("../../assets/sol2-3.PNG")}
              className="project-site"
            />
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignContent="center"
            md={4}
            xs={12}
          >
            <img
              src={require("../../assets/SOL4.jpg")}
              className="project-site"
            />
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignContent="center"
            md={4}
            xs={12}
          >
            <img
              src={require("../../assets/midnight-1.PNG")}
              className="project-site"
            />
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignContent="center"
            md={4}
            xs={12}
          >
            <img
              src={require("../../assets/midnight-2.PNG")}
              className="project-site"
            />
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignContent="center"
            md={4}
            xs={12}
          >
            <img
              src={require("../../assets/midnight-3.PNG")}
              className="project-site"
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            justify="center"
            alignContent="center"
            direction="column"
          >
            <h1 className="project-header">Android/IOS Social Media App</h1>
            <p className="project-body ">
              Through Tensorflow and CV2, a convolutional nerual network using
              transfer learning is trained to learn hand gestures and induce
              media controls. Below are the gestures: No Hand: Pause Music after
              6 seconds of inactivity. Music will resume automatically upon hand
              visibility; Fist: Play/Pause ; Thumb Out: Back ; Pinky Out: Skip ;
              Normal: Do Nothing
            </p>
          </Grid>
        </Grid>
      </CustomContainer>
    );
  }
}

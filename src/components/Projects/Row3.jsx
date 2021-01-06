import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import CustomContainer from "../Shared/CustomContainer";
import CustomGridItemBody from "./CustomGridItemBody";

export default class Row2 extends Component {
  render() {
    return (
      <CenteredGridContainer spacing={2} alignContent="stretch">
        <Grid
          item
          md={6}
          xs={12}
          container
          direction="column"
          className="project-text-container"
        >
          <CustomGridItemBody className="project-r3-c1">
            <div>
              <h1 className="project-header">Android/IOS Social Media App</h1>
              <p className="project-body">
                Through Tensorflow and CV2, a convolutional nerual network using
                transfer learning is trained to learn hand gestures and induce
                media controls. Below are the gestures: No Hand: Pause Music
                after 6 seconds of inactivity. Music will resume automatically
                upon hand visibility; Fist: Play/Pause ; Thumb Out: Back ; Pinky
                Out: Skip ; Normal: Do Nothing
              </p>
            </div>
          </CustomGridItemBody>
        </Grid>
        <Grid
          container
          item
          md={6}
          xs={12}
          justify="center"
          alignContent="center"
        >
          <CustomGridItemBody className="project-r3-c2">
            <video
              muted="muted"
              autoPlay
              preload="auto"
              src={require("../../assets/MediaCNN.mp4")}
              loop
              controls
              type="video/mp4"
              className="project-large-video"
            ></video>
          </CustomGridItemBody>
        </Grid>
      </CenteredGridContainer>
    );
  }
}

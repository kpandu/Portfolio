import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import CustomContainer from '../Shared/CustomContainer';
import CustomGridItemBody from './CustomGridItemBody';

export default class Row9 extends Component {
  render() {
    return (
      <Grid
        container
        justify="flex-start"
        justify="space-between"
        alignItems="stretch"
      >
        <Grid container item xs={12} justify="center" alignContent="center">
          <CustomGridItemBody className="project-r9-c1">
            <video
              muted="muted"
              autoPlay
              preload="auto"
              src={require('../../assets/carve.mp4')}
              loop
              controls
              type="video/mp4"
              className="project-carve"
            ></video>
          </CustomGridItemBody>
        </Grid>
        <CustomGridItemBody xs={12} container className="project-r9-c2">
          <Grid item md={6} xs={12} container justify="center">
            <h1 className="project-header">Android/IOS Social Media App</h1>
          </Grid>
          <Grid item md={6} xs={12} container justify="center">
            <p className="project-body">
              Through Tensorflow and CV2, a convolutional nerual network using
              transfer learning is trained to learn hand gestures and induce
              media controls. Below are the gestures: No Hand: Pause Music after
              6 seconds of inactivity. Music will resume automatically upon hand
              visibility; Fist: Play/Pause ; Thumb Out: Back ; Pinky Out: Skip ;
              Normal: Do Nothing
            </p>
          </Grid>
        </CustomGridItemBody>
      </Grid>
    );
  }
}

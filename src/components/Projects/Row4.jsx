import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import CustomContainer from '../Shared/CustomContainer';
import CustomGridItemBody from './CustomGridItemBody';

export default class Row4 extends Component {
  render() {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={2}
        alignItems="stretch"
      >
        <Grid
          item
          xs={12}
          md={6}
          container
          direction="column"
          className="project-text-container"
        >
          <CustomGridItemBody className="project-r4-c1">
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
        <CustomGridItemBody xs={12} md={6}>
          <CustomGridItemBody className="project-r4-c2">
            <img
              src={require('../../assets/crystal-left.png')}
              type="video/mp4"
              className="project-left"
            />
            <img
              src={require('../../assets/crystal-right.png')}
              type="video/mp4"
              className="project-right"
            />
          </CustomGridItemBody>
        </CustomGridItemBody>
      </Grid>
    );
  }
}

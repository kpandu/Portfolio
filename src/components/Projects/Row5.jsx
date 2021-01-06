import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import CustomContainer from '../Shared/CustomContainer';
import CustomGridItemBody from './CustomGridItemBody';

export default class Row6 extends Component {
  render() {
    return (
      <Grid
        container
        justify="flex-start"
        justify="space-between"
        alignItems="stretch"
        spacing={2}
      >
        <CustomGridItemBody xs={12} md={6}>
          <div className="project-r5-c1"></div>
        </CustomGridItemBody>

        <CustomGridItemBody xs={12} md={6}>
          <div className="project-r5-c2"></div>
        </CustomGridItemBody>
        <Grid container item xs={12} justify="center" alignContent="center">
          <CustomGridItemBody className="project-r5-c3">
            <img
              src={require('../../assets/panorama.png')}
              className="project-panorama "
            />
          </CustomGridItemBody>
        </Grid>
        <CustomGridItemBody xs={12}>
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

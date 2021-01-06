import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import CustomContainer from '../Shared/CustomContainer';
import CustomGridItemBody from './CustomGridItemBody';

export default class Row7 extends Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid
          item
          container
          md={6}
          xs={12}
          justify="center"
          alignContent="center"
          alignItems="stretch"
        >
          <CustomGridItemBody
            className="project-r7-c1-1"
            alignItems="stretch"
            justify="center"
            alignContent="space-around"
          >
            <Grid item xs={12}>
              <img
                src={require('../../assets/flappy.png')}
                className="project-rounded-img project-crystal-img"
              />
            </Grid>
            <Grid
              item
              container
              justify="center"
              alignContent="center"
              xs={12}
              className="project-r7-c1-2"
            >
              <div>
                <h1 className="project-header">Android/IOS Social Media App</h1>
                <p className="project-body">
                  Through Tensorflow and CV2, a convolutional nerual network
                  using transfer learning is trained to learn hand gestures and
                  induce media controls. Below are the gestures: No Hand: Pause
                  Music after 6 seconds of inactivity. Music will resume
                  automatically upon hand visibility; Fist: Play/Pause ; Thumb
                  Out: Back ; Pinky Out: Skip ; Normal: Do Nothing
                </p>
              </div>
            </Grid>
          </CustomGridItemBody>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          container
          justify="center"
          alignContent="center"
        >
          <CustomGridItemBody className="project-r7-c2">
            <img
              src={require('../../assets/pong.png')}
              className="project-r5-c3 project-rounded-img"
            />
          </CustomGridItemBody>
        </Grid>
      </Grid>
    );
  }
}

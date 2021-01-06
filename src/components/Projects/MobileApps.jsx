import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import "./MobileApps.css";
import TwoHalfProjectCard from "./TwoHalfProjectCard";
import FullProjectCard from "./FullProjectCard";
import CenteredGridContainer from "../Shared/CenteredGridContainer";

export default class MobileApps extends Component {
  render() {
    return (
      <>
        <TwoHalfProjectCard
          title="Android/IOS Social Media App"
          description="This is a social media app similar to Instagram, which was made with React Native & Firebase. Emulates much of the core features of a social media app such as liking, commenting, posting, following, and profile viewing."
          textClassName="mobile-apps-r1-c1"
          bodyClassName="mobile-apps-r1-c2"
          body={
            <video
              muted="muted"
              autoPlay
              preload="auto"
              src={require("../../assets/social_cropped.mp4").default}
              loop
              controls
              type="video/mp4"
              className="mobile-apps-phone-1"
            ></video>
          }
        />
        <TwoHalfProjectCard
          title="Tasker"
          description="Tasker is a task manager app made for Android. It uses Firebase for authentication and database storage. Made using Java."
          bodyClassName="mobile-apps-r2-c1"
          textClassName="mobile-apps-r2-c2"
          body={
            <video
              muted="muted"
              autoPlay
              preload="auto"
              src={require("../../assets/tasker.mp4").default}
              loop
              controls
              type="video/mp4"
              className="mobile-apps-phone-2"
            ></video>
          }
          flipHorizontal
        />

        <FullProjectCard
          title="Storyboard"
          description="App made with David Eluma, Ashan Panduwawala, and myself that allows writers to collaborate and provide feedback on each other's work. Made with kotlin and utilized several libraries such as Picasso."
          body={
            <Grid
              container
              justify="space-evenly"
              alignContent="center"
              spacing={2}
              className="mobile-apps-storyboard-container"
            >
              <CenteredGridContainer md={4}>
                <img
                  src={require("../../assets/story-login.png").default}
                  className="mobile-apps-storyboard-img1"
                />
              </CenteredGridContainer>
              <CenteredGridContainer md={4}>
                <img
                  src={require("../../assets/story-home.png").default}
                  className="mobile-apps-storyboard-img2"
                />
              </CenteredGridContainer>
              <CenteredGridContainer md={4}>
                <img
                  src={require("../../assets/story-post.png").default}
                  className="mobile-apps-storyboard-img3"
                />
              </CenteredGridContainer>
            </Grid>
          }
          className="mobile-apps-storyboard"
        />
      </>
    );
  }
}

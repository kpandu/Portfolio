import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import "./MobileApps.css";
import TwoHalfProjectCard from "./TwoHalfProjectCard";
import FullProjectCard from "../NonMobile/SmallProjectCard";
import CenteredGridContainer from "../../Shared/CenteredGridContainer";
import FullMobileCard from "./FullMobileCard";

export default class MobileApps extends Component {
  render() {
    return (
      <>
        <TwoHalfProjectCard
          title="Android/IOS Social Media App"
          description="This is a social media app similar to Instagram, which was made with React Native & Firebase. Emulates much of the core features of a social media app such as liking, commenting, posting, following, and profile viewing."
          textClassName="mobile-apps-r1-c1"
          bodyClassName="mobile-apps-r1-c2"
          index="1"
          body={
            <video
              muted="muted"
              autoPlay
              preload="auto"
              src={require("../../../assets/social_cropped.mp4").default}
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
          index="2"
          body={
            <video
              muted="muted"
              autoPlay
              preload="auto"
              src={require("../../../assets/tasker.mp4").default}
              loop
              controls
              type="video/mp4"
              className="mobile-apps-phone-2"
            ></video>
          }
          flipHorizontal
        />

        <FullMobileCard
          title="Storyboard"
          description="App made with David Eluma, Ashan Panduwawala, and myself that allows writers to collaborate and provide feedback on each other's work. Made with kotlin alongside several libraries such as Picasso and Firebase."
          index="3"
          body={
            <Grid
              container
              justify="center"
              alignContent="center"
              spacing={4}
              className="mobile-apps-storyboard-container"
            >
              <Grid item md={4} sm={6} xs={12}>
                <img
                  src={require("../../../assets/story-login.png").default}
                  className="mobile-apps-storyboard-img1"
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <img
                  src={require("../../../assets/story-home.png").default}
                  className="mobile-apps-storyboard-img2"
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <img
                  src={require("../../../assets/story-post.png").default}
                  className="mobile-apps-storyboard-img3"
                />
              </Grid>
            </Grid>
          }
          className="mobile-apps-storyboard"
        />
      </>
    );
  }
}

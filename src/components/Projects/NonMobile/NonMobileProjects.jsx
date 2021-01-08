import React from "react";
import SmallProjectCard from "./SmallProjectCard";
import "./NonMobileProjects.css";
import FullProjectCard from "../FullProjectCard";
import { Grid } from "@material-ui/core";
import CenteredGridContainer from "../../Shared/CenteredGridContainer";
function NonMobileProjects() {
  return (
    <>
      <SmallProjectCard
        title="Flappy Bird"
        description="Making games may not be my specialization, yet they teach so much. Through creating Flappy Bird in Java, I took my first steps into the language."
        img={require("../../../assets/flappy.png").default}
      />
      <SmallProjectCard
        title="Pong"
        description="Made pong to learn python."
        img={require("../../../assets/pong.png").default}
      />
      <SmallProjectCard
        title="Canny Edge Detection"
        description="Canny edge detection using only numpy and pillow. First a gaussian blur filter is applied. Then gradient filters are applied. The the resulting matricies are used to compute edge strength and edge orientation. These are used to conduct non maximum suppression yielding the above image after a threshold is applied."
        img={require("../../../assets/canny.png").default}
      />
      <FullProjectCard
        title="Crystal Sky"
        description="Given a picture of the sky, the program will use CV2 to filter for stars, then using these stars as coordinates and points found through canny edge detection, Delaunay triangulation is applied creating an artistic representation of the image. Edge detection preserves the outline of non-sky elements when triangulated."
        body={
          <Grid
            container
            justify="space-evenly"
            alignContent="center"
            spacing={8}
          >
            <CenteredGridContainer xs={12} md={6}>
              <img
                src={require("../../../assets/crystal-left.png").default}
                className="non-mobile-projects-crystal-img"
              />
            </CenteredGridContainer>
            <CenteredGridContainer xs={12} md={6}>
              <img
                src={require("../../../assets/crystal-right.png").default}
                className="non-mobile-projects-crystal-img"
              />
            </CenteredGridContainer>
          </Grid>
        }
        className="non-mobile-projects-crystal"
      />
      <SmallProjectCard
        title="Panorama Stitcher"
        description="Using RANSAC on the potential candidates from Harris corner detection, the best matches are found between the 2 images to be stitched. Then the transformation between the 2 images is computed which is used to transform and stich all pixels from the left image to the right image."
        img={require("../../../assets/panorama.png").default}
        customBreakpoints={{ xs: 12, md: 8 }}
      />
      <SmallProjectCard
        title="Sol"
        description="I was blinded by thinking that overly flashy looks good. Before I realized that I was wrong, I made the above graphic which was going to be the at the very top of this website. It is a real-time interactive 3D animation in space made with BabylonJS. Project Midnight is a nice balance between flashy and simple."
        video={require("../../../assets/sol3video.mp4").default}
      />

      <SmallProjectCard
        title="V1 Parallax"
        description="I was really interested in parallax and wanted to learn React, therefore I combined the 2 into the site above. It built a strong foundation in states and functional/class components. The site features a parallax downfall from space to the bottom of the sea."
        img={require("../../../assets/sol2-1.PNG").default}
      />
      <SmallProjectCard
        img={require("../../../assets/sol2-3.PNG").default}
        flipDisabled
      />
      <SmallProjectCard
        img={require("../../../assets/sol2-4.PNG").default}
        flipDisabled
      />
      <FullProjectCard
        title="Media Controller CNN"
        description="Through Tensorflow and CV2, a convolutional nerual network using transfer learning is trained to learn hand gestures and induce media controls. Below are the gestures:
        No Hand: Pause Music after 6 seconds of inactivity. Music will resume automatically upon hand visibility.
        Fist: Play/Pause
        Thumb Out: Back
        Pinky Out: Skip
        Normal: Do Nothing"
        body={
          <Grid container justify="center" alignContent="center">
            <CenteredGridContainer>
              <video
                src={require("../../../assets/MediaCNN.mp4").default}
                className="non-mobile-projects-cnn-video"
                muted="muted"
                autoPlay
                preload="auto"
                loop
                type="video/mp4"
              />
            </CenteredGridContainer>
          </Grid>
        }
        className="non-mobile-projects-crystal"
      />
      <SmallProjectCard
        title="V2 Minimal"
        description="This website was the one 2 versions before the current one. It gave me the inspiration for really bold text, and incorporating a simple design. Its over-simplicity led to its downfall, which led to the more daring yet simple Project Midnight."
        img={require("../../../assets/SOL4.jpg").default}
      />
      <SmallProjectCard
        title="V3 Midnight"
        description="Built a simple dark themed portfolio that preceded the current site."
        img={require("../../../assets/midnight-1.PNG").default}
      />
      <SmallProjectCard
        img={require("../../../assets/midnight-2.PNG").default}
        flipDisabled
      />
    </>
  );
}

export default NonMobileProjects;

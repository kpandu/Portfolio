import React, { useState } from "react";
import CenteredGridContainer from "../../Shared/CenteredGridContainer";
import { useSpring, animated as a } from "react-spring";

import "./SmallProjectCard.css";
import { Grid } from "@material-ui/core";

function SmallProjectCard({
  title,
  img,
  description,
  customBreakpoints = {},
  video,
  flipDisabled,
}) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(800px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  console.log(customBreakpoints);
  return (
    <CenteredGridContainer
      xs={customBreakpoints.xs || 12}
      md={customBreakpoints.md || 4}
    >
      <div
        onClick={() => set((state) => (flipDisabled ? false : !state))}
        className="small-project-card-img-container"
        style={{ cursor: flipDisabled ? "auto" : "pointer" }}
      >
        {img ? (
          <a.img
            className="small-project-card-flip  small-project-card-front"
            style={{
              opacity: opacity.interpolate((o) => 1 - o),
              transform,
            }}
            src={img}
          />
        ) : (
          <a.video
            src={video}
            className="small-project-card-flip  small-project-card-front small-project-card-video"
            style={{
              opacity: opacity.interpolate((o) => 1 - o),
              transform,
            }}
            muted="muted"
            autoPlay
            preload="auto"
            loop
            type="video/mp4"
          />
        )}
        <a.div
          class="small-project-card-flip small-project-card-back"
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          }}
        >
          <CenteredGridContainer className="small-project-card-back-text">
            <Grid container alignItems="space-between" direction="column">
              <h1 className="project-header">{title}</h1>
              <p className="project-body">{description}</p>
            </Grid>
          </CenteredGridContainer>
        </a.div>
      </div>
    </CenteredGridContainer>
  );
}

export default SmallProjectCard;

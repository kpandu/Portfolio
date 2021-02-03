import React, { useState } from "react";
import CenteredGridContainer from "../../Shared/CenteredGridContainer";
import { useSpring, animated as a } from "react-spring";

import "./LargeProjectCard.css";
import { Grid } from "@material-ui/core";
import CustomContainer from "../../Shared/CustomContainer";

function LargeProjectCard({
  title,
  imgs = [],
  description,
  video,
  tags = [],
  index = "X",
  flip = false,
}) {
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <CustomContainer>
      <Grid container xs={12} md direction={flip ? "row-reverse" : "row"}>
        <Grid
          item
          container
          xs
          alignItems="center"
          justify={flip ? "flex-end" : "flex-start"}
        >
          <div className="large-proj-card-hr" />
          <p className="large-proj-card-number">0{index}</p>
        </Grid>
        <Grid
          item
          container
          xs={4}
          alignItems="center"
          justify={flip ? "flex-end" : "flex-start"}
        >
          <div className="large-proj-card-text">
            <h1 className="project-header">{title}</h1>
            <p className="project-body">{description}</p>
            {tags.map((tag, i) => (
              <p key={`${title}-tag-${i}`} className="large-proj-tags">
                {tag}
              </p>
            ))}
          </div>
        </Grid>
        <Grid
          item
          container
          xs={5}
          justify={flip ? "flex-end" : "flex-start"}
          className="large-proj-img-container"
        >
          {video ? (
            <video
              src={video}
              className="non-mobile-projects-video"
              muted="muted"
              autoPlay
              preload="auto"
              loop
              type="video/mp4"
            />
          ) : (
            <img src={imgs[imgIndex]} className="large-proj-card-img" />
          )}
          {imgs.length > 1 &&
            [...Array(imgs.length).keys()].map((idx) => (
              <p
                key={`${title}-img-${idx}`}
                className={`large-proj-card-page ${
                  imgIndex == idx ? "large-proj-card-page-active" : ""
                }`}
                onClick={() => setImgIndex(idx)}
              >
                0{idx + 1}
              </p>
            ))}
        </Grid>
      </Grid>
    </CustomContainer>
  );
}

export default LargeProjectCard;

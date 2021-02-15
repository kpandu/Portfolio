import { Grid } from "@material-ui/core";
import { easeExpOut, easeQuadInOut } from "d3-ease";
import React, { useState } from "react";
import InView from "react-intersection-observer";
import { Spring } from "react-spring/renderprops";
import CustomContainer from "../../Shared/CustomContainer";
import "./LargeProjectCard.css";

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
  const [inView, setInView] = useState(false);

  return (
    <CustomContainer>
      <InView
        as="div"
        onChange={(e) => setInView(e)}
        threshold={0.7}
        triggerOnce
        style={{ width: "100%" }}
      >
        <Spring
          from={{ opacity: 0, y: 100 }}
          to={inView ? { opacity: 1, y: 0 } : {}}
          config={{ duration: 1000, easing: easeQuadInOut }}
        >
          {({ opacity, y }) => (
            <Grid
              container
              xs={12}
              md
              direction={flip ? "row-reverse" : "row"}
              style={{ opacity, transform: `translate3d(0,${y}px,0)` }}
              spacing={3}
            >
              <Grid
                item
                container
                md={12}
                lg={3}
                alignItems="center"
                justify={flip ? "flex-end" : "flex-start"}
              >
                <Spring
                  from={{ width: 0 }}
                  to={inView ? { width: 200 } : {}}
                  config={{ duration: 1500, easing: easeExpOut }}
                >
                  {(props) => (
                    <div className="large-proj-card-hr" style={props} />
                  )}
                </Spring>
                <p className="large-proj-card-number">
                  {index < 10 && "0"}
                  {index}
                </p>
              </Grid>
              <Grid
                item
                container
                sm={12}
                md={4}
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
                xs={12}
                md={5}
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
                    controls
                    type="video/mp4"
                  />
                ) : (
                  <div className="large-proj-card-img-container">
                    <img src={imgs[imgIndex]} className="large-proj-card-img" />
                  </div>
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
          )}
        </Spring>
      </InView>
    </CustomContainer>
  );
}

export default LargeProjectCard;

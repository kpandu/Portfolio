import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import "./FullProjectCard.css";
import CustomContainer from "../Shared/CustomContainer";
import CenteredGridContainer from "../Shared/CenteredGridContainer";
import { useSpring, animated } from "react-spring";

function FullProjectCard({ title, description, body, className }) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => setExpanded(!expanded);
  const expandAnimation = useSpring({
    height: expanded ? 100 : 0,
    opacity: expanded ? 1 : -0.5,
    overflow: expanded ? "visible" : "hidden",
    padding: 0,
    paddingTop: expanded ? "100px" : "0px",
    margin: "auto",
  });
  return (
    <Grid item className="full-project-grid-item">
      <div
        className={className + " full-project-container"}
        onClick={handleClick}
      >
        <CustomContainer maxWidth="lg">
          <CenteredGridContainer>
            <div className="full-project-body">{body}</div>

            <Grid container justify="space-between" className="">
              <animated.h1 className="project-header" style={expandAnimation}>
                {title}
              </animated.h1>
              <animated.p className="project-body" style={expandAnimation}>
                {description}
              </animated.p>
            </Grid>
          </CenteredGridContainer>
        </CustomContainer>
      </div>
    </Grid>
  );
}

export default FullProjectCard;

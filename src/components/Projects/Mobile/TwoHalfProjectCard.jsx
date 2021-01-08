import { Grid } from "@material-ui/core";
import React from "react";
import "./TwoHalfProjectCard.css";

function TwoHalfProjectCard({
  title,
  description,
  body,
  textClassName,
  bodyClassName,
  flipHorizontal,
}) {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={1}
      alignItems="stretch"
      item
      direction={flipHorizontal ? "row-reverse" : "row"}
    >
      <Grid
        item
        md={6}
        xs={12}
        container
        direction="column"
        className="two-half-text-container"
      >
        <TwoHalfGridItemBody className={`${textClassName} project-rounded`}>
          <div>
            <h1 className="project-header">{title}</h1>
            <p className="project-body">{description}</p>
          </div>
        </TwoHalfGridItemBody>
      </Grid>
      <Grid
        container
        item
        md={6}
        xs={12}
        justify="center"
        alignContent="center"
        className="project-rounded"
      >
        <TwoHalfGridItemBody className={`${bodyClassName} project-rounded`}>
          {body}
        </TwoHalfGridItemBody>
      </Grid>
    </Grid>
  );
}

function TwoHalfGridItemBody({ className, children }) {
  return (
    <Grid
      item
      container
      justify="center"
      alignContent="center"
      className={`two-half-grid-item ${className || ""}`}
    >
      {children}
    </Grid>
  );
}

export default TwoHalfProjectCard;

import { Grid } from "@material-ui/core";
import React from "react";
import CustomContainer from "../../Shared/CustomContainer";
import FadeInView from "../../Shared/FadeInView";
import "./TwoHalfProjectCard.css";

function TwoHalfProjectCard({
  title,
  description,
  body,
  textClassName,
  bodyClassName,
  flipHorizontal,
  index = "XX",
}) {
  return (
    <CustomContainer maxWidth="lg">
      <FadeInView>
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
            md={7}
            xs={12}
            container
            direction="column"
            className="two-half-text-container"
          >
            <TwoHalfGridItemBody className={`${textClassName} project-rounded`}>
              <div>
                <h1 className="project-header">{title}</h1>
                <p className="project-body">{description}</p>
                <Grid item container alignItems="center">
                  <div className="full-mobile-card-hr" />
                  <p className="full-mobile-card-number">0{index}</p>
                </Grid>
              </div>
            </TwoHalfGridItemBody>
          </Grid>
          <Grid
            container
            item
            md={5}
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
      </FadeInView>
    </CustomContainer>
  );
}

function TwoHalfGridItemBody({ className, children }) {
  return (
    <Grid
      item
      container
      justify="center"
      className={`two-half-grid-item ${className || ""}`}
      alignContent="center"
    >
      {children}
    </Grid>
  );
}

export default TwoHalfProjectCard;
